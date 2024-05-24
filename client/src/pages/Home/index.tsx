import { ChangeEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss'

/* components */
import Button from '../../components/atoms/Button'
import ArticleCard from '../../components/organisms/ArticleCard'
import GridArticleCards from '../../components/templates/GridArticleCards'
import HeaderAnimationLetter from './HeaderAnimationLetter'
import Navbar from '../../components/organisms/Navbar'
import Icon from '../../components/atoms/Icon'
import Modal from '../../components/molecules/Modal'

/* graphql */
import {
  Article,
  SortOrder,
  useGetArticlesQuery,
} from '../../generated/graphql'
import InputSelect from '../../components/molecules/InputSelect'
import { AnimatePresence } from 'framer-motion'

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [filter, setFilter] = useState({
    'date-order': 'Desc',
    'like-order': 'Asc',
  })

  const mapSortOrder = (order: string) => {
    return order === 'Asc' ? SortOrder.Asc : SortOrder.Desc
  }

  const dateOrder = mapSortOrder(filter['date-order'])
  const likeOrder = mapSortOrder(filter['like-order'])

  const { loading, data, refetch } = useGetArticlesQuery({
    variables: {
      sort: {
        createdAt: dateOrder,
        likes: likeOrder,
      },
    },
  })

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    refetch().then((r) => console.log(r))
  }, [])

  useEffect(() => {
    if (data) {
      setArticles(data?.articles as Article[])
    }
  }, [loading, data])

  const handleChangeOrder = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target
    setFilter({
      ...filter,
      [name]: value,
    })
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

      <div className={styles.filter_bar}>
        <div className={styles.content}>
          <Button widthAuto outline onClick={openModal}>
            <Icon color="#000" name="filter" />
            <span>Filter</span>
          </Button>

          <AnimatePresence>
            {isModalOpen && (
              <Modal closeModal={closeModal}>
                <InputSelect
                  label="Date"
                  value={filter['date-order']}
                  onChange={handleChangeOrder}
                />
                <InputSelect
                  label="Likes"
                  value={filter['like-order']}
                  onChange={handleChangeOrder}
                />
              </Modal>
            )}
          </AnimatePresence>
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
