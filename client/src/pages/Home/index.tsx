import styles from './styles.module.scss'

/* components */
import Button from '../../components/atoms/Button'
import ArticleCard from '../../components/organisms/ArticleCard'
import GridArticleCards from '../../components/templates/GridArticleCards'
import HeaderAnimationLetter from './HeaderAnimationLetter'

/* graphql */
import { Article, useGetArticlesQuery } from '../../generated/graphql'
import Navbar from '../../components/organisms/Navbar'
import { useEffect, useState } from 'react'
import Icon from '../../components/atoms/Icon'

const Home = () => {
  const { loading, data, refetch } = useGetArticlesQuery({})
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    refetch().then((r) => console.log(r))
  }, [])

  useEffect(() => {
    if (data) {
      setArticles(data?.articles as Article[])
    }
  }, [loading, data])

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

      <div className={styles.filter_bar}>
        <div>
          <Button widthAuto outline>
            <Icon color="#000" name="filter" />
            <span>Filter</span>
          </Button>
        </div>
      </div>

      <div className={styles.article_list}>
        <GridArticleCards>
          {articles.map((article: Article) => {
            return (
              <ArticleCard
                key={article.id}
                id={article?.id}
                title={article.title}
                author={article.author}
                content={article.content}
                createdAt={article.createdAt}
                image={article.image}
              />
            )
          })}
        </GridArticleCards>
      </div>
    </div>
  )
}

export default Home
