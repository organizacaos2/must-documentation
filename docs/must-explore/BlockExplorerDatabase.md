---
sidebar_position: 3
---
# BlockExplorer database

| | |
| ----- | ----- |
| mongo-express | Web-based MongoDB admin interface |
| mongo | MongoDB document databases |

This models defines the shape of the documents on Mongo collection:

## Block Model

| Property | Type | Required | Index | Default |
| -------- | ---- | -------- | ----- | ------- |
| Height | Number | true | true | |
| hash | String | true | true | |
| signers | String | true | | |
| time | Number | true | | |
| transactions | Number | true | | |
| size | Number | true | | 0 |

## Transaction Model

| Property | Type | Required | Index | Default |
| -------- | ---- | -------- | ----- | ------- |
| hash | String | true | true | |
| block | String | true | | |
| type | String | true | | 'undefined' |
| status | Boolean | true | | |
| time | Number | true | | |
| from | String | true | | "0x000000000000000000000000000000000000000" |
| to | String | true | | "0x000000000000000000000000000000000000000" |
| value | Number | true | | |
| contractAddress | String | | | "0x000000000000000000000000000000000000000" |
| logs | String | true | | "no data" |

## Block Crawler

![Crawler](/img/must-explore/4.png)


> **How It works**
> - Each new block created on the permissioned network is registered in the repository.
> - The block service is responsible for the crawler
> - First, capture the block information and register it in the block repository.
> - Second, transaction information is captured and identified by type: mint, tranfer and recorded in the transaction repository.
