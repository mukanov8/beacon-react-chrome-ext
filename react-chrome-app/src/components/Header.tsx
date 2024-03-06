import { Box, Heading, CloseButton } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box h="60px" display="flex" alignItems="center" justifyContent="space-between" p="16px" bg="black">
      <Heading as="h1" size="lg" color="primary">
        Beacon
      </Heading>
      <CloseButton size="md" color="white" />
    </Box>
  )
}

export default Header
