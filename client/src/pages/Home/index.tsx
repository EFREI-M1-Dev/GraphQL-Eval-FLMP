import styles from './styles.module.scss'

/* components */
import Button from '../../components/atoms/Button'
import ArticleCard from '../../components/organisms/ArticleCard'
import GridArticleCards from '../../components/templates/GridArticleCards'
import HeaderAnimationLetter from './HeaderAnimationLetter'

/* graphql */
import { useGetArticlesQuery } from '../../generated/graphql'
import Navbar from '../../components/organisms/Navbar'

const Home = () => {
  const { loading, data } = useGetArticlesQuery({})

  if (!loading) {
    console.log(data)
  }

  const mokeArticle = {
    title: "Louis aime-t-il les gâteaux à l'orange",
    desc: 'Louis aime seulement les gâteaux au chocolat, cela lui rappel le goût de son enfance.',
    date: '12/05/2024',
    likeQuantity: 38,
    commentQuantity: 3,
    duration: '00:04:00',
    author: {
      label: 'Francis Huster',
      img: 'https://miro.medium.com/v2/resize:fit:1358/1*8ahtIIqHbHUNoA-gyk4ALQ.jpeg',
    },
  }

  return (
    <div className={styles.home}>
      <Navbar />
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
          {'blab'.split('').map((element, key) => {
            return (
              <ArticleCard
                id={key}
                title={mokeArticle.title}
                desc={mokeArticle.desc}
                date={mokeArticle.date}
                duration={mokeArticle.duration}
                likeQuantity={mokeArticle.likeQuantity}
                commentQuantity={mokeArticle.commentQuantity}
                author={mokeArticle.author}
              />
            )
          })}
        </GridArticleCards>
      </div>
    </div>
  )
}

export default Home
