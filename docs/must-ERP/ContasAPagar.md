# Contas a pagar - Financeiro

## VALUE PROPOSITION

> **Como um** usuário com permissão no financeiro

> **Eu quero** usuário com permissão no financeiro

> **Então** preciso de um controle de contas a pagar

## ACCEPTANCE CRITERIA

- Adicionar um pagamento de forma manual
    - Loja* (futuramente esse campo é identificado no login do usuário)
    - Descrição do pagamento*
    - Selecionar a Categoria Financeira (Aluguel; Compra de material; …)*
    - Entidade (quem vai receber o pagamento)
    - Ocorrência: Única, Mensalmente, Anualmente, Trimestralmente, Semestralmente (default = única)
    - Quantidade de parcelas
    - Vencimento*
    - Valor total
    - Conta Bancaria*
    - Status: Em aberto, Confirmado, Atrasado, Inativa (default = Em aberto)
    - upload de documento

- A lista de contas a pagar sempre é exibida no período atual (primeiro dia do mês ao ultimo dia do mês vigente)

- O usuário pode selecionar o período a ser exibido da lista de pagamento

- O usuário pode filtar por loja

- Exportar a lista exibida no formato PDF e Excel

- O usuário pode alterar o status do pagamento para controle financeiro
    - Sistema armazena usuário, data e hora da alteração para auditoria

- Usuário pode editar uma conta já cadastrada.

- Usuário pode excluir uma conta já cadastrada (altera o status para inativa)

- Cada compra de fornecedor cadastrada no sistema entra para o financeiro como um pagamento (não para essa versão)

## SCREEN DRAFTS

![1](/img/must-ERP/contas-a-pagar1.png)

![2](/img/must-ERP/contas-a-pagar2.png)

## USER STORY CARD

**Name:** Contas a pagar - Financeiro

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Jan 22, 2021

**Actors:**  

- usuário do financeiro

**Main Flow:**

1. O usuário acessa o item ‘Financeiro' no menu lateral e seleciona 'Pagamentos’
2. Sistema exibe lista de pagamentos do estabelecimento no período atual
    1. Se usuário filtar loja, sistema exibe pagamentos da loja filtrada
    2. Se usuário filtar periodo, sistema exibe o período filtrado
3. Adicionar pagamento manual
    1. Usuário clica em 'Adicionar pagamento'
    2. Sistema exibe formulário para preenchimento
       1. Usuário preenche campos obrigatórios: Loja, Descrição, Categoria financeira, Valor, Conta Bancária, Forma de pagamento
       2. Clica em salvar
    3. Sistema retorna para lista de pagamentos cadastrados
4. Exportar extrato contas a pagar
    1. Usuário clica em ‘Ações' e seleciona ‘Exportar PDF’ ou 'Exportar Excel’
    2. Sistema faz download da lista de recebimento com o filtro vigente
5. End use case

**Alternative Flow:**

1. Editar pagamento
2. Excluir pagamento

**Postcondition:**

- Pagamento cadastrado

**Messages:**



## SCENARIOS

```gherkin
@CRUD_bills-to-pay

Feature: register a payment
    In order to I need to manage my payments
    As a financial role I want register my payments in the system

Background: visit bills-to-pay page
    Given I visit "/financeiro-pagamentos" page
    And I click 'adicionar pagamento' button

    Scenario: Register payment without mandatory fields
        When I click 'Salvar' button
        And field <mandatory-field> is <empty>
        Then I see a warning message: 'Campo <field> é obrigatório.'
        And I can not register payment
    Examples:
        | mandatory-field       |
        | Loja                  | 
        | Descrição             | 
        | Categoria Financeira  |
        | Valor                 |
        | Conta Bancária        |
        | Vencimento            |
        | Forma de pagamento    |

Scenario: delete registered payment
    Given I visit "/financeiro-pagamentos" page
    And I click 'Delete' button payment
    When I see a modal page with a warning message: 'Deseja excluir o pagamento <descricao-pagamento> ?'
    Then I click 'Sim' button
    And I system turn status to 'Inativo'

@filter-payment-list   
   Background: visit bills-to-pay page
    Given I visit "/financeiro-pagamentos" page

      Scenario: filter by store
          And my <user> has more than one registered store
          When I click field 'Loja'
          Then I can choose a <selected-store> that I am registered <my-stores>
          And I see 'list-payments' filtered by <selected-store>
      
      Scenario: filter by period time
          When I click field 'Período tempo'
          And I choose a <initial-date>
          And I choose a <final-date>
          Then I see 'list-payments' filtered by <period-time-selected>
  
  @payment-list 
    Scenario: visit payment page
        Given I visit "/financeiro-pagamentos" page
        When system get <current-month>
        Then I see 'list-payments' filtered by <current-month>  
```

**Categoria financeira:**

Sugestão - criar um cadastro de categoria financeira no futuro

| Movimentação | Categoria | Subcategoria |
| ------------ | --------- | ------------ |
| Pagamento | Despesas administrativas e comerciais | Imagem 1 |
| Pagamento | Despesas de produtos vendidos | Imagem 2 |
| Pagamento | Despesas financeiras | ``` Despesas bancárias ``` |
| Pagamento | Investimentos | ``` Aquisição de equipamentos ``` |
| Pagamento | Outras despesas | ``` Ajuste de caixa ``` |

**Imagem 1:**

![3](/img/must-ERP/contas-a-pagar3.png)

**Imagem 2:**

![4](/img/must-ERP/contas-a-pagar4.png)