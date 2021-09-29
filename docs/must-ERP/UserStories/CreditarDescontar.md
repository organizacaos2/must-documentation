# Creditar ou Descontar pontos de fidelidade

## VALUE PROPOSITION

 **Como um** usuário com permissão de lançamento de venda

 **Eu quero** creditar ou descontar pontos de fidelidade do cliente

 **Então** preciso de inserir informações do cliente no momento da venda

## ACCEPTANCE CRITERIA

- Pontos creditados para o cliente é feito o mint to na wallet informada pelo cliente

- Pontos descontados do cliente é feito o burn from na wallet informada pelo cliente

- O usuário com permissão de lançamento de venda precisa informar a campanha utilizada para o cliente receber os pontos

- O usuário com permissão de lançamento de venda precisa informar o address da wallet do cliente para creditar ou descontar os pontos

- Nesse primeiro momento o desconto terá a relação: 1 token = 1 real

- O usuário com permissão de lançamento de venda deve informar a quantidade de token (pontos) a serem descontados do cliente.

- O desconto de pontos não pode ser igual a zero ou número negativo

- O cliente precisa possuir a quantidade de pontos em sua wallet

## SCREEN DRAFTS

No lançamento da venda é possível definir as informações que o cliente vai utilizar na campanha.

![1](/img/must-ERP/creditar-descontar1.png)

A lista de recebimentos do caixa exibe como detalhe da venda a tela de lançamento de venda. Nela é possível adicionar ou retirar produtos; editar as opções da campanha.

![2](/img/must-ERP/creditar-descontar2.png)

## USER STORY CARD

**Name:** Creditar ou Descontar pontos de fidelidade

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 16, 2020

**Actors:**  

- usuário com permissão de lançamento de venda

**Main Flow:**

1. Definindo parâmetros para utilizar campanha: Usuário está na tela de “lancamento-venda“ 
    1. Na seção de “Campanha“:
        1. Seleciona a campanha a ser utilizada
        2. Para creditar pontos para o cliente
            1. Preenche com o address < address > do cliente no campo “Receber pontos“
            2. Sistema valida se é um address válido
        3. Para descontar pontos de fidelidade
            1. Preenche com o address < address > do cliente o campo “Descontar pontos“
            2. Sistema valida se é um address válido
            3. Sistema exibe o balance da wallet digitada
            4. Usuário preenche quantidade de pontos no campo “Quantidade de pontos a descontar“
        4. Sistema exibe resumo da venda
            1. Se existe “quantidade de pontos a descontar “, resumo da venda identifica como “Desconto de pontos“
                1. Sistema aplica para cada 1 token desconto de 1 real
                2. Exibe resumo com Valor da Compra, Desconto de pontos e Total a pagar
2. Creditar ou Descontar pontos de fidelidade:
    1. Usuário clica em “Efetivar venda“ em Lançamento de venda
        1. Segue main flow passo 5 Lançar produtos na venda 
    2. Usuário clica em “Finalizar“ no Caixa
        1. Se campo “Receber pontos“ possui < address >
            1. Sistema credita (mint to) os pontos (tokens) para o cliente
        2. Se  campo “Descontar pontos“ possui < address > e “Quantidade de pontos a descontar“ possui valor
            1. Sistema desconta (burn from) os pontos (tokens) do cliente
3. Fim do caso de uso

**Postcondition:**

- Cliente recebe pontos de fidelidade

- Cliente desconta seus pontos de fidelidade

**Messages:**



## SCENARIOS

```gherkin
@fidelity_plan
Feature: credit and discount fidelity points
    In order to I credit or discount customer points 
    As a user with sales permission I want do this when I launching the sale

Background: launching the sale
    Given I visit "/vendas" page
    And I add products to sale
    And customer informs his <address> 

Scenario: fill in fidelity credidt field without choosing the campaign
    When I fill "Receber pontos de fidelidade " field with a <address>
    And campaign is not selected
    Then I see <warning-message> 

Scenario: invalid address at recieve points field
    When I fill "Receber pontos de fidelidade " field with a invalid <address>
    Then I see <warning-message>    

Scenario: empty address at recieve points field
    When I click "Efetivar venda" button
    And the campaign are selected
    And the field "Receber pontos de fidelidade" is empty
    Then I see <warning-message>

Scenario: quantity points field empty and discount address filled
    When fill the "Quantidade de pontos a descontar" field
    And the field "Desconto plano de fidelidade" is empty
    Then I see <warning-message>

Scenario: quantity points with negative number
    When fill the "Quantidade de pontos a descontar" field with negative <number>
    Then I see <warning-message>

Scenario: quantity points with zero number
    When fill the "Quantidade de pontos a descontar" field with number <zero>
    Then I see <warning-message>     

Scenario: invalid address at discount points field
    When I fill "Desconto plano de fidelidade" field with a invalid <address>
    Then I see <warning-message>    

Scenario: discount points without balance
    When I fill "Desconto plano de fidelidade" field with a <address>
    And the wallet has no <balance>
    Then I see <warning-message>

Scenario: with the balance less than the amount of points to discount
    When I fill "Desconto plano de fidelidade" field with a <address>
    And I fill "Quantidade de pontos a descontar" field with ponits <number>
    And the wallet has less <balance> than the <number> of points
    Then I see <warning-message>    
```