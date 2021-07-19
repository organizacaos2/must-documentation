# Cadastrar NF de Saída

## VALUE PROPOSITION

> **Quando** uma nota fiscal for emitida

> **Eu quero** ter a possibilidade de cadastrar essa nota fiscal no ERP

> **Para que eu** possa ter um controle fiscal

## ACCEPTANCE CRITERIA

- A princípio será um CRUD para possibilitar o usuário registrar as Notas Fiscais no sitema ERP.

- A exclusão será tratada como uma alteração de status. Excluir uma NF cadastrada altera para o status cancelada. 

- Listar notas fiscais cadastradas para a loja do usuário logado e filtrar por período de tempo.

- Incluir um atalho para cadastrar nota fiscal na página de venda.

Campos obrigatórios: 

**Número, Série, Natureza da operação*** (selecionar lista), **CFOP** (selecionar lista), **Quantidade, Valor total, Transporte*** (verificar necessidade), **Forma de Pagamento, Data do registro, Status, Nome/Razão Social, CPF/CNPJ**

1- Para os campo CFOP e Natureza da Operação: o usuário seleciona o CFOP em uma lista e a natureza da operação é preenchido.

2- Para os campos Nome / Razão Social e CPF / CNPJ: o usuário precisa ter a opção de selecionar “Não informado“. Validar o CPF e o CNPJ quando informado. Desabilitar os campos não selecionar não informado.

3- Para o campo Transporte: 

- Por conta do emitentete

- Por conta do destinatario (manter essa opção como Default)

- Por conta de terceiros

- Sem frete

4 - Para o campo Forma de Pagamento: pode existir mais de uma forma de pagamento para cada nota fiscal. Precisa aceitar uma lista de forma de pagamento e valor.

5 - **Sugestão de Status:**

- Em aberto - todas as notas fiscais que são cadastradas

- Confirmada - apoós o fechamento do caixa, todas que estão em aberto são alteradas para confirmada

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
- Apenas o usuário na role Admin pode excluir da base uma nota fiscal cadastrada. 

- Perfil e Permissão para cadastar nota fiscal **saída:**

Operador de Caixa/ Financeiro / Gerente / Supervisor / Fiscal - adicionar NF, editar NF, visualizar NF e alterar status NF

Admin: adicionar NF, editar NF, visualizar NF e alterar status NF, excluir NF

## SCREEN DRAFTS

![1](/img/must-ERP/NF-saida.png)

![2](/img/must-ERP/NF-saida2.png)

![3](/img/must-ERP/NF-saida3.png)

## USER STORY CARD

**Name:** Cadastrar NF de Saída

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Mar 23, 2021

**Actors:**  

- usuários com permissão em nota fiscal (adicionar, editar, visualizar e excluir)

**Main Flow:**

1. O usuário acessa 'Nota Fiscal' no menu lateral
    1. Clica no botão 'NF Saída'
        1. Sistema lista notas do tipo saída cadastradas para a loja do usuário logado
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
    2. Usuário clica no botão excluir
        1. Se usuário está na role admin
            1. Sistema exclui registro do sistema
            2. Exibe mensagem de sucesso
        2. Se não,  
            1. Sistema altera status para cancelado
            2. Exibe mensagem de sucesso
2. End use case

**Alternative Flow:**

1. Usuário está na tela de 'Caixa'
    1. Clica no botão 'Registrar Nota Fiscal'
        1. Sistema exibe campos para cadastrar nota fiscal de saída
            1. Se campos obrigatórios preenchidos, botão salvar é habilitado
            2. Usuário clica em salvar, sistema registra nota fiscal
            3. Exibe mensagem de sucesso

**Postcondition:**

- Nota Fiscal de saida registrada no ERP

**Messages:**



## SCENARIOS

