---
sidebar_position: 8
---
# Send to Validate

## VALUE PROPOSITION

> **As a** Persona

> **I want** to validate my information

> **So that** I select a validator to validate my information

## ACCEPTANCE CRITERIA

- System encrypts a document and downloads the encrypted file

- The user can send a link to the validator

- The user needs to select the document to be validated

- The system displays the validators for the selected document

- User needs to select the validator

- One validator 

- When sending the information to the validator, the information is encrypted with the public key of the validator

- Only the selected validator can open the information to validate

- The information receives the status of ‘pending Validation’

- When submitting to validate a blockchain transaction is completed

- One validator per transaction

## SCREEN DRAFTS

![Send to Validate](/img/must-docs/SendToValidate.png)


## USER STORY CARD

:::note CARD
**Name:** Send to Validate

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 21, 2020

**Actors:**  

- Persona

**Main Flow:**

1. User clicks on the 'Request Validation' menu item

2. System display '/validate' page

3. User select document to validate
    1. System display document hash
    2. System filter validator for the document

4. User select a validator

5. Encrypt document
    1. User clicks the 'encrypt for validator' button
    2. User selects a document from their device
    3. Click on the 'Encrypt' button
    4. System encrypts the document with public key validator
    5. User clicks 'Download' button
    6. System downloads the file

6. User adds the shared link

7. User click 'Send Validate' button
    1. System display success message (1)

8. End use case

**Postcondition:**

- Send Persona information to validator to be validated

**Messages:**

- success message (1) - Success! 'transction-hash' completed on the block 'block-number'

:::

## SCENARIOS

```gherkin

```