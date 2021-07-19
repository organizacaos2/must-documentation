# Fechamento do caixa

## VALUE PROPOSITION

 **Como um** operador de caixa

 **Eu quero** emitir um relatório com as operações do caixa

 **Então** fazer o fechamento e a conferência do caixa

## ACCEPTANCE CRITERIA

- Exibir um resumo do caixa informando separadamente as entradas em: dinheiro, cheque, cartão de débito, cartão de crédito e qualquer outro meio de pagamento definido.

- Campo para informar o saldo em caixa no fechamento

- Registra o usuário que está fechando o caixa

- Todas as movimentações do tipo venda entram no financeiro como contas a receber

## SCREEN DRAFTS

![1](/img/must-ERP/fechamento-caixa1.png)

![1](/img/must-ERP/fechamento-caixa2.png)

## USER STORY CARD

**Name:** Fechamento do caixa

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 23, 2020

**Actors:**  

- Permissão de operador de caixa

**Main Flow:**

1. O usuário acessa o item 'Caixa' no menu lateral
2. Sistema exibe tela lista de recebíveis
3. Se caixa  já estiver fechado para o usuário
    1. Lista de recebíveis desabilitada
    2. Botão 'Abrir caixa' é exibido na tela
4. Se caixa estiver aberto:
    1. Fechar caixa
        1. Usuário clica no botão 'Fechar Caixa’
            1. Sistema exibe resumo de movimentação do caixa
        2. Usuário digita saldo total do seu caixa
            1. verificar saldo menor
        3. Usuário clica no botão 'Finalizar'
    2. Se caixa possui valor de Saldo inicial
        1. Sistema cria um movimento de Contas a Pagar no financeiro
5. End use case

**Postcondition:**

Caixa encerrado para conferências

**Messages:**



## SCENARIOS

```gherkin
Feature: close cash register
    In order to I have to finish my cash
    As a cashier I want to close the cashier and do the conference
    
Scenario: Close cash register with negative value
    Given I visit 'caixa' page
    And I click 'Fechar caixa' button
    And system displayed 'caixa-resumo' page
    And I fill 'saldo do caixa' field with negative <value-close>
    When I click 'Finalizar' button
    Then an alert message <message> is displayed

Scenario: Close cash register
    Given I visit 'caixa' page
    And I click 'Fechar caixa' button
    And system displayed 'caixa-resumo' page
    And I fill 'saldo do caixa' field with <value-close>
    When I click 'Finalizar' button
    And I choose 'conirmar' button at modal confirmation
    Then I see a success message <message>
    And system return 'caixa' page with closed status

   | value-close| message                               |
   | -20        | The value cannot be a negative number |
   | empty      | Success                               |
   | 100        | Success                               |
   | 0          | Success                               |
```