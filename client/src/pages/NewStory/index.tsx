import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

/* components */
import Navbar from '../../components/organisms/Navbar'

/* graphql */
import { CreateArticleInput } from '../../generated/graphql'
import { useCreateArticleMutation } from '../../generated/graphql'

const NewStory = () => {
  const [formValues, setFormValues] = useState<CreateArticleInput>({
    title: '',
    content: '',
  })

  const navigate = useNavigate()
  const [createArticle, { data, loading, error }] = useCreateArticleMutation()

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    try {
      if (!formValues.title || !formValues.content) {
        // TODO: message error ?
        return
      }
      const { data } = await createArticle({
        variables: { input: formValues },
      })
      if (data?.createArticle) {
        navigate(`/article/${data.createArticle.id}`)
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
          <textarea
            placeholder="Tell your story..."
            name="content"
            value={formValues.content}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  )
}

export default NewStory
