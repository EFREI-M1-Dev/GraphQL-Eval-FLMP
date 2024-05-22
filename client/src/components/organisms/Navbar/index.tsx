import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'

/* components */
import Button from '../../atoms/Button'
import MediumLogo from '../../../assets/logo/medium'

const Navbar = () => {
  const navigate = useNavigate()

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
