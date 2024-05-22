import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'

/* components */
import Button from '../../atoms/Button'
import MediumLogo from '../../../assets/logo/medium'

/* hooks */
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'

/* features */
import { logoutLoggedUser } from '../../../features/userConnectedSlice'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const loggedUser = useAppSelector((state) => state.userConnected.token)

  return (
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
            <a>Write</a>
          </li>
          {!loggedUser && (
            <li>
              <Link to="/login">Sign in</Link>
            </li>
          )}
          {loggedUser && (
            <li id="logout">
              <span onClick={() => dispatch(logoutLoggedUser())}>Logout</span>
            </li>
          )}
          {!loggedUser && (
            <Button
              onClick={() => navigate('/register')}
              className={styles.button}
            >
              Get started
            </Button>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
