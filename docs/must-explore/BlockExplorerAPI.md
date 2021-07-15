---
sidebar_position: 2
---
# Block Explorer API

### API Information

| Description | Developed to connect the back-end of the Blockexplorer application to the permissioned blockchain network, database and SPL coin. |
| ----------- | ---------- |

The API is currently live on the following networks: 

| Network | Base URL |
| ------- | -------- |
| SPL Blockchain | http://147.135.4.82:3000/ |

### API methods

#### Input Parameters

Below is a list of the expected parameters so that the API can perform its main function. This input information will be provided by the platform that will consume this API.

| Token Methods | Input Parameters | Required | Description |
| ------------- | ---------------- | -------- | ----------- |
| GET/token/total-supply/ | None | | This method returns the number of SPL coins in circulation. |
| GET/token/balance/{address} | wallet_address | Yes | This method checks the SPL balance of a wallet. |

| Transaction Methods | Input Parameters | Required | Description |
| ------------------- | ---------------- | -------- | ----------- |
| GET/transaction/from/{address} | address | Yes | Return list transactions sent by a wallet.. |
| GET/transaction/to/{address} | address | Yes | Return  list transactions recivied by a wallet. |
| GET/transaction/tx/{hash} | DATA - 32-byte transaction hash. | Yes | Returns transaction information for the specified transaction hash. |
| GET/transaction/latest-transactions/ | None | | Returns transaction information in the network. |

| Block Methods | Input Parameters | Required | Description |
| ------------- | ---------------- | -------- | ----------- |
| GET/block/latest-blocks/ | None | | Returns block information in the network. |
| GET/block/block-number/{height} | blockNumber : quantity - The block number | Yes | Returns information about a block by block number. |
| GET/block/block-hash/{hash} | DATA - 32-byte hash of a block. | Yes | Returns information about the block by hash. |

| Node Methods | Input Parameters | Required | Description |
| ------------ | ---------------- | -------- | ----------- |
| GET/net/peers/ | None | | Returns the integer number of connected peers in hexadecimal. |
| GET/net/current-signers/ | None | | Returns the address of network signers connected . |
| GET/net/block-signers/{hash} | DATA - 32-byte hash of a block. | Yes | Returns the address of network signers of a block. |

#### Output parameters

| Methods | Output Parameter | Description |
| ------- | ---------------- | ----------- |
| GET/token/total-supply/ | result: totalSupply | Total supply amount of SPL coin. |
| GET/token/balance/{address} | result: balance | result: balance |
| GET/transaction/from/{address} | result: [list transaction] ![Code1](/img/must-explore/Code1.png) | List transactions sent by a wallet.. |
| GET/transaction/to/{address} | result: [list transactions] ![Code2](/img/must-explore/Code2.png) | List transactions recivied by a wallet. |
| GET/transaction/tx/{hash} | result: [transaction object] ![Code3](/img/must-explore/Code3.png) | List transaction information |
| GET/transaction/latest-transactions/ | result: [list transaction] ![Code4](/img/must-explore/Code4.png) | List of 5 lastest transactions from network. |
| GET/block/latest-blocks/ | result: [list block object] ![Code5](/img/must-explore/Code5.png) | List of 5 lastest blocks from network. |
| GET/block/block-number/{height} | result: block object ![Code6](/img/must-explore/Code6.png) | Block information by block number. |
| GET/block/block-hash/{hash} | result: block object ![Code7](/img/must-explore/Code7.png) | Block information by block hash. |
| GET/net/peers/ | result: hexadecimal | Integer number of connected peers  |
| GET/net/current-signers/ | result: address | Address of signer connected in network |
| GET/net/block-signers/{hash} | result: list address signers | List address signers by block hash. | 

### Example Requests / Responses 

| Postman documentation: | Flavio Gouveia (Deactivated) |
| ---------------------- | ---------------------------- |

:::info Postman
Postman documentation https://documenter.getpostman.com/view/10533219/Szzj9dbu?version=latest 
:::

#### GET/token/total-supply/
Execute the request URL:

```gherkin
<BaseURL>/token/total-supply/
```

Return parameters

```gherkin
{
  "success": true,
  "total": 1000894763
}
```

#### GET/token/balance/{address}

To request this method it is necessary to inform on PATH the address wallet:

```gherkin
<BaseURL>/token/balance/0x390Dc31Ec8Db88C085d2b398BC0A3C668f8acd02
```

Return parameters

