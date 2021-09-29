# Login na aplicação

## VALUE PROPOSITION

 **Como um** usuário cadastrado

 **Eu quero** fazer o login na aplicação com opção de segurança

 **Então** acessar as funcionalidades disponíveis

## ACCEPTANCE CRITERIA

- O login só pode ser feito após cadastro do usuário

- O usuário tem opção de usar o 2FA para maior segurança no acesso
    - O usuário cadastrado deverá instalar o Google Authenticator
    - O usuário cadastrado deverá cadastrar a autenticação no aplicativo para poder usar

- Não é obrigatoria a autenticação 2FA

## SCREEN DRAFTS

![1](/img/must-ERP/login.png)

![2](/img/must-ERP/login2.png)

## USER STORY CARD

**Name:** Login na aplicação

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Sep 25, 2021

**Actors:**  

- usuário cadastrado

**Main Flow:**

1. O usuário recebe no e-mail cadastrado uma notificação para acessar a aplicação
    1. Clicar no link para cadastrar a senha
    2. Usuário é direcionado para a pagina “Configurações“
    3. Usuário preenche o campo Nova senha 'password'
    4. Usuário preenche o campo Confirme senha 'password'
        1. Se senha confirmada, sistema direciona para página de login
        2. Se não, exibe mensagem de alerta ()
2. Primeiro acesso
    1. Usuário preenche o campo login com o e-mail cadastrado
    2. Usuário preenche o campo senha com a senha cadastrada
        1. Se senha correta, sistema exibe tela de dashboard
        2. Se não, sistema exibe mensagem de alerta ()
3. Login na aplicação
    1. Usuário acessa o endereço (www.empresa.erp.com)
    2. Preenche o campo login com o e-mail cadastrado
    3. Preenche o campo senha com a senha cadastrada
        1. Se senha correta
            1. Sistema verifica se possui acesso 2FA
                1. Se sim, exibe tela solicitando código 2FA
                    1. Se código correto, usuário faz login na aplicação
                    2. Se não, exibe mensagem de alerta ()
                2. Se não, usuário faz login na aplicação
        2. Se não, exibe mensagem de alerta ()
4. Fim do caso de uso

**Postcondition:**

- Usuário cadastrado acessa a aplicação

**Messages:**

## SCENARIOS

```gherkin
@Define_password
Feature: register password
    In order to I need to use the application
    As a registered user I want to register my password

Background: recieve notification
    Given I recive a <link> notification
    When I click the <link>
    Then I should see "/configuration" page

Scenario: Register a invalid password
    Given I enter <password> in the "Nova senha" field
    And I enter <password> in the "Confirma senha" field
    When I click "Salvar" button
    Then I should see "/login" page

@Define_2FA
Feature: title
    In order to I need more security
    As a registered user I want define my 2FA login

    Background: Register user logged application
        Given I visit "/login" page
        When I enter  <user> in the "User" field
        And I enter  <password> in the "Password" field
        Then I should see a "/dasboard" page

        Scenario: Register invalid 2FA code
            Given I visit "/configuracao" page
            And I click "2FA" button
            And system show 2FA <code>
            When I fill invalid <code> on my authentication app
            Then I should see warning <message>

        Scenario: Register valid 2FA code
            Given I visit "/configuracao" page
            And I click "2FA" button
            And system show 2FA <code>
            When I fill valid <code> on my authentication app
            Then I should see success <message>
            And I see <system-name> my authentication app  
            
@login
Feature: login application
    In order to I need to use the application
    As a registered user I want login application

        Scenario: Login with unregistrered user
            Given I visit "/login" page
            And I not registered in application
            When I enter <user> in the "User" field
            And I enter <password> in the "Password" field
            Then I should see a warning message

        Scenario: Login with invalid user and password
            Given I visit "/login" page
            When I enter invalid <user> in the "User" field
            And I enter invalid <password> in the "Password" field
            Then I should see a warning <message>

        Scenario: Login with valid user and password
            Given I visit "/login" page
            When I enter  <user> in the "User" field
            And I enter  <password> in the "Password" field
            Then I should see a "/dasboard" page

@2FA_login
Feature: title
    In order to I need more security
    As a registered user I want a 2FA login

    Background: Valid user and password login
        Given I visit "/login" page
        When I enter  <user> in the "User" field
        And I enter  <password> in the "Password" field
        Then I should see "/2fa" page

        Scenario: Login with invalid code 2FA
            Given I choose use Login 2FA
            And I enter invalid <code>
            When I click "Continue" button
            Then I should see a warning <message>

        Scenario: Login with valid code 2FA
            Given I choose use Login 2FA
            And I enter valid <code>
            When I click "Continue" button
            Then I should see a "/dasboard" page 
```