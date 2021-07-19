# Criar Campanha

<p><strong>VALUE PROPOSITION</strong></p>

> **Como um** administrador do sistema

> **Eu quero** criar campanhas para oferecer pontos de fidelidade

> **Então** preciso cadastrar campanhas no sistema

<p><strong>ACCEPTANCE CRITERIA</strong></p>

- Para criar campanha é necessário ter um token criado para a loja

- Os pontos da campanha são pagos em token

- A campanha pode ter a Entrada (O que o cliente precisa consumir):
    - Valor Venda - um valor em Reais que o cliente precisa consumir para ganhar os pontos
    - Produto - definir um produto que o cliente precisa consumir para ganhar os pontos

- A campanha precisa ter a informação de quantidade de pontos a serem pagos (prêmio cliente)
    - Os pontos não podem ser um numero negativo

- É preciso definir uma data de expiração para a campanha
    - A data expirada altera o status da campanha para inativo
    - Data não pode ser menor que data atual

## SCREEN DRAFTS

![1](/img/must-ERP/criar-campanha1.png)

![2](/img/must-ERP/criar-campanha2.png)

![3](/img/must-ERP/criar-campanha3.png)
  Entrada = Valor Venda

![4](/img/must-ERP/criar-campanha4.png)
  Entrada = Produto


## USER STORY CARD

**Name:** Criar Campanha

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 14, 2021

**Version PE-123:** Jan 26, 2021

**Actors:**  

- usuário admin

**Precondition:**

- Usuário estar na role administrador

**Main Flow:**

1. Usuário clica em Campanha no menu lateral
2. Sistema exibe lista de campanhas cadastradas
    1. Se loja não possui campanha cadastrada, exibe lista vazia
3. Usuario clica no botão “Nova Campanha“
4. Sistema verifica se loja possui token criado
    1. Se sim,
        1. Usuário seleciona 'Entrada', é obrigatório
            1. Produto
            2. Valor Venda
        2. Sistema exibe tela de cadastro de campanha
            1. Se Produto, sistema exibe lista de produtos do estoque da loja
                1. Usuário seleciona o produto, é obrigatório
            2. Se Valor Venda, sistema exibe campo 'Valor'
                1. Usuário preenche campo 'Valor', é obrigatório
            3. Preencher campo Nome campanha, é obrigatório
            4. Preencher campo Quantidade de pontos (mint to), é obrigatório
            5. Preencher campo Data Expiração, é obrigatório
                1. Se data menor que data atual, exibe mensagem de alerta (3)
            6. Status campanha é ativo por padrão
        3. Usuário clica em Salvar Campanha
            1. Sistema verifica preenchimento de campos obrigatórios
                1. Se campos preenchidos
                    1. Sistema persiste campanha na base de dados
                    2. Retorna para a tela de lista de campanhas cadastradas
                2. Se não, exibe mensagem de alerta (2)
    2. Se não, exibe mensagem de alerta (1)
5. Fim do caso de uso

**Alternative Flow:**

1. Editar Campanha
    1. Usuário clica em Campanha no menu lateral
    2. Sistema exibe lista de campanhas cadastradas
    3. Usuário seleciona uma campanha da lista e clica no ícone de Editar campanha
    4. Sistema exibe tela de Editar campanha
        1. Selecionar 'Entrada', é obrigatório
            1. Se Produto, sistema exibe lista de produtos do estoque da loja
                1. Usuário seleciona o produto, é obrigatório
            2. Se Valor Venda, sistema exibe campo 'Valor'
                1. Usuário preenche campo 'Valor', é obrigatório
        2. Campo Nome campanha, é obrigatório
        3. Campo Quantidade de pontos (mint to), é obrigatório
        4. Campo Data Expiração, é obrigatório
            1. Se data menor que data atual, exibe mensagem de alerta (3)
        5. Status campanha é ativo por padrão
    5. Usuário clica em Salvar Campanha
        1. Sistema verifica preenchimento de campos obrigatórios
            1. Se campos preenchidos
                1. Sistema persiste campanha na base de dados
                2. Retorna para a tela de lista de campanhas cadastradas
            2. Se não, exibe mensagem de alerta (2)
2. Excluir Campanha
    1. Usuário clica em Campanha no menu lateral
    2. Sistema exibe lista de campanhas cadastradas
    3. Usuário seleciona uma campanha da lista e clica no ícone de Excluir campanha
    4. Sistema exibe modal de confirmação
        1. Se usuário confirmar
            1. Sistema altera status da campanha para inativo
        2. Se não, retorna para a lista de campanhas cadastradas

**Postcondition:**

- Campanha ativa cadastrada

**Messages:**

- mensagem de alerta (1) - É necessário criar o seu token primeiro.

- mensagem de alerta (2) - Campos em destaque são obrigatórios.

- mensagem de alerta (3) - Data precisa ser maior que data atual.

## SCENARIOS

```gherkin
@list_campaigns
Feature: List campaigns
In order to access my registered campaigns
As an admin user, I want to list my campaigns

Scenario: access campaing page
    Given I click "Campanha" sidebar menu
    When I visit 'campanha' page
    Then I see 'lista-campanhas-registradas'
```

```gherkin
@create_campaigns
Feature: create campaigns
To have customer loyalty campaigns
As an admin user I want to create store campaigns

    Scenario: store without deployed token
        Given I visit "campanha" page
        When I click "Criar Campanha" button
        Then I should see the message "Você precisa de um token para criar campanhas"

    Background: access register campaing page
        Given I visit "campanha" page
        And I click "Nova campanha" button

        Scenario: register product campaing with empty fields
            When I select 'Entrada' equal 'Product'
            And I click 'Salvar' button
            And field <name-field> is <value-field>
            Then I should see the message "Preencha os campos obrigatórios"
            And system do not create campaing
                Examples:
                    | name-field         | value-field  |
                    | Nome               | empty        |
                    | Produto            | empty        |
                    | Quantidade pontos  | empty        |
                    | Data Expiração     | empty        |

        Scenario: register sale value campaing with empty fields
            When I select 'Entrada' equal 'Valor Venda' 
            And I click 'Salvar' button
            And field <name-field> is <value-field>
            Then I should see the message "Preencha os campos obrigatórios"
            And system do not create campaing
                Examples:
                    | name-field         | value-field  |
                    | Nome               | empty        |
                    | Valor Venda        | empty        |
                    | Quantidade pontos  | empty        |
                    | Data Expiração     | empty        |

        Scenario: register campaing with expiration date less than the current date 
            When I select 'Entrada' equal <entrada>
            And I fill the field <nome> 
            And I fill the field <valor-entrada>
            And I fill the field <quantidade-token>
            And I fill the field <data-expiracao>
            Then I should see the message "Data precisa ser maior que data atual."
            And system do not create campaing 
                Examples:
                    | entrada     | nome          | valor-entrada | quantidade-token |data-expiracao |
                    | Produto     | Campanha nome | Produto 123   | 10               |20/05/2020     |
                    | Valor Venda | Campanha nome | R$ 50,00      | 5                |20/05/2020     |

        Scenario: register campaing
            When I select 'Entrada' equal <entrada>
            And I fill the field <nome> 
            And I fill the field <valor-entrada>
            And I fill the field <quantidade-token>
            And I fill the field <data-expiracao>
            Then I should see the message "Campanha criada com sucesso"
            And system create campaing        
                Examples:
                    | entrada     | nome          | valor-entrada | quantidade-token |data-expiracao |
                    | Produto     | Campanha nome | Produto 123   | 10               |20/05/2021     |
                    | Valor Venda | Campanha nome | R$ 50,00      | 5                |20/05/2021     |
```