---
sidebar_position: 5
---

# Exibir resultado da Eleição

## VALUE PROPOSITION

> **Como um** eleitor 

> **Eu quero** acessar o resultado da eleição

> **Então** vou acessar a aplicação e consultar o resultado da eleição

## ACCEPTANCE CRITERIA

- Exibir total de votos apurados

- Exibir total de votos em apuração (total eleitorado - total apurado)

- O sidebar exibe apenas a opção Eleitos

- Ao final da apuração, exibe o resultado da eleição

## SCREEN DRAFTS

![Buscar Candidato](/img/must-vote/Exibir.png)


## USER STORY CARD

:::note CARD
**Name:** Exibir resultado da Eleição

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Oct 16, 2020

**Actors:**  

- Eleitor

**Precondition:**

- usuário estar logado na aplicação

- Resultado apenas ao final da apuração

**Main Flow:**

1. O usuário seleciona no menu superior a opção “Eleitos“

2. Sistema exibe a tela “eleitos“ 
    1. Lista contagem de votos apurados
    2. Lista contagem de votos em apuração

3. Se apuração da eleição finalizada, exibe resultado 
    1. se não, aguarda fim da apuração

4. Fim do caso de uso


**Postcondition:**

- Usuário verifica resultado da eleição

**Messages:**

:::

## SCENARIOS

```gherkin


```