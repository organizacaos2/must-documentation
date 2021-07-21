---
sidebar_position: 5
---
# Create Account

## VALUE PROPOSITION

> **As a** user

> **I want** keep my documents and personal informations safe

> **So that**  I create my account Must Docs

## ACCEPTANCE CRITERIA

- User can choose to use an existing wallet (restore) or create a new one

- Make the mneumonic phrase download available

- Easy to copy mneumonic phrase with one button

- Save information to the user's device securely

- Enable the restore of an existing wallet

- In the create wallet, restore wallet and confirm mneumonic screens, the user can always return to the Sign in screen.

## SCREEN DRAFTS

**Create wallet:**

![Create wallet-1](/img/must-docs/Create1.png)
![Create wallet-2](/img/must-docs/Create2.png)
![Create wallet-3](/img/must-docs/Create3.png)

**Restore wallet:**

![Retore wallet-1](/img/must-docs/Restore1.png)
![Restore wallet-2](/img/must-docs/Restore2.png)

## USER STORY CARD

:::note CARD
**Name:** Create account

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 1, 2020

**Actors:**  

- regular user

**Main Flow:**

1. The user accesses the application via browser with the url <https://docs.Mustblockchain.org/>

2. The system displays a ‘Sign in’ screen with options:
    1. Create account
        1. The user clicks the ‘Create account’ button
        2. The system displays the ‘Create new wallet’ screen with the mneumonic phrase and options:
            1. Download mneumonic phrase button
                1. If user clicks the ‘download’ button, system exports a .txt file with the mneumonic phrase
            2. Copy mneumonic phrase button
                1. If the user clicks on the ‘copy’ button, system copy to the clipboard the mneumonic phase and displays a success message (1)
            3. User clicks the ‘I save my mneumonic’ button
                1. System displays the ‘Confirm mneumonic’ screen
                2. User pastes the 'mneumonicPhrase' into the Mneumonic phrase field
                3. User fills the 'Password' field with a password 'password'
                4. User fills the 'Confirm password' field with the same password 'password'
                5. User clicks the 'Confirm' button
                6. System saves the encryptwallet to the local storage
                7. System displays the 'Sign in' screen
    2. Restore account
        1. User clicks the 'Restore account' button
        2. System displays the 'Restore wallet' screen with the options:
            1. Restore
                1. User pastes the 'mneumonicPhrase' into the Mneumonic phrase field
                2. User fills the 'Password' field with a password 'password'
                3. User fills the 'Confirm password' field with the same password 'password'
                4. User clicks the 'Restore' button
                5. System saves the encryptwallet to the local storage
                6. System displays the 'Sign in' screen

3. End use case

**Postcondition:**

 - User with an ethereum wallet created and saved on their device

**Messages:**

- success message (1): Address copied to clipboard!

:::

## SCENARIOS

```gherkin
@Create_wallet
Feature: Create account
In order to I don't have a wallet
As a user I want to create my wallet
 
Background:
    Given I acess the Sigin Page
    When I selected "Create wallet" 
    Then I click "copy" my <mneumonic> phrase
    And I click "I saved my mneumonic" button
 
 Examples:
    |   Password  |    Confirm Password    |
    |   123456    |     123456             |
    |   qwertyu   |     qwer4ayq           |

  Scenario: Create account with valid mneumonic phrase and password
    Given I fill the field mneumonic phrase <mneumonic>
    When I fill  a valid <Password>
    And a <Confirm Password> equal <Password>
    And I click in "Confirm"
    And system save my wallet to local storage
    Then I should see the sign in page
    
 Scenario: Create account with invalid confirmed password
    Given I fill the field mneumonic phrase <mneumonic>
    When I fill the <Password>
    And a <Confirm Password> divergent <Password>
    Then I should see the message "Confirm password must be equal password!"

 Scenario: Create account with invalid mneumonic phrase
    Given I fill the field mneumonic phrase with invalid <mneumonic>
    When I fill the <Password>
    And a <Confirm Password> equal <Password>
    And I click "Confirm"
    Then I should see the message "Invalid Mneumonic" 

```

```gherkin
@Restore_account
Feature: restore wallet
In order to use my created wallet
As a user I want to restore my existed wallet

Background:
    Given I acess the Wallets Sigin Page
    When I selected "Restore Account"
    Then I am should see the Import mneumonic wallet Page

Examples:
    |   Password   |    Confirm password     | Seed Phrase                                                                     |
    |   12345678   |    12345678             | acoustic blind casino humor open figure step tape uphold smart kitten extra     |
    |   asdfghd    |     asdfghj             | spray paddle velvet illegal shop slender vault whisper state media only similar |
    |   qwertyui   |     qwertyui            | mixd spray capital fantasy wheat bless must board enable diamond guitar clutch  |

  Scenario: Restore wallet with a valid Seed Phrase and password
    Given I fill  a valid <Seed Phrase>
    And I fill the <password>
    And a <Confirm password> equal <Passord>
    When I click in "Restore"
    And system save my wallet to local storage
    Then I should see the sign in page 

 Scenario: Restore wallet with divergent password
    Given I fill a valid <Seed Phrase>
    And I fill the <password> 
    When I fill a <Confirm Password> divergent <password>
    Then I should see the message "Confirm password must be equal password!"

 Scenario: Restore wallet with invalid Seed Phrase
    Given I fill a invalid <Seed Phrase>
    When I fill the <Password>
    And a <Confirm Password> equal <Passord>
    And I click "Confirm"
    Then I should see the message "Invalid Mneumonic"   
```