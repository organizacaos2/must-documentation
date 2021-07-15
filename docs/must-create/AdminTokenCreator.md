---
sidebar_position: 2
---
# Admin Token Creator

## Acceptance criteria

- Backoffice CRUD application to manage Token Creator exceptions

- Only one administrator user pre-registered in the Administrator token factory database

- Administrator database separate from the Token Factory application

- Log of actions in the Token factory Administrator database

- Backoffice application makes it possible:
    - Create, Update and delete Users
    - Create, Update and delete Tokens
    - Create, Update and delete Payments
    - Create, Update and delete Plans
    - Create, Update and delete Token Listed

## How it works

Token Creator administrator is pre-registered in the database

- The administrator accesses the backoffice application and selects a menu item that need works.

- Each record in the list has an action buttons

### Interface to manage Users

- Lists users registered in the Token Creator Application.

- Add new user **requires** create a wallet.

- Create new user send a e-mail to define password.

- The user's identifier is his email, this field **can not** be updated. 

- Password field can be updated.

- Reset password send a e-mail to a user to define new password

- Removing the user deletes the user's record from the database.

![BP3](/img/must-create/BP3.png)

### Interface to manage Tokens

- Lists all registered Tokens in the Token Creator Application.

- To add a new token, the user's email is required. It must be a valid email as a existing user Id 

- If the status of the token is equal to **deployed** it is not possible to change the informations: Symbol, Token Name, Decimals Place, and Total supply

- For now the only token type is ERC-20, so the type field is not updated.

- <mark>Check if can update User Id and address</mark>

- Delete action only removes the Token from the database.

![BP4](/img/must-create/BP4.png)

### Interface to manage Payments

- Lists all registered Tokens Payments in the Token Creator Application.

- Create a new payment need integration with payment method. Select the token name in the field and the system fills the remaining fields.

- Can update the field date of payment and the value.

- The status field checks whether the token is: Awaiting Payment, Paid and Deployed.

- Delete action removes a payment from the database and make monitoring impossible.

![BP5](/img/must-create/BP5.png)

### Interface to manage Token List

- Lists all registered Tokens in the token list of the Token Creator Application.

- To add new token to the list, select the token name or the token symbol in the field and the system fills the remaining fields.

- Update the token information: address, name, symbol, decimals, totalSupply, the new registered token is displayed in the list token service.

- Field native: if it is set to native = true, it is considered a token that will be created whenever someone creates a wallet, they are tokens that do not need the paid service of list tokens.

- Field status: if the status is active = true, it is displayed in the wallet list

- Delete action removes the token from the service list token. Will no longer appear in the wallet.

![BP6](/img/must-create/BP6.png)

### Interface to manage Plan

- Lists all registered Plans in the Token Creator Application.

- Create a new active plan will be displayed in the list of plans to be purchased by the user.

- Can update the fields: description, price, monthly, defaultProduct, active

- Delete action removes the plan from the database.

## Features

> In order to I need to change certain Token Creator records
>As a token creator administrator I want a backoffice module

### Login application

```gherkin
Feature: Login application
    As a token creator administrator I need to login in application

    Scenario: Login with a valid password
        Given I am at login page
        When I fill the field "user"
        And I fill the field "password" with a valid <password>
        Then I can see home page application

    Scenario: Login with a invalid password
        Given I am at login page
        When I fill the field "user"
        And I fill the field "password" with a invalid <password>
        Then I can see a warning <message>
```

### Module User

```gherkin
Feature: Add User
    As a token creator administrator I need to add new user

    Scenario: Add user with invalid e-mail
        Given I am at User page list
        When I click "add user"
        And I fill a invalid <email>
        Then I can see a warning <message>
        And I can not proceed
    Examples:
        | email     | message                  |
        | xpto.com  | Must be a valid e-mail.  |

    Scenario: Add user existing user e-mail
        Given I am at User page list
        When I click "add user"
        And I fill a valid <email> 
        And I fill a <password>
        And I click "save" button
        Then I can see a warning <message>
        And I can not proceed

    Scenario: Add user with valid e-mail
        Given I am at User page list
        When I click "add user"
        And I fill a valid <email> 
        And I fill a <password>
        And I click "save" button
        Then I can see a success <message>
        And I can see new user in the User page list

    Scenario: system add user
        Given System recives a "save" command
        When check if <email> is unique
        Then user is registred
        And a message is send to a user

Feature: Reset User password
    As a token creator administrator I need to reset password to a user

    Scenario: Update password user
        Given I am at User page list
        When I click reset icon of a selected user
        Then I can see a success <message>
        And user recives a message to change <password>

Feature: Remove User from the database
    As a token creator administrator I need to remove the user 
    
    Scenario: Delete selected user
        Given I am at User page list
        When I click remove icon of a selected user
        And I see a confirm modal
        Then I choose "confimed" button
        And I can see a success <message>
    

```

