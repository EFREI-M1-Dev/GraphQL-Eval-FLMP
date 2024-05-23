import Button from "../../components/atoms/Button";
import {Link, useNavigate} from "react-router-dom";
import AuthLayout from "./AuthLayout.tsx";
import styles from './styles.module.scss'
import {gql, useMutation} from "@apollo/client";
import {FormEvent, useRef, useState} from "react";
import {useAppDispatch} from "../../hooks/reduxHooks.tsx";
import {setLoggedUser} from "../../features/userConnectedSlice.ts";


const SIGNUP_MUTATION = gql`
    mutation signup($input: LoginUserInput!) {
        signup(loginUserInput: $input) {
            username
        }
    }
`;

const Register = () => {
  const [register] = useMutation(SIGNUP_MUTATION);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwdRef = useRef<HTMLInputElement>(null);
  const [msgError, setMsgError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwdRef.current?.value;

    try {
      if (!username || !password) {
        setMsgError('Veuillez renseigner tous les champs');
        return;
      }

      const { data } = await register({ variables: { input: { username, password } } });
      if (data?.signup.username) {
        navigate('/login');
      } else {
        setMsgError('Une erreur est survenue lors de l\'inscription');
      }
    } catch (e) {
      console.error(e);
      setMsgError('Une erreur est survenue');
    }
  }


  return (<AuthLayout>
    <div className={styles.auth__forms__box}>
      <h2 className={styles.auth__forms__title}>Inscription</h2>
      <div className={styles.auth__forms__content}>
        <form onSubmit={handleSubmit}>
          <div className={styles.auth__forms__content__input}>
            <label htmlFor="username">Nom d'utilisateur</label>
            <input ref={usernameRef} type="username" id="username" name="username" placeholder="nom_utilisateur"/>
          </div>
          <div className={styles.auth__forms__content__input}>
            <label htmlFor="password">Mot de passe</label>
            <input ref={passwdRef} type="password" id="password" name="password" placeholder="Mot de passe"/>
          </div>
          {msgError && <p className={styles.auth__forms__error}>{msgError}</p>}
          <div className={styles.auth__forms__infos}>
            <p>
              Vous avez déjà un compte ?&nbsp;
              <Link to="/login">Connectez-vous</Link>
            </p>
          </div>
          <Button>S'enregistrer</Button>
        </form>
      </div>
    </div>
  </AuthLayout>)
}

export default Register