---
sidebar_position: 7
---

# Registrar voto

## VALUE PROPOSITION

> **Como um** usuário validado 

> **Eu quero** registrar meu voto

> **Então** vou acessar a área de eleição para escolher o candidato

## ACCEPTANCE CRITERIA

- O usuário deve ter a possibilidade de fazer uma busca por numero ou nome do candidato na lista de candidatos

- Cada eleição deve estar separada por tipo de candidatura

- O usuário precisa fornecer uma prova de identidade para registrar o voto

- O sistema deve atender a quantidade de votos por candidatura

- O usuário não pode votar duas vezes no mesmo candidato

- O sidebar precisa manter selecionado a candidatura ao abrir a tela de detalhe da candidatura.

- O sistema deve ser responsivo para atender diversas plataformas.

## SCREEN DRAFTS

![Buscar Candidato](/img/must-vote/RegistrarV2.png)

![Buscar Candidato](/img/must-vote/Registrar2V2.png)


## USER STORY CARD

:::note CARD
**Name:** Registrar voto

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Oct 14, 2020

**Actors:**  

- usuário validado

**Precondition:**

- usuário ter selecionado um candidato na lista de candidato

- usuário ter selecionado um candidato na busca de candidato

**Main Flow:**

1. O usuário define um candidato na Busca de Candidato ou
2. O usuário define um candidato na Lista de Candidato
3. Sistema exibe tela do detalhe do candidato selecionado
    1. Se usuário clicar em Confirme seu voto
        1. Sistema verifica se candidato selecionado já possui voto para a candidatura
        2. Se possui, sistema exibe mensagem de alerta (1)
        3. Se não possui
            1. Sistema cria new wallet instance
            2. Sistema registra voto
            3. Sistema exibe modal de confirmação
            4. Usuário clica em Fechar
                1. Se candidatura possui mais opção para escolha de candidato
                    1. Sistema exibe tela de Busca de Candidato e repete passos 1 - 3
                2. Se não
                    2. Sistema exibe tela de Busca de Candidato da próxima candidatura
    2. Se usuário clicar em Voltar, sistema exibe a tela de Busca de Candidato
4. Usuário seleciona Votar em Branco
    1. Sistema cria new wallet instance
    2. Sistema registra voto
    3. Sistema exibe modal de Informação 
    4. Sistema exibe tela de Busca de Candidato
5. Usuário seleciona Votar Nulo
    1. Sistema cria new wallet instance
    2. Sistema registra voto
    3. Sistema exibe modal de Informação 
    4. Sistema exibe tela de Busca de Candidato
6. Enquanto houver lista de candidatura para eleição, usuário clica na próxima lista
    1. Repetir passos 3 - 5 
7. Fim do caso de uso

**Postcondition:**

- Usuário validado registra seu voto

**Messages:**

- mensagem de alerta (1): 

- mensagem de sucesso (1):
:::

## SCENARIOS

```gherkin
@Register-vote
Feature: choose and register vote
    In order to I need to choose my vote
    As a registered user I want register my vote

    Background: Access candidate confirm vote
        Given I visit "/candidate-list" page
        When I click "Votar" button
        Then I visit "confirm-voting" page

        Scenario: vote for the same candidate
            Given I am at "confirm-voting" page
            When I click "Confirme" button
            Then I see a info <message>
            And I cant choose a same candidate

        Scenario: vote twice in a candidature that only accepts one vote
            Given I am at "confirm-voting" page
            And I click "Confirme" button
            And I should see a success <message>
            When I click "Fechar" button
            Then I see a "search-candidate" page
            And I cant register another vote

        Scenario: change the vote
            Given I am at "confirm-voting" page
            And I click "Confirme" button
            And I should see a success <message>
            When I click "Fechar" button
            Then I see a desable list candidate with info <message>
            And I cant change my vote

        Scenario: vote two candidates
            Given I am at "confirm-voting" page
            And I click "Confirme" button
            And I should see a success <message>
            When I click "Fechar" button
            Then I see a "search-candidate" page
            And I can choose another candidate  

```