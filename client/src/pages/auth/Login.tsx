import Button from '../../components/atoms/Button'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from './AuthLayout.tsx'
import styles from './styles.module.scss'
import { gql, useMutation } from '@apollo/client'
import { FormEvent, useRef, useState } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks.tsx'
import { setLoggedUser } from '../../features/userConnectedSlice.ts'

const LOGIN_MUTATION = gql`
  mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      user {
        username
        avatar
      }
      token
    }
  }
`

const Login = () => {
  const navigate = useNavigate()
  const [msgError, setMsgError] = useState('')
  const [login] = useMutation(LOGIN_MUTATION)
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    try {
      if (!username || !password) {
        setMsgError('Veuillez renseigner tous les champs')
        return
      }

      const { data } = await login({
        variables: { input: { username, password } },
      })
      if (data?.login.token) {
        console.log(data)
        dispatch(setLoggedUser(data.login))
        navigate('/')
      } else {
        setMsgError("Le compte n'existe pas")
      }
    } catch (e) {
      console.error(e)
      setMsgError('Une erreur est survenue')
    }
  }

  return (
    <AuthLayout>
      <div className={styles.auth__forms__box}>
        <h2 className={styles.auth__forms__title}>Connexion</h2>
        <div className={styles.auth__forms__content}>
          <form onSubmit={handleSubmit}>
            <div className={styles.auth__forms__content__input}>
              <label htmlFor="username">Nom d&apos;utilisateur</label>
              <input
                ref={usernameRef}
                type="username"
                id="username"
                name="username"
                placeholder="nom_utilisateur"
              />
            </div>
            <div className={styles.auth__forms__content__input}>
              <label htmlFor="password">Mot de passe</label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
              />
            </div>
            {msgError && (
              <p className={styles.auth__forms__error}>{msgError}</p>
            )}
            <div className={styles.auth__forms__infos}>
              <p>
                Vous n&apos;avez pas encore de compte ?&nbsp;
                <Link to="/register">Inscrivez-vous</Link>
              </p>
            </div>
            <Button>Se connecter</Button>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
