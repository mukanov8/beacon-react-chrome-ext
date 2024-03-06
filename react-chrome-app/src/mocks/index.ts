import { Status } from '../enums'
import type { StatusOverview, TmsInfo } from '../types'

export default {
  statusOverviewResponse: {
    refNumber: '#27658930',
    refUrl: 'http://mock.com/status/27658930',
    labels: ['Carrier', 'Carrier Info'],
    status: Status.High,
    pendingUpdates: [
      {
        id: '123123123123',
        date: new Date('2021-01-01'),
        status: Status.High,
        notes: 'Mock Notes',
        location: 'Mock Location',
        carrier: {
          name: 'Mock Carrier',
          email: 'mock@mock.com',
          phone: '+1234567890',
          address: '123 Mock St',
          city: 'Mock City',
          state: 'MO',
          zip: '12345',
          code: '123',
          contact: 'Mock Contact',
          refNumber: '123'
        },
        url: 'http://mock.com/status/?id=123123123123'
      }
    ]
  } as StatusOverview,
  tmsResponse: {
    customer: {
      name: 'Harvey Smith & Co',
      email: 'harvey.smithco@gmail.com',
      phone: '+1234567890',
      address: '123 Mock St',
      city: 'Mock City',
      state: 'MO',
      zip: '12345',
      code: '123',
      contact: 'Mock Contact',
      refNumber: '123'
    },
    bills: [
      {
        billNumber: '123',
        billDate: new Date('2021-01-01'),
        dueDate: new Date('2021-01-01'),
        amount: 123,
        status: 'Paid',
        payment: 'Credit Card',
        paymentDate: new Date('2021-01-01'),
        paymentAmount: 123,
        balance: 0,
        notes: 'Mock Notes'
      }
    ],
    pickUp: {
      date: new Date('2021-01-01'),
      time: '12:00 PM',
      address: '123 Mock St'
    },
    consignee: {
      name: 'Mock Consignee',
      email: ''
    },
    carrier: {
      name: 'Mock Carrier',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      code: '',
      contact: '',
      refNumber: '0'
    }
  } as TmsInfo
}
