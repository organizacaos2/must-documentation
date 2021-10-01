# Confirmar venda de produto

## VALUE PROPOSITION

 **Como um** vendedor registrado no sistema

 **Eu quero** registrar a minha venda de produtos cadastrados

 **Então** preciso de uma forma para fazer o registro do meio de pagamento, emitir um comprovante da venda realizada e informar o CPF do cliente caso necessário.

## ACCEPTANCE CRITERIA

- Campo para o usuário buscar o CPF cadastrado
    - Não é obrigatório informar o CFF
    - Não é obrigatório cadastrar um CPF

- Listar meios de pagamento para selecionar

- Exibir valor do total da venda

- Opção para emissão de um protocolo de venda após a confirmação

- Opção para desistência da venda

- Produtos de uma venda confirmada precisa ser subtraídos do estoque

## SCREEN DRAFTS

![1](/img/must-ERP/confirmar-venda1.png)

![2](/img/must-ERP/confirmar-venda2.png)

![4](/img/must-ERP/confirmar-venda4.png)

## BUSINESS PROCESS

![3](/img/must-ERP/confirmar-venda3.png)

:::note

**USER STORY CARD**

**Name:** Confirmar Venda

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Oct 29, 2020

**Actors:**  

- usuário registrado

**Precondition:**

- usuário ter a permissão para venda

- usuário ter selecionado “Efetivar venda“

**Main Flow:**

1. O usuário informa o < CPF > do cliente
    1. Se < CPF > cadastrado, sistema informa usuário
    2. Se < CPF > não cadastrado, sistema dá a opção de cadastrar (não para essa sprint)
        1. Se usuário selecionar “Cadastrar“, abre modal de informações do cliente (não para essa sprint)
        2. Se não selelecionar, sistema armazena < CPF > para emissão de pedido de venda
2. Usuário seleciona meio de pagamento
    1. Sistema exibe lista de meios de pagamento
3. Usuário clica em “Confirmar venda“
    1. Se meio de pagamento preenchido, sistema dá a opção de emissão do pedido de venda e vai para o passo 4
    2. Se não, sistema exibe mensagem de alerta (1) e retorna para o passo 2
4. Emissão do pedido de venda
    1. Se usuário selecionar “Sim“, 
        1. Sistema subtrai produtos do estoque
        2. Sistema inicia download do arquivo
        3. Carrega tela “Lançamento de venda“  para nova venda
    2. Se usuário selecionar “Não“,
        1. Sistema subtrai produtos do estoque
        2. Carrega tela “Lançamento de venda“  para nova venda
5. Sistema adiciona um recebimento do tipo venda para o caixa
6. Fim do caso de uso

**Alternative Flow:**

1. Fechar tela de informação de pagamento

**Postcondition:**

- Venda registrada e produto retirado do estoque

- Recebimento criado para o caixa

**Messages:**
	
- mensagem de alerta (1) - Selecione o meio de pagamento!

:::

## SCENARIOS

```gherkin
@sales-confirmation

Background: register a sale
    Given I have a <release-product> list
    And I click "Efetivar venda" button

Scenario: confirm sale without a selected payment option and registered customer cpf
    When I visit "confirmation-sale" modal
    And I see the <total-sales-value>
    And I do not search a <cpf> customer
    And I do not select a <payment-option>
    And I click "Confirmar venda" button
    Then I see a info <message>

Scenario: confirm sale with a selected payment option and without registered customer cpf
    When I visit "confirmation-sale" modal
    And I see the <total-sales-value>
    And I do not search a <cpf> customer
    And I select a <payment-option>
    And I click "Confirmar venda" button
    Then I see a "print-protocol" modal option
    And system subtracts products from stock
    And system register the sale
    And system create receipt to the cashier

Scenario: confirm sale with a selected payment option and registered customer cpf
    When I visit "confirmation-sale" modal
    And I see the <total-sales-value>
    And I search a registered <cpf> customer
    And I select a <payment-option>
    And I click "Confirmar venda" button
    Then I see a "print-protocol" modal option
    And system subtracts products from stock
    And system register the sale
    And system create receipt to the cashier

Scenario: close confirmation sale modal
    When I visit "confirmation-sale" modal
    And I see the <total-sales-value>
    And I click "Fechar" icon
    Then I see the "/sales-release" page with the current <release-product> list  

@search-customer

Scenario: search a registered customer
    When I start type CPF field with a registered <cpf>
    Then I see a filtered list with the registered customers
    And system complete the field with the registered customer

Scenario: search a unregistered customer
    When I start type CPF field with a unregistered <cpf>
    Then I see a filtered list without the <cpf>
    And system give me the option to register new customer


@print-protocol

Background: Confirmed sale
    Given I click "Confirmar venda" button
    And I visit "print-protocol" modal option

Scenario: Print sale protocol
    When I click "Sim" button
    Then I see a download protocol file
    And the clean sale launch page for the next sale
       
Scenario: Do not print sale protocol
    When I click "Não" button
    Then I see the clean sale launch page for the next sale        

Scenario: Close print sale protocol
    When I click "Fechar" icon
    Then I see the "/sales-release" page with the current <release-product> list  
```