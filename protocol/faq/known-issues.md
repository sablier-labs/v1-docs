---
id: known-issues
title: Known Issues
sidebar_position: 6
---

There are several known issues with the current version of Sablier, v1.1. These will all be fixed in a future version, Sablier v2.

### Start Time

A stream transaction **MUST** be processed by the blockchain before the start time of the stream. If the transaction is processed after the start time of the stream, the transaction will revert (fail) with a "start time before block.timestamp" message.

If you are working on a proposal involving the use of a stream, make sure to set to the start time of the stream sufficiently far away in time so that the proposal passes and the transaction gets mined before the start time of the stream.

### The Deposit Gotcha

The deposit must be a multiple of the difference between the stop time and the start time, or otherwise the contract reverts with a "deposit not multiple of time delta" message. In practice, this means that you may not able to always use exact amounts like 3,000. You may have to divide the fixed deposit by the time delta and subtract the remainder from the initial number. Thus you may have to stream a value that is very, very close to the fixed deposit, but not quite it.

For example, if:

- The token has 18 decimals
- The time delta is 2592000 (30 days)

You will have to stream 2999999999999998944000 instead of 3000000000000000000000. The former divides evenly by 2592000, but the latter doesn't.

### Zero-decimal tokens

This is only a problem in exceptional cases, as most tokens have 18 decimals, but we strongly advise against the use of tokens with 0 decimals in Sablier. It can lead to all sorts of problems, and the protocol was designed for tokens with at least 1 decimal.

:::info
Questions? Head over to the [Sablier Discord](https://discord.gg/bSwRCwWRsT) where the community can answer them.
:::
