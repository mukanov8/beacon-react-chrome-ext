import React from 'react'
import { ChakraProvider, Tab, TabList, Tabs, Icon, TabPanels, TabPanel, Text, Box } from '@chakra-ui/react'
import defaultTheme from './styles/default-theme'
import { LuTruck } from 'react-icons/lu'
import { IoCalendarOutline } from 'react-icons/io5'
import { HiOutlineCodeBracket } from 'react-icons/hi2'

import TMSInfo from './components/TMSInfo'
import Header from './components/Header'
import StatusOverviewInfo from './components/StatusOverviewInfo'
import Search from './components/Search'
import mock from './mocks'

const App = () => {
  // here I can fetch data using custom useFetch hook or useSWR/useQuery hooks from their respective libraries
  // instead I just get the mock data at set it to store and pass it via props
  const [data, setData] = React.useState(mock)

  return (
    <ChakraProvider theme={defaultTheme}>
      <Box className="App" h="100vh">
        <Header />

        <Box p="16px 16px 64px 16px" gap="16px" display="flex" flexDir="column" overflowY="auto" height="100%">
          <Search />
          <StatusOverviewInfo data={data.statusOverviewResponse} />
          <Tabs colorScheme="orange" size="sm">
            <TabList>
              <Tab>
                <Icon as={LuTruck} mr="4px" />
                <Text>TMS Info</Text>
              </Tab>
              <Tab>
                <Icon as={IoCalendarOutline} mr="4px" /> Scheduling info
              </Tab>
              <Tab>
                <Icon as={HiOutlineCodeBracket} mr="4px" /> Labels
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel p="10px 0px">
                <TMSInfo data={data.tmsResponse} />
              </TabPanel>
              <TabPanel p="10px 0px">
                <Text> Not Implemented Yet</Text>
              </TabPanel>
              <TabPanel p="10px 0px">
                <Text> Not Implemented Yet</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App