```gherkin
@register_outputInvoiceConsumer(Modelo_65)
Feature: Add output invoice
    In order to I need manage my invoices 
    As a user with a role permissioned I want register consumer output invoice

Background: user access consumer output invoice page
    Given I logged in the application
    And I click "Nota Fiscal" sidebar menu item
    And System show "/nota-saida" page

    Scenario: Validation cpfcnpj field
        When I click "Adicionar" button
        And System show "/adicionar-nota-saida" page
        And I enter invalid <cpfcnpj> in the "CPF/CNPJ" field
        Then I see a warning <message>
        And I can not register output invoice

    
    Scenario: Register output invoice with empty mandatory fields
        When I click "Adicionar" button
        And System show "/adicionar-nota-saida" page
        And field <label> is <value>
        And I click "Salvar" button
        Then I see a desabled button
        And I can not register output invoice
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
            |Transporte         |Por conta do destinatario  |
            |Status             |Confirmada                 |

    Scenario: Register output invoice
        When I click "Adicionar" button
        And System show "/adicionar-nota-saida" page
        And field <label> is <value>
        And I click "Salvar" button
        Then I see a success <message>
        And I system register output invoice
            |Label              |value                      |
            |Nome/Razão Social  |Nome/Razão Social          |
            |CPF / CNPJ         |030.693.450/0019-0         |
            |Nº                 |1205                       |
            |Série              |2                          |
            |CFOP               |5102                       |
            |Natureza da Op.    |Venda                      |            
            |Quantidade         |100                        |
            |Valor Total        |200,00                     |
            |Forma de Pagamento |cartao credito; 200,00     |                       
            |Transporte         |Por conta do destinatario  |
            |Status             |Confirmada                 |

    Scenario: Disabled field cpf/cnpj or Nome/Razão Social with value "Não informado"
        When I click "Adicionar" button
        And System show "/adicionar-nota-saida" page
        And I click "Não Informado" button
        Then I see field "Nome/Razão Social" disabled
        And I see field "CPF/CNPJ" disabled
         

Background: user access add output invoice page
        Given I click "Adicionar" button
        And System show "/adicionar-nota-saida" page

    Scenario: Add payment method
        When I click "Adicionar" button in the "Forma de Pagamento" field
        And I see a modal with "Forma de Pagamento" to select
        And I select <forma-pagamento>
        And I fill <value> in the value field
        Then I see able button 'Salvar' 
        And I can save "Forma de Pagamento" 


@Cash-register-screen-shortcut
Feature: invoice shortcut
    In order to I need register my output invoices
    As a user with a cash register I want a shortcut on my screen

Background: user access cash register page
    Given I visit "Caixa" page
    And I click on an item in the receivables list

        Scenario: Receive the sale and register the nf
            When I visit "Venda" page
            And I click "Efetivar Venda" button
            And I see a modal ask "Cadastrar a Nota Fiscal?"
            And I select "Sim" button
            Then I see "/adicionar-nota-fiscal" page 
            And I can register my output invoice    
        
        
@update_outputInvoiceConsumer(Modelo_65)
Feature: Update an output invoice
    In order to I need update my invoices registers
    As a user with a role permissioned I want update consumer output invoice

Background: user access consumer output invoice page
    Given I logged in the application
    And I click "Nota Fiscal" sidebar menu item
    And System show "/nota-saida" page

    Scenario: Validation cpfcnpj field
        When I click "Editar" button
        And System show "/editar-nota-saida" page
        And I enter invalid <cpfcnpj> in the "CPF/CNPJ" field
        Then I see a warning <message>
        And I can not update output invoice

    
    Scenario: Update output invoice with empty mandatory fields
        When I click "Editar" button
        And System show "/editar-nota-saida" page
        And field <label> is <value>
        And I click "Salvar" button
        Then I see a desabled button
        And I can not update output invoice
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
            |Transporte         |Por conta do destinatario  |
            |Status             |Confirmada                 |

    Scenario: Update output invoice
        When I click "Editar" button
        And System show "/editar-nota-saida" page
        And field <label> is <value>
        And I click "Salvar" button
        Then I see a success <message>
        And I system update output invoice
            |Label              |value                      |
            |Nome/Razão Social  |Nome/Razão Social          |
            |CPF / CNPJ         |030.693.450/0019-0         |
            |Nº                 |1205                       |
            |Série              |2                          |
            |CFOP               |5102                       |
            |Natureza da Op.    |Venda                      |            
            |Quantidade         |100                        |
            |Valor Total        |200,00                     |
            |Forma de Pagamento |cartao credito; 200,00     |                       
            |Transporte         |Por conta do destinatario  |
            |Status             |Confirmada                 |

    Scenario: Disabled field cpf/cnpj or Nome/Razão Social with value "Não informado"
        When I click "Editar" button
        And System show "/editar-nota-saida" page
        And I click "Não Informado" button
        Then I see field "Nome/Razão Social" disabled
        And I see field "CPF/CNPJ" disabled


@update_status_outputInvoiceConsumer(Modelo_65)
Feature: Update Status an output invoice
    In order to I need chenge status of a registered invoice
    As a user with a role permissioned I want update status.

Background: user access consumer output invoice page
    Given I logged in the application
    And I click "Nota Fiscal" sidebar menu item
    And System show "/nota-saida" page

    Scenario: Update manually status output invoice
        When I click "Status" button
        And System show status modal
        And I select status value <status>
        Then I see a success <message>
        And I system update status of output invoice

Background: Close cash register with negative value
    Given I visit 'caixa' page
    And I click 'Fechar caixa' button

    Scenario: Update automatically status output invoice to "Confirmado"
        When I click 'Finalizar' button
        Then  system update all <em-aberto> status of output invoice to <confirmado> status
        And I see list "nota-fiscal-consumidor" with new status

@delete_outputInvoiceConsumer(Modelo_65)
Feature: Delete an output invoice
    In order to I need delete my invoices registers
    As a user with a role permissioned I want to delete the consumer output invoice

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