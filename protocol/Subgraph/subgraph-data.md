---
sidebar_position: 1
title: Subgraph Data Introduction
---

# Sablier Subgraph Introduction

Sablier has a GraphQL API Endpoint hosted by [The Graph](https://thegraph.com/docs/about/introduction#what-the-graph-is) called a subgraph for indexing and organizing data from the Sablier smart contracts.

This subgraph can be used to query Sablier data. The data is serviced by a decentralized group of server operators called Indexers.

## Ethereum Mainnet

- [Creating an API Key Video Tutorial](https://youtube.com/watch?v=UrfIpm-Vlgs)
- [Explorer Page](https://thegraph.com/explorer/subgraph?id=A5XzhYZ4muyRegVTYmwWbCbKWvD4LTWqac43CEGTEGdK&view=Playground)
- [Subgraph Source Code](https://github.com/sablierhq/subgraph)

If you'd like to use the GraphQL Endpoint in your app, you can use the following URL:

```text
https://gateway.thegraph.com/api/YOUR_API_KEY/subgraphs/id/A5XzhYZ4muyRegVTYmwWbCbKWvD4LTWqac43CEGTEGdK
```

Where you have to replace `YOUR_API_KEY` with your generated API Key.
