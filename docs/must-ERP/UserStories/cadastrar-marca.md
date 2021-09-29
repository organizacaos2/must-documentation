# Cadastrar marca

## VALUE PROPOSITION

 **Como um** usuário cadastrado com permissão no backoffice

 **Eu Quero** registrar e gerenciar as marcas vendidas na loja

 **Então** preciso de um cadastro de nomes de marca

## ACCEPTANCE CRITERIA

- Para cadastrar uma marca é necessário o preenchimento do campo: Nome
- CRUD cadastro de marca
- A tela precisa exibir um campo para busca por nome da marca
- As roles admin e backoffice podem acessar o cadastro de marcas para criar, editar e excluir
- Sistema permite importar um arquivo (a definir) para cadastrar em batch. (verificar possibilidade) 
- Sistema permite exportar a lista de marcas (a definir) 


## SCREEN DRAFTS

![1](/img/must-ERP/cadastrar-marca.png)

![2](/img/must-ERP/cadastrar-marca2.png)

## USER STORY CARD

**Name:** Cadastrar marca

**Author:** [Daniela Anjos](https://github.com/danielaanjos) 

**Date:** Dec 03, 2020

**Actors:**  
- usuário cadastrado

**Precondition:** 

**Main Flow:**
1.	Usuário clica em Cadastros no menu lateral
2.	Sistema exibe a tela com a lista de marcas cadastradas.
3.	Usuário clica no botão Inserir
    1.	Sistema exibe modal com campo para cadastrar marca
4.	Usuário preenche campo Nome
5.	Usuário clica em Salvar
    1.	Se campo Nome estiver em branco, sistema exibe mensagem de alerta (2)
    2.	Se não, sistema registra marca.
6.	Sistema retorna para a lista de marcas
7.	Nome de marca cadastrada é exibida na lista de marcas
8.	Fim do caso de uso

**Alternative flow:**
1.	Usuário clica em Cadastros no menu lateral
2.	Sistema exibe a tela com a lista de marcas cadastradas.
3.	Usuário seleciona uma marca da lista
    1.	Usuário clica no botão de editar
        1.	Sistema exibe modal com campo do cadastro de marca
            1.	Usuário altera o campo Nome
            2.	Usuário clica em Salvar
                1.	Se campo Nome estiver em branco, sistema exibe mensagem de alerta (2)
                2.	Se valor campo Nome já cadastrado, sistema exibe mensagem de alerta (3)
                3.	Se não, sistema salva a edição do cadastro de marca
            3.	Sistema retorna para a lista de marcas
    2.	Usuário clica no botão excluir
        1.	Sistema exibe mensagem de alerta (4)
        2.	Se usuário confirmar mensagem
            1.	Sistema altera status da marca para inativo
        3.	Se usuário cancelar
            1.	Sistema retorna para a lista de marcas
4.	Fim do fluxo alternativo

**Postcondition 1:**
- Marca cadastrada na aplicação

**Postcondition 2:**
- Marca cadastrada com as informações editadas

**Postcondition 3:**
- Informações de marca excluídas

**Messages:**
1.	mensagem de alerta (1) - Formato inválido
2.	mensagem de alerta (2) - Campos obrigatórios devem ser preenchidos
3.	mensagem de alerta (3) – Marca já cadastrada.
4.	mensagem de alerta (4) - Deseja remover a marca “nomeMarca”?

## SCENARIOS

```gherkin
@register_brand

Feature: register brand
    In order to I need to manage my brand in thr system
    As a role permissioned I want register my brands

Background: user access register brand page
    Given I click "Cadastros" menu item
    And I select "Marcas" item
    And System show "/list-brand" page

     Scenario: Register brand with no name
        When I click "Inserir" button
        And name field is empty in the "/form-brand" modal
        And I click "Salvar" button
        Then I see a warning <message>
        And I can not register the brand 

     Scenario: Register brand already registered
        When I click "Inserir" button
        And name field is <value-name> already registered
        And I click "Salvar" button
        Then I see a warning <message>
        And I can not register the brand 

        
    Scenario: Valid register brand
        When I click "Inserir" button
        And I fill name field with <value-name>
        And I click "Salvar" button
        When I click "Salvar" button
        Then I see a success <message>
        And system register the brand 

@delete_brand

Feature: delete a registerd brand
    In order to I need to delete a brand information
    As a role permissioned I want to delete the brands registers

Background: user access register brand page
    Given I click "Cadastros" menu item
    And I select "Marcas" item
    And System show "/list-brand" page

    Scenario: delete brand
        When I select a brand at list
        And I click "Excluir" button
        And System show a warning <message>
        And I click "confirm" the <message>
        Then system update status brand to <inative>

```