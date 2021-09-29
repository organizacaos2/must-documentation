# Cadastrar usuário

## VALUE PROPOSITION

 **Como um** usuário cadastrado com permissão em gestão de usuários

 **Eu Quero** fazer o controle de acesso na aplicação

 **Então** preciso de um cadastro de usuários

## ACCEPTANCE CRITERIA

- Apenas o usuário que estiver na role admin ou supervisor pode cadastrar novos usuários

- O novo usuário cadastrado recebe uma notificação por e-mail

  - A notificação direciona para a aplicação para o registro da senha

- Cada usuário cadastrado precisa ser definido o nível de acesso na aplicação

- Campos obrigatórios para o cadastro: Nome e email

- CRUD cadastro de usuário


## SCREEN DRAFTS

![1](/img/must-ERP/cadastrar-usuario1.png)

![2](/img/must-ERP/cadastrar-usuario2.png)

## USER STORY CARD

**Name:** Cadastrar usuário

**Author:** [Daniela Anjos](https://github.com/danielaanjos) 

**Date:** Sep 29, 2020 

**Actors:**  
- usuário com permissão em gestão de usuário

- usuário admin

**Precondition:** Possuir permissão em gestão de usuário

**Main Flow:**

1. Usuário clica em Gestão de usuários no menu lateral
2. Sistema exibe a tela com a lista de usuários
3. Usuário clica no botão Inserir
    1. Sistema exibe modal com campos para cadastrar usuário
    2. Usuário preenche os campos
        1. Se email preenchido é inválido, sistema exibe mensagem de alerta (1)
    3. Usuário clica em Salvar
        1. Se campo nome ou e-mail estiver em branco, sistema exibe mensagem de alerta (2)
        2. Se não, sistema registra usuário. 
        3. Por padrão o cadastro cria um usuário “ativo“ e nível de acesso “básico“
        4. Sistema envia e-mail para o usuáro cadastrado
4. Usuário cadastrado é exibido na lista de usuários
5. Fim do caso de uso

**Alternative flow:**

1. Usuário clica em Gestão de usuários no menu lateral
2. Sistema exibe a tela com a lista de usuários
    1. Usuário clica no botão Editar
        1. Sistema exibe modal com campos do formulário do usuário
        2. Usuário edita os campos
            1. Se email preenchido é inválido, sistema exibe mensagem de alerta (1)
        3. Usuário clica em Salvar
            1. Se campo nome ou e-mail estiver em branco, sistema exibe mensagem de alerta (2)
            2. Se não, sistema salva usuário. 
    2. Usuário clica em Excluir
        1. Sistema exibe menssagem de alerta (3)
        2. Se usuário confirmar menssagem
            1. Sistema exclui informações do usuário do sistema
        3. Se usuário cancelar
            1. Sistema retorna para a lista de usuário
3. Fim do fluxo alternativo


**Postcondition 1:**

- Usuário cadastrado na aplicação

**Postcondition 2:**

- Informações do usuário editadas no sistema
- Informações do usuário excluídas do sistema

**Messages:**
1. mensagem de alerta (1) - Formato inválido

2. mensagem de alerta (2) - Campos obrigatórios

3. mensagem de alerta (3) - Deseja remover o usuário "nomeUsuario"?

## SCENARIOS

```gherkin
@register_user

Feature: register user
    In order to I need more users
    As a role permissioned user I want register users

Background: Admin user access manage users page
    Given I logged in the application
    When I click "Gestão de Usuários" sidebar menu item
    Then System show "/gestao-usuario" page

    Scenario: Register user with invalid e-mail
        Given I click "Inserir" button
        And System show "/form-user" modal
        When I enter invalid <email> in the e-mail field
        Then I see a warning <message>
        And I can not register user

    Scenario: Register user with no name
        Given I click "Inserir" button
        And System show "/form-user" modal
        When I click "Salvar" button
        And name field is empty
        Then I see a warning <message>
        And I can not register user
        
    Scenario: Valid register user
        Given I click "Inserir" button
        And System show "/form-user" modal
        And I fill the <name> field
        And I fill <email> field
        When I click "Salvar" button
        Then I see a success <message>
        And system register user
        And system send e-mail to registered user

@update_user

Feature: Update a registered user
    In order to I need update info of registered user
    As a role permissioned I want update infos users

Background: user access manage users page
    Given I logged in the application
    When I click "Gestão de Usuários" sidebar menu item
    Then System show "/gestao-usuario" page

    Scenario: Update user with invalid e-mail
        Given I select a user at list
        And I click "editar" button
        And System show "/form-user" modal
        When I enter invalid <email> in the e-mail field
        Then I see a warning <message>
        And I can not register user

    Scenario: Update user with no name
        Given I select a user at list
        And I click "editar" button
        And System show "/form-user" modal
        When I click "Salvar" button
        And name field is empty
        Then I see a warning <message>
        And I can not register user
        
    Scenario: Valid Update user
        Given I select a user at list
        And I click "editar" button
        And System show "/form-user" modal
        And I fill the <name> field
        And I fill <email> field
        When I click "Salvar" button
        Then I see a success <message>
        And system register user
        And system send e-mail to registered user

@delete_user

Feature: delete a user
    In order to I need to delete a user information
    As a role permissioned I want to delete the user registers

Background: user access manage user page
    Given I logged in the application
    When I click "Gestão de Usuários" sidebar menu item
    Then System show "/gestao-usuario" page

    Scenario: delete user
        Given I select a user at list
        And I click "Excluir" button
        And System show a warning <message>
        When I click "confirm" the <message>
        Then system delete user information
        And I do not see at the user at list
```