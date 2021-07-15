---
sidebar_position: 3
---

# Listar Candidato

## VALUE PROPOSITION

> **Como um** eleitor

> **Eu quero** visualizar todos os candidatos da candidatura

> **Então** vou selecionar a opção listar candidatos

## ACCEPTANCE CRITERIA

- O item da navbar “Eleições 2020“ ao ser selecionada, exibe no sidebar a lista da votação por candidatura

- O sidebar precisa manter a ordem da votação por  candidatura ( Deputado Estadual; Deputado Federal, Senador, Governador e Presidente)

- O usuário tem a opção de filtrar a lista de candidatos por número ou nome do candidato

- O usuário tem as opções de vot branco ou nulo

## SCREEN DRAFTS

![Buscar Candidato](/img/must-vote/Exibir.png)


## USER STORY CARD

:::note CARD
**Name:** Listar Candidato


**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Oct 21, 2020

**Actors:**  

- eleitor validado

**Precondition:**

- usuário validado como eleitor

- usuário ter selecionado Lista de Candidatos

**Main Flow:**

1. O usuário acessa a página de Lista de Candidatos
    1. Se usuário clicar em Votar
        1. Sistema exibe tela de detalhe do candidato slelecionado
            1. Se usuário clicar em Confirme seu voto
                1. Sistema Registrar voto passo 3
            2. Se usuário clicar em voltar
                1. Sistema retorna para tela de Busca de candidato
    2. Se usuário clicar em Votar em branco
        1. Sistema Registrar voto  passo 4
    3. Se usuário clicar em Vota nulo
        1. Sistema Registrar voto  passo 5
    4. Se usuário jà possui voto na candidatura selecionada
        1. Sistema exibe mensagem de alerta()
2. Fim do caso de uso

**Postcondition:**

- usuário acessa lista de candidatos

**Messages:**

- mensagem de alerta (1): 

- mensagem de sucesso (2): 
:::

## SCENARIOS

```gherkin
@list_candidate

Feature: list candidates
     
    In order to I need to register my vote
    As a registered user I want choose candidate by a list view

Background: User logged Must vote

    Scenario: user does not have a registered vote
        Given I visit "/home" page
        And I am not register my vote for the candidature
        When I click "Lista de Candidatos" button
        Then I see a list of candidates to selected candidature
    
    Scenario: user does have a registered vote
        Given I visit "/home" page
        And I am already register my vote for the candidature
        When I click "Lista de Candidatos" button
        Then I see a <message>

```