# Ajustar Estoque

## VALUE PROPOSITION

 **Como um** usuário administrador ou supervisor

 **Eu quero** movimentar os produtos do estoque

 **Então** preciso de uma maneira para ajustar o estoque

## ACCEPTANCE CRITERIA

- Tela ajuste de estoque: Exibir a lista de produtos
    - Usuário tem a possibilidade de filtrar a lista por:
        - Referência do produto
        - Nome do produto
        - Marca

- Usuário pode editar a quantidade de estoque do produto, entrada ou saída

- Campo de “Quantidade em  estoque“ não é editável

- Campo “Quantidade em  estoque“ não pode ser um número negativo

- O usuário só pode criar um movimento por vez: ou entrada ou saída.

- Movimentos de Entrada de produto - adiciona o valor a quantidade atual do estoque

- Movimentos de Saída de produto - subtrai o valor a quantidade atual do estoque

- Campos de quantidade de estoque, Entrada de produto e Saída de produto são números inteiros e não podem ser negativos

- Movimentos de entrada e saída não podem ser igual a zero

- Usuário define valor de venda do produto ao dar entrada no produto
    - Valor venda deve ser maior ou igual ao valor mínimo de venda do produto cadastrado na tabela compra-produto (valor custo + % lucro)

## SCREEN DRAFTS

![1](/img/must-ERP/ajustar-estoque1.png)

![2](/img/must-ERP/ajustar-estoque2.png)

## USER STORY CARD

**Name:** Ajustar Estoque

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Oct 21, 2020

**Actors:**  

- usuário admin ou supervisor

**Precondition:**

- Possuir a permissão de Ajuste de Estoque

**Main Flow:**

1. Usuário clica em Gestão de estoque no menu lateral
    1. Sistema exibe tela com lista de movimentações de estoque
2. Usuário clica no botão Ajustes
    1. Sistema exibe tela com lista de produtos 
3. Usuário  clica no botão edição ao lado do produto:
    1. Sistema exibe tela de ajuste de estoque
    2. Usuário seleciona a variação do produto: tamanho e cor
    3. Usuário seleciona a loja
        1. Sistema exibe a quantidade em estoque do produto
    4. Usuário seleciona o tipo de movimento e digita a quantidade
        1. Se o movimento igual a entrada, usuário define valor do produto
            1. Valor do produto não pode ser menor que valor mínimo para venda da tabela valor_compra
        2. Se o movimento igual a saída, não habilita campo de definição de valor
    5. Usuário clica em Confirmar
        1. Sistema registra o movimento do estoque 
            1. Se movimento igual a entrada
                1. Sistema adiciona o valor a quantidade atual do estoque do produto
                2. Sistema registra valor venda na tabela produto_estoque
            2. Se movimento igual a saída.
                1. Sistema verifica se subtração é menor que zero
                2. Se menor que zero, sistema exibe mensagem ()
                3. Se não, sistema subtrai o valor da quantidade atual do estoque do produto
        2. Sistema retorna para tela com lista de produtos e quantidade em estoque (Ajuste de estoque)
4. Fim do caso de uso

**Alternative Flow:**

- Usuário utiliza filtro:

1. Se usuário digitar < referencia-produto > ou < nome-produto > no campo de busca e clicar em Buscar
    1. Sistema verifica se < referencia-produto > ou < nome-produto > existe
        1. Se existe retorna resultado
        2. Se não, exibe mensagen de alerta ()

**Postcondition:**

- Quantidade de estoque do produto ajustada

- Movimentação de produto registrada

- Valor produto_estoque definido para entrada de produtos

**Messages:**



## SCENARIOS

```gherkin
@Filter_product

Background: Logged system and visit moviments stock page
    Given I am logged in the system
    And I visit "/stock-movement" page
    And I click "Ajustes" button

Scenario: Filter by product reference
    When I type <product-reference> in th "Product reference" field
    And I click "Buscar"
    Then I see List_stock filtered by <product-reference>

Scenario: Filter by product name
    When I type <product-name> in th "Product name" field
    And I click "Buscar"
    Then I see List_stock filtered by <product-name>
    
@Update_product

Background: Logged system and visit moviments stock page
    Given I am logged in the system
    And I visit "/stock-movement" page
    And I click "Ajustes" button
    And I click "Editar" button

Scenario: Check in stock with negative number
    When I select "Entrada" movement
    And I type a negative <number> in the field
    Then I see a field validation warnning <message>
    And I can not save update

Scenario: Check out stock with negative number
    When I select "Saída" movement
    And I type a negative <number> in the field
    Then I see a field validation warnning <message>
    And I can not save update

Scenario: Output value greater than total in the stock
    When I select "Saída" movement
    And I type a <number> greater than total in the stock in the field
    And I click "Salvar" button
    Then I see a warnning <message>
    And I can not save update

Scenario: Check in stock with positive number
    When I select "Entrada" movement
    And I type a positive <number> in the field
    And I click "Salvar" button
    Then I see a success <message>
    And system add the <number> to the total stock
    And system return to stock list page

Scenario: Check out stock with positive number
    When I select "Saída" movement
    And I type a positive <number> in the field
    And I click "Salvar" button
    Then I see a warnning <message>
    And I can not save update
 
 Scenario: Check in stock with number equal zero
    When I select "Entrada" movement
    And I type a number <zero-number> in the field
    And I click "Salvar" button
    Then I see a warnning <message>
    And I can not save update

Scenario: Check out stock with number equal zero
    When I select "Saída" movement
    And I type a positive <number> in the field
    And I click "Salvar" button
    Then I see a success <message>
    And system subtracts add the <number> to the total stock
    And system return to stock list page   
    
Scenario: Define product value
    When I select "Entrada" movement
    And I type a positive <number> in the field
    Then I can define product <sale-value>
    And I click "Salvar" button
    And system add the <number> to the total stock
    And system add the <sale-value> to the sale value stock
    And system return to stock list page
    
Scenario: Back to stock list
    When I click "Voltar" button
    Then system return to stock list page    
    
```