# Visão de produtos do estoque

## VALUE PROPOSITION

 **Como um** usuário com permissão de visualizar produtos

 **Eu quero** acessar uma lista de produtos do estoque e visualizar os detalhes de cada produto

 **Então** preciso de uma visão de produto do meu estoque

## ACCEPTANCE CRITERIA

**Lista de produto**

- Exibir as informações: Nome produto; Variação, Referência; Quantidade estoque, Valor venda,  Data cadastro, Status

- O usuário pode filtrar por: Nome produto; Referência e Fornecedor

- Se o usuário pertencer a mais de uma loja, filtrar por loja

**Detalhe produto**

- Exibir as informações produto: Nome; Variação; Marca; Referência; Código de barras; Quantidade estoque; Valor venda; Status; Categoria; Sub-categorias

- Exibir movimentação do produto: Data; Hora; Tipo movimento; Descrição; Origem; Quantidade movimento  (sempre a movimentação mais recente é exibida primeiro)

- Exibir lista de fornecedores: Nome

- Possibilitar o usuário selecionar movimentos por: tipo movimento, descrição movimento, origem e período de tempo (selecionar data inicial e data final)

## SCREEN DRAFTS

![1](/img/must-ERP/visao-produto1.png)

![2](/img/must-ERP/visao-produto2.png)

## USER STORY CARD

**Name:** Visão de produtos do estoque

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Jan 18, 2021

**Actors:**  

- usuário com permissão de visualizar produtos

**Main Flow:**

1. Usuário clica em Gestão Produto no menu lateral
2. Sistema exibe a tela com a lista de produtos cadastrados em estoque.
3. Usuário pode filtrar lista por parâmetros:
    1. Nome produto
    2. Referência
    3. Fornecedor
    4. Se usuário possui mais de uma loja cadastrada, pode filtrar por loja
4. O usuário clica no ícone para Visualizar produto
    1. Sistema exibe mais detalhes do produto
        1. Informações produto: Nome, Referência, Variação, Código de barras, Marca, Status, Categoria e Subcategorias
        2. Valor de venda
        3. Quantidade em estoque
        4. Movimentação do produto: Data; Hora; Tipo movimento; Descrição; Origem; Quantidade movimento
5. Filtrar movimentação do produto por parâmetros:
    1. Tipo movimento: Entrada / Saída
    2. Descrição de movimentos
    3. Origem
    4. Período de tempo: seleciona uma data inicial e uma data final
6. End use case

**Postcondition:**

- Lista de produto com quantidade em estoque

- Detalhe do produto selecionado exibido, com valor venda e movimentação do produto

**Messages:**



## SCENARIOS

```gherkin
@manage-product-vision

Feature: product vision from stock store
    In order to I need view my stock by product
    As a user I want a product vision view with details

Background: visit manage stock page
    Given I visit "/gestao-produto" page
 

@list-products    
    Scenario: filter list of products by a value
        When I see the 'list-product-stock'
        And I type <filter-value> in the search field
        Then I see 'list-product-stock' filtered by <filter-value>
Example: filter-value
    |filter-value|
    |Nome produto|
    |Referência  |
    |Fornecedor  |

Scenario: Filter and find no elements
    When I see the 'list-product-stock'
    And I type <filter-value> in the search field
    And system return <empty>
    Then I see a info <message>

 Scenario: filter by store
    When I see the 'list-product-stock'
    And my <user> has more than one registered store
    And I choose a <selected-store>
    Then I see 'list-product-stock' filtered by <selected-store> that I am registered  

@details-product

Background: visit manage stock page
    Given I visit "/gestao-produto" page

    Scenario: view product details
        When I see the 'list-product-stock'
        And I click 'view' icon button from a <product>
        Then I see 'detais-product' from a <product>
        
@moviments-list
Background: visit manage stock page
    Given I visit "/gestao-produto" page
    And I click 'view' icon button from a <product>

    Scenario: filter movements by a selected parameter
        When I see 'detais-product' from a <product>
        And I type <filter-value> in the search field
        Then I see 'list-movements-product' filtered by <filter-value>
Examples:
    |filter-value             |
    |Tipo movimento           |
    |Descrição mvimento       |
    |Origem                   |
    |data-inicial + data-final|             
```