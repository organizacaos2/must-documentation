---
sidebar_position: 4
---

# Buscar Candidato


## VALUE PROPOSITION

> **Como um** eleitor 

> **Eu quero** votar em um candidato usando o número dele

> **Então** vou digitar o número do candidato para registrar meu voto

## ACCEPTANCE CRITERIA

- A tela de busca de candidato sempre é exibida antes da lista de candidato

- Botão para redirecionar o usuário para a opção de lista de candidato

- Botão para voto em branco e nulo

- Validação no campo de digitação do número do candidato por quantidade de número de cada candidatura
    - Deputado Estadual: 5 digitos
    - Deputado Federal: 4 digitos
    - Senador: 3 digitos
    - Governador e Presidente: 2 digitos

- O sidebar precisa manter a ordem da votação por  candidatura ( Deputado Estadual; Deputado Federal, Senador, Governador e Presidente)

- Sistema deve verificar se número digitado existe na lista de candidatos de cada candidatura

## SCREEN DRAFTS

![Buscar Candidato](/img/must-vote/Buscar.png)

## USER STORY CARD

:::note CARD
**Name:** Buscar Candidato

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Oct 20, 2020

**Actors:**  

- eleitor validado

**Precondition:**

- usuário ter feito o cadastro no Must Docs

- usuário ter efetuado o login no sistema

**Main Flow:**

1. O usuário acessa a área da eleição
2. Sistema exibe tela de busca candidato
    1. Menu lateral exibe lista de candidaturas
3. Usuário digita o 'numero-candidato'
    1. Usuário clica em Escolher Candidato
        1. Se 'numero-candidato' existe
            1. Sistema exibe tela de Detalhe de Candidato
        2. Se não, exibe mensagem de alerta ()
4. Usuário clica em voto em Branco
    1. Sistema cria new wallet instance
    2. Sistema registra voto
    3. Sistema exibe modal de Informação
    4. Sistema exibe tela de Busca de Candidato
5. Usuário clica em voto Nulo
    1. Sistema cria new wallet instance
    2. Sistema registra voto
    3. Sistema exibe modal de Informação
    4. Sistema exibe tela de Busca de Candidato
6. Fim do caso de uso

**Postcondition:**

1. Usuário clica em Lista de Candidatos
    1. Sistema exibe lista de candidatos da referente candidatura

**Messages:**

- mensagem de alerta (1): 

- mensagem de sucesso (2): 
:::

## SCENARIOS

```gherkin
@seek_candidate

Feature: seek candidate
     
    In order to I need to register my vote
    As a registered user I want seek candidate typing the number

Background: User logged Must vote

    Scenario: candidate number does not exist
        Given I visit "/home" page
        And I type a candidate number does not exist
        When I click "Escolher Candidato(a)" button
        Then I see a warning <message>
    
    Scenario: number of missing digits
        Given I visit "/home" page
        When I type the number of the candidate with fewer or more digits
        Then I see a field <message>

```