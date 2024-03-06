export type Status = 'high' | 'low' | 'inactive' | 'pending' | 'completed'

export type StatusOverview = {
  refNumber: string
  refUrl: string
  status: Status
  labels: string[]
  pendingUpdates?: StatusUpdate[]
}

export type StatusUpdate = {
  id: string
  date: Date
  status: Status
  notes: string
  location: string
  carrier: Carrier
  url: string
}

export type TmsInfo = {
  customer: Customer
  bills: Bills[]
  pickUp: Pickup
  consignee: Consignee
  carrier: Carrier
}

export type Customer = {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  code?: string
  contact?: string
  refNumber: string
}

export type Bills = {
  billNumber: string
  billDate: Date
  dueDate: Date
  amount: number
  status: string
  payment: string
  paymentDate: Date
  paymentAmount: number
  balance: number
  notes: string
}

export type Pickup = {
  date: Date
  time: string
  address: string
  city: string
  state: string
  zip: string
  contact: string
  phone: string
  notes: string
}

export type Carrier = {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  code: string
  contact: string
  refNumber: string
}

export type Consignee = {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  code: string
  contact: string
  refNumber: string
}
