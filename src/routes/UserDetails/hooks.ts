import { useQuery } from 'react-query'
import { config } from '../../config'
import { Post, User } from '../../types'
import { useParams } from 'react-router'

export function useUserDetailsProps() {
  const { userId } = useParams()
  const { isLoading, error, data } = useQuery<User>('user', () => {
    return fetch(config.apiUrl + `/users/${userId}`).then((responsive) => responsive.json())
  })

  return {
    isLoading,
    error,
    user: data
  }
}

export function useUserPostsPreviewProps() {
  const { userId } = useParams()

  const { isLoading, error, data } = useQuery<Post[]>('postsPreview', () => {
    return fetch(config.apiUrl + `/posts`).then((responsive) => responsive.json())
  })

  return {
    isLoading,
    error,
    posts: (data || []).filter((post) => post['userId'] === Number(userId)).slice(0, 2)
  }
}
