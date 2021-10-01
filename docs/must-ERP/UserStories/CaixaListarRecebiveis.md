# Caixa listar recebíveis

## VALUE PROPOSITION

 **Como um** operador de caixa

 **Eu quero** visualizar todos os lançamentos do caixa e selecionar um deles

 **Então** efetuar o recebimento e registro das operações

## ACCEPTANCE CRITERIA

- A lista de recebíveis é habilitada após a abertura do caixa.

- Todos os lançamentos de venda são adicionados na lista de recebíveis.

- Ao selecionar um item da lista é aberta a tela de detalhe (tela de lançamento de venda).

- É possível adicionar ou remover produtos da venda.

- É possível cancelar a venda. Com a venda cancelada o lançamento de venda é cancelado.

- Cada recebível efetivado é lançado em 'contas a receber' para o financeiro

- Só é possível finalizar se a forma de pagamento estiver selecionada

- É emitido um comprovante da venda:

![1](/img/must-ERP/listar-recebiveis1.png)

## SCREEN DRAFTS

![2](/img/must-ERP/listar-recebiveis2.png)

:::note

**USER STORY CARD**

**Name:** Caixa listar recebíveis

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 21, 2020

**Actors:**  

- operador de caixa

**Main Flow:**

1. O usuário acessa o item 'Caixa' no menu lateral
2. Sistema exibe lista de recebíveis
    1. Se caixa estiver aberto
        1. Exibe lista recebíveis habilitada
    2. Se não, exibe lista recebiveis desabilitada
3. Editar recebível
    1. Usuário clica no botão de edição
    2. Sistema exibe o lançamento da venda
    3. Usuário altera o lançamento de produtos: Lançar produtos na venda 
4. Cancelar recebível
    1. Usuário clica no botão cancelar do item
    2. Sistema exibe mensagem solicitanto confirmação do cancelamento
    3. Se usuário confirmar
        1. Sistema registra um recebimento cancelado
        2. Sistema altera status do recebível para cancelado
    4. Se não confirmar
        1. Sistema mantem estado atual
5. Efetivar recebível
    1. Usuário clica no botão 'Finalizar'
    2. Sistema exibe modal para informar Forma de pagamento obrigatório
        1. Informação do CPF do cliente é opcional
        2. Usuário clica em 'Concluir'
    3. Sistema emite comprovante de venda
    4. Sistema faz um lançamento em contas a receber para financeiro
6. End use case

**Postcondition:**

- Venda finalizada e comprovante emitido

- Lançamento em contas a receber financeiro

- Recebimento cancelado

**Messages:**

:::

## SCENARIOS

```gherkin
Feature: list receivables cash register
    In order to I need to make sales receipts
    As a cashier I want a list of the receivable-item

Scenario: select an item from the list without opening the cash register
    Given I visit the 'caixa' page
    When I click on a list-receivables item
    And I did not open cash register
    Then I see all the disabled items
    And an alert message is displayed

Scenario: select an item from the list with the cash register open
    Given I visit the 'caixa' page
    When I click on a list-receivables item
    And the cash register is open
    Then I see the 'venda' page of the receivable-item

Scenario: complete without selecting payment method
    Given the sale was completed
    And the modal payment is displayed
    When I click on the 'Concluir' button
    And I do not select the payment method
    Then I see an alert message

Scenario: cancel receipt
    Given I visit the 'caixa' page
    When I click on the 'cancel' button of list-receivables item
    And I click 'confirm' button
    Then I return the 'caixa' page
    And I see the receipt status changed to 'Cancelado' in the list of receivables        
```