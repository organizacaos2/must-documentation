# Histórico movimentação token - campanha

## VALUE PROPOSITION

 **Como um** administrador do sistema 

 **Eu quero** gerenciar os pontos da campanha 

 **Então** preciso de uma lista das movimentações do token

## ACCEPTANCE CRITERIA

- Filtar a lista por: token symbol, loja, período de tempo e campanha

- O total de mint ou burn só é exibido ao filtar um token symbol

- Exportar lista no formato PDF e Excel

## SCREEN DRAFTS

![1](/img/must-ERP/historico-movimentacao.png)

:::note

**USER STORY CARD**

**Name:** Listar movimentação token campanha

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 29, 2020

**Actors:**  

- usuário admin

**Main Flow:**

1. Usuário clica em Token no menu lateral 
2. Sistema exibe lista de movimentação mint e burn de tokens
    1. Usuário pode filtar lista por
        1. Token Symbol
            1. Usuário seleciona o filtro 'Token' e digita o Token Symbol
            2. Clica no botão de busca
            3. Sistema exibe 'lista-token' filtrada por Token Symbol
                1. Sistema exibe total de mint e burn
        2. Loja
            1. Usuário seleciona o filtro 'Loja' e digita o nome da Loja
            2. Clica no botão de busca
            3. Sistema exibe 'lista-token' filtrada por Loja
        3. Campanha
            1. Usuário seleciona o filtro 'Campanha' e digita o nome da campanha
            2. Clica no botão de busca
            3. Sistema exibe 'lista-token' filtrada por Campanha
        4. Período de tempo
            1. Usuário clica no campo de período de tempo
                1. Seleciona data inicial
                2. Seleciona data final
            2. Sistema exibe 'lista-token' filtrada pelo período de tempo escolhido
3. End use case

**Alternative Flow:**

1. Exportar lista token
    1. Usuário clica no botão 'Ações'
        1. Se selecinar 'Exportar PDF', sistema inicia dowonload da lista de token com o filtro vigente no formato PDF
        2. Se selecinar 'Exportar Excel', sistema inicia dowonload da lista de token com o filtro vigente no formato XLSX

**Postcondition:**

- Lista de tokens exibida para conferência

**Messages:**

:::

## SCENARIOS

```gherkin
@filter-token

   Background: visit token page
    Given I visit "/token" page

        Scenario: filter by store
            When I select 'Loja' filter at search field
            And I type <store-name> in the search field
            And I click search button
            Then I see 'list-token' filtered by <selected-store>

        Scenario: filter by token symbol
            When I select 'Token' filter at search field
            And I type <token-symbol> in the search field
            And I click search button
            Then I see 'list-token' filtered by <selected-token>
            And system show <total-mint> of <selected-token>
            And system show <total-burn> of <selected-token>

        Scenario: filter by campaing
            When I select 'Campanha' filter at search field
            And I type <campaing-name> in the search field
            And I click search button
            Then I see 'list-token' filtered by <selected-campaing>

        Scenario: filter by period time
            When I click field 'Período tempo'
            And I choose a <initial-date>
            And I choose a <final-date>
            Then I see 'list-payments' filtered by <period-time-selected>

@export-list-token

   Background: visit token page
        Given I visit "/token" page
    
    Scenario: export list token PDF
            When I click 'Ações' button
            And I type select 'Exportar PDF'
            Then sytem get the 'list-token' with a <current-filter>
            And I see a download PDF file

    Scenario: export list token XLSX
            When I click 'Ações' button
            And I type select 'Exportar Excel'
            Then sytem get the 'list-token' with a <current-filter>
            And I see a download XLSX file
```