---
sidebar_position: 6
---

# Consultar base de dados da apuração

## VALUE PROPOSITION

> **Como um** eleitor 

> **Eu quero** mais transparência na apuração dos votos

> **Então** vou acessar a aplicação e consultar a base de dados da apuração

## ACCEPTANCE CRITERIA

- Exibir total de votos apurados

- Exibir total de votos em apuração (total eleitorado - total apurado)

- O sidebar exibe apenas a opção Transparência

- A base de dados da apuração só é exibida com uma chave de descriptografia

- Consultar um address na base de dados da apuração

- Consulta o address do usuário logado na base de dados da apuração

## SCREEN DRAFTS

![Buscar Candidato](/img/must-vote/Consultar.png)


## USER STORY CARD

:::note CARD
**Name:** Consultar base de dados da apuração

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Oct 16, 2020

**Actors:**  

- eleitor

**Precondition:**

- usuário estar logado na aplicação

- TSE liberar a chave de descriptografia

**Main Flow:**

1. O usuário seleciona no menu superior a opção “Transparência“

2. Sistema exibe a tela “transparencia-auditoria“ e menu lateral exibe apenas a opção “Transparencia”
    1. Se a apuração já iniciou
        1. Lista contagem de votos apurados
        2. Lista contagem de votos em apuração
    2. Se não, exibe mensagem de alerta (1)

3. Usuário preenche campo Chave TSE descriptrografacom o hash fornecido pelo TSE

4. Usuário clica em confirmar
    1. Se campo preenchido com um valor válido
        1. Sistema exibe lista da base de dados da apuração
            1. Usuário pode buscar um address na base de dados da apuração
            2. Usuário pode buscar o próprio address na base de dados da apuração
    2. Se não, sistema exibe menssagem de alerta (2)

5. Fim do caso de uso

**Postcondition:**

- Usuário acessa base de dados da apuração

**Messages:**

- mensagem de alerta (1): Apuração para a Eleição "titulo-eleicao" não iniciou

- mensagem de alerta (2):
:::

## SCENARIOS

```gherkin
@election_count

        Scenario: not started count
            Given I visit "/transparencia-auditoria" page
            When the election count not started
            Then I should see a info <message>

        Scenario: started count
            Given I visit "/transparencia-auditoria" page
            When the election count is started
            Then I should see the count of votes counted

```