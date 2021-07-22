---
sidebar_position: 9
---

# Must Docs - Persona guide

## Introduction
The user creates an account in the Must Docs application. This account represents your virtual identity. All information is encrypted to ensure security.

The user has full control over his data and select who will be able to validate your registration.

## Features
Back up your private key and mnemonic phrase

Total control over your information

Select who will validate your document

More security when encrypting your document to send to the validator

## Concepts

| Term | Description |
| :---------: | :--------- |
|Seed Phrase / mneumonic Phrase / Wallet Seed |An seed phrase is a collection of words that can be used to access your wallet. When creating your wallet you receive your seed phrase and it is very important to keep it in a safe place for the recovery of your wallet, if necessary.|
|Address|Is a unique identifier that serves as a virtual location where the assets can be sent or stored. More specifically it is the string of text that designates the location of a particular wallet on the blockchain, that can be used to send, receive and store digital assets from.|
|Wallet|It is an application that stores public and private keys and allows cryptocurrency users to store and make transactions with their digital assets.|
|Public Key / Private Key|The Public and Private key pair comprise of two uniquely related cryptographic keys (basically long random numbers). The Public Key is what its name suggests - Public. It is made available to everyone via a publicly accessible repository or directory. On the other hand, the Private Key must remain confidential to its respective owner. Because the key pair is mathematically related, whatever is encrypted with a Public Key may only be decrypted by its corresponding Private Key and vice versa.|
|Smart Contract|It is a self-executing computer code that has the necessary business rules to formalize certain negotiations between two or more parties, without the need for mediating agents.|

## Create your account

1. Access Must Docs home page with this link: [Must Docs](http://)

Click the "Create account" button.

![Login](/img/must-docs/Signin1.png)

2. Must Docs creates a wallet for you and displays the mneumonic phrase. 

Click the copy button to copy your mneumonic phrase to the next step.

:::tip 
Download your mneumonic phrase to store in a safe place by clicking on the download button.
:::

Click on the “I saved my mneumonic” button to proceed


![Create account](/img/must-docs/Create1.png)

3. Paste the mneumonic phrase in the field with the same name. Create a password and confirm your password. Click the "Confirm" button.

![Mneumonic](/img/must-docs/Create2.png)

4. Great! Your account was created! Now just use your password and click on the “Sign in” button to access Must Docs.

## First access

On your first access to Must Docs we need to create your Smart Contract Persona. This is where all your information will be recorded.

The smart contract Registry is responsible for managing the entire Must Docs ecosystem.

### Transparency

1. We display the address of the smart contract that is managing Must Docs. Click the "Enter" button to continue.

![Registry](/img/must-docs/Signin2.png)

### Create Persona smart contract
2.  To create the Persona smart contract, fill in the nickname field with a name for your smart contract and click the “Create” button.

![Persona](/img/must-docs/CreateP.png)

## Must Docs Dashboard

![Dashboard](/img/must-docs/Dashboard.png)

Your documents are separated into 3 statuses:

- Pending validations - documents that you have already submitted and are awaiting validation.

- Valid documents - all documents that you submitted for validation and the validator confirmed as a valid record.

- Invalid documents - All documents that you submitted for validation and the validator confirmed as an invalid or unevaluated record.

All records you add will appear in your Dashboard list. Each record has a "Hide / Show" button that hides its record.
Navigation is done by the top menu.

### Adding your information

1. On the Dashboard page, click on “Add Information” on the top menu. The add information page will open.
Select the type of document and enter the value of the information in the value field. Must Docs generates a hash for the value entered in the field.

![Add information](/img/must-docs/AddInfo.png)

2. Add a document for the value of the information. Click "Add document" and select the file on your device. Must Docs generates a hash for validating the file by the validator.
Warning! This same file that you inserted and the hash was generated must be sent to the validated, if you send a different file the validator cannot confirm your document..

![Add file](/img/must-docs/10-insertFile-2.png)

3. Click on the “Record” button to save your information and be able to send it for validation.

![Add file](/img/must-docs/10-insertFile-3.png)

4. Great! You just completed a blockchain transaction. Your information was saved in your Persona smart contract. A Success message with your transaction hash will appear.

![Success](/img/must-docs/transaction-sucess.png)

### Send to validate

1. Click on “Request Validation” in the top menu. The validation submission page will open. Select the document to be sent. Then select which validator you are going to send your document.

![Validate](/img/must-docs/SendToValidate.png)

2. Insert the same document that you added in the step of adding your information. Click the "Encrypt for validator" button and select the document. Click "Encrypt". Must Docs will encrypt the document for you.

![Validate](/img/must-docs/SendToValidate2.png)

3. Download your document. ***(For user protection the file is being downloaded as unsave)***.

![Validate](/img/must-docs/14-requestValidate-3.png)

4. You can store this encrypted document in the repository of your choice. Copy the share link to send to the validator and click on the “Add link” button. 

![Validate](/img/must-docs/14-requestValidate-4.png)

5. To send click on the button “Send to validate”. A success message will be displayed with your transaction hash. In the list of documents on your dashboard, this information now has the status “Pending Validations”.

![Validate](/img/must-docs/14-requestValidate-sucess-message.png)

### Profile and Security

![Profile](/img/must-docs/Profile.png)


This section displays all of your profile information.

- The address of your wallet.

- Your public key.

- The address of your Persona smart contract - where your information is stored.

- Your private key - to view click on the “Show” button. Never share your private key.

## Certificates

In the certificate module everyone can issue a certificate for both themselves and another Persona.

### Manage your certificates

All certificates issued to you before they become publicly available, you must accept. If you refuse, the certificate is discarded and is not displayed.

![Certificate](/img/must-docs/1-certificates.png)

### Issue certificate

To issue a certificate, it is necessary to identify the Persona address. In “Configuration” you can view your Persona address.
Select the type of certificate and fill in the fields and click on the “Insert” button.

![Certificate](/img/must-docs/15-certification-fill.png)

To finalize the transaction, click on the “Give” button. A success message with your transaction hash will displayed.

![Certificate](/img/must-docs/15-certificate.png)