# Loja - criar token para campanhas

## VALUE PROPOSITION

 **Como um** administrador do sistema

 **Eu quero** criar um token para a loja

 **Então** implementar um plano de fidelidade para a loja

## ACCEPTANCE CRITERIA

- Usuário precisa criar uma wallet

- Armazenamento criptografado de informações de carteira geradas

- O usuário não recebe chave privada e mneumônica

- Usuário precisa definir os campos:
    - Nome: 3-25 caracteres alfanuméricos, aceita hifen, espaço
    - Symbol: 3-4 caracteres. Precisa ser exclusivo
    - Decimals: selecionar de 0 a 18
    - Total Suply

- O símbolo do token deve ser único no ambiente

- Tipo de token criado - padrão já existente do PoP - ERC-20 mintable and burnable, Ownable and Pausable

- Com o token criado o usuário administrador pode criar campanha

|   |   |
| - | - |
| Token Name | O nome do token, é importante para fornecer uma identidade. 3-25 caracteres. São aceitos caracteres alfanuméricos, espaço e hífen. |
| Token Symbol | O símbolo representa a marca, geralmente tem de 3 a 4 letras e precisa ser exclusivo. |
| Decimal places | A divisibilidade determinar o menor valor possível do token. Uma divisibilidade de 0 significa que o valor mais baixo do token é 1. Uma divisibilidade de 2, por outro lado, significa que seu valor mais baixo será 0,01. O número máximo de casas decimais permitido é 18. |
| Total supply  | Número de tokens que existirá no ecossistema criado. Este valor pode ser alterado de acordo com as necessidades do mercado, e pode ser aumentado ou diminuído (a partir das funções Mint e Burn respectivamente) |
| | |

## SCREEN DRAFTS

![1](/img/must-ERP/criar-token1.png)

![2](/img/must-ERP/criar-token2.png)

:::note

**USER STORY CARD**

**Name:** Criar token para campanhas

**Author:** 

- [Daniela Franciscatto](https://github.com/danielaanjos) 

**Date:** Dec 22, 2020

**Actors:**  

- usuário admin

**Main Flow:**

1. Usuário clica em Token no menu lateral
2. Usuário clica no botão “Criar token“
3. Sistema exibe formulário para criar token
4. Usuário preenche campos:
    1. Nome do token, é obrigatório
    2. Símbolo do token, é obrigatório
    3. Decimal, é obrigatório
    4. Total Supply, é obrigatório
5. Clicar no botão 'Criar'
    1. Sistema vefica se campos para criar token estão vazios
        1. Se vazio, exibe mensagem de alerta (1)
        2. Se símbolo token já existente, exibe mensagem de alerta (2)
    2. Sistema verifica se loja possui wallet associada a loja
        1. Se não possui, sistema cria uma wallet
6. Sistema faz o deploy do token
7. End use case

**Postcondition:**

- Token da loja criado para campanha

**Messages:**

- mensagem de alerta (1) - Campo < nome-campo > precisa estar preenchido.

- exibe mensagem de alerta (2) - Símbolo token já existe.

:::

## SCENARIOS

```gherkin
Background: visit token page
    Given I visit "/token" page
    And I click <create> button

    Scenario: create token with empty fields
        When I leave the 'Nome' field <empty>
        And I leave the 'Símbolo' field <empty>
        And I leave the 'Decimal' field <empty>
        And I leave the 'Total Supply' field <empty>
        Then I should see a <message>
        And I can not proceed

    Scenario: create token with exists token symbol
        When I fill 'Símbolo' field with <simbolo-value>
        And the <simbolo-value> already exists
        Then I should see a <message>
        And I can not proceed

    Scenario: create token with less than 3 characters in the Simbolo token field
        When I fill 'Símbolo' field with <simbolo-value>
        And the <simbolo-value> less than 3 characters
        Then I should see a <message>
        And I can not proceed

    Scenario: create token with less than 3 or more than 25 characters in the Nome token field
        When I fill 'Nome' field with <nome-value>
        And the <nome-value> less than 3 characters or more than 25 characters
        Then I should see a <message>
        And I can not proceed    
```