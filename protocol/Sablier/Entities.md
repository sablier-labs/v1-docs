---
sidebar_position: 2
title: Subgraph Entities
---

# Entities
- Token
- Cancellation
- Stream
- StreamToSalary
- StreamTransaction
- Withdrawal

##  Token
Description: Generic type for ERC-20 tokens.

| Field | Type | Description |
| ----------- | ----------- | ----------- |
| id | ID! | The contract address |
| decimals | Int | The ERC-20 decimals |
| name | String | The ERC-20 name |
| symbol | String | The ERC-20 symbol |

##  
Description: Generic type for Sablier cancellations type Cancellation @entity
| Field | Type | Description |
| ----------- | ----------- | ----------- |
| id | ID! |The same as the stream id|
|  recipientBalance|  BigInt! | "Amount of tokens the recipient was distributed" |
|senderBalance:  | BigInt!|   "Amount of tokens the sender was distributed" |
| timestamp: |BigInt!| "The time when the cancellation was made" |
|| token:|Token| "The token used for payment"|
|token: Token |"Transaction hash"| txhash: String!
   
##  
Description: 

| Field | Type | Description |
| ----------- | ----------- | ----------- |
| id | ID! |  |
|  |  |  |
|  |  |  |
|  |  |  |

"""
Generic type for Sablier streams.
"""
type Stream @entity {
  "Details about cancellation time and the distributed amounts"
  cancellation: Cancellation
  deposit: BigInt!
  "The salary id in v1.0.0 and the actual stream id in v1.1.0"
  id: ID!
  "How much is being streamed every second"
  ratePerSecond: BigInt!
  "The address of the recipient account"
  recipient: Bytes!
  "The address of the sender account, who created the streamed"
  sender: Bytes!
  "The time when the stream commences"
  startTime: BigInt!
  "The time when the stream stops"
  stopTime: BigInt!
  "The time when the stream was created"
  timestamp: BigInt!
  "The token used for payment"
  token: Token
  "Exhaustive list of all transactions that interacted with the stream"
  txs: [StreamTransaction!] @derivedFrom(field: "stream")
  "Exhaustive list of all withdrawals made from the stream"
  withdrawals: [Withdrawal!] @derivedFrom(field: "stream")
}

##  
Description: Needed for retroactively indexing cancellations and withdrawals for v1.0.0 streams.

| Field | Type | Description |
| ----------- | ----------- | ----------- |
| id | ID! | type StreamToSalary @entity  |
|  |  |  |
|  |  |  |
|  |  |  |

"""

"""
{
  "The stream id"
  id: ID!
  "The salary id"
  salaryId: BigInt!
}

##  
Description: 

| Field | Type | Description |
| ----------- | ----------- | ----------- |
| id | ID! |  |
|  |  |  |
|  |  |  |
|  |  |  |

"""
Transaction that interacted with a stream.
"""
type StreamTransaction @entity {
  "Transaction hash concatenated with log index"
  id: ID!
  "Block number"
  block: Int!
  "The name of the event emitted"
  event: String!
  "The caller, or msg.sender"
  from: Bytes!
  "The stream entity associated with this transaction"
  stream: Stream!
  "Block timestamp"
  timestamp: BigInt!
  "The contract address"
  to: Bytes
  "Transaction hash"
  txhash: String!
}

##  
Description: 

| Field | Type | Description |
| ----------- | ----------- | ----------- |
| id | ID! |  |
|  |  |  |
|  |  |  |
|  |  |  |

"""
Generic type for Sablier withdrawals.
"""
type Withdrawal @entity {
  "Transaction hash concatenated with log index"
  id: ID!
  "How many tokens were withdrawn"
  amount: BigInt!
  "The stream entity associated with this withdrawal"
  stream: Stream!
  "The time when the cancellation was made"
  timestamp: BigInt!
  "The token used for payment"
  token: Token
  "Transaction hash"
  txhash: String!
}
