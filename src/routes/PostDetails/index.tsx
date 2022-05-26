import { usePostDetailsProps } from './hooks'
import { Flex, Button, Box, Heading, Text } from '@chakra-ui/react'
import { FormAddComment } from './FormAddComment/FormAddComment'
import { Comments } from './Comments/Comments'

export function PostDetailsWrap() {
  const { isLoading, error, post } = usePostDetailsProps()

  if (isLoading || !post) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{'An error has occurred: ' + error}</div>
  }
  return (
    <Flex flexDirection={'column'} w={'100%'} px={'61px'}>
      <Heading as={'h3'} textAlign={'center'}>
        {post.title}
      </Heading>
      <Text>{post.body}</Text>
      <Comments />
    </Flex>
  )
}
