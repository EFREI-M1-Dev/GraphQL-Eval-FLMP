import Button from "../../components/atoms/Button";
import {Link} from "react-router-dom";
import AuthLayout from "./AuthLayout.tsx";
import styles from './styles.module.scss'


const Register = () => {
	return (<AuthLayout>
		<div className={styles.auth__forms__box}>
			<h2 className={styles.auth__forms__title}>Inscription</h2>
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