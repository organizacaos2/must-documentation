# Listar contas a receber - financeiro

## VALUE PROPOSITION

> **Como um** usuário com permissão no financeiro

> **Eu quero** registrar os recebimentos do estabelecimento

> **Para** controlar o fluxo de caixa

## ACCEPTANCE CRITERIA

- Adicionar um recebimento de forma manual (não para essa versão)

- A lista sempre é exibida no período atual (primeiro dia do mês ao ultimo dia do mês vigente)

- O usuário pode selecionar o período a ser exibido da lista de recebimento

- O usuário pode filtar por loja

- Exportar a lista exibida no formato PDF e Excel

- O usuário pode alterar o status do recebimento para controle financeiro
    - Sistema armazena usuário, data e hora da alteração

- Cada venda realizada entra para o financeiro como um recebimento

- Todas as vendas com forma de pagamento ‘Dinheiro' já recebe status 'Confirmado’ para recebimento

## SCREEN DRAFTS

![1](/img/must-ERP/listar-contas.png)

:::note

**USER STORY CARD**

**Name:** Listar contas a receber - financeiro

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 28, 2020

**Actors:**  

- usuário com permissão no financeiro

**Main Flow:**

1. O usuário acessa o item ‘Financeiro' no menu lateral e seleciona 'Recebimentos’
2. Sistema exibe lista de recebimentos do estabelecimento no período atual
    1. Se usuário filtar loja, sistema exibe recebimentos da loja filtrada
    2. Se usuário filtar periodo, sistema exibe o período filtrado (definir paginação)
3. Adicionar recebimento manual
    1. (não para esse momento)
4. Exportar extrato contas a receber
    1. Usuário clica em ‘Ações' e seleciona 'Exportar PDF’
    2. Sistema faz download da lista de recebimento com o filtro vigente
5. End use case

**Postcondition:**

- Exibir e exportar lista de recebimentos

**Messages:**

:::

## SCENARIOS

```gherkin

```