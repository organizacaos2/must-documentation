# Cadastrar Produto

## VALUE PROPOSITION

 **Como um** gestor do estoque

 **Eu quero** definir e gerenciar os produtos do meu estoque

 **Então** preciso de um cadastro de produtos

## ACCEPTANCE CRITERIA

- Para cadastrar um produto é necessário o preenchimento dos campos obrigatórios: Nome e Referência

- CRUD cadastro de produtos
  - Excluir um produto altera o status para inativo

- Filtrar produto por nome, referência e status

- Não é possível cadastrar um produto com a mesma referência

- Um produto pode ter mais que uma sub-categoria

- Cadastrar em batch (não para este momento)

## SCREEN DRAFTS

![1](/img/must-ERP/cadastrar-produto1.png)

![2](/img/must-ERP/cadastrar-produto2.png)

:::note

**USER STORY CARD**

**Name:** Cadastrar Produto

**Author:** [Daniela Anjos](https://github.com/danielaanjos) 

**Date:** Oct 14, 2020

**Actors:**  usuário cadastrado com permissão  em produto

**Precondition:** 

- Estar logado na aplicação

**Main Flow:**

1. Usuário clica em Gestão de produtos no menu lateral
2. Sistema exibe a tela com a lista de produtos cadastrados.
3. Usuário clica no botão Inserir
   1. Sistema exibe modal com campos para cadastrar produto
   2. Usuário preenche os campos
   3. Usuário clica em Salvar
       1. Se campo Nome do Produto estiver em branco, sistema exibe menssagen de alerta (1)
       2. Se campo Referência estiver em branco, sistema exibe menssagen de alerta (1)
       3. Se não, sistema registra produto. 
4. Sistema retorna para a lista de produtos
5. Produto cadastrado é exibido na lista de produtos
6. Fim do caso de uso

**Alternative Flow:**

Update product

Delete Product

**Postcondition 1:**

- Produto cadastrado na aplicação

**Messages:**

1. menssagen de alerta: ```Os campos marcados com * são de preenchimento obrigatório.```

:::

## SCENARIOS

```gherkin
@register_products

Feature: register products
    In order to I need control my stock
    As a stock manager I want register products

Background: access manage products page
    Given I logged in the application
    When I click "Gestão de Produtos" sidebar menu item
    Then System show "/manage-products" page

    Scenario: Register products with no name
        Given I click "Inserir" button
        And System show "/form-product" modal
        And the field "Name" is empty
        When I click "Salvar" button
        Then I see a warning <message>
        And I can not register product

     Scenario: Register products with no reference
        Given I click "Inserir" button
        And System show "/form-product" modal
        And the field "Referência" is empty
        When I click "Salvar" button
        Then I see a warning <message>
        And I can not register product   
     
     Scenario: Register products with same reference
        Given I click "Inserir" button
        And System show "/form-product" modal
        When I fill "Referência" field
        And <product-reference> already exists in the system
        Then I see a warning <message>
        And I can not register product 
   
    Scenario: list products by name
        Given I visit "/manage-products" page
        When I fill filter field with <Name> product
        Then I see the filtered product list
        
    Scenario: list products by reference
        Given I visit "/manage-products" page
        When I fill filter field with <product-reference> product
        Then I see the filtered product list
   
    Scenario: list products by status
        Given I visit "/manage-products" page
        When I fill filter field with <product-status> product
        Then I see the filtered product list 
        
 
     Scenario: delete a product
        Given I visit "gestao-produto" page
        And I click "Excluir" button
        When I click "Sim" confirmation modal
        Then product <status> turn to "inativo"          
```
