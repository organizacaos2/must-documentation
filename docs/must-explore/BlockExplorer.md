---
sidebar_position: 1
---
# Block Explorer

![Block Explorer](/img/must-explore/1.png)

:::info Business Process
To access the navigable process click on the link:
[Must Explore Business process](https://must-blockchain.github.io/MustExplore/BusinessArchitecture/index.html#list)
:::

## Acceptance criteria:

View the activity of the permissioned network: 

- blocks created

- transactions generated

- number of connected peers

- number of connected signers

- total SPL supply

Search details of:

- transactions with his hash number

- transactions for an address

- block by blockNumber

- block by blockHash

- address balance SPL

## Feature

**Searches**

- Balance SPL account

- Transaction hash

- Block hash

- Block number

**Home BlockExplorer**

- Summary of the key metrics for the network

    - Lastest transctions and blocks

    - Total suply SPL

    - Total Peers nodes

    - Total signers

**Transaction Details**

- View the details of individual transactions

- Transaction Objects:

| Object | Type | Description |
| ------ | ---- | ----------- |
| blockHash | Data, 32 bytes | Hash of the block containing this transaction. null when transaction is pending. |
| from | Data, 20 bytes | Address of the sender. |
| hash | Data, 32 bytes | Hash of the transaction. |
| to | Data, 20 bytes | Address of the receiver. null if a contract creation transaction. |
| value | Quantity | Value transferred, in SPL |
| time | Quantity | Unix timestamp for transaction. |
| type | | Transaction type: mint, tranfer |

**Block Details**

- View provides details of all blocks being generated on the network. 

- Block Objects:

| Object | Type | Description |
| ------ | ---- | ----------- |
| size | Quantity, Integer | Size of block in bytes. |
| signers | Array | Signature hash. |
| time | Quantity | Unix timestamp for block assembly. |
| hash | Data, 32 bytes | Hash of the block. null when block is pending. |
| transactions | Array | Array of transaction objects, or 32 byte transaction hashes depending on the specified boolean parameter. |
| height | Quantity | Number of block that includes the log. null when log is pending. |

## Scenarios

```gherkin
@Information_Network
In order to I want see network activity
As a user I want to access network information

Scenario: view network information
    Given I can access BlockExplorer home_page
    Then I see <TotalSuplySPL>
    And I see <PeersNode>
    And I see <Signers>
    And I see <LastestBlocks>
    And I see <LastestTransactions>
    

Background: Access BlockExplorer page
Given I am home page BlockExplorer

@Search_Block_By_Hash
In order to I need to find a block
As a user I want to search with a blockHash

Scenario: search with a valid block hash
    Given I fill search field with <blockHash>
    When I click 'Enter'
    Then I see 'Block Details page'

Scenario: search with a invalid block hash
    Given I fill search field with <blockHash>
    When I click 'Enter'
    Then I see 'Warning message'

@Search_Block_By_Number
In order to I need to find a block
As a user I want to search with a blockNumber

Scenario: search with a valid block number
    Given I fill search field with <blockNumber>
    When I click 'Enter'
    Then I see 'Block Details page'

Scenario: search with a invalid block number
    Given I fill search field with <blockNumber>
    When I click 'Enter'
    Then I see 'Warning message'

@Search_Transaction_By_Hash
In order to I need to find a transaction
As a user I want to search with a transactionHash

Scenario: search with a valid transaction hash
    Given I fill search field with <transactionHash>
    When I click 'Enter'
    Then I see 'Transaction Details page'

Scenario: search with a invalid transaction hash
    Given I fill search field with <transactionHash>
    When I click 'Enter'
    Then I see 'Warning message'

@Search_Address
In order to I need to find a wallet
As a user I want to search with a address

Scenario: search with a valid address
    Given I fill search field with <address>
    When I click 'Enter'
    Then I see 'Balance account page'

Scenario: search with a invalid address
    Given I fill search field with <address>
    When I click 'Enter'
    Then I see 'Warning message'

```

## Layout Pages

![Manage-2](/img/must-explore/MustExplorer.png)