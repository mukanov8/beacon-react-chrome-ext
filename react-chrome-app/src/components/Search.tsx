import React from 'react'
import { Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <InputGroup size="sm">
      <InputLeftElement>
        <Icon as={CiSearch} />
      </InputLeftElement>
      <Input placeholder="Search" type="search" focusBorderColor="primary" borderRadius="8px" />
    </InputGroup>
  )
}

export default Search
