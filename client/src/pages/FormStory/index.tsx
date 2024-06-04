import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './styles.module.scss'

/* components */
import Navbar from '../../components/organisms/Navbar'

/* graphql */
import {
  CreateArticleInput,
  useGetArticleQuery,
  useUpdateArticleMutation,
} from '../../generated/graphql'
import { useCreateArticleMutation } from '../../generated/graphql'
import Textarea from '../../components/molecules/Textarea'

/* provider */
import { useNotification } from '../../providers/NotificationProvider'

const NewStory = () => {
  const { id } = useParams()

  const { showNotification } = useNotification()

  const [formValues, setFormValues] = useState<CreateArticleInput>({
    title: '',
    content: '',
  })

  const dataArticle = useGetArticleQuery({
    variables: { id: parseInt(id || '') },
  })

  useEffect(() => {
    if (id && dataArticle.data) {
      const { article } = dataArticle.data
      setFormValues({
        title: article?.title ?? '',
        content: article?.content ?? '',
      })
    }
  }, [dataArticle.loading])

  const navigate = useNavigate()
  const [createArticle, { data, loading, error }] = useCreateArticleMutation()
  const [updateArticle] = useUpdateArticleMutation()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleChangeTextarea = (event: ChangeEvent<HTMLDivElement>) => {
    setFormValues({
      ...formValues,
      ['content']: event.target.textContent ?? '',
    })
  }

  const handleCreateArticle = async () => {
    const { data } = await createArticle({
      variables: { input: formValues },
    })
    if (data?.createArticle) {
      showNotification("L'article a bien été crée.")
      navigate(`/article/${data.createArticle.id}`)
    } else {
      showNotification('Nous avons rencontré une erreur serveur')
    }
  }

  const handleEditArticle = async () => {
    const parsedId = parseInt(id ?? '')

    const { data } = await updateArticle({
      variables: { input: { ...formValues, id: parsedId } },
    })

    if (data?.updateArticle) {
      showNotification("L'article a bien été modifié.")
      navigate(`/article/${data.updateArticle.id}`)
    } else {
      showNotification('Nous avons rencontré une erreur serveur')
    }
  }

  const handleSubmit = async () => {
    try {
      if (!formValues.title || !formValues.content) {
        showNotification('Des champs sont manquants.')
        return
      }
      if (id) {
        handleEditArticle()
      } else {
        handleCreateArticle()
      }
    } catch (err) {
      console.error('Error posting article:', err)
    }
  }

  useEffect(() => {
    if (!loading) {
      if (data) {
        console.log('Article posted:', data)
      }
      if (error) {
        console.error('Error:', error)
      }
    }
  }, [data, loading, error])

  return (
    <div className={styles.page}>
      <Navbar
        publishAction={handleSubmit}
        canBeSend={formValues.title.length > 3 && formValues.content.length > 3}
      />
      <div className={styles.new_story}>
        <form>
          <input
            placeholder="Title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
          <Textarea
            value={formValues.content}
            onChange={handleChangeTextarea}
            placeholder="Tell your story..."
          />
        </form>
      </div>
    </div>
  )
}

export default NewStory