```gherkin
{
  "success": true,
  "balance": 1101
}
```

#### GET/transaction/from/{address}

To request this method it is necessary to inform on PATH the address wallet:

```gherkin
<BaseURL>/transaction/from/0xa21a6E7971FCfC9326dAebE2cE467e7d87d421d8
```
Return parameters:
```gherkin
{
  "success": true,
  "transactions": [
    {
      "type": "transfer",
      "from": "0xa21a6E7971FCfC9326dAebE2cE467e7d87d421d8",
      "to": "0x63D70AaE7F033098DE6501A64d7A307266ae01bE",
      "value": 10,
      "_id": "5ef137739192ed5b702c652c",
      "hash": "0x82619b5738af87393a03561f94630f0a5b967bccaa73696f76c7f57cf1d65a7f",
      "block": "0xf05163710d5e4e716b486ed187927112e8c6b72c6b9c03acbe8d2f98793a1887",
      "status": true,
      "time": 1592866673,
      "__v": 0
    },
    {
      "type": "transfer",
      "from": "0xa21a6E7971FCfC9326dAebE2cE467e7d87d421d8",
      "to": "0x63D70AaE7F033098DE6501A64d7A307266ae01bE",
      "value": 1,
      "_id": "5ef137539192ed5b702c6527",
      "hash": "0x2836a2553a3015399eef3b2bc9417ba26c263bb138c85370cce9da77d8c22b84",
      "block": "0xc9849869c97aa4d46c46949180ee542d59ade3cfbbbcc534bb24b70fb684e195",
      "status": true,
      "time": 1592866643,
      "__v": 0
    }
  ]
}
```

#### GET/transaction/to/{address}

To request this method it is necessary to inform on PATH the address wallet:

```gherkin
<BaseURL>/transaction/to/0x2EC80fDa8b5B28a3a5C86CB246c4c910952192dC
```

Return parameters:

```gherkin
{
  "success": true,
  "transactions": [
    {
      "type": "transfer",
      "from": "0xcaBeAF4afD85e12284763E82F2AB63674874eD41",
      "to": "0x2EC80fDa8b5B28a3a5C86CB246c4c910952192dC",
      "value": 1000,
      "_id": "5ef137639192ed5b702c652a",
      "hash": "0x9b7a6f0f438d2304662cbdc26c002afbb5c2bb105ec527d7e1cd9b7e6acd59c5",
      "block": "0x31428a444607a433a8f93569af76dd401a30ecb7176f9f2e7015131b36823ade",
      "status": true,
      "time": 1592866658,
      "__v": 0
    },
    {
      "type": "transfer",
      "from": "0x069F4FFD46d275c604458FA82ae400292Ac4C904",
      "to": "0x2EC80fDa8b5B28a3a5C86CB246c4c910952192dC",
      "value": 1000,
      "_id": "5eed3a259192ed5b702c2105",
      "hash": "0xee46842d920b04eab3ff68893aeb3af4bb513e09eda15f17902855659fb33611",
      "block": "0xdaf6ee102a2f12097496d9bff04ad1a7d3608814a1922f2666f3455fed803020",
      "status": true,
      "time": 1592605219,
      "__v": 0
    }
  ]
}
```

#### GET/transaction/tx/{hash}

To request this method it is necessary to inform on PATH the transaction hash:

```gherkin
<BaseURL>/transaction/tx/0x0b84615e37cfd005b204606be21b42bc089ef692a0c0430235b1253ca30a0607
```

Return parameters:

```gherkin
{
  "success": true,
  "transaction": {
    "type": "transfer",
    "from": "0x63D70AaE7F033098DE6501A64d7A307266ae01bE",
    "to": "0x9a041C0A3BbF76Da1727E80Dc693a2B1580463AC",
    "value": 0,
    "_id": "5ef13ea79192ed5b702c65ae",
    "hash": "0x0b84615e37cfd005b204606be21b42bc089ef692a0c0430235b1253ca30a0607",
    "block": "0x23308559c6b23109db91955cad865178d7bb168d192ee903a4bc9ff5b2f26afa",
    "status": true,
    "time": 1592868518,
    "__v": 0
  }
}
```

#### GET/transaction/latest-transactions/

Execute the request URL:

```gherkin
<BaseURL>/transaction/latest-transactions/
```

Return parameters:

