import { Button, Flex, Text, Box, Heading } from '@chakra-ui/react'
import { useCommentsProps } from './hooks'
import { useState } from 'react'
import { FormAddComment } from '../FormAddComment/FormAddComment'

export function Comments() {
  const { comments, isLoading, error } = useCommentsProps()
  const [isAddCommentForm, setIsAddCommentForm] = useState(false)

  function onAddComment() {
    setIsAddCommentForm((isAddCommentForm) => !isAddCommentForm)
  }

  if (isLoading || !comments) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{'An error has occurred: ' + error}</div>
  }

  return (
    <Box>
      <Flex marginTop={'30px'} flexDirection={'column'} rowGap={'30px'} position={'relative'}>
        <Heading as={'h3'} lineHeight={'30px'} fontSize={'20px'}>
          Список комментариев
        </Heading>
        {comments.map((comment) => {
          return (
            <Flex key={comment.id} flexDirection={'column'} fontSize={'10px'} rowGap={'5px'}>
              <Text>email: {comment.email}</Text>
              <Text>Имя: {comment.name}</Text>
              <Text>{comment.body}</Text>
            </Flex>
          )
        })}
        <Box position={'relative'}>
          {isAddCommentForm ? <FormAddComment onAddComment={onAddComment} /> : null}
          <Button type="button" onClick={onAddComment} w={'100%'}>
            Добавить комментарий
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
