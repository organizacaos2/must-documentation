---
sidebar_position: 3
---

# Business Process

## Macroprocess Must Docs

The macro process shows how PoP Docs works.
To begin, the user, who we call the persona, needs to create their account in the app.
From there, the user can enter their information and documents to be validated.
Information about the validation and authenticity of the document is stored in the blockchain.
To be a validator, it is necessary to meet some requirements and approved by the administrator.

![Macro process](/img/must-docs/macro-process-mustDocs.png)

## Create Account Persona

### Define Wallet

To create an account, the persona needs to have a wallet.

You can create one or use a personal wallet. This information is stored for account recovery.

![Define wallet](/img/must-docs/define-wallet.png)

### Create Persona

Checks whether the user address already has a Persona role, if not, user can create their Persona smart contract. 

![Create persona](/img/must-docs/create-persona.png)

## Add Information - Persona

In the dashbord the persona can start storing your information. 

Your information is securely stored in a personal smart contract. Each persona has its own smart contract and manages its information through the application.

Each document in the registry has an authenticate hash to guarantee the authenticity of the document at the time of validation.

![Add information](/img/must-docs/add-information.png)

## Request Validate

Persona can select who will validate your information. 

To send the document, the user uploads the file to encrypt with the public key of the Validator selected by Persona. After encrypting, the document can be downloaded and Persona can store it in the repository of your choice (Drive, IPFS, one drive ...)

Each registry sent for validation has an expiration control that can be changed by the persona if necessary. 

The registry receives encryption that only the validator selected by the persona can access until the expiration date defined for access.

![Request validate](/img/must-docs/request-validate.png)

## Create Account Validator

### Define Wallet

To create an account, the validator needs to have a wallet.

You can create one or use a personal wallet. This information is stored for account recovery.

### Approved by Admin Register

The administrator of the smart contract Registry needs to approve the validator address in the Register smart contract.

### Create a Validator Smart Contract

Checks whether the user address already has a Validator role, if not, user can create their Validator smart contract. 

![Create validator](/img/must-docs/create-validator.png)

## Validate Digial Registry

The validator receives the personas registries. The registries have a duedate to be accessed and validated.

With the permission of the persona, owner of the information, the validator accesses the record and can certify the information. Each document in the registry has an authenticate hash to guarantee the authenticity of the document at the time of validation. Validator can verify this authenticate hash.

The validator can select of 3 statuses for its validation:
- Validated - the persona registry receives the true value; is validated
- Cannot evaluate - if it is not possible to certify the information received, an unreadable document ...
- Not validated - the persona registry isreceives the false value; It is not valid

![Validate registry](/img/must-docs/validate-registry.png)

## Certificates

The certificate can be added to Persona by the issuer itself. Persona can also add certificates. Each added certificate is pending approval by Persona and approved certificates are publicly visible.

![Certificates](/img/must-docs/certificates.png)