---
sidebar_position: 3
title: Sample Queries
---

## Sample Queries

Below are some sample queries you can use to gather information from the Sablier contracts. 

You can build your own queries using a [GraphQL Explorer](https://graphiql-online.com/graphiql) and enter your endpoint to limit the data to exactly what you need.

### Querying All Streams
Unsure what to put here

```
{
  streams {
    id
    cancellation {
      recipientBalance
      timestamp
      txhash
    }
    deposit
    ratePerSecond
    recipient
    sender
    startTime
    stopTime
    timestamp
    token {
      id
      decimals
      name
      symbol
    }
    txs {
      id
      block
      event
      from
      timestamp
      to
    }
    withdrawals {
      id
      amount
    }
  }
}
```

### Querying All Transactions
Unsure what to put here
```
{
  transactions {
    id
    block
    event
    from
    stream {
      id
    }
    timestamp
    to
  }
}
```


