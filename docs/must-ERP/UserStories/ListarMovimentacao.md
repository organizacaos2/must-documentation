# Listar movimentação de estoque

## VALUE PROPOSITION

 **Como um** usuário com permissão em movimentação de estoque

 **Eu quero** visualizar a lista de movimentação

 **Então** preciso de uma página que eu possa acessar as informações das movimentações

## ACCEPTANCE CRITERIA

- Listar todas as movimentações de entrada e saída de produtos no estoque

- Possibilitar exportação da lista em PDF e Excel

- Filtar lista por loja (verificar permissão de usuário)

- Parâmetros da lista de movimentação do estoque:
  - Nome produto
  - Variação
  - Tipo Movimento
  - Descrição movimento
  - Origem movimento
  - Data e Hora do movimento
  - Quantidade do movimento

| Tipo | Descrição | Tela | Origem |
| ---- | --------- | ---- | ------ |
| Saida | Perda Produto | Ajuste estoque | < loja > |
| Entrada | Entrada manual estoque | Ajuste de estoque | < loja > |
| Entrada | Entrada de Saldo inicial | Primeiro ajuste de estoque do produto | < loja > |
| Saida | Saida manual estoque | Ajuste de estoque | < loja > |
| <mark>Entrada</mark> | <mark>Compra nu.0123</mark> | <mark>lançamento de compra</mark> | <mark>< nome-fornecedor ></mark> |
| Saida | Venda nu.001 | lançamento venda | < loja > |
| Entrada | Devolução nu.005 | lançamento venda | < loja > |

<mark>*lançamento de compra não está nessa versão</mark>

## SCREEN DRAFTS

![1](/img/must-ERP/listar-movimentacao.png)

## USER STORY CARD

**Name:** Listar movimentação de estoque

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Nov 18, 2020

**Actors:**  

- usuário com permissão em movimentação de estoque

**Main Flow:**

1. Usuário clica em Gestão de Estoque no menu lateral
2. Sistema exibe tela com lista de movimentação de estoque
  1. Se usuário selecionar < loja > no filtro
  2. Sistema exibe lista movimentação < loja >
3. Usuário clica no botão PDF
  1. Sistema exporta lista movimentação estoque < loja > exibida na tela
4. Usuário clica no botão Excel
  1. Sistema exporta lista movimentação estoque < loja > exibida na tela
5. Fim do caso de uso

**Alternative Flow:**

1. Exportar lista
   1. Usuário está na página de Gestão de Estoque
      1. Se clicar no botão PDF, sistema faz download da lista de movimentação em arquivo .pdf
      2. Se clicar no botão Excel, sistema faz download da lista de movimentação em arquivo .xlsx
2. Fim do fluxo alternativo

**Postcondition:**

- Lista movimentação exibida para o usuário

- Download da lista de movimentação do estoque nos formatos pdf e xlsx

**Messages:**



## SCENARIOS

```gherkin
@Filter_stock_movements

Background: Access movement list
    Given I visit "/stock-movement" page
    And I am registered in more than one store

Scenario: Filter by store
    When I select <store-name> in the filter field
    Then I see List_stock_movements filtered by <store-name>

Scenario: Filter by all stores
    When I select <all-stores> in the filter field
    Then I see List_stock_movements filtered by <all-stores> that I am registered

Scenario: Filter and find no reference
    When I select <store-name> in the filter field
    And the system does not find any product list
    Then I see a info <message> 

@export_list-movements

Background: Access movement list
    Given I visit "/stock-movement" page

Scenario: download movement list
    When I click <download> button
    Then I see a <tipe-file> downloaded

Example:
|download|tipe-file|
|PDF     |.pdf     |
|Excel   |.xlsx    |  
```

**Sobre o movimento no estoque:**

![3](/img/must-ERP/movimento-estoque.png)

**Sobre o movimento na venda:**

![4](/img/must-ERP/movimento-venda.png)