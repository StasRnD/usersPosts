import { useUsersProps } from './hooks'
import React from 'react'
import {
  Flex,
  Button,
  Box,
  Heading,
  Text,
  FormLabel,
  Textarea,
  FormControl
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function UsersWrap() {
  const { users, error, isLoading } = useUsersProps()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{'An error has occurred: ' + error}</div>
  }

  return (
    <Box paddingBottom={'37px'}>
      <Box
        bgImage={"url('/fon.jpg')"}
        bgPosition={'center'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        p={'120px 60px 25px'}
      >
        <Box
          color={'white'}
          textAlign={'center'}
          border={'1px solid transparent'}
          borderRadius={'100%'}
          background="radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%)"
          padding={'37px 0 20px 0'}
        >
          <Heading lineHeight={'60px'} fontSize={'50px'}>
            Twenty One Pilots
          </Heading>
          <Text lineHeight={'36px'} fontSize={'30px'} marginTop={'5px'}>
            22.02.23 В 21:00
          </Text>
        </Box>
        <Flex
          width={'100%'}
          justifyContent={'space-between'}
          marginTop={'96px'}
          paddingBottom={'20px'}
        >
          <Button
            position={'relative'}
            w={'40px'}
            h={'40px'}
            border={'1px solid white'}
            backgroundColor={'transparent'}
            borderRadius={'0'}
            _hover={{
              _after: {
                borderLeft: '1px solid #0D1E4B',
                borderBottom: '1px solid #0D1E4B'
              },
              backgroundColor: 'white'
            }}
            _after={{
              position: 'absolute',
              right: '14px',
              content: "''",
              display: 'block',
              width: '7px',
              height: '7px',
              borderLeft: '1px solid white',
              borderBottom: '1px solid white',
              transform: 'rotate(45deg)'
            }}
          ></Button>
          <Button borderRadius={'0'} lineHeight={'17px'} fontSize={'14px'} p={'11px 60px'}>
            Купить билет
          </Button>
          <Button
            position={'relative'}
            w={'40px'}
            h={'40px'}
            border={'1px solid white'}
            backgroundColor={'transparent'}
            borderRadius={'0'}
            _hover={{
              _after: {
                borderLeft: '1px solid #0D1E4B',
                borderBottom: '1px solid #0D1E4B'
              },
              backgroundColor: 'white'
            }}
            _after={{
              position: 'absolute',
              left: '14px',
              content: "''",
              display: 'block',
              width: '7px',
              height: '7px',
              borderLeft: '1px solid white',
              borderBottom: '1px solid white',
              transform: 'rotate(-135deg)'
            }}
          ></Button>
        </Flex>
      </Box>

      <Box marginTop={'31px'} px={'60px'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Heading as={'h2'} textAlign={'left'} lineHeight={'40px'} fontSize={'35px'}>
            Купили билеты
          </Heading>
          <Flex lineHeight={'40px'} fontSize={'35px'}>
            <Text>932/</Text>
            <Text color={'#E0E0E0'}>1000</Text>
          </Flex>
        </Flex>
        <Flex columnGap={'13px'} marginTop={'16px'} flexWrap={'wrap'}>
          {users.map((user) => {
            return (
              <Flex
                key={user.id}
                direction={'column'}
                paddingLeft={'17px'}
                alignItems={'flex-start'}
                border={'1px solid #DADADA'}
                flexGrow={'1'}
                p={'14px 17px'}
                _hover={{
                  border: '1px solid black'
                }}
              >
                <Heading as={'h3'} lineHeight={'23px'} fontSize={'17px'} m={'0'}>
                  {user.name}
                </Heading>
                <Text
                  m={'0'}
                  marginTop={'4px'}
                  lineHeight={'17px'}
                  fontSize={'14px'}
                  opacity={'0.4'}
                >
                  {user.city}
                </Text>

                <Link to={`${user.id}`}>
                  <Button
                    type={'button'}
                    marginTop={'35px'}
                    p={'10px 20px'}
                    color={'white'}
                    backgroundColor={'black'}
                    borderRadius={'0'}
                    lineHeight={'15px'}
                    fontSize={'10px'}
                    _hover={{
                      opacity: 0.6
                    }}
                  >
                    Смотреть профиль
                  </Button>
                </Link>
              </Flex>
            )
          })}
        </Flex>
      </Box>
      <Flex marginTop={'47px'} px={'60px'} w={'100%'}>
        <Box width={'50%'}>
          <Heading as={'h2'} lineHeight={'40px'} fontSize={'35px'}>
            О площадке
          </Heading>
          <Box marginTop={'16px'} p={'0 62px 0 42px'}>
            <Text lineHeight={'20px'} fontSize={'15px'} fontWeight={'700'}>
              Современная площадка для проведения концертов и других мероприятий любой сложности.
            </Text>
            <Text lineHeight={'24px'} fontSize={'14px'} marginTop={'15px'}>
              Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения
              под все основные задачи любого события, а также современное оборудование,
              соответствующее самым высоким мировым стандартам.{' '}
            </Text>
          </Box>
        </Box>
        <FormControl
          w={'50%'}
          display={'flex'}
          flexDirection={'column'}
          p={'13px 25px 25px'}
          border={'1px solid #DADADA'}
          marginTop={'9px'}
        >
          <FormLabel as={'legend'} lineHeight={'40px'} fontSize={'18px'}>
            Оставить заявку на проведение концерта
          </FormLabel>
          <Box border={'1px solid #0D1E4B'}>
            <Textarea
              placeholder={'Расскажите о вашем предложении'}
              border={'none'}
              borderRadius={'0'}
              resize={'none'}
              minHeight={'134px'}
            />
          </Box>
          <Button
            alignSelf={'flex-end'}
            lineHeight={'15px'}
            fontSize={'11px'}
            marginTop={'16px'}
            backgroundColor={'black'}
            color={'white'}
            borderRadius={'0'}
            p={'10px 20px'}
            _hover={{ opacity: 0.6 }}
          >
            Отправить
          </Button>
        </FormControl>
      </Flex>
      <Flex px={'60px'} columnGap={'28px'} marginTop={'50px'}>
        <Heading as={'h3'} lineHeight={'40px'} fontSize={'35px'} whiteSpace={'nowrap'}>
          О группе
        </Heading>
        <Text lineHeight={'24px'} fontSize={'16px'} color={'#939393'}>
          Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009
          году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно
          выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
        </Text>
      </Flex>
    </Box>
  )
}
