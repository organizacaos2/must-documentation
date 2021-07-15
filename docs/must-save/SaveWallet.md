---
sidebar_position: 1
---
# Save Wallet

:::info Business Process
To access the navigable process click on the link:
[Must Save Business process](https://must-blockchain.github.io/MustSave/BusinessArchitecture/index.html#list)
:::

## Acceptance criteria

- User can access webapp Wallet 

- User can create new Wallet

- User can restore wallet with seed phrase

- User can backup seed phrase

- If the user already have an Wallet account, he can choose for Sigin;

- View balance and transactions on several different assets that implement ERC20.

- User can access all transactions from a link to the network

- User can add others tokens ERC20 on wallet

- Wallet display a list transactions by asset on wallet (only event tranfer)

## Generate address wallet
- Generate a random mnemonic with 12 words (BIP39 Mnemonic ) 

- Generate a BIP-039 + BIP-044 wallet from mnemonic deriving path using the wordlist. The default language is English (en)

- Checksum Address

- ethers.js library 

## Features behavior

### Create wallet

```gherkin
Wallets_Creations
Feature: Create Wallet
In order to I don't have a wallet
As a user
I want to create my wallet
 
Background:
    Given I acess the Sigin Page
    When I selected "Create" wallet
    Then I copy my mneumonic phrase
    And I click "I saved my mneumonic" button
 
 Examples:
    |   Password  |    Confirm Password    |
    |   123456    |     123456             |
    |   qwertyu   |     qwer4ayq            |

  Scenario: Create wallet
    Given I paste my mneumonic in the fileld <mneumonic>
    When I fill  a valid <Password>
    And a <Confirm Password> equal <Passord>
    And I click in "Confirm"
    Then I should see the home page
     
 Scenario: Passwords Divergent
    Given I paste my mneumonic in the fileld <mneumonic>
    When I fill  a valid <Password>
    And a <Confirm Password> divergent <Passord>
    And I click in "Confirm"
    Then I should see the message "Divergent password"

```

### Import seed phrase

```gherkin
@Restore_Account
Feature: restore Account
In order to use my created wallet
As a user
I want to restore my existed wallet

Background:
    Given I acess the Wallets Sigin Page
    And I selected "Restore Account" wallet

Examples:
    |   Password   |    Confirm password     | Seed Phrase                                                                    |
    |   12345678   |    12345678             | acoustic blind casino humor open figure step tape uphold smart kitten extra      |
    |   asdfghd    |     a7dfghj             | spray paddle velvet illegal shop slender vault whisper state media only similar  |
    

  Scenario: Restore wallet Seed Phrase
    Given I have a valid wallet
    And I am at Import wallet Page
    When I fill  a valid <Seed Phrase>
    And a valid <Password>
    And a <Confirm Password> equal <Passord>
    And I click in "Import"
    Then I should see the home Page 

 Scenario: Passwords Divergent
    Given I have a valid wallet
    And I am  at Import wallet Page
    When I fill  a valid <Seed Phrase>
    And a <Confirm Password> divergent <Password>
    And I click in "Import"
    Then I should see the message "Divergent password"
    And I couldn't proced

 Scenario: Import invalid wallet Seed Phrase
    Given I am at Import wallet Page
    When I fill  a invalid <Seed Phrase>
    Then I should see the message "Invalid Wallet Seed"
    And I couldn't proced

```

### Login wallet

```gherkin
@Wallets_Sigin
Feature: Sigin Wallet
In order to I have a wallet
As a user
I want to Sigin with my password

  Scenario: Login wallet
    Given I am at wallet login page
    When I fill  a valid <Password>
    And I click in "Sigin"
    Then I should see home page

  Scenario: Invalid Login wallet
    Given I am at wallet login page
    When I fill  a invalid <Password>
    And I click in "Sigin"
    Then I should see "Incorrect Password"

```

### Backup seed phrase

```gherkin
@Backup_seed_phrase_create
Feature: Backup seed phrase when create
In order to I creating my wallet
As a user
I want to Backup my seed phrase

Background:
    Given I acess the create Page

  Scenario: backup whith download
    Given I acess the create Page
    And I see my "mneumonic phrase"
    When I select "download" button
    Then I should see download starts and my .txt file

  Scenario: backup whith copy
    Given I acess the create Page
    And I see my "mneumonic phrase"
    When I select "copy" button
    And I click in "download"
    Then I should see a message "Sucess copy mneumonic phrase"
    
@Backup_seed_phrase
Feature: Backup seed phrase settings
In order to I have a wallet
As a user
I want to Backup my seed phrase

Background:
    Given I acess the Wallets home Page
    And I click link details wallet
    Then I see export button

  Scenario: backup whith valid password
    Given I select "Backup seed phrase"
    When I fill  a valid <Password>
    And I click in "download"
    Then I should see download starts

  Scenario: backup whith invalid password
    Given I select "Backup seed phrase"
    When I fill  a invalid <Password>
    And I click in "download"
    Then I should see "Incorrect Password" 

```

### Transfer

```gherkin
@Tranfer_Token
Feature: Transfer 
In order I am <anyERC20> token holder
As a user 
I want to tranfer my tokens to another address

Background:
    Given I am in my wallet home page
    When I see a list of Tokens
    Then I choose action "send" button on a Token

    Scenario: Transfer whith valid address to and whith balance
      Given I fill the field "address_to" whith valid address
      And I fill the field amount whith balance that I have
      When I click "Send"
      Then I see Confirm sucess message

    Scenario: Transfer whith invalid address to
      Given I fill the field "address_to" whith invalid address
      When I see a warn message "Recipient address is invalid"
      Then I cant't proceed 

    Scenario: Transfer whith no balance
      Given I fill the field "address_to" whith valid address
      When I see a warn message "Insufficient funds"
      Then I cant't proceed      

```

### Add token

```gherkin
@add_token
Feature: Add tokens ERC20

   In order I have more types of tokens ERC20
   As a user I want to see all tokens in my wallet

   Background:
       Given I am sigin my wallet account
       When I selected add token button
       Then a I see add Token page

Scenario: Add token a valid ContractAddress ERC20
  Given I fill the fiel <ContractAddress>
  When I click "add token" button
  Then I see my token in the list tokens
  
  Scenario: Add token a invalid ContractAddress ERC20
  Given I fill the fiel with invalid <ContractAddress>
  When I click "add token" button
  Then I couldn't proced

```

### List transactions

```gherkin
@list_transactions
Feature: list transactions

   In order I need to see my lastest transactions
   As a user I want to see in my wallet

Scenario: list transactions
  Given I am sigin my wallet account
  And I in home page
  When I click "details" link of my address
  Then I see my lastest transactions

```