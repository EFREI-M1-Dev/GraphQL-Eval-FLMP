import Button from '../../components/atoms/Button'
import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="header">
        <div>
          <h1>Stay curious.</h1>
          <p>
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Button>Start reading</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
