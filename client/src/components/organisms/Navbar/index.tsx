import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'

/* components */
import Button from '../../atoms/Button'
import MediumLogo from '../../../assets/logo/medium'

/* hooks */
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'

/* features */
import { logoutLoggedUser } from '../../../features/userConnectedSlice'
import Icon from '../../atoms/Icon'

type NavbarProps = {
  publishAction?: () => void
  canBeSend?: boolean
}

const Navbar = ({ publishAction, canBeSend }: NavbarProps) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const loggedUser = useAppSelector((state) => state.userConnected.token)

  return loggedUser ? (
    <nav className={styles.navbar_logged}>
      <div>
        <div>
          <MediumLogo className={styles.logo} />
          <div className={styles.input_search}>
            <Icon name="search" color="#6B6B6B" />
            <input placeholder="Search" />
          </div>
        </div>
        <div>
          {publishAction ? (
            <Button
              onClick={publishAction}
              size="sm"
              color="green"
              active={canBeSend}
            >
              Publish
            </Button>
          ) : (
            <Link to="/new-story">
              <Icon name="write" color="#6B6B6B" />
              <span>Write</span>
            </Link>
          )}
          <Link to="/notification">
            <Icon color="#6B6B6B" name="notification" />
          </Link>
          <div
            style={{
              backgroundImage: `url(https://media.licdn.com/dms/image/C4E03AQGJX3PEbWiTNg/profile-displayphoto-shrink_400_400/0/1613564877277?e=1721865600&v=beta&t=LE_SmnQBJzfjvmH95Kz5OukTa1FWpxKLFnsRU9Pj1tc)`,
            }}
            className={styles.avatar}
          ></div>
          <span onClick={() => dispatch(logoutLoggedUser())}>Logout</span>
        </div>
      </div>
    </nav>
  ) : (
    <nav className={styles.navbar}>
      <div>
        <MediumLogo className={styles.logo} />
        <ul>
          <li>
            <a>Our story</a>
          </li>
          <li>
            <a>Membership</a>
          </li>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
          <Button
            onClick={() => navigate('/register')}
            className={styles.button}
          >
            Get started
          </Button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