### Module Token

```gherkin
Feature: Add new token
    In order to I need to create tokens 
    As a administrator I want create a new token

    Scenario: Add token with invalid e-mail
        Given I am at token page list
        When I click "new token"
        And I fill a invalid <email>
        Then I can see a warning <message>
        And I can not proceed
    Examples:
        | email     | message                  |
        | xpto.com  | Must be a valid e-mail.  |

    Scenario: Add token with a not exist user e-mail
        Given I am at token page list
        When I click "new token"
        And I fill a valid <email> 
        Then system verify that is a not exist user e-mail id
        And I can see a warning <message>
        And I can not proceed

    Scenario: Add token without filling any fields
        Given I am at token page list
        When I click "new token"
        And I fill a valid <email>
        Then system verify that is a exist user e-mail id 
        And I dont fill a <tokenName>
        And I dont fill a <tokenSymbol>
        And I dont fill a <tokenDecimal>
        And I dont fill a <tokenTotalSupply>
        And I dont select a <status>
        Then I can not click "save" button
        And I can not proceed

    Scenario: Add token with a existing user e-mail
        Given I am at token page list
        When I click "new token"
        And I fill a valid <email>
        Then system verify that is a exist user e-mail id 
        And I fill a <tokenName>
        And I fill a <tokenSymbol>
        And I fill a <tokenDecimal>
        And I fill a <tokenTotalSupply>
        And I select a <status>
        Then I can click "save" button
        And I can see a success <message>
        And I can see new token in a token page list

    Scenario: add token with paid status
        Given I am at token page list
        When I click "new token"
        And I fill a valid and exists <email>
        And I fill all <fields>
        And the status field is equal "paid"
        Then system create an payment instance
        And I can see a success <message>
        And I can see new token in a token page listv

    Scenario: system add token
        Given System recives a <email> field information
        When check if the <email> exists
        Then check if all fields are filled
        And token is registred
        And I can see a success <message>

```

### Module Payment 

```gherkin
Feature: Create payment
    In order to I need to create payments tokens out of application
    As a administrator I want create payments

    Background: access form payment
        Given I am at Payment page list
        When I click "add new" payment
        Then I see a form to fill

    Scenario: payment with a not exist user e-mail id
        Given I fill <email> with a not exist user e-mail id
        When I choose another field
        Then I can see a warning <message>
        And I can not proceed
   
    Scenario: payment with a not exist token id
        Given I fill <tokenId> with a not exist token id
        When I choose another field
        Then I can see a warning <message>
        And I can not proceed 

    Scenario: payment with some empty field
        Given I fill dont fill some field
        When try to save the payment
        Then I can see a warning <message> 

Feature: Update payment
    In order to I need to update payments tokens out of application
    As a administrator I want update payments

    Background: access form payment
        Given I am at Payment page list
        When I click update icon
        Then I see a form to update

    Scenario: payment with a not exist user e-mail id
        Given I fill <email> with a not exist user e-mail id
        When I choose another field
        Then I can see a warning <message>
        And I can not proceed
   
    Scenario: payment with a not exist token id
        Given I fill <tokenId> with a not exist token id
        When I choose another field
        Then I can see a warning <message>
        And I can not proceed 

    Scenario: payment with some empty field
        Given I fill dont fill some field
        When try to save the payment
        Then I can see a warning <message> 

Feature: Delete Payment
    In order to I need to remove payments tokens out of application
    As a administrator I want delete payments

    Scenario: Remove Payment
        Given I am at Payment page list
        When I click remove icon
        And I see a confirm modal
        Then I choose "confimed" button
        And I can see a success <message>
        And the Payment no longer appears to the user

```

### Module Token List

```gherkin
Feature: Add new token to the token list
    In order to I need to add a token to the token list out of application
    As a administrator I want to be able to add tokens to the token list

    Background: Access token list information
        Given I am at the token list page
        When i click "add new" button
        Then I can see form to fill

     Scenario: token list with a not exist token name
        Given I fill <tokenName> with a not exist token name
        When I choose another field
        Then I can see a warning <message>
        And I can not proceed 

Feature: Update Token at the token list
    In order to I need to update a token to the token list out of application
    As a administrator I want to be able to update tje token list

    Background: Access token list information
        Given I am at the token list page
        When i click update icon
        Then I can see form to fill

     Scenario: token list with a not exist token name
        Given I fill <tokenName> with a not exist token name
        When I choose another field
        Then I can see a warning <message>
        And I can not proceed     

Feature: Delete token from the token list
    In order to I need to delete a token from the token list out of application
    As a administrator I want to be able remove tokens from token list

    Scenario: Remove token from the token list
        Given I am at token list page
        When I click remove icon
        And I see a confirm modal
        Then I choose "confimed" button
        And I can see a success <message>
        And the token no longer appears to the token list
        And loose the position

```
### Module Plan

```gherkin


```