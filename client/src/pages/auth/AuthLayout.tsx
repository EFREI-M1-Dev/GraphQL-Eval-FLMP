import Button from "../../components/atoms/Button";


const AuthLayout = () => {
  return (
      <div className="auth">
        <div className="auth__infos">
          <h1 className="auth__infos__title">Bienvenue sur notre site!</h1>
          <p className="auth__infos__description">Veuillez vous connecter ou vous inscrire avant d'aller plus loin.</p>
          <p className="auth__infos__help">
            Un problème lors de votre inscription, contacter le support :
          </p>
          <Button>Support</Button>
        </div>
        <div className="auth__forms">
          <form>
          </form>
        </div>
      </div>
  )
}

export default AuthLayout