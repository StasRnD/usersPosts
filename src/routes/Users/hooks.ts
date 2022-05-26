import { useQuery } from 'react-query'
import { config } from '../../config'
import { User } from '../../types'

export function useUsersProps() {
  const { isLoading, error, data } = useQuery<User[]>('users', () => {
    return fetch(config.apiUrl + '/users').then((response) => response.json())
  })

  return {
    isLoading,
    error,
    users: (data || [])
      .slice(0, 4)
      .map(({ id, name, address }) => ({ id, name, city: address.city }))
  }
}
