import styles from './styles.module.scss'

/* components */
import Button from '../../components/atoms/Button'
import ArticleCard from '../../components/organisms/ArticleCard'
import GridArticleCards from '../../components/templates/GridArticleCards'
import animation from '../../assets/img/AnimatedBackgroundM.svg'
import HeaderAnimationLetter from './HeaderAnimationLetter'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div>
          <h1>Stay curious.</h1>
          <p>
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Button>Start reading</Button>
        </div>
        <HeaderAnimationLetter className={styles.animationHeader} />
      </div>

      <div className={styles.article_list}>
        <GridArticleCards>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </GridArticleCards>
      </div>
    </div>
  )
}

export default Home
