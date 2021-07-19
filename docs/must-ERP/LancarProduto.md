# Lançar produtos na venda

## VALUE PROPOSITION

 **Como um** vendedor

 **Eu quero** lançar os produtos vendidos de uma venda

 **Então** preciso criar uma lista de produtos lançados para registrar a venda

## ACCEPTANCE CRITERIA

- O usuário possui 2 critérios de busca de produtos:
    - Referência do produto
    - Nome do Produto

- Cada produto encontrado na busca é exibido para o usuário
    - Informações exibidas: Nome do produto; Referência; Variação; Quantidade; Valor do Produto
    - O campo Quantidade é editavel para o usuário

- Se usuário possui a role vendedor, filtro loja exibe a loja relacionada ao vendedor já carregada

- O usuário precisa adicionar o produto encontrado na lista de produtos lançados

- Um produto só pode ser adicionado em uma lista de produtos lançados
    - O usuário pode editar a quantidade dos produtos na lista de produtos lançados
    - O usuário pode excluir um produto da lista de produtos lançados

- Os protudos na lista de produtos lançados definen o valor total da venda. (quantidade x valor)

- O valor total da venda precisa ser exibido na tela

## SCREEN DRAFTS

![1](/img/must-ERP/lancar-produto1.png)

## BUSINESS PROCESS

![2](/img/must-ERP/lancar-produto2.png)

## USER STORY CARD

**Name:** Lançar Venda

**Author:** 
- 
- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Oct 28, 2020

**Actors:**  

- usuário registrado com permissão para lançamento de venda

**Precondition:**

- usuário ter a permissão lançamento de venda

**Main Flow:**

1. Usuário clica no menu lateral “Lançamendo de venda“
2. Sistema exibe a tela “lancamento-venda“
    1. Se usuário é vendedor
        1. Filtro loja já exibe a loja cadastrada para o vendedor
    2. Se não, sistema permite seleção de loja para as lojas registradas para o usuário
3. Buscar produtos:
    1. Usuário digita a informação para busca do produto:
        1. Referência do produto
        2. Nome do produto
    2. Se produto existe, exibe o produto
        1. Se não, exibe mensagem de alerta(1)  
4. Lançar produto na venda
    1. Produto exibido com quantidade igual a 0
        1. Usuário altera valor quantidade
    2. Usuário clica em “Adicionar produto“
        1. Sistema verifica se produto possui estoque
            1. Se sim
                1. Sistema reserva produto, adiciona como produto lançado
                2. Sistema multiplica quantidade produto e valor produto
                3. Sistema atualiza valor total da venda
            2. Se não possui estoque, exibe mensagem de alerta (2)
        2. Sistema exibe produto na lista de produtos lançados
        3. Sistema exibe Valor total da venda
    3. <mark>Definindo informações do Plano de Fidelidade</mark>
        1. Creditar ou Descontar pontos de fidelidade 
5. Usuário clica em “Efetivar venda“
    1. Sistema exibe modal para confirmaçao de venda
6. Fim do caso de uso

**Alternative Flow:**

1. Editar lista de produtos lançados:
    1. Usuário edita quantidade do produto da lista lançada
        1. Se quantidade maior que quantidade lançada
            1. Sistema verifica se produto possui estoque
                1. Se sim
                    1. Sistema reserva produto, adiciona como produto lançado
                    2. Sistema multiplica quantidade produto e valor produto
                    3. Sistema atualiza valor total da venda
                2. Se não possui estoque, exibe mensagem de alerta ()
            2. Sistema exibe produto na lista de produtos lançados
            3. Sistema exibe Valor total da venda
        2. Se quantidade menor que quantidade lançada
            1. Sistema retira produto da lista de produto lançado
                1. Sistema multiplica quantidade produto e valor produto
                2. Sistema atualiza valor total da venda
    2. Usuário exclui produto da lista lançada
        1. Sistema retira produto da lista de produto lançado
        2. Sistema exibe Valor total da venda

**Postcondition:**

- Lista de produtos lançados na venda com as informações do plano de fidelidade se existir e o meio de pagamento.

**Messages:**



## SCENARIOS

```gherkin
@Search_product

Background: Logged system and release a sale
    Given I am logged in the system
    And I visit "/sales-release" page

Scenario: Search by a exists product reference
    When I type <product-reference> in the search field
    And I click "Buscar"
    Then I see the finded product
    And I can type <quantity> of product finded

Scenario: Search by a exists product name
    When I type <product-name> in the search field
    And I click "Buscar"
    Then I see the finded product
    And I can type <quantity> of product finded

Scenario: Search by a exists barcode
    When I type <barcode> in the search field
    And I click "Buscar"
    Then I see the finded product
    And I can type <quantity> of product finded

Scenario: Search and find no reference
    When I type <some-filter> in the <field> search
    And I click "Buscar"
    And the product not exists
    Then I see a info <message>


@product_release_list

Background: Finded product
    Given I type <quantity> of product listed

Scenario: add product with no stock
    When I click "Add product" button
    And system check has no stock
    Then I see a info <message>

Scenario: add product with stock
    When I click "Add product" button
    And system check stock
    Then I see a product listed
    And system add <value-product * quantity> to <total-sales-value>
    And the <total-sales-value> is displayed

Scenario: update product with no stock
    When I click "Update product" button
    And system check has no stock
    Then I see a info <message>
    And system keeps the previous <quantity>

Scenario: update product with stock
    When I click "Update product" button
    And system check stock
    Then I see a <new-quantity> product listed
    And system add <value-product * quantity> to <total-sales-value>
    And the <total-sales-value> is updated    

Scenario: Delete product
    When I click "Delete product" button
    Then the product leaves the list
    And system subtract <value-product * quantity> to <total-sales-value>
    And the <total-sales-value> is updated 
```