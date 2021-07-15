---
sidebar_position: 3
---
# List Token Multi-asset wallet

## Token List Service

![PL1](/img/must-create/PL1.png)

The multiwallet displays the list in the sequence listed below:

- Default tokens are displayed first

- Second is displayed the ownered tokens in order of license acquisition.

- Third tokens added manually by the user

The service warns the user that their license is about to expire.

If the renewal does not happen, the token is removed from the list, losing its position.

## Activate and Desable Plan Service

First, it is necessary to create a token in the Token creator and select the license to list the token in the multwallet.

The service of listing the token in the multiwallet can be purchased when creating a token or for users who already have the token it is possible to add the service at My Plan page.

![PL2](/img/must-create/PL2.png)

Activate Plan Services and Manage Plan Services describes application rules and the services used to create and manage the token licences.

![PL3](/img/must-create/PL3.png)
![PL4](/img/must-create/PL4.png)

## Acceptance criteria 

- user can choose a payed service that lists his token in the existing multiwallets and the ones that are created

- is a payed service, before expiration, it message warns that it will expire and the token is removed from the list of all wallets

- if the service is not renewed on time, the token loses its position, is removed from the list.

- each token created needs a listing service

- list Tokens is order by: default tokens first, license acquisition order by id number  then  added manually by the user

## How it works

- When creating the token, the user chooses the service

- After payment confirmation the token is included in a list that is displayed for all wallets

- Near duedate the token owner receives a message to renew the token list service.

- Tokens that do not have the renewed service are removed from the list, and losing their position on the list.

![PL5](/img/must-create/PL5.png)

## Appications Changes:

### Token Creator page choose plan

- Change the plan table to toggle buttons services

- When a button is on, the value is added to the total.

- Put a simple explanation of the service

- After payment confirmation the token is added to the list.

Draft page:

![Plan](/img/must-create/Plan.png)


### Wallet multi-assest dashboard

- The list is displayed on the wallet dashboard

- Ownered tokens cannot be removed from the list by the user

- Default tokens are displayed first

- Second is displayed the ownered tokens in order of license acquisition.

- Third tokens added manually by the user

Draft page:

![PL7](/img/must-create/PL7.png)


## API services

| Methods | Input Parameters | Output Parameter | Description |
| ------- | ---------------- | ---------------- | ----------- |
| addTokenList | token list model | return  true for new token added | The token is added to the list after payment confirmation |
| removeTokenList | token address | return true for removed token | It is removed from the token list if the payment is no longer active or if it is canceled by the user. |
| getTokenList | | return listed token order by first native = true | Returns the list of tokens. |

## Token List Model

| Property | Type | Required |
| -------- | ---- | -------- |
| id | number | |
| address | String | true |
| name | String | true |
| symbol | String | true |
| decimals | Number | true |
| totalSupply | Number | true |
| native | Boolean (default: false) | true |