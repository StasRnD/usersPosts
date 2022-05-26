import { Flex, Button, Box, Heading, Text } from '@chakra-ui/react'
import { useUsersPostsProps } from './hooks'
import React from 'react'
import { Link } from 'react-router-dom'

export function UserPostsWrap() {
  const { isLoading, error, posts } = useUsersPostsProps()

  if (isLoading || !posts) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{'An error has occurred: ' + error}</div>
  }

  return (
    <Flex
      wrap={'wrap'}
      w={'100%'}
      rowGap={'30px'}
      px={'61px'}
      paddingTop={'30px'}
      justifyContent={'space-between'}
    >
      {posts.map((post) => {
        return (
          <Flex key={post.id} p={'20px'} maxW={'50%'} flexDirection={'column'} rowGap={'20px'}>
            <Heading
              as={'h3'}
              lineHeight={'30px'}
              fontSize={'25px'}
              textOverflow={'ellipsis'}
              whiteSpace={'nowrap'}
              overflow={'hidden'}
            >
              {post.title}
            </Heading>
            <Text lineHeight={'25px'} fontSize={'15px'}>
              {post.body}
            </Text>

            <Button type={'button'} alignSelf={'flex-start'} marginTop={'auto'}>
              <Link to={`${post.id}`}>Посмотреть подробней</Link>
            </Button>
          </Flex>
        )
      })}
    </Flex>
  )
}
