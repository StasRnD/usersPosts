import { config } from '../../config'
import { Post } from '../../types'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'

export function useUsersPostsProps() {
  const { userId } = useParams()

  const { isLoading, error, data } = useQuery<Post[]>('posts', () => {
    return fetch(config.apiUrl + `/posts`).then((responsive) => responsive.json())
  })
  console.log(data)
  return {
    isLoading,
    error,
    posts: (data || []).filter((post) => post['userId'] === Number(userId))
  }
}
