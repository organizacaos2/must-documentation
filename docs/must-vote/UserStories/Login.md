---
sidebar_position: 2
---

# Login Must vote

## VALUE PROPOSITION

> **Como um** usuário

> **Eu quero** acessar a aplicação para votar de uma maneira intuitiva 

> **Então** vou logar na aplicação usando um documento pessoal

## ACCEPTANCE CRITERIA

- Realizar login utilizando o documento do usuário (CPF)

- O campo CPF aceita apenas 11 digitos numéricos

- Usuário precisa cadasrar o documento no Must Docs

- Documento do usuário precisa ser válido

- O sistema deve ser responsivo para atender diversas plataformas.

## SCREEN DRAFTS

![Buscar Candidato](/img/must-vote/LoginV2.png)


## USER STORY CARD

:::note CARD
**Name:** Login Must vote

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Oct 13, 2020

**Actors:**  

- usuário

**Precondition:**

- usuário ter feito o cadastro no Must Docs

**Main Flow:**

1. O usuário acessa a aplicação via navegador com a url <http://domínio>

2. O sistema exibe tela solicitando o numero do documento para fazer o login

3. Usuário preenche campo CPF Eleitorcom o numero do documento 
    1. Se campo preenchido com mais ou menos que 11 digitos, sistema alerta usuário mensagem de alerta (1)
    2. Usuário clica em Entrar

4. Sistema faz a autenticação verificando se usuário usuário possui conta
    1. Se possui, sistema exibe tela principal da aplicação
    2. Se não, sistema exibe mensagem de alerta (2)

5. Fim do caso de uso

**Postcondition:**

- Usuário logado na aplicação

**Messages:**

- mensagem de alerta (1): O CPF deve ter 11 digitos

- mensagem de sucesso (2): 
:::

## SCENARIOS

```gherkin
@Sign-in
Feature: login application
    In order to I need to use the Must vote
    As a registered user I want login application

    Scenario: Login with unregistrered user
        Given I visit "/login" page
        And I not registered in application
        When I enter <document-number> in the "Login" field
        And I click "Entrar" button
        Then I should see a warning <message>

    Scenario: Login with invalid document number
        Given I visit "/login" page
        When I enter invalid <document-number> in the "Login" field
        And I click "Entrar" button
        Then I should see a warning <message>

    Scenario: Login with valid registered user
        Given I visit "/login" page
        When I enter  <document-number> in the "Login" field
        And I click "Entrar" button
        Then I should see a "/home" page
```