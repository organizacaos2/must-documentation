# Recuperar acesso

## VALUE PROPOSITION

 **Como um** usuário cadastrado

 **Eu quero** recuperar o acesso da aplicação

 **Então** preciso de uma maneira para solicitar a recuperação de acesso

## ACCEPTANCE CRITERIA

- O usuário cadastrado precisa fornecer o e-mail referente ao seu cadastro

- O usuário cadastrado recebe um e-mail para registrar sua nova senha

## SCREEN DRAFTS

![1](/img/must-ERP/RecuperarSenha.png)

## USER STORY CARD

**Name:** Recuperar acesso

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Sep 25, 2021

**Actors:**  

- usuário cadastrado

**Main Flow:**

1. O usuário clica em Recuperar acesso
2. Sistema exibe tela para recuperação do acesso
    1. Usuário preenche o campo e-mail 'email'
    2. Sistema verifica se possui cadastro
        1. Se sim, sistema exibe mensagem de sucesso ()
            1. Sistema envia um e-mail com link de recuperaçao do acesso
        2. Se não, sistema exibe mensagem de alerta ()
3. Usuário acessa sua caixa de e-mail
4. Usuário clica no link de recuperação do acesso
5. É exibido a tela de configuração do usuário
    1. Preenche o campo Nova senha 'password'
    2. Preenche o campo Confirme senha 'password'
        1. Se senha confirmada, sistema direciona para página de login
        2. Se não, exibe mensagem de alerta ()
6. Fim do caso de uso

**Postcondition:**

Usuário cadastra nova senha

**Messages:**



## SCENARIOS

```gherkin
@Recovery_account

Feature: Receive link for account recovery
    In order to I can not access my account
    As a registered user I want recovery my account

    Scenario: Registered e-mail
        Given I visit "/login" page
        And I click "Recovery account"
        When I enter <email> in the e-mail field
        And I click "Confimed"
        And system return e-mail registered <true>
        Then I see a success <message>
        And I recive an e-mail with <link> to recovery my account

    Scenario: Unregistered email
        Given I visit "/login" page
        And I click "Recovery account"
        When I enter <email> in the e-mail field
        And I click "Confimed"
        And system return e-mail registered <false>
        Then I see a warning <message>

Feature: Change password
    In order to I can not access my account
    As a registered user I want to change my password

    Background: Recivied link recovery from e-mail
        Given I recive an e-mail to recovery
        When I click recovery <link>
        Then I visit "/change-password" page

    Scenario: Change password with valid new password
        Given I enter  <password> in the "Password" field
        And I enter  <password> in the "Confirme Password" field
        When I click "Confirme" button
        Then I see a success <message>
        And system return to "/login" page

    Scenario: Change password with invalid new password
        Given I enter  <password> in the "Password" field
        And I enter  <password> in the "Confirme Password" field
        When I click "Confirme" button
        Then I see a warning <message> 
```