---
sidebar_position: 6
---
# Create Persona

## VALUE PROPOSITION

> **As a** regular user

> **I want** to create my Persona smart contract to save my informations

> **So that** I use Must Docs to easily create

## ACCEPTANCE CRITERIA

- Create the wallet using Must Docs

- Restore your wallet in Must Docs

- Set a nickname to create the smart contract on first access to Must Docs

## SCREEN DRAFTS

![Create Persona](/img/must-docs/CreateP.png)


## USER STORY CARD

:::note CARD
**Name:** Create Persona

**Author:** 
- [Camilo Prado](https://github.com/Camiloprjr) 
- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 15, 2020

**Actors:**  

- user with created account Must Docs

**Main Flow:**

1. User accesses the application via browser with the url <https://docs.Mustblockchain.org/>

2. Sign in
    1. User fills in the password field 'password'
    2. Click Sign in ‘button’
    3. System checks wallet on local storage
        1. If do not have a wallet in the local storage, 
            1. Display an alert message (1) and continue on the ‘Sign in’ page
        2. If wallet exists,
            1. Display Registry Smart contract address
            2. If have a Persona Smart contract created
                1. Displays the ‘dashboard’ page
            3. If not, display Create Persona smart contract  page

3. Create Persona smart contract
    1. User fill 'nickname' fileld
    2. System deploy Persona smart contract in blockchain
    3. System displays the ‘dashboard’ page

4. End use case

**Postcondition:**

- Smart contract Persona created and deployed on blockchain

**Messages:**

- alert message (1): Wallet do not exists, create or restore one!
:::

## SCENARIOS

```gherkin
@Create_Persona
Feature: Create Persona smart contract
In order to I have a account
As a user I want to create my persona smart contract

Background: Sign in with a valid password
    Given  I am at Must Docs Sign in page
    And  I fill  a valid <Password>
    And  I click in "Sign in"
    And I check Registry smart contract information
    
    Scenario: create persona smart contract with empty nickname
        When I see "create-persona" page
        And I click "Create" button
        Then the "Create" button is desabled
    
    Scenario: create persona smart contract with empty nickname
        When I see "create-persona" page
        And I fill "nickname" field with a <nickname>
        And I click "Create" button
        Then I see "dashboard" page

```