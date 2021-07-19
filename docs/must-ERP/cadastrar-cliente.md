# Cadastrar cliente

## VALUE PROPOSITION

 **Como um** usuário cadastrado com permissão em gestão de cliente

 **Eu Quero** registrar clientes no sistema

 **Então** preciso de um cadastro de clientes

## ACCEPTANCE CRITERIA

- Para cadastrar um cliente é necessário o preenchimento do campo: Nome e tipo cliente
- CRUD cadastro de cliente
- A tela precisa exibir um campo para busca por nome do cliente
- As roles admin, supervisor e vendedor podem acessar o cadastro do cliente para criar, editar e excluir
- Sistema permite importar um arquivo (a definir) para cadastrar em batch. (verificar possibilidade) 
- Sistema permite exportar a lista de cliente (a definir) 

## SCREEN DRAFTS

![1](/img/must-ERP/cadastrar-cliente1.png)

![2](/img/must-ERP/cadastrar-cliente2.png)

## USER STORY CARD

**Name:** Cadastrar Cliente

**Author:** [Daniela Anjos](https://github.com/danielaanjos) 

**Date:** Out 05, 2020

**Actors:**  
- usuário cadastrado

**Precondition:** 

**Main Flow:**
1.	Usuário clica em Gestão de clientes no menu lateral
2.	Sistema exibe a tela com a lista de clientes cadastrados.
3.	Usuário clica no botão Inserir
    1.	Sistema exibe modal com campos para cadastrar cliente
    2.	Usuário preenche os campos
         1.	Se CPF / Razão Social preenchido é inválido, sistema exibe mensagem de alerta (1)
         2.	Se celular preenchido é inválido, sistema exibe mensagem de alerta (1)
         3.	Se e-mail preenchido é inválido, sistema exibe mensagem de alerta (1)
     3.	Usuário clica em Salvar
         1.	Se campos descritos estiver em branco, sistema exibe mensagem de alerta ()
            1.	Nome / Razão Social
            2.	Tipo cliente
         2.	Se não, sistema registra cliente. 
4.	Sistema retorna para a lista de clientes
5.	Cliente cadastrado é exibido na lista de clientes
6.	Fim do caso de uso

**Alternative flow:**
1.	Usuário clica em Gestão de clientes no menu lateral
2.	Sistema exibe a tela com a lista de clientes cadastrados.
3.	Usuário seleciona um cliente da lista
    1.	Usuário clica em editar
        1.	Sistema exibe modal com campos para cadastrar cliente
             1.	Usuário preenche os campos
                 1.	Se CPF / Razão Social preenchido é inválido, sistema exibe mensagem de alerta (1)
                 2.	Se celular preenchido é inválido, sistema exibe mensagem de alerta (1)
                 3.	Se email preenchido é inválido, sistema exibe mensagem de alerta (1)
         2.	Usuário clica em Salvar
             1.	Se campos descritos estiver em branco, sistema exibe mensagem de alerta ()
                 1.	Nome / Razão Social
                 2.	Tipo cliente
             2.	Se não, sistema edita informações do cliente. 
         3.	Sistema retorna para a lista de clientes
     2.	Usuário clica em excluir
         
         1. Sistema exibe mensagem de alerta (3)
         2. Se usuário confirmar mensagem
            
             1. Sistema exclui informações do cliente do sistema
         3.  Se usuário cancelar

             1. Sistema retorna para a lista de clientes
4.	Fim do fluxo alternativo

**Postcondition 1:**
- Cliente cadastrado na aplicação

**Postcondition 2:**
- Cliente cadastrado com as informações editadas

**Postcondition 3:**
- Informações do cliente excluídas

**Messages:**
1.	mensagem de alerta (1) - Formato inválido
2.	mensagem de alerta (2) - Campos obrigatórios devem ser preenchidos
3.	mensagem de alerta (3) - Deseja remover o cliente "nomeCliente"?

## SCENARIOS

```gherkin
@register_customer
Feature: register customer
    In order to I need save customer information
    As a role permissioned I want register customers

Background: seller user access manage customer page
    Given I logged in the application
    When I click "Gestão de CLientes" sidebar menu item
    Then System show "/manage-customer" page

    Scenario: Register customer with invalid e-mail
        Given I click "Inserir" button
        And System show "/form-customer" modal
        When I enter invalid <email> in the e-mail field
        Then I see a warning <message>
        And I can not register customer

     Scenario: Register customer with invalid cell number
        Given I click "Inserir" button
        And System show "/form-customer" modal
        When I enter invalid <cell-number> in the Cell phone field
        Then I see a warning <message>
        And I can not register customer     

    Scenario: Register customer with no name
        Given I click "Inserir" button
        And System show "/form-customer" modal
        When I click "Salvar" button
        And name field is empty
        Then I see a warning <message>
        And I can not register customer
        
    Scenario: Valid register customer
        Given I click "Inserir" button
        And System show "/form-customer" modal
        And I select "tipo cliente"
        And I fill the <name> field
        When I click "Salvar" button
        Then I see a success <message>
        And system register customer

@update_customer

Feature: update a customer
    In order to I need update a customer information
    As a role permissioned I want to update customers registers

Background: user access manage customer page
    Given I logged in the application
    When I click "Gestão de CLientes" sidebar menu item
    Then System show "/manage-customer" page

    Scenario: update customer with invalid e-mail
        Given I select a user at list
        And I click "editar" button
        And System show "/form-customer" modal
        When I enter invalid <email> in the e-mail field
        Then I see a warning <message>
        And I can not save customer

     Scenario: update customer with invalid cell number
        Given I select a user at list
        And I click "editar" button
        And System show "/form-customer" modal
        When I enter invalid <cell-number> in the Cell phone field
        Then I see a warning <message>
        And I can not save customer     

    Scenario: update customer with no name
        Given I select a user at list
        And I click "editar" button
        And System show "/form-customer" modal
        When I click "Salvar" button
        And name field is empty
        Then I see a warning <message>
        And I can not save customer
        
    Scenario: Valid update customer
        Given I select a user at list
        And I click "editar" button
        And System show "/form-customer" modal
        And I select "tipo cliente"
        And I fill the <name> field
        When I click "Salvar" button
        Then I see a success <message>
        And system register customer

@delete_customer

Feature: delete a customer
    In order to I need to delete a customer information
    As a role permissioned I want to delete the customers registers

Background: user access manage customer page
    Given I logged in the application
    When I click "Gestão de CLientes" sidebar menu item
    Then System show "/manage-customer" page

    Scenario: delete customer
        Given I select a user at list
        And I click "Excluir" button
        And System show a warning <message>
        When I click "confirm" the <message>
        Then I system delete customer information
        And I do not see at the customer list

```