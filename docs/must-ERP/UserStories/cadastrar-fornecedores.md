# Cadastrar Fornecedores

## VALUE PROPOSITION

 **Como um** usuário cadastrado com permissão no backoffice

 **Eu Quero** armazenar e gerenciar os fornecedores no sistema

 **Então** preciso de uma área para cadastrar os fornecedores

## ACCEPTANCE CRITERIA

- Campos obrigatórios: Nome e telefone
- CRUD cadastro de fornecedor
- A tela precisa exibir um campo para busca por nome do fornecedor
- As roles admin e backoffice podem acessar o cadastro de fornecedor para criar, editar e excluir
- Sistema permite importar um arquivo (a definir) para cadastrar em batch. (verificar possibilidade) 
- Sistema permite exportar a lista de fornecedor (a definir) 

## SCREEN DRAFTS

![1](/img/must-ERP/cadastrar-fornecedor.png)

![2](/img/must-ERP/cadastrar-fornecedor2.png)

## USER STORY CARD

**Name:** Cadastrar Fornecedores

**Author:** [Daniela Anjos](https://github.com/danielaanjos) 

**Date:** Nov 30, 2020

**Actors:**  
- usuário com role admin ou backoffice

**Precondition:** 
- Estar na role admin ou backoffice

**Main Flow:**
1.	Usuário clica em Cadastros no menu lateral e seleciona Fornecedores
2.	Sistema exibe a tela com a lista de fornecedores cadastrados.
3.	Usuário clica no botão Inserir
    1.	Sistema exibe modal com campos para cadastrar fornecedor
    2.	Usuário preenche os campos
        1.	Se CNPJ preenchido é inválido, sistema exibe mensagem de alerta (1)
        2.	Se celular preenchido é inválido, sistema exibe mensagem de alerta (1)
        3.	Se email preenchido é inválido, sistema exibe mensagem de alerta (1)
    3.	Usuário clica em Salvar
        1.	Se campos Nome / Razão Social estiver em branco, sistema exibe mensagem de alerta (2)
        2.	Se não, sistema registra fornecedor. 
4.	Sistema retorna para a lista de fornecedores
5.	Fornecedor cadastrado é exibido na lista de fornecedores
6.	Fim do caso de uso

**Alternative flow:**
1.	Usuário clica em Cadastros no menu lateral e seleciona Fornecedores
2.	Sistema exibe a tela com a lista de fornecedores cadastrados.
3.	Usuário seleciona um fornecedor da lista
    1.	Usuário clica em editar
        1.	Sistema exibe modal com campos para cadastrar fornecedor
            1.	Usuário preenche os campos
                1.	Se CNPJ preenchido é inválido, sistema exibe mensagem de alerta (1)
                2.	Se celular preenchido é inválido, sistema exibe mensagem de alerta (1)
                3.	Se email preenchido é inválido, sistema exibe mensagem de alerta (1)
            2.	Usuário clica em Salvar
                1.	Se campos Nome / Razão Social estiver em branco, sistema exibe mensagem de alerta (2)
                2.	Se não, sistema edita informações do fornecedor. 
            3.	Sistema retorna para a lista de fornecedores
    2.	Usuário clica em excluir
        1.	Sistema exibe mensagem de alerta (3)
        2.	Se usuário confirmar mensagem 
            1.	Sistema exclui informações do fornecedor do sistema
        3.	Se usuário cancelar
            1.	Sistema retorna para a lista de fornecedores
4.	Fim do fluxo alternativo

**Postcondition 1:**
- Fornecedor cadastrado na aplicação

**Postcondition 2:**
- Fornecedor cadastrado com as informações editadas

**Postcondition 3:**
- Informações do fornecedor excluídas

**Messages:**
1.	mensagem de alerta (1) - Formato inválido
2.	mensagem de alerta (2) - Campos obrigatórios devem ser preenchidos
3.	mensagem de alerta (3) - Deseja remover o fornecedor ”nomeFornecedor”?

## SCENARIOS

```gherkin
@register_supplier

Feature: Add supplier
    In order to I need manage my supplier 
    As a user with a role permissioned I want register suppliers

Background: user access register supplier page
    Given I logged in the application
    When I click "Cadastros" sidebar menu item
    Then System show "/fornecedores" page

    Scenario: Register supplier with invalid e-mail - validation email field
        Given I click "Inserir" button
        And System show "/form-supplier" modal
        When I enter invalid <email> in the e-mail field
        Then I see a warning <message>
        And I can not register supplier

    Scenario: Register supplier with invalid cpfcnpj - validation cpfcnpj field
        Given I click "Inserir" button
        And System show "/form-supplier" modal
        When I enter invalid <cpfcnpj> in the CPF/CNPJ field
        Then I see a warning <message>
        And I can not register supplier

    Scenario: Register supplier with no name - mandatory field
        Given I click "Inserir" button
        And System show "/form-supplier" modal
        When I click "Salvar" button
        And name field is empty
        Then I see a warning <message>
        And I can not register user

    Scenario: Register supplier with no phone - mandatory field
        Given I click "Inserir" button
        And System show "/form-supplier" modal
        When I click "Salvar" button
        And phone field is empty
        Then I see a warning <message>
        And I can not register user           
        
    Scenario: Valid register supplier
        Given I click "Inserir" button
        And System show "/form-supplier" modal
        And I fill the <name> field
        And I fill <telefone> field
        When I click "Salvar" button
        Then I see a success <message>
        And system register supplier
        And system return "/fornecedores" page



@update_supplier

Feature: Edit supplier
    In order to I need manage my supplier 
    As a user with a role permissioned I want update my registered suppliers

Background: user access register supplier page
    Given I logged in the application
    When I click "Cadastros" sidebar menu item
    Then System show "/fornecedores" page

    Scenario: update supplier with invalid e-mail - validation email field
        Given I select a supplier at list
        And I click "editar" button
        And System show "/form-supplier" modal
        When I enter invalid <email> in the e-mail field
        Then I see a warning <message>
        And I can not save supplier

    Scenario: update supplier with invalid cpfcnpj - validation cpfcnpj field
        Given I select a supplier at list
        And I click "editar" button
        And System show "/form-supplier" modal
        When I enter invalid <cpfcnpj> in the CPF/CNPJ field
        Then I see a warning <message>
        And I can not save supplier

    Scenario: update supplier with no name - mandatory field
        Given I select a supplier at list
        And I click "editar" button
        And System show "/form-supplier" modal
        When I click "Salvar" button
        And name field is empty
        Then I see a warning <message>
        And I can not save user

    Scenario: update supplier with no phone - mandatory field
        Given I select a supplier at list
        And I click "editar" button
        And System show "/form-supplier" modal
        When I click "Salvar" button
        And phone field is empty
        Then I see a warning <message>
        And I can not save user        
        
    Scenario: Valid editing supplier
        Given I select a supplier at list
        And I click "editar" button
        And System show "/form-supplier" modal
        And I fill the <name> field
        And I fill <phone> field
        When I click "Salvar" button
        Then I see a success <message>
        And system save supplier
        And system return "/fornecedores" page


@delete_supplier

Feature: delete a supplier
    In order to I need to delete a supplier information
    As a role permissioned I want to delete the supplieres registers

Background: user access register supplier page
    Given I logged in the application
    When I click "Cadastros" sidebar menu item
    Then System show "/fornecedores" page

    Scenario: delete supplier
        Given I select a supplier at list
        And I click "Excluir" button
        And System show a warning <message>
        When I click "confirm" the <message>
        Then system delete supplier information
        And I do not see the supplier at list

```