import React from 'react'
import type { StatusOverview } from '../types'
import { Card, CardBody, Flex, Link, Tag, TagLabel, TagLeftIcon, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { InfoIcon, InfoOutlineIcon } from '@chakra-ui/icons'

interface Props {
  data: StatusOverview
}

const StatusOverviewInfo = ({ data }: Props) => {
  const { refNumber, refUrl, status, labels, pendingUpdates } = data

  const renderPendingUpdates = () => {
    if (!pendingUpdates || !pendingUpdates.length) return null

    return (
      <Wrap>
        {pendingUpdates.map((update, index) => (
          <WrapItem as={Card} key={index} color="white" bg="card" w="100%" borderRadius="8px">
            <CardBody>
              <Text fontSize="small">Good morning, Mary!</Text>
              <Text fontSize="xx-small" mb="6px">
                Please confirm the following updates:
              </Text>
              <Link href={update.url} fontSize="small" textDecoration={'underline'}>
                Carrier info
              </Link>
            </CardBody>
          </WrapItem>
        ))}
      </Wrap>
    )
  }

  return (
    <Flex flexDir="column" gap="12px">
      <Text fontSize="md">
        Load PRO{' '}
        <Link href={refUrl} color="primary" textDecoration={'underline'}>
          {refNumber}{' '}
        </Link>
      </Text>
      <Flex justifyContent="space-between">
        <Text fontSize="sm">
          Labels <InfoOutlineIcon boxSize="10px" color="primary" />
        </Text>
        <Wrap>
          {labels.map((label, index) => (
            <WrapItem
              as={Tag}
              key={index}
              variant="outline"
              size="sm"
              borderRadius="10px"
              alignItems="center"
              fontSize="x-small"
            >
              {label}
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
      {/* TODO: refactor status tag as a component */}
      <Flex justifyContent="space-between">
        <Text fontSize="sm">Status</Text>
        <Tag colorScheme="red" variant="subtle" size="sm">
          <TagLeftIcon boxSize="12px" as={InfoIcon} />
          <TagLabel>{status}</TagLabel>
        </Tag>
      </Flex>
      {renderPendingUpdates()}
    </Flex>
  )
}

export default StatusOverviewInfo
