import Button from "../../components/atoms/Button";
import styles from './styles.module.scss'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
  return (
      <div className={styles.auth}>
        <div className={styles.auth__infos}>
          <h1 className={styles.auth__infos__title}>Bienvenue sur notre site!</h1>
          <p className={styles.auth__infos__description}>Veuillez vous connecter ou vous inscrire avant d'aller plus loin.</p>
          <p className={styles.auth__infos__help}>
            Un problème lors de votre inscription, contacter le support :
          </p>
          <Button>Support</Button>
        </div>
        <div className={styles.auth__forms}>
          {children}
        </div>
      </div>
  )
}

export default AuthLayout