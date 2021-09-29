# Abertura do caixa

## VALUE PROPOSITION

 **Como um** operador de caixa

 **Eu quero** informar o valor inicial do meu caixa

 **Então** informar o valor inicial do meu caixa

## ACCEPTANCE CRITERIA

- A loja pode abrir mais de um caixa (não nesse momento)

- Um usuário com a permissão de operador de caixa só pode ter um caixa aberto (não nesse momento)

- O valor de abertura do caixa pode ser igual a zero.

- O valor de abertura do caixa não pode ser valor negativo.

- Se o usuário não preencher nenhum valor considerar igual a zero.

- O usuário do operador de caixa é registrado no schema do caixa.

- O valor informado na abertura do caixa é registrado como “Dinheiro - saldo inicial“ no schema do caixa.

- As operações realizadas no caixa são registradas para o fechamento do caixa.

## SCREEN DRAFTS

![1](/img/must-ERP/abertura-caixa.png)

## USER STORY CARD

**Name:** Abertura do caixa

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 22, 2020

**Actors:**  

- Permissão de operador de caixa

**Main Flow:**

1. O usuário acessa o item 'Caixa' no menu lateral
2. Sistema exibe tela lista de recebíveis
3. Se caixa  já estiver aberto para o usuário
    1. Lista de recebíveis habilitada
    2. Botão 'Fechar caixa' é exibido na tela
4. Se caixa estiver fechado:
    1. Abrir caixa
        1. Usuário digita o valor no campo ‘valor-abertura-caixa' e clica no botão 'Abrir Caixa’
            1. Sistema registra no 'Caixa' o valor como “Dinheiro - saldo inicial“
            2. Sistema registra no 'Caixa' o usuário que fez a abertura do caixa
        2. Sistema habilita lista de recebíveis
        3. Sistema exibe botão 'Fechar caixa'
5. End use case

**Postcondition:**

- Caixa aberto e criado para recebimento

**Messages:**



## SCENARIOS

```gherkin
Feature: open cash register
    In order to I have to inform the initial value of my cash
    As a cashier I want to open the cashier and keep the conference record

Scenario: Open cash register with zero or empty value
    Given I visit 'caixa' page
    When I type the value <value-open> in the 'valor-abertura-caixa' field
    Then the list of receivables is enabled
    And the cash register is created

Scenario: Open cash register with negative value
    Given I visit 'caixa' page
    When I type the value <value-open>> in the field 'valor-abertura-caixa'
    Then an alert message <message> is displayed

   | value-open |
   | empty      |
   | 100        |
   | 0          |
   | -20        |
```