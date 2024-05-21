import Button from "../../components/atoms/Button";
import {Link} from "react-router-dom";
import AuthLayout from "./AuthLayout.tsx";
import styles from "./styles.module.scss";

const Login = () => {
  return(
      <AuthLayout>
        <div className={styles.auth__forms__box}>
          <h2 className={styles.auth__forms__title}>Connexion</h2>
          <div className={styles.auth__forms__content}>
            <form>
              <div className={styles.auth__forms__content__input}>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="username" id="username" name="username" placeholder="nom_utilisateur"/>
              </div>
              <div className={styles.auth__forms__content__input}>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" name="password" placeholder="Mot de passe"/>
              </div>
              <div className={styles.auth__forms__infos}>
                <p>
                  Vous n'avez pas encore de compte ?&nbsp;
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