```gherkin
{
  "success": true,
  "transactions": [
    {
      "type": "transfer",
      "from": "0x63D70AaE7F033098DE6501A64d7A307266ae01bE",
      "to": "0x9a041C0A3BbF76Da1727E80Dc693a2B1580463AC",
      "value": 0,
      "_id": "5ef13ea79192ed5b702c65ae",
      "hash": "0x0b84615e37cfd005b204606be21b42bc089ef692a0c0430235b1253ca30a0607",
      "block": "0x23308559c6b23109db91955cad865178d7bb168d192ee903a4bc9ff5b2f26afa",
      "status": true,
      "time": 1592868518,
      "__v": 0
    },
    {
      "type": "transfer",
      "from": "0x9a041C0A3BbF76Da1727E80Dc693a2B1580463AC",
      "to": "0x63D70AaE7F033098DE6501A64d7A307266ae01bE",
      "value": 1,
      "_id": "5ef13a439192ed5b702c6562",
      "hash": "0x22da959092e5feb42bf5414b75af7d36a858522e84c402ffe7525ba2a969cb9e",
      "block": "0x9d2e81caad0e56bb97e6bbc848b1a473b2c85a4ebc9153a6fd39b9ea764dd641",
      "status": true,
      "time": 1592867393,
      "__v": 0
    },
    {
      "type": "transfer",
      "from": "0x63D70AaE7F033098DE6501A64d7A307266ae01bE",
      "to": "0x9a041C0A3BbF76Da1727E80Dc693a2B1580463AC",
      "value": 1,
      "_id": "5ef139639192ed5b702c6552",
      "hash": "0x7019a7a032f06cee3d54fcf91f922f61aedc16e778a64912bd34f89003fcdacb",
      "block": "0x6cca16c16ad78f0a4a34fed6e345760c2eae9802761032d03d2e82f4462ab7f9",
      "status": true,
      "time": 1592867168,
      "__v": 0
    },
    {
      "type": "transfer",
      "from": "0x63D70AaE7F033098DE6501A64d7A307266ae01bE",
      "to": "0x17cA6A08758F4A078B9c53ca25E6F6736dF34094",
      "value": 1,
      "_id": "5ef1389f9192ed5b702c6544",
      "hash": "0x4477d6efb462a3c27cc03f5e57a3a958069a4ccc129beecac3ad63ca85117e21",
      "block": "0xe83600e2ce6230e2905ec0e7014ada77d4e48096c7f5a709e241eb894c0051ff",
      "status": true,
      "time": 1592866973,
      "__v": 0
    },
    {
      "type": "transfer",
      "from": "0xcaBeAF4afD85e12284763E82F2AB63674874eD41",
      "to": "0x95b5582e7824EB8Df5BDA1D89a1790B066b3F27B",
      "value": 142221,
      "_id": "5ef1379f9192ed5b702c6532",
      "hash": "0xb6b64be206fc8b46d884d502c829838c733b7c85106e77857790cb2d751fc3af",
      "block": "0xdde332c1b2d644f9b99c0dbf8e7fff24d849aaf8196bed5d3ef4fc9a03309289",
      "status": true,
      "time": 1592866718,
      "__v": 0
    }
  ]
}
```

#### GET/block/block-number/{height}

To request this method it is necessary to inform on PATH the block number:

```gherkin
<BaseURL>/block/block-number/33163
```

Return parameters:

```gherkin
{
  "success": true,
  "block": {
    "signers": [
      "0x95b5582e7824eb8df5bda1d89a1790b066b3f27b"
    ],
    "size": 0,
    "_id": "5ef221e076fe7d09c6af1888",
    "height": 33163,
    "hash": "0xe9c21cc2194f107fddd79ee1ea37add1079912c9a9933eeea37065768af8c3f4",
    "time": 1592926688,
    "transactions": 0,
    "__v": 0
  }
}
```

#### GET/block/block-hash/{hash}

To request this method it is necessary to inform on PATH the block hash:

```gherkin
<BaseURL>/block/block-hash/0xe9c21cc2194f107fddd79ee1ea37add1079912c9a9933eeea37065768af8c3f4
```

Return parameters:

```gherkin
{
  "success": true,
  "block": {
    "signers": [
      "0x95b5582e7824eb8df5bda1d89a1790b066b3f27b"
    ],
    "size": 0,
    "_id": "5ef221e076fe7d09c6af1888",
    "height": 33163,
    "hash": "0xe9c21cc2194f107fddd79ee1ea37add1079912c9a9933eeea37065768af8c3f4",
    "time": 1592926688,
    "transactions": 0,
    "__v": 0
  }
}
```

#### GET/block/latest-blocks/

Execute the request URL:

```gherkin
<BaseURL>/block/latest-blocks/
```

Return parameters:

```gherkin
{
  "success": true,
  "blocks": [
    {
      "signers": [
        "0x95b5582e7824eb8df5bda1d89a1790b066b3f27b"
      ],
      "size": 0,
      "_id": "5ef224fc76fe7d09c6af18bd",
      "height": 33216,
      "hash": "0xbde0130de56f6b0467b311c2797dea5db5c9f912439155a6914db4d8ea6b44f1",
      "time": 1592927483,
      "transactions": 0,
      "__v": 0
    },
    {
      "signers": [
        "0x95b5582e7824eb8df5bda1d89a1790b066b3f27b"
      ],
      "size": 0,
      "_id": "5ef224ec76fe7d09c6af18bc",
      "height": 33215,
      "hash": "0xaeebf3d5c6a933c87b3cff3acd3cbf5c86f8eedd68c39bb886ef28394bebaa95",
      "time": 1592927468,
      "transactions": 0,
      "__v": 0
    },
    {
      "signers": [
        "0x95b5582e7824eb8df5bda1d89a1790b066b3f27b"
      ],
      "size": 0,
      "_id": "5ef224e076fe7d09c6af18bb",
      "height": 33214,
      "hash": "0x4ae86b64ec4709f9d55cd279c1100b09e4c94de429b6387beb16dfe0225b369c",
      "time": 1592927453,
      "transactions": 0,
      "__v": 0
    },
    {
      "signers": [
        "0x95b5582e7824eb8df5bda1d89a1790b066b3f27b"
      ],
      "size": 0,
      "_id": "5ef224d076fe7d09c6af18ba",
      "height": 33213,
      "hash": "0xb953e34b8e7c814fcfdf1daeec0604978808c0cefc50d38f57ecbba065b2d93b",
      "time": 1592927438,
      "transactions": 0,
      "__v": 0
    },
    {
      "signers": [
        "0x95b5582e7824eb8df5bda1d89a1790b066b3f27b"
      ],
      "size": 0,
      "_id": "5ef224c076fe7d09c6af18b9",
      "height": 33212,
      "hash": "0x1978e6d2202f16b90f25c589e68f0328b7e8b384997a81d951dd06cb104c9c09",
      "time": 1592927423,
      "transactions": 0,
      "__v": 0
    }
  ]
}
```

#### GET/net/current-signers/

Execute the request URL:

```gherkin
<BaseURL>/net/current-signers/
```

Return parameters:

```gherkin
{
  "success": true,
  "signers": [
    "0x95b5582e7824eb8df5bda1d89a1790b066b3f27b"
  ]
}
```

#### GET/net/peers/

Execute the request URL:

```gherkin
<BaseURL>/net/peers/
```

Return parameters:

```gherkin
{
  "success": true,
  "total": "0x01"
}
```

#### GET/net/block-signers/{hash}

To request this method it is necessary to inform on PATH the block hash:

```gherkin
<BaseURL>/net/block-signers/0xe9c21cc2194f107fddd79ee1ea37add1079912c9a9933eeea37065768af8c3f4
```

Return parameters:

```gherkin
{
  "success": true,
  "signers": [
    "0x95b5582e7824eb8df5bda1d89a1790b066b3f27b"
  ]
}
```

### Parameters Description

**Transaction**

| Parameters | Description |
| ---------- | ----------- |
| type | Type transaction |
| from | Address by the sender |
| to | Address by the reciver |
| value | Transferred amount |
| _id | MongoDB field: automatically generated when a document is inserted into a collection. |
| hash | Transaction hash |
| block | BlockHash that the transaction belongs. |
| status | Returns true if the transaction was successful in confirmation. |
| time | Timestamp for block assembly. |
| __v | versionKey: contains the internal revision of the document on MongoDB |

**Block**

| Parameters | Description | 
| ---------- | ----------- |
| Signers | Lists signers contained in a block. |
| size | Size of block in bytes. |
| _id | MongoDB field: automatically generated when a document is inserted into a collection. |
| height | Number of the block |
| hash | Block hash |
| time | Timestamp for block assembly. |
| transactions | Lists transactions objects contained in a block |
| __v | versionKey: contains the internal revision of the document on MongoDB |

### Conections

![3](/img/must-explore/3.png)
