import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Icon,
  Input,
  Text
} from '@chakra-ui/react'
import type { TmsInfo } from '../types'
import { RiUserSmileLine, RiBillLine, RiBox1Line, RiStarLine } from 'react-icons/ri'
import { MdOutlineRocketLaunch } from 'react-icons/md'

interface Props {
  data: TmsInfo
}

const TMSInfo = ({ data }: Props) => {
  const { customer, bills, pickUp, consignee, carrier } = data

  // TODO: need to add form control for input

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <Flex alignItems="center" as={AccordionButton}>
          <Icon as={RiUserSmileLine} mr="4px" />
          <Text fontSize="md" mr="8px">
            Customer
          </Text>
          <Button variant="link" size="sm" colorScheme="orange">
            Edit
          </Button>
          <AccordionIcon marginLeft="auto" color="white" bgColor="secondary" borderRadius="50%" />
        </Flex>
        <Flex flexDir="column" gap="12px" as={AccordionPanel}>
          <Text fontSize="smaller">Name</Text>
          <Input size="sm" borderRadius="8px" placeholder="e.g. John Smith Co" type="text" value={customer.name} />
          <Text fontSize="smaller">Address</Text>
          <Input
            size="sm"
            borderRadius="8px"
            placeholder="e.g. 37 Jade Mountain"
            type="text"
            value={customer.address}
          />
          <Flex gap="12px">
            <Flex flexDir="column">
              <Text fontSize="smaller">City</Text>
              <Input size="sm" borderRadius="8px" placeholder="City" type="text" value={customer.city} />
            </Flex>
            <Flex flexDir="column">
              <Text fontSize="smaller">State</Text>
              <Input size="sm" borderRadius="8px" placeholder="State" type="text" value={customer.state} />
            </Flex>
          </Flex>

          <Flex gap="12px">
            <Flex flexDir="column">
              <Text fontSize="smaller">Zip</Text>
              <Input size="sm" borderRadius="8px" placeholder="e.g. 89381-6757" type="text" value={customer.zip} />
            </Flex>
            <Flex flexDir="column">
              <Text fontSize="smaller">Code</Text>
              <Input size="sm" borderRadius="8px" placeholder="Code" type="text" value={customer.code} />
            </Flex>
          </Flex>

          <Text fontSize="smaller">Contact</Text>
          <Input size="sm" borderRadius="8px" placeholder="e.g. Harvey Jones" type="text" value={customer.contact} />

          <Text fontSize="smaller">Phone</Text>
          <Input size="sm" borderRadius="8px" placeholder="e.g. +1234567890" type="tel" value={customer.phone} />

          <Text fontSize="smaller">Email</Text>
          <Input
            size="sm"
            borderRadius="8px"
            placeholder="e.g. johnsmith@gmail.com"
            type="email"
            value={customer.email}
          />

          <Text fontSize="smaller">Ref Number</Text>
          <Input size="sm" borderRadius="8px" placeholder="Ref Number" type="text" value={customer.refNumber} />
        </Flex>
      </AccordionItem>

      <AccordionItem>
        <Flex alignItems="center" as={AccordionButton}>
          <Icon as={RiBillLine} mr="4px" />
          <Text fontSize="md" mr="8px">
            Bill to
          </Text>
          <Button variant="link" size="sm" colorScheme="orange">
            Edit
          </Button>
          <AccordionIcon marginLeft="auto" color="white" bgColor="secondary" borderRadius="50%" />
        </Flex>
        <Flex flexDir="column" gap="12px" as={AccordionPanel}>
          Not Implemented Yet
        </Flex>
      </AccordionItem>

      <AccordionItem>
        <Flex alignItems="center" as={AccordionButton}>
          <Icon as={RiBox1Line} mr="4px" />
          <Text fontSize="md" mr="8px">
            Pick up
          </Text>
          <Button variant="link" size="sm" colorScheme="orange">
            Edit
          </Button>
          <AccordionIcon marginLeft="auto" color="white" bgColor="secondary" borderRadius="50%" />
        </Flex>
        <Flex flexDir="column" gap="12px" as={AccordionPanel}>
          Not Implemented Yet
        </Flex>
      </AccordionItem>

      <AccordionItem>
        <Flex alignItems="center" as={AccordionButton}>
          <Icon as={RiStarLine} mr="4px" />
          <Text fontSize="md" mr="8px">
            Consignee
          </Text>
          <Button variant="link" size="sm" colorScheme="orange">
            Edit
          </Button>
          <AccordionIcon marginLeft="auto" color="white" bgColor="secondary" borderRadius="50%" />
        </Flex>
        <Flex flexDir="column" gap="12px" as={AccordionPanel}>
          Not Implemented Yet
        </Flex>
      </AccordionItem>

      <AccordionItem>
        <Flex alignItems="center" as={AccordionButton}>
          <Icon as={MdOutlineRocketLaunch} mr="4px" />
          <Text fontSize="md" mr="8px">
            Carrier
          </Text>
          <Button variant="link" size="sm" colorScheme="orange">
            Edit
          </Button>
          <AccordionIcon marginLeft="auto" color="white" bgColor="secondary" borderRadius="50%" />
        </Flex>
        <Flex flexDir="column" gap="12px" as={AccordionPanel}>
          Not Implemented Yet
        </Flex>
      </AccordionItem>
    </Accordion>
  )
}

export default TMSInfo
