---
id: chains
title: Chains
sidebar_position: 3
---

Depending on what [EVM](https://ethereum.org/en/developers/docs/evm/) chains you want to use Sablier on, you will need to use a different contract address. Sablier runs on top of one single master contract that manages all streams.

| Chain            | Address                                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Ethereum Mainnet | [0xCD18eAa163733Da39c232722cBC4E8940b1D8888](https://etherscan.io/address/0xCD18eAa163733Da39c232722cBC4E8940b1D8888)            |
| Arbitrum One     | [0xaDB944B478818d95659067E70D2e5Fc43Fa3eDe9](https://arbiscan.io/address/0xaDB944B478818d95659067E70D2e5Fc43Fa3eDe9)             |
| Avalanche        | [0x73f503fad13203C87889c3D5c567550b2d41D7a4](https://snowtrace.io/address/0x73f503fad13203C87889c3D5c567550b2d41D7a4)            |
| BSC Mainnet      | [0x05BC7f5fb7F248d44d38703e5C921A8c16825161](https://bscscan.com/address/0x05BC7f5fb7F248d44d38703e5C921A8c16825161)             |
| Optimism         | [0x6C5927c0679e6d857E87367bb635decbcB20F31c](https://optimistic.etherscan.io/address/0x05BC7f5fb7F248d44d38703e5C921A8c16825161) |
| Polygon Mainnet  | [0xAC18EAB6592F5fF6F9aCf5E0DCE0Df8E49124C06](https://polygonscan.com/address/0xAC18EAB6592F5fF6F9aCf5E0DCE0Df8E49124C06)         |
| Rinkeby          | [0xC1f3af5DC05b0C51955804b2afc80eF8FeED67b9](https://rinkeby.etherscan.io/address/0xC1f3af5DC05b0C51955804b2afc80eF8FeED67b9)    |

### Testnet Tokens

If you want to use the Sablier interfaces on a testnet, you need to get some testnet DAI first. To do this, you have to
go to the Etherscan page of the associated token, tap the "Write Contract" tab, connect your Ethereum wallet and call
the `mint` method.

Note that the testnet token has 18 decimals, so you may want to use a [unit converter](https://tools.deth.net/token-unit-conversion).

| Chain      | Network | Ethereum address                                                                                                              |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| TestnetDAI | Rinkeby | [0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C](https://rinkeby.etherscan.io/address/0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C) |
