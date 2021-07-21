---
sidebar_position: 7
---
# Add information

## VALUE PROPOSITION

> **As a** Persona

> **I want** register my informations on smart contract

> **So that** I access Must Docs and register my informations

## ACCEPTANCE CRITERIA

- I cannot save without selecting the document type

- I cannot save without filling in the value field

- Each value entered generates a hash for validation

- I can add as many documents as needed

- Each document added generates a hash for validation

- Each information added generates a blockchain transaction and is added to Persona smart contractt contract

## SCREEN DRAFTS

![Add Information](/img/must-docs/AddInformation.png)

## USER STORY CARD

:::note CARD
**Name:** Add Information

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 17, 2020

**Actors:**  

- Persona role

**Main Flow:**

1. User clicks on the 'Add Information' menu item

2. System display '/add-information' page

3. User fill the information form
    1. Select the document type in the dropdown options
    2. Fill information value in the 'Value' field
        1. System display 'hash-value' for validation
            1. Hash value is changed every time user change value field
    3. Add document to generate 'hash-document' for validation
        1. Click 'Add document' button
        2. Choose file from your device
        3. Click insert button
        4. System display 'hash-document' for validation
    4. User click 'Record' button
        1. System display success message (1) 
    5. System clears the screen to add other information

4. End use case

**Postcondition:**

- User record informations to be validated on your smart contract

**Messages:**

- success message (1) - Success! 'transction-hash' completed on the block 'block-number'

:::

## SCENARIOS

```gherkin
@add-info
Feature: add information
In order to have a Persona smart contract at Must Docs
As an Persona user, I want to register my informations

Background: add information page
    Given I click 'add information' menu item
    And I visit page 'add-informatin'

Scenario: add information with no selectes document type
    Given I fill value field with <any-value>
    And I see my <value-hash>
    And I do not select <document-type>
    When I try click record button
    Then record button is 'desabled'
    And I can not click the button

Scenario: add information with no value
    Given I select a <document-type>
    And value field is <empty>
    When I try click record button
    Then record button is 'desabled'
    And I can not click the button

Scenario: add information with no document insert
    Given I select a <document-type>
    And I fill value field with <any-value>
    And I see my <value-hash>
    And I do not insert a <document>
    When I try click record button
    Then my information is saved
    And I a success message <hash-transaction> displayed

Scenario: add information with document inserted
    Given I select a <document-type>
    And I fill value field with <any-value>
    And I see my <value-hash>
    And I insert a <document>
    And I see my <document-hash>
    When I try click record button
    Then my information is saved
    And I a success message <hash-transaction> displayed

Scenario: leave the page without recording the information
    Given I select a <document-type>
    And I fill value field with <any-value>
    And I choose a <document> to insert
    When I click some <menu-item> 
    And I visit 'another page'
    Then my filled information is not saved 

```