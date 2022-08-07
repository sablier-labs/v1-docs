---
sidebar_position: 3
title: Sample Queries
---

## Sample Queries

Below are some sample queries you can use to gather information from the Sablier contracts. 

You can build your own queries using a [GraphQL Explorer](https://graphiql-online.com/graphiql) and enter your endpoint to limit the data to exactly what you need.

### Token
Unsure what to put here

```
{
  tokens(first: 5) {
    id
    decimals
    name
    symbol
  }
  cancellations(first: 5) {
    id
    recipientBalance
    senderBalance
    timestamp
  }
}
```

### Staker Metrics
Get the latest metrics for stakers on the network

```
query StakerOverview {
  networkStakerBalanceCheckpoints(first: 1, orderBy: id) {
    rETHExchangeRate
    stakerETHInProtocol
    stakerETHWaitingInDepositPool
    stakersWithAnRETHBalance
    totalRETHSupply
    totalStakerETHRewards
  }
}
```

### Get Staker Rewards
Get the rewards for a specific addres (note, hex addresses must be lower case)

```
query StakerOverview {
  staker(id: "0x...") {
    rETHBalance
    totalETHRewards
    ethBalance
    id
  }
}
```

### Get Reward Time Series for a single Staker

```
query StakerHistory {
  stakerBalanceCheckpoints(
    orderBy: id
    orderDirection: desc
    first: 30
    where: {stakerId: "0x...."}
  ) {
    totalETHRewards
    id
    ethBalance
    rETHBalance
    stakerId
    blockTime
    block
  }
}
```
