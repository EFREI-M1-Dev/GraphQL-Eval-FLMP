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
          <div className="auth__forms__box">
            <div className="auth__forms__content">
              <form>
                <div className="auth__forms__content__input">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="utilisateur@gmail.com"/>
                </div>
                <div className="auth__forms__content__input">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" id="password" name="password" placeholder="Mot de passe"/>
                </div>
                <div className="auth__forms__infos">
                  <p>
                    Vous n'avez pas encore de compte ?&nbsp;
                    <a href="/register">Inscrivez-vous</a>
                  </p>
                </div>
                <Button>Se connecter</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AuthLayout