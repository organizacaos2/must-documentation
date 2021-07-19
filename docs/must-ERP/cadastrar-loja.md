# Cadastrar Loja

## VALUE PROPOSITION

 **Como um** usuário cadastrado com permissão no backoffice

 **Eu Quero** registrar gerenciar o estoque por loja

 **Então** preciso de um cadastro de lojas

## ACCEPTANCE CRITERIA

- Para cadastrar uma loja é necessário o preenchimento do campo: Nome de referência (ex - matriz, filial 1 ou outro apelido para identificar a loja) (verificar necessidade de colocar como obrigatório os campos de endereço da loja)
- CRUD cadastro de loja
- A tela precisa exibir um campo para busca por nome de referência da loja
- As roles admin e backoffice podem acessar o cadastro de lojas para criar, editar e excluir
- Sistema permite importar um arquivo (a definir) para cadastrar em batch. (verificar possibilidade) 
- Sistema permite exportar a lista de lojas (a definir) 


## SCREEN DRAFTS

![1](/img/must-ERP/cadastrar-loja.png)

## USER STORY CARD

**Name:** Cadastrar Loja

**Author:** [Daniela Anjos](https://github.com/danielaanjos) 

**Date:** Dec 01, 2020

**Actors:**  
- usuário cadastrado

**Precondition:** 

**Main Flow:**
1.	Usuário clica em Cadastros no menu lateral
2.	Sistema exibe a tela com a lista de lojas cadastradas.
3.	Usuário clica no botão Inserir
    1.	Sistema exibe modal com campos para cadastrar loja
4.	Usuário preenche os campos
    1.	Se CNPJ preenchido é inválido, sistema exibe mensagem de alerta (1)
5.	Usuário clica em Salvar
    1.	Se campos descritos estiver em branco, sistema exibe mensagem de alerta (2)
        1.	Nome
        2.	Se não, sistema registra loja.
6.	Sistema retorna para a lista de lojas
7.	Loja cadastrada é exibida na lista de lojas
8.	Fim do caso de uso

**Alternative flow:**
1.	Usuário clica em Cadastros no menu lateral
2.	Sistema exibe a tela com a lista de lojas cadastradas.
3.	Usuário seleciona uma loja da lista
    1.	Usuário clica no botão de editar
        1.	Sistema exibe modal com os campos do cadastro da loja
            1.	Usuário preenche os campos
                1.	Se CNPJ preenchido é inválido, sistema exibe mensagem de alerta (1)
            2.	Usuário clica em Salvar
                1.	Se campos descritos estiver em branco, sistema exibe mensagem de alerta (2)
                    1.	Nome 
                2.	Se não, sistema salva a edição do cadastro da loja
            3.	Sistema retorna para a lista de lojas
    2.	Usuário clica no botão excluir
        1.	Sistema exibe mensagem de alerta (3)
        2.	Se usuário confirmar mensagem
            1.	Sistema exclui informações da loja do sistema
        3.	Se usuário cancelar
            1.	Sistema retorna para a lista de lojas
4.	Fim do fluxo alternativo


**Postcondition 1:**
- Loja cadastrada na aplicação

**Postcondition 2:**
- Loja cadastrada com as informações editadas

**Postcondition 3:**
- Informações da loja excluída

**Messages:**
1.	mensagem de alerta (1) - Formato inválido
2.	mensagem de alerta (2) - Campos obrigatórios devem ser preenchidos
3.	mensagem de alerta (3) - Deseja remover a loja”nomeLoja”?

## SCENARIOS

```gherkin
@register_store

Feature: register stores
    In order to I need to create more stocks to manage my products
    As a role permissioned I want register my stores

Background: user access register store page
    Given I click "Cadastros" sidebar menu item
    When I select "Lojas" item
    Then System show "/manage-store" page

    Scenario: Register store with invalid CNPJ
        Given I click "Inserir" button
        And System show "/form-store" modal
        When I enter invalid <CNPJ> in the CNPJ field
        Then I see a warning <message>
        And I can not register the store   

    Scenario: Register store with no name
        Given I click "Inserir" button
        And System show "/form-store" modal
        When I click "Salvar" button
        And name field is empty
        Then I see a warning <message>
        And I can not register the store 
        
    Scenario: Valid register store
        Given I click "Inserir" button
        And System show "/form-store" modal
        And I fill the <name> field
        When I click "Salvar" button
        Then I see a success <message>
        And system register the store 
@update_store

Feature: Edit stores information
    In order to I need to edit the registered store
    As a role permissioned I want update the stores registereds

Background: user access register store page
    Given I click "Cadastros" sidebar menu item
    When I select "Lojas" item
    Then System show "/manage-store" page

    Scenario: update store with invalid CNPJ
        Given I select a store at list
        And I click "editar" button
        And System show "/form-store" modal
        When I enter invalid <CNPJ> in the CNPJ field
        Then I see a warning <message>
        And I can not register the store   

    Scenario: update store and leave the name field empty
        Given I select a store at list
        And I click "editar" button
        And System show "/form-store" modal
        When I click "Salvar" button
        And name field is empty
        Then I see a warning <message>
        And I can not register the store 
        
    Scenario: Valid register store
        Given I select a store at list
        And I click "editar" button
        And System show "/form-store" modal
        And I fill the <name> field
        When I click "Salvar" button
        Then I see a success <message>
        And system register the store 
@delete_customer

Feature: delete a registerd store
    In order to I need to delete a store information
    As a role permissioned I want to delete the stores registers 
    and all and all records linked to it

Background: user access register store page
    Given I click "Cadastros" sidebar menu item
    When I select "Lojas" item
    Then System show "/manage-store" page

    Scenario: delete customer
        Given I select a store at list
        And I click "Excluir" button
        And System show a warning <message>
        When I click "confirm" the <message>
        Then system delete store information
        And I do not see at the store at the list
```