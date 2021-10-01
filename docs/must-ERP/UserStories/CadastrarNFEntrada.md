# Cadastrar NF de Entrada

## VALUE PROPOSITION

> **quando** eu receber uma nota fiscal de um fornecedor / prestador

> **Eu quero** ter a possibilidade de cadastrar essa nota fiscal no ERP

> **Para** que eu possa ter um controle fiscal das notas de entrada

## ACCEPTANCE CRITERIA

- A princípio será um CRUD para possibilitar o usuário registrar as Notas Fiscais de entrada no sitema ERP.

- A exclusão será tratada como uma alteração de status. Excluir uma NF cadastrada altera para o status cancelada.

- Notas cadastradas com status “Confirmada “ criam movimentação financeira em contas a pagar
    - Movimentação financeira precisa ser registrada conforme as informações cadastradas na nota:
        - Formas de pagamento = dinheiro, boleto, cheque, cartao de credito, cartao de debito, pix 
        - Numero de parcelas e **data / valor** de cada parcela

- Listar notas cadastradas para a loja do usuário logado  e filtrar por período de tempo.

- Em ajuste de estoque na opção entrada, o usuário pode informar o numero da Nota Fiscal do produto.
    - Apenas Notas Fiscais com status “Confirmada “ podem ser vinculadas ao produto
    - Validar quantidade informada no cadastro da Nota Fiscal com quantidade informada na entrada do estoque. Quantidade de entrada no estoque não pode ser maior que a existente na Nota Fiscal.

- Campos obrigatórios:

**Número, Série, Natureza da operação*** (seleionar lista), **CFOP da nota, CFOP de Entrada, Cliente/Fornecedor, CPF/CNPJ**, Quantidade Produto, **Valor total, Transporte*** (verificar necessidade), **Estado (UF), Data do registro, Status, Loja**

Outros:  **Inscrição Estadual** (se houver), **Forma de Pagamento**

1- Para os campo CFOP e Natureza da Operação: o usuário seleciona o CFOP em uma lista e a natureza da operação é preenchido.

2- Para os campos Nome / Razão Social e CPF / CNPJ: o usuário precisa ter a opção de selecionar “Não informado“. Validar o CPF e o CNPJ quando informado. Desabilitar os campos ao selecionar não informado.

3 - Para o campo Forma de Pagamento: pode existir mais de uma forma de pagamento para cada nota fiscal. Precisa aceitar uma lista de forma de pagamento e valor.

4 - **Sugestão de Status:**

- Em aberto - todas as notas fiscais que são cadastradas e ainda não foi recebida

- Confirmada - notas recebidas

- Cancelada - o usuário altera o status para cancelado caso necessário

:::info
**Sobre CFOP**
 **Entrada**
 - 1.000: Entrada ou aquisição de serviços do estado
 - 2.000: Entrada ou aquisição de serviços de outros estados
 - 3.000: Entrada ou aquisição de serviços do exterior.

 **Saída**
 - 5.000: Saídas ou prestações de serviços para o estado
 - 6.000: Saídas ou prestações de serviços para outros estados
 - 7.000: Saídas ou prestações de serviços para o exterior.
:::

**Controle de Acesso**

- Apenas o usuário na role Admin pode excluir da base uma nota fiscal cadastrada

- Perfil e Permissão para cadastar nota fiscal **entrada:**

Logistica / Financeiro / Admin / Gerente / Supervisor / Fiscal - adicionar NF, editar NF, visualizar NF e alterar status NF

Admin: adicionar NF, editar NF, visualizar NF, alterar status NF e excluir NF

## SCREEN DRAFTS

![1](/img/must-ERP/NF-entrada.png)

:::note

**USER STORY CARD**

**Name:** Cadastrar NF de Entrada

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Mar 29, 2021

**Actors:**  

- usuários com permissão em nota fiscal (adicionar, editar, visualizar e excluir)

**Main Flow:**

1. O usuário acessa 'Nota Fiscal' no menu lateral
    1. Clica no botão 'NF Entrada'
        1. Sistema lista notas do tipo entrada cadastradas para a loja do usuário logado
    2. Usuário clica no botão adicionar
        1. Sistema exibe campos para cadastrar nova nota fiscal
            1. Se campos obrigatórios preenchidos, botão salvar é habilitado
            2. Usuário clica em salvar, sistema registra nota fiscal
            3. Exibe mensagem de sucesso
    3. Usuário clica no botão editar
        1. Sistema exibe campos da nota fiscal selecionada
            1. Se campos obrigatórios preenchidos, botão salvar é habilitado
            2. Usuário clica em salvar, sistema atualiza registro da nota fiscal
            3. Exibe mensagem de sucesso
    4. Usuário clica em alteração de status
        1. Se confirmar a alteração para status = “Concluida“
            1. Sistema cria movimentação financeira de contas a pagar conforme informação de forma de pagamento cadastrado
        2. Se confirmar a alteração para status = “Cancelado“
            1. Sistema verifica se possui movimentação financeira
                1. Se possui, altera status da movimentação financeira para cancelado.
    5. Usuário clica em excluir
        1. Se usuário está na role admin
            1. Sistema solicita confirmação para a ação
                1. Se confirmado
                    1. Sistema exclui registro do sistema
                    2. Exibe mensagem de sucesso
        2. Se não,
            1. Sistema altera status da Nota Fiscal para cancelado
                1. Verifica se possui movimentação financeira
                    1. Se possui, altera status da movimentação financeira para cancelado
            2. Exibe mensagem de sucesso
2. End use case

**Postcondition:**

- Nota Fiscal de entrada registrada no ERP com status “Em Aberto“

- Nota Fiscal de entrada com status alterado para “Concluida“ e movimentação financeira de contas a pagar registrada

- Nota Fiscal de entrada com status alterado para “Cancelado“ e movimentação financeira de contas a pagar cancelada.

**Messages:**

:::

## SCENARIOS

```gherkin
@register_A/PInvoice(accounts-payable)
Feature: Add A/P Invoice
    In order to I need manage my invoices 
    As a user with a role permissioned I want register A/P Invoice in the ERP

Background: user access A/P Invoice page
    Given I logged in the application
    And I click "Nota Fiscal" sidebar menu item
    And I click "NF Entrada" button
    And System show "/nota-entrada" page

    Scenario: Validation cpfcnpj field
        When I click "Adicionar" button
        And System show "/adicionar-nota-entrada" page
        And I enter invalid <cpfcnpj> in the "CPF/CNPJ" field
        Then I see a warning <message>
        And I can not register output invoice

    
    Scenario: Register A/P Invoice with empty mandatory fields
        When I click "Adicionar" button
        And System show "/adicionar-nota-entrada" page
        And field <label> is <value>
        And I click "Salvar" button
        Then I see a desabled button
        And I can not register A/P Invoice
            |Label              |value                      |
            |Nome/Razão Social  |empty                      |
            |CPF / CNPJ         |empty                      |
            |Nº                 |empty                      |
            |Série              |empty                      |
            |CFOP               |empty                      |
            |Natureza da Op.    |empty                      |             
            |Quantidade         |empty                      |
            |Valor Total        |empty                      |
            |Forma de Pagamento |empty                      |                       
            |Transporte         |empty                      |
            |Estado (UF)        |empty                      |
            |Status             |Em Aberto                  |


    Scenario: Register A/P Invoice
        When I click "Adicionar" button
        And System show "/adicionar-nota-entrada" page
        And field <label> is <value>
        And I click "Salvar" button
        Then I see a success <message>
        And I system register A/P Invoice
            |Label              |value                      |
            |Nome/Razão Social  |Nome/Razão Social          |
            |CPF / CNPJ         |030.693.450/0019-0         |
            |Inscrição Estadual |Não possui                 |
            |Nº                 |1205                       |
            |Série              |2                          |
            |CFOP               |1102                       |
            |Natureza da Op.    |Entrada                    |            
            |Quantidade         |100                        |
            |Valor Total        |200,00                     |
            |Forma de Pagamento |empty                      |                       
            |Transporte         |Sem frete                  |
            |Estado (UF)        |SP                         |
            |Status             |Confirmada                 |

    Scenario: Disabled field Inscrição Estadual with value "Não possui "
        When I click "Adicionar" button
        And System show "/adicionar-nota-entrada" page
        And I click "Não possui" button
        Then I see field "Inscrição Estadual" disabled
         
    Scenario: Add payment method
        When I click "Adicionar" button in the "Forma de Pagamento" field
        And I see a modal with "Forma de Pagamento" to select
        And I select <forma-pagamento>
        And I fill <value> in the value field
        Then I see able button 'Salvar' 
        And I can save "Forma de Pagamento" 

                
@update_A/PInvoice
Feature: Update an A/P Invoice
    In order to I need update my A/P Invoices registers
    As a user with a role permissioned I want update A/P Invoices

Background: user access A/P Invoice page
    Given I logged in the application
    And I click "Nota Fiscal" sidebar menu item
    And I click "NF Entrada" button
    And System show "/nota-entrada" page

    Scenario: Validation cpfcnpj field
        When I click "Editar" button
        And System show "/editar-nota-entrada" page
        And I enter invalid <cpfcnpj> in the "CPF/CNPJ" field
        Then I see a warning <message>
        And I can not update A/P Invoice

    Scenario: Update A/P Invoice with empty mandatory fields
        When I click "Editar" button
        And System show "/editar-nota-entrada" page
        And field <label> is <value>
        And I click "Salvar" button
        Then I see a desabled button
        And I can not update A/P Invoice
            |Label              |value                      |
            |Nome/Razão Social  |empty                      |
            |CPF / CNPJ         |empty                      |
            |Nº                 |empty                      |
            |Série              |empty                      |
            |CFOP               |empty                      |
            |Natureza da Op.    |empty                      |             
            |Quantidade         |empty                      |
            |Valor Total        |empty                      |
            |Forma de Pagamento |empty                      |                       
            |Transporte         |empty                      |
            |Estado (UF)        |empty                      |
            |Status             |Em Aberto                  |

    Scenario: Update A/P Invoice
        When I click "Editar" button
        And System show "/editar-nota-entrada" page
        And field <label> is <value>
        And I click "Salvar" button
        Then I see a success <message>
        And I system update A/P Invoice
            |Label              |value                      |
            |Nome/Razão Social  |Nome/Razão Social          |
            |CPF / CNPJ         |030.693.450/0019-0         |
            |Inscrição Estadual |Não possui                 |
            |Nº                 |1205                       |
            |Série              |2                          |
            |CFOP               |1102                       |
            |Natureza da Op.    |Entrada                    |            
            |Quantidade         |100                        |
            |Valor Total        |200,00                     |
            |Forma de Pagamento |empty                      |                       
            |Transporte         |Sem frete                  |
            |Estado (UF)        |SP                         |
            |Status             |Confirmada                 |


@update_status_A/PInvoice
Feature: Update Status an A/P Invoice
    In order to I need change status of a registered A/P Invoice
    As a user with a role permissioned I want update status.

Background: user access A/P Invoice page
    Given I logged in the application
    And I click "Nota Fiscal" sidebar menu item
    And I click "NF Entrada" button
    And System show "/nota-entrada" page

    Scenario: Update manually status A/P Invoice
        When I click "Status" button
        And System show status modal
        And I select status value <status>
        And I select "Confirmar" button
        Then I see a success <message>
        And I system update status of A/P Invoice


Background: user updated status A/P Invoice to "Concluida"
    Given I select status value <concluida>
    And I select "Confirmar" button
    And I see a success <message>

    Scenario: Status A/P Invoice "Concluida"
        When A/P Invoice status value <concluida>
        Then system create a financial transaction of "Contas a Pagar" with "Valor Total" field value <valor-total>
        And system allows to link the invoice of "Ajuste de Estoque - Entrada"
        And system create a financial transaction of "Contas a Pagar" with selected "Forma de Pagamento"

@delete_A/PInvoice
Feature: Delete an A/P Invoice
    In order to I need delete my A/P Invoice registers
    As a user with a role permissioned I want to delete the A/P Invoice

Background: user access consumer output invoice page
    Given I logged in the application
    And I click "Nota Fiscal" sidebar menu item
    And System show "/nota-saida" page

    Scenario: Delete output invoice with others roles
        When I click "Excluir" button
        And my role is <another-role>
        And  I see a information modal
        Then I click "Ok" button
        And I can not delete the registered output invoice   

    Scenario: Delete output invoice with admin role
        When I click "Excluir" button
        And my role is "Admin"
        And I see a confirmation modal
        And I click "Confirmar" button
        Then I see a success <message>
        And I system delete the registered output invoice        
```