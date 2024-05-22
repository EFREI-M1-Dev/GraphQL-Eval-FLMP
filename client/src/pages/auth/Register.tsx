import Button from "../../components/atoms/Button";
import {Link} from "react-router-dom";
import AuthLayout from "./AuthLayout.tsx";
import styles from './styles.module.scss'
import {gql, useMutation} from "@apollo/client";
import {FormEvent, useRef} from "react";


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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwdRef.current?.value;
    if (username && password) {
      await register({
        variables: {
          input: {
            username,
            password
          }
        }
      });
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