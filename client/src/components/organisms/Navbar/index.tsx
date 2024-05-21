import styles from './styles.module.scss'

/* components */
import Button from '../../atoms/Button'
import MediumLogo from '../../../assets/logo/medium'

const Navbar = () => {
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
            <a>Sign in</a>
          </li>
          <Button className={styles.button}>Get started</Button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
