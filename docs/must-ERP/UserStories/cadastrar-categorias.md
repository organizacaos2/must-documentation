# Cadastro de categorias e subcategorias

## VALUE PROPOSITION

 **Como um** usuário do backoffice

 **Eu quero** criar, editar ou excluir categorias e sub-categorias no sistema

 **Então** preciso de um cadastro de categorias

## ACCEPTANCE CRITERIA

- Não é possivel cadastrar uma categoria ou subcategoria já existente

- Excluir uma cetegoria altera o status para inativo

- O nome da categoria é obrigatório

- Exibir uma lista das categorias cadastradas

- Uma categoria criada com uma categoria pai associada é considerada subcategoria

- Se a categoria pai selecionada já existe na árvore de ancestrais da categoria, não é possível adiciona-la como pai.

![1](/img/must-ERP/cadastrar-categorias1.png)

## SCREEN DRAFTS

![2](/img/must-ERP/cadastrar-categorias2.png)

![3](/img/must-ERP/cadastrar-categorias3.png)

:::note

**USER STORY CARD**

**Name:** Cadastrar categoria

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Jan 14, 2021

**Actors:**  

-  usuário do backoffice

**Main Flow:**

1. Usuário clica em Gestão de produtos no menu lateral e seleciona Categorias
2. Sistema exibe a tela com a lista de categorias cadastradas.
3. Usuário clica no botão Adicionar categoria
    1. Sistema exibe campos para cadastrar categoria
        1. Informe o nome da sua categoria
            1. Se usuário selecionar “Categoria pai“
                1. Categoria adicionada com subcategoria
        2. Clique em Salvar
    2. Sistema exibe categoria na lista de categorias cadastradas
4. End use case

**Postcondition:**

- Categoria cadastrada

- Subcategoria cadastrada

**Messages:**

- mensagem de alerta (1) - Campos obrigatórios devem ser preenchidos

:::

## SCENARIOS

```gherkin
@CRUD_category

Feature: register a category
    In order to I need create categories products
    As a role permissioned I want register my categories

Background: visit manage product page
    Given I visit "/gestao-produtos" page
    And I click 'adicionar categoria' button

    Scenario: Register category without name value
        When I click 'Salvar' button
        And field 'Nome' is <empty>
        Then I see a warning <message>
        And I can not register category

    Scenario: Register category with repeated name value
        When I fill 'Nome' field <value-nome> 
        And the <value-nome> already exists in the system
        Then I see a warning <message>
        And I can not register category 
    
    Scenario: Register category with existing parent category
        When I fill 'Nome' field <value-nome> 
        And I select a existing relationship 'Categoria pai' <categoria-pai> in combobox
        Then I see a warning <message>
        And I can not register category
     
     Scenario: delete a category
        Given I visit "gestao-produtos" page
        And I click "Excluir" button
        When I click "Sim" confirmation modal
        Then category <status> turn to "inativo" 
```