---
sidebar_position: 5
---
# APIs

## API Token HBT

> **Swagger**
>
> http://hbtrust-token.4cadia.com/swagger/#

### Informações API

| Título | Descrição |
| ------ | --------- |
| HBTrust.domain.token | Disponibiliza serviços para geração da carteira ethereum, consulta de ETH e gestão do token HBT. |

#### Token HBT

Os serviços de gestão do token HBT disponíveis são:

- gerenciamento das funções de Minter, Burner e Admin (adicionar, remover e consultar)

| Função | Descrição |
| ------ | --------- |
| Minter | Address/Pessoa responsável por gerar novos Tokens. |
| Burner | Address/Pessoa responsável por queimar os tokens . |
| Admin | Address/Pessoa responsável por manter as Roles - Adicionar ou Remover membros de todas as roles do Contrato. Admin será responsável também por pausar/despausar o Contrato. |

- Gerenciamento do Token HBT

|  |  |
| ------ | --------- |
| mintTo (address _to, uint256 _value) | Permite que o Minter gere novos tokens. Emite o evento mint para o address declarado. Aumenta o totalSupply. |
| burnFrom (address _from, uint256 _value) | Permite que o Burner “queime“ os tokens. Emite o evento burn para o address declarado. Diminui o totalSupply. |
| transfer (address _to, uint _value) | Função que permite que tokens sejam transferidos de um address declarado. |
| balanceOf (address_owner) | Permite que qualquer endereço visualize o saldo em Tokens. |

### Métodos API

#### Parametros de Entrada

Abaixo está a lista dos parâmetros esperados para que a API possa executar sua função principal. Essas informações de entrada serão fornecidas pela plataforma que consumirá essa API - portanto qualquer erro no envio dos parâmetros afetará diretamente no funcionamento da mesma.

**Content type:** ```application/json```

| Método | Parametros entrada | Obrigatório? | Função Token | Descrição |
| ------ | ------------------ | ------------ | ------------ | --------- |
| POST/mintTo | privateKey, _sender, address _to, _value | Sim | mintTo | Criação de Tokens |
| POST/burnFrom | privateKey, _sender, address _to, _value | Sim | burnFrom | Exclusão de Tokens | 
| POST/generateWallet | quantity (integer) | Sim | | Criação de Carteira |
| POST/transfer | privateKey, _sender, address _to, _value | Sim | transfer | Transferência de Tokens HBT entre carteiras |
| GET/balance | address_owner | Sim | balanceOf | Consultar saldo de Tokens HBT de uma carteira |
| GET/balanceEther | address_owner | Sim | | Retorno de saldo em ether da hotwallet |
| GET/verifyRole | address _account / role | Sim | isAdmin; isBurner; isMinter | Consultar função de um Adress dentro do smart contract do Token HBT . |
| POST/addRole | privateKey, _sender, _account, _role | Sim | addAdmin; addBurner; addMinter | Adicionar um address a uma função |
| POST/removeRole | privateKey, _sender, _account, _role | Sim | removeAdmin;removeBurner; removeMinter | Remover address de uma função | 

#### Parâmetros de Saída

Abaixo está a lista dos parâmetros retornados:

| Serviço | Parâmetro | Descrição |
| ------- | --------- | --------- |
| GenerateWallet | Address | Hash (public key) gerada para representar o endereço da carteira na blockchain. Exemplo: ```0xFE...9dC8Cb84E7d6Fac``` |
| GenerateWallet | Seed Phrase (Mnemonic) | “Frase” com 12 palavras aleatoriamente geradas para resgatar a Private Key e acessar carteira. |
| GenerateWallet | Private key | Chave privada para acessar carteira e assinar transações. |
| addRole / removeRole | hash | Informação da transação realizada. |
| verifyRole | true / false | Informa se o address possui a role de admin, minter ou burner |
| balanceEther | balance | Valor do saldo em ETH. |
| balance | balance | Valor do saldo em HBT Token. |
| mintTo | hash | Informação da transação realizada. |
| burnFrom | hash | Informação da transação realizada. |
| transfer | hash | Informação da transação realizada. |

#### Dicionário de Campos

| Variavel | Descrição | type | Exemplo |
| -------- | --------- | ---- | ------- |
| Address | Endereço de uma carteira | string address | 0x09c15427Fed859ed46AFFB996bCd62f3b9180137 | 
| quantity | Valor inteiro. Quantidade de carteiras que serão criadas. | int | 12 |
| privateKey | Chave privada de quem está assinando a transação msg.sender | string | A9AC29CBEB110215AE6D5AF5D8731A848160A3A7DABEF198B832A38D4B4385E2 |
| _sender | Endereço da carteira de quem está assinando a transação | string address | 0x09c15427Fed859ed46AFFB996bCd62f3b9180137 |
| _to | Endereço da carteira que irá receber os tokens | string address | 0x09c15427Fed859ed46AFFB996bCd62f3b9180137 | 
| _from | Endereço da carteira de será eliminado os tokens | string address | 0x09c15427Fed859ed46AFFB996bCd62f3b9180137 |
| _amount | Quantidade de tokens que seram enviados ou eliminados | uint256 | 200 |
| _account | Endereço da carteira que será adicionado ou removido da role | string address | 0x09c15427Fed859ed46AFFB996bCd62f3b9180137 |
| _role | Nome da role: admin, minter ou burner | string | admin / minter ou burner |

### Requests / Responses

#### GET / Version

Por meio deste método é possível verificar a versão desta API

O método recebe como retorno os seguintes parâmetros:

```
{
    "title": "HBTrust.Domain.Token",
    "version": "0.0.1"
}
```

#### GET / Balance

Por meio deste método é possível verificar o balanço de HBT Token de uma wallet.

Para executar este método é necessário informar no PATH o address da wallet, como por exemplo:

```
0xf9c744832a2EE4D6f2256DC7BBaAb5f38273De76
``` 

O método recebe como retorno os seguintes parâmetros:

```
{
    "success": true,
    "code": "100-1000",
    "message": "Success!",
    "balance": 7548
}
```

#### GET / Balance Ether

Por meio deste método é possível verificar o balanço de Ether de uma wallet.

Para executar este método é necessário informar no PATH o address da wallet, como por exemplo:

```
0xf9c744832a2EE4D6f2256DC7BBaAb5f38273De76
```

O método recebe como retorno os seguintes parâmetros:

```
{
    "success": true,
    "code": "100-1000",
    "message": "Success!",
    "balance": "18.6554607026"
}
```

#### GET / Verify Role

Por meio deste método é possível verificar os roles (admin, minter ou burner) de uma wallet.

Para executar este método é necessário informar no PATH o address da wallet que está sendo verificada, como por exemplo:

```
0xf9c744832a2EE4D6f2256DC7BBaAb5f38273De76
```

O método recebe como retorno os seguintes parâmetros:

```
{
    "success": true,
    "code": "100-7013",
    "message": "Endereço da carteira possui as funções Admin, Minter e Burner.",
    "admin": true,
    "minter": true,
    "burner": true
}
```

#### POST / Generate Wallet

Por meio deste método é possível criar Wallets.

Para executar este método é necessário informar os seguintes parâmetros no body da requisição, como por exemplo:

```
{
  "quantity": 1 // quantidade de wallets que serão criadas
}
```

O método recebe como retorno os seguintes parâmetros:

```
{
  "success": true,
  "result": [
    {
      "index": 1,
      "mnemonic": "month leave someone zebra clap explain account page tired put robot ancient",
      "address": "0xC0fDcfc1E468c6dB915D12379670a6914ED6e758",
      "privateKey": "9798fee0fca3f8d7a5cc36fb8ae822180170ed96164eb8acc8dad30bb60246ee"
    }
  ]
}
```

#### POST / Transfer

Por meio deste método é possível transferir HBT Tokens de uma wallet para outra.

Para executar este método é necessário informar os seguintes parâmetros no body da requisição, como por exemplo:

```
{
    "privateKey": "9798fee0fca3f8d7a5cc36fb8ae822180170ed96164eb8acc8dad30bb60246ee", // Private Key da Wallet que irá transferir
    "_sender": "0xf9c744832a2EE4D6f2256DC7BBaAb5f38273De76", // Address da Wallet que irá transferir
    "_to": "0x17cA6A08758F4A078B9c53ca25E6F6736dF34094", // Address da Wallet que irá receber
    "_value": 1000 // Quantidade de HBT Tokens
}
```

O método recebe como retorno os seguintes parâmetros:

```
{
    "success": true,
    "code": "100-1000",
    "message": "Sucess!",
    "hash": "0x06cb0c8189bebdd1c40e339bfeb928287f606e64ea2c0970000361b8fc8ddb66"
}
```

#### POST / Mint To

Por meio deste método é possível mintar, ou seja, criar HBT Tokens em uma wallet.

Para executar este método é necessário informar os seguintes parâmetros no body da requisição, como por exemplo:

```
{
    "privateKey": "9798fee0fca3f8d7a5cc36fb8ae822180170ed96164eb8acc8dad30bb60246ee", // Private Key do Minter
    "_sender": "0xf9c744832a2EE4D6f2256DC7BBaAb5f38273De76", // Address do Minter
    "_to": "0x17cA6A08758F4A078B9c53ca25E6F6736dF34094", // Address da Wallet que irá receber
    "_amount": 10000 // Quantidade de HBT Tokens
}
```

O método recebe como retorno os seguintes parâmetros:

```
{
    "success": true,
    "code": "100-1000",
    "message": "Sucess!",
    "hash": "0x5b8dfa628668f2ef59ad80aa73b39000cc57bc6fe3d60e6ac566b335781cb2d7"
}
```

#### POST / Burn From

Por meio deste método é possível queimar, ou seja, destruir HBT Tokens de uma wallet.

Para executar este método é necessário informar os seguintes parâmetros no body da requisição, como por exemplo:

```
{
    "privateKey": "9798fee0fca3f8d7a5cc36fb8ae822180170ed96164eb8acc8dad30bb60246ee", // Private Key do Burner
    "_sender": "0xf9c744832a2EE4D6f2256DC7BBaAb5f38273De76", // Address do Burner
    "_from": "0x17cA6A08758F4A078B9c53ca25E6F6736dF34094", // Address da Wallet que estão os HBT Tokens
    "_amount": 10000 // Quantidade de HBT Tokens
}
```

O método recebe como retorno os seguintes parâmetros:

```
{
    "success": true,
    "code": "100-1000",
    "message": "Sucess!",
    "hash": "0xde9b97536f43782fb465e65a8f2b50a603eeb02574c4ebc59f3d1aecaad66b0c"
}

```

#### POST / Add Role

Por meio deste método é possível adicionar um Role (Admin, Minter ou Burner) para uma wallet.

Para executar este método é necessário informar os seguintes parâmetros no body da requisição, como por exemplo:

```
{
    "privateKey": "9798fee0fca3f8d7a5cc36fb8ae822180170ed96164eb8acc8dad30bb60246ee", // Private Key do Admin
    "_sender": "0xf9c744832a2EE4D6f2256DC7BBaAb5f38273De76", // Address do Admin
    "_account": "0x17cA6A08758F4A078B9c53ca25E6F6736dF34094", // Address da Wallet receberá a autorização
    "_role": "admin" // role adicionado: admin, burner ou minter
}
```

O método recebe como retorno os seguintes parâmetros:

```
{
    "success": true,
    "code": "100-7015",
    "message": "Wallet address has been added to role admin.",
    "hash": "0x702614b298ba637eb35dd757e5d87f5f85af3dcffe40c17aaf9dfdcff61c1752"
}
```

#### POST / Remove Role

Por meio deste método é possível remover um Role (Admin, Minter ou Burner) de uma wallet.

Para executar este método é necessário informar os seguintes parâmetros no body da requisição, como por exemplo:

```
{
    "privateKey": "9798fee0fca3f8d7a5cc36fb8ae822180170ed96164eb8acc8dad30bb60246ee", // Private Key do Admin
    "_sender": "0xf9c744832a2EE4D6f2256DC7BBaAb5f38273De76", // Address do Admin
    "_account": "0x17cA6A08758F4A078B9c53ca25E6F6736dF34094", // Address da Wallet perderá a autorização
    "_role": "admin" // role removido: admin, burner ou minter
}
```

O método recebe como retorno os seguintes parâmetros:

```
{
    "success": true,
    "code": "100-7014",
    "message": "Wallet address has been removed from role admin.",
    "hash": "0xfdb7b7adacd47b69d3fd3be5910850181ec7e00c58892bc00fa4633ca4794e51"
}
```

### Implementação

Requisitos

- [NPM](https://www.npmjs.com/get-npm): ```>=6.13.4```

- [GIT](https://git-scm.com/downloads): ```>=2.21.1```

- [Node.js](https://nodejs.org/download/release/latest-v10.x/): ```>=10.0.0```

#### Clonar repositório

Para clonar este repositório do bitbucket você precisa da permissão de acesso e de uma chave SSH configurada.

> - Connect to preview 
 https://bitbucket.org/janusplatform/hbtrust.domain.token/src/master/ 

Com o acesso e chave você pode clonar o repositório a partir do terminal:

```
git clone git@bitbucket.org:janusplatform/hbtrust.domain.token.git
```

#### Instalar as dependências

No terminal acesse a pasta raiz do repositório que foi clonado execute o comando para instalar as dependências:

```
npm install
```

Todas as dependências necessárias para executar a API serão instaladas no seu diretório.

#### Criar e configurar o arquivo .env

Para poder executar a API é necessário criar na raiz do diretório o arquivo .env

Clone o arquivo .env.example com as seguintes especificações:

```
MNENOMIC = // Your metamask's recovery words
INFURA_API_KEY = // Your Infura API Key after its registration
NETWORK_ID = // 1-Mainnet 3-Ropsten 4-Rinkeby 42-Kovan 1001-Development
TOKEN = // PDBToken Address
```

Após criar e configurar o .env a seu diretório já está configurado para executar a API.

#### Executar o nodemoon no localhost

No terminal acesse a pasta raiz do repositório que foi clonado execute o comando para executar a API:

```
npm start
```

Após executar este comando o nodemoon será inicializado e a API já estará funcionando no endereço http://localhost:3000/.

#### Acessar a API e executar um método por meio do swagger

Com o nodemoon sendo executado você pode acessar http://localhost:3000/swagger e executar os métodos disponíveis para interagir com o HBT Token.

Na página você pode selecionar um método GET/POST/PUT e clicar no botão try.

Os métodos GET podem ser executados com a introdução dos parâmetros nos campos requisitados.

Já os métodos POST/PUT podem ser executados com a edição do body com os parâmetros necessários.

Após a edição clique em executar e o método será executado.

### Executar testes na Rede Rinkeby

Para executar testes da API na rede de testes do Ethereum Rinkeby você deve configurar o arquivo .env com os seguintes parâmetros:

```
MNENOMIC = ""
INFURA_API_KEY = "d7af4ca348a2460aadd341988fee82fd"
NETWORK_ID = "4"
TOKEN = "0xfB0E30F97c656b5bE9D92879FbCEC5A35195e346"
```

Para verificar as transações na rede de testes do Ethereum Rinkeby você pode acessar o link https://rinkeby.etherscan.io/address/0x5a093dd37b635f4ae8d9b3be65d3f4e7b3dd187c

## API Policy

### Informações API

| **Título** | HBTrust.domain.policy |
| **Descrição** | API responsável por administrar o smart contract de criação e registro de apólices (Policy Factory) na blockchain. Também realiza a consulta nas apólices e a alteração do status de cada apólice. |

> Swagger
>
> http://hbtrust-policy.4cadia.com/swagger/

### Parâmetros de Entrada

Abaixo está a lista dos parâmetros esperados para que a API possa executar sua função principal. Essas informações de entrada serão fornecidas pela plataforma que consumirá essa API - portanto qualquer erro no envio dos parâmetros afetará diretamente no funcionamento da mesma.

**Content type:** ```application/json```

| Método | Resumo | Descrição | Obrigatório? | Parâmetro Entrada |
| - | - | - | - | - |
| GET/admin | Consultar admin | Consulta se um address é administrador no smart contract de criação e registro de Apólices (Policy Factory) | Sim | ```"addressWallet":"string``` |
| GET/mutual | Consultar seguradora  | Consulta se um address é seguradora no smart contract de criação e registro de Apólices (Policy Factory) | Sim | ```"addressWallet":"string``` |
| PUT/pause | Pausa o smart contract | Envia uma ação de pause (ou unpause, depende do estado atual do contrato) | Sim | ```"privateKey":"string``` |
| PUT/Policy | Atualiza status da Apólice | Altera o valor do status da apólice na blockchain | Sim | ```"privateKey":"string" "addressPolicy":"string "status": "string" ``` | 
| POST/mutualPolicies | Lista Apólices da Seguradora  | Lista todas as Apólices da seguradora  registradas na Blockchain. | Sim | ```"privateKey":"string" "addressMutual":"string``` |
| POST/policy | Retorna dados da apólice | Retorna todas informações da Apólice registrada na Blockchain. | Sim | ```"privateKey":"string" "addressPolicy":"string``` |
| POST/admin | Adicionar admin | Adiciona um administrador no smart contract de criação e registro de Apólices (Policy Factory) | Sim | ```"privateKey":"string" "address":"string``` |
| DELETE/admin | Remover admin | Remove um administrador no smart contract de criação e registro de Apólices (Policy Factory) | Sim | ```"privateKey":"string" "address":"string``` |
| POST/mutual | Adicionar seguradora | Adiciona uma seguradora no smart contract de criação e registro de Apólices (Policy Factory) | Sim | ```"privateKey":"string" "address":"string``` |
| DELETE/mutual | Remover seguradora | Remove uma seguradora no smart contract de criação e registro de Apólices (Policy Factory) | Sim | ```"privateKey":"string" "address":"string``` |
| POST/generatePolicy | Gerar Apólice | Cria e registra a apólice na blockchain. | Sim | |
| GEt/pause | Verifica status | Consulta se Contrato está Pausado | | |

Relação das funções do smart contract chamadas pelos métodos da API HBTrust.domain.policy

| Método | Função | Descrição |
| - | - | - |
| POST/generatePolicy | generatePolicy | Cria e registra a apólice na blockchain. onlyMutual |
| POST/mutualPolicies | consultMutualPolicies | Função que retorna a lista de Apólices que uma determinada mutua possui. onlyMutual |
| POST/lifecycle | pause / unpause | Função responsável por pausar as ações que incluem ou alteram o smart contract. |
| PUT/policy | updateStatusPolicy | Altera o valor do status da apólice na blockchain. onlyMutual |
| POST/policy | consultPolicyCoverage, consultDriver, consultPolicyHolder, consultPolicyInformation, consultPolicyMutual, consultVehicle, consultVehicleDocuments | Retorna todas as informações da apólice registrada na blockchain. |
| POST/admin | addAdmin | Adiciona um administrador no smart contract de criação e registro de Apólices (Policy Factory) onlyAdmin |
| DELETE/admin | removeAdmin | Remove um administrador no smart contract de criação e registro de Apólices (Policy Factory) onlyAdmin |
| GET/admin | isAdmin | Consulta se um address é mutual no smart contract de criação e registro de Apólices (Policy Factory) onlyAdmin |
| POST/mutual | addMutual | Adiciona uma mutual no smart contract de criação e registro de Apólices (Policy Factory) onlyAdmin |
| DELETE/mutual | removeMutual | Remove uma mutual no smart contract de criação e registro de Apólices (Policy Factory) onlyAdmin | 
| GET/mutual | isMutual | Consulta se um address é uma mutual no smart contract de criação e registro de Apólices (Policy Factory) onlyAdmin |

#### Parâmetros de Saída

Abaixo está a lista dos parâmetros retornados:

| Método | Parâmetro Saida |
| - | - |
| POST/generatePolicy | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| | |
| PUT/Policy | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| | |
| POST/policy | |
| | |
| POST/mutualPolicies | ![Policies](/img/must-secure/Policies.png) |
| | |
| POST/admin | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| | |
| DELETE/admin | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 | 
| | |
| GET/admin | true / false |

#### Dicionário de Campos

| Categoria | Variavel | Descrição | Type | Exemplo |
| - | - | - | - | - |
| privateKey | | Chave privada de quem assina a transação (msg.sender) | string | 2BFB60E72FB1C275CEC44446194A1620F22555668647149148593614787C3F00 |
| | | | | |
| mutual | wallets | Numeros da carteiras de cada seguradora pertencente a apólice. | address[] | [0x7105d236BdA4Db17666807726D99B70b1da19tau, 0x7105d236BdA4Db17666807726D99B70b1da19qwe, 0x7105d236BdA4Db17666807726D99B70b1da19def] |
| | | | | |
| Coverage | | | | |
| | prizeAmount | Valor pago da cobertura | unit256 | 3400 | 
| | fipePercentage | Indice da tabela fipe | unit256 | 2% |
| | app | Acidentes Pessoais de Passageiros | string | App1 |
| | glasses | Cobertura de vidro | unit256 | 1 |
| | rcfMaterials | Responsabilidade Civil Facultativa danos Materiais | string | rcfM1 |
| | rcfBodily | Responsabilidade Civil Facultativa danos corporais | string | rcfB1 |
| | reserveCar | Se a cobertura paga possui carro reserva | unit256 | 2 |
| | franchise | Participação obrigatória do segurado em um sinistro | unit256 | 1 |
| | productCoverage | Produto segurado | string[] | [982001, 90201, 33221] |
| | | | | |
| policyInformation | | | | |
| | proposal | Identificação da Proposta que gerou a apólice | string | proposal1 |
| | apolice | Identificação da apólice (interno) | string | policy1 |
| | startValidity | Data de início da vigência | unit256 | 1249052401 |
| | endValidity | Data de fim da vigência | unit256 | 1249052401 |
| | apoliceStatus | Status da apólice | uint256 | 2 |
| | | | | |
| PolicyHolderData | | | | |
| | nameComplete | Nome do segurado | string | client |
| | dateOfBirth | Data nascimento segurado | unit256 | 1249052401 |
| | maritalStatus | Estado civil | unit256 | 1 |
| | pocket | | string | pocket1 |
| | cnpjCpf | CPF / CNPJ | string | cpf11111111111 |
| | gender | Gênero | unit256 | 2 | 
| | relationshipPolicyHolder | Grau de parentesco | unit256 | 1 |
| | | | | |
| VehicleDataModel | | | | | 
| | typeParam | Tipo do veículo | unit256 | 1 |
| | maker | Marca | unit256 | 234 |
| | model | Modelo | unit256 | 23451 |
| | numerSlides | | unit256 | 1 |
| | yearManufactur | Ano de fabricação | unit256 | 2019 |
| | yearModel | Modelo ano | unit256 | 2020 |
| | licensePlate | Placa | string | ENV4211 |
| | chassis | Chassis | string | 3819920039813B23 |
| | renavam | Renavan | string | 32441HGS |
| | fuel | Tipo decombustível | unit256 | 1 |
| | newVehicle | Se é veículo zeroKM | unit256 | 1 |
| | vehicleFinaced | Se é financiado | unit256 | 1 |
| | color | Cor | unit256 | 1 |
| | | | | |
| DriverDataModel | | | | |
| | nameComplete | Nome do motorista | string | 4CADIA Factory | 
| | dateOfBirth | Data de nascimento | unit256 | 1984-01-12 |
| | maritalStatus | Estado civil | unit256 | 1 |
| | pocket | | string | 6140020 |
| | cpfCnpj | CPF / CNPJ | string | 99999999999 |
| | gender | gênero | unit256 | 1 | 
| | profession | Profissão | unit256 | 2341 |
| | cnh | Carteira de Habilitação | string | 3221333211 |
| | dateFirstCnh | Data da primeira carteira de habilitação | unit256 | 2013-02-01 |
| | garage | Se o veículo fica em garagem | unit256 | 1 |
| | usesWork | Se é usado para trabalho | uint256 | 1 |
| | vehicleUse | Tipo de utilização do veículo | unit256 | 2 |

#### Retornos de requests

| Método | Status | Código | Message |
| - | - | - | - |
| POST / PUT / DELETE | | 100-1010 | "errors": [ { "message": "apoliceData.apolice is required" }, { "message": "conductorData.date_of_birth is required" } ] |
| POST / PUT / DELETE | | 100-1011 | Gas required < gas > or always failing transaction. |
| POST / PUT / DELETE | | 100-1014 | Invalid private key < privetKey > |
| POST / PUT / DELETE | | 100-3100 | Transaction Failed, address does not have permission. |
| POST / PUT | | 100-1020 | Policy address is invalid: < address >. |
| POST/policy | | 100-1031 | Transaction subscriber has to be Mutual |
| POST/policy | | 100-1032 | Don't have a policy with that address. |
| GET/mutualPolicy | | 100-1040 | Mutuals wallet address is invalid. |
| GET/mutualPolicy | | 100-1012 | Mutual has no policy. |
| POST/lifecycle | | 100-2110 | Transaction Failed, smart contract already < pause/unpause > |
| GET/admin | | 100-7002 | Wallet address is invalid. |
| POST/admin | | 100-1060 | Admin's wallet address is invalid. |
| POST / PUT / GET / DELETE | | 100-7000 | Internal Error. |

| Método | Status | Código | Message |
| - | - | - | - |
| POST/generatePolicy | | 100-7016 | Transaction sucess to register policy! |
| POST/mutualPolicies | | 100-1000 | Success! < response > |
| POST/lifecycle | | 100-1000 | Success! < response > |
| PUT/policy | | 100-3031 | Sucess transaction update status policy! |
| POST/policy | | 100-1000 | Success! < response > |
| POST/admin | | 100-2010 | Transaction sucessfull, admin added! | 
| POST/mutual | | 100-2011 | Transaction sucessfull, admin added! | 
| DELETE/admin | | 100-2020 | Transaction sucessfull, admin added! |
| DELETE/mutual | | 100-2021 | Transaction sucessfull, admin added! |
| GET/admin | | 100-2030 | Is Admin = true |
| GET/admin | | 100-2031 | Is Admin = false |
| GET/admin | | 100-2032 | Is Mutual = true |
| GET/admin | | 100-2033 | Is Mutual = false |

### Implementação

#### Instruções de uso

- Clonar o repositório

- Alinhar com última versão: Develop ou Master

- Instalar as dependências

- Configurar arquivo .env

- Executar a API em localhost

- Acessar e testar a API através do Browser utilizando o Swagger

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

#### Requisitos

- [NPM >=6.13.4](https://www.npmjs.com/get-npm)
- [GIT >=2.21.1](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NODE.JS >= 10.0.0](https://nodejs.org/en/)

#### Clonar o repositório

- git clone git@bitbucket.org:janusplatform/hbtrust.domain.claims.git

#### Alinhar com última versão: Develop ou Master

- git checkout develop

- git pull

#### Instalar as dependências

- cd hbtrust.domain.polucy

- npm instal

#### Configurar arquivo .env

> Para poder acessar os smartcontracts na Blockchain através da API é necessário criar na raiz do diretório o arquivo .env. Clone o arquivo .env.example com as seguintes especificações:

```
MNENOMIC = // Your metamask's recovery words
INFURA_API_KEY = // Your Infura API Key after its registration
NETWORK_ID = // 1-Mainnet 3-Ropsten 4-Rinkeby 42-Kovan 1001-Development
TOKEN = // PDBToken Address
```

#### Executar o nodemoon no localhost

No terminal acesse a pasta raiz do repositório que foi clonado execute o comando para executar a API:

```
npm start
```

#### Executar a API

-  Após executar este comando o nodemon será inicializado e a API já estará funcionando no endereço http://localhost:3000/swagger.

## API Insuranse Clain and Policy Report

### Informações API

| Título | Descrição |
| - | - |
| HBTrust.domain.claim | API responsável por administrar o smart contract de criação e registro de sinistros (Claim Factory) e o de laudos (Policy Report Factory) na blockchain. Também realiza as consultas de sinistro e laudos e a alteração do status de ambos. | 

> Swagger
>
> http://hbtrust-claim.4cadia.com/swagger/#/

### Parâmetros de Entrada

Abaixo está a lista dos parâmetros esperados para que a API possa executar sua função principal. Essas informações de entrada serão fornecidas pela plataforma que consumirá essa API - portanto qualquer erro no envio dos parâmetros afetará diretamente no funcionamento da mesma.

**Content type:** ```application/json```

insurance-claim

| Método | Resumo | Descrição | Obrigatório? | Parâmetro Entrada |
| - | - | - | - | - |
| PUT/insurance-claim | Atualiza status Sinistro | Função para dar update no status do sinistro | Sim | privateKey, address, status | 
| POST/insurance-claim/consult-claims | Consultar Sinistro | Consulta de sinistros | Sim | privateKey, contractAddress |
| POST/insurance-claim/consult-mutual-claims | Sinistros Seguradoras | Consulta de sinistros de uma seguradora | Sim | privateKey, multualAddress |
| POST/insurance-claim | Gerar Sinistro | Função responsável por gerar Sinistro | Sim | |

policy-report

| Método | Resumo | Descrição | Obrigatório? | Parâmetro Entrada |
| - | - | - | - | - |
| PUT/policy-report | Atualiza status Laudo | Update do status do Laudo | Sim | privateKey, address, status |
| POST/policy-report/consult-mutual-policies-report | Consultar laudos Seguradoras | Lista os laudos pertencentes a uma seguradoras | Sim | privateKey, contractAddress |
| POST/policy-report/consult-policy-report | Consulta  Laudo | Consulta  Laudo | Sim | privateKey, multualAddress |
| POST/policy-report | Gerar Laudo | Gerar laudo do Sinistro | Sim | 

administrativo insurance-claim e policy-report

| Método | Resumo | Descrição | Obrigatório? | Parâmetro Entrada |
| - | - | - | - | - |
| POST/role/admin | Adicionar admin | Adiciona um admin ao smart contract onlyAdmin | Sim | contract, address, privateKey |
| DELETE/role/admin | Remover admin | Remove um admin do smart contract onlyAdmin |Sim | contract, address, privateKey |
| GET/role/admin/{contract}/{address} | Consultar admin | Verifica no smart contract se o address é admin | Sim | contract, address |
| POST/role/mutual | Adicionar  Seguradora | Adiciona um address ao papel de seguradora no smart contract onlyAdmin | Sim | contract, address, privateKey |
| DELETE/role/mutual | Remover  Seguradora | Remove um address do papel de Seguradora no smart contract onlyAdmin | Sim | contract, address, privateKey |
| GET/role/mutual/{contract}/{address} | Consultar seguradora | Retorna se o address possui o papel de  seguradora no smart contract | Sim | contract, address |
| POST/lifecycle/pause | Pausa o contrato | Se o smart contract estiver no status de unpause esse método pausa o smart contract alterando o status para pause. | Sim | contract, privateKey |
| POST/lifecycleq/unpause | Ativar o contrato | Se o smart contract estiver no status de pause esse método reativa o smart contract alterando o status para unpause | Sim | contract, privateKey |
| GET//lifecycle/paused/{contract} | Status do contrato | Verifica se o smart contract está com status pause ou unpause | Sim | contract |

Relação das funções do smart contract chamadas pelos métodos da API HBTrust.domain.claim

| Método | Função | Descrição |
| - | - | - |
| POST/insurance-claim | generateClaim | Função responsável por gerar Sinistro |
| PUT/insurance-claim | updateStatusClaim | Função para dar update no status do sinistro |
| POST/insurance-claim/consult-claims | consultApolice, consultVehicle, consultVehicleLicence, consultConductor, consultOcurrence, consultOcurrenceReport, consultThirdParty, consultClaimInformation, consultClaimMutual | Consulta de sinistros  |
| POST/insurance-claim/consult-mutual-claims | consultMutuaClaims | Consulta de sinistros de uma Mutual |
| POST/policy-report | generateReport | Gerar laudo do Sinistro |
| PUT/policy-report | updateStatusReport | Update do status do Laudo |
| POST/policy-report/consult-mutual-policies-report | consultMutualPoliciesReport |consultMutualPoliciesReport |
| POST/policy-report/consult-policy-report | consultReportMutual, consultReportOcurrenceData, consultReportAssistanceData, consultReportTechnicalReport, consultReport | Consulta informações do laudo | 
| POST/role/admin | addAdmin | Adiciona um administrador no smart contract onlyAdmin |
| DELETE/role/admin | removeAdmin | Remove um administrador no smart contract onlyAdmin | 
| GET/role/admin/{contract}/{address} | isAdmin | Consulta se um address é admin no smart contract |
| POST/role/mutual | addInsuranceCompany | Adiciona uma mutual no smart contract onlyAdmin |
| DELETE/role/mutual | removeInsuranceCompany | Remove uma mutual no smart contract onlyAdmin |
| GET/role/mutual/{contract}/{address} | isInsuranceCompany | Consulta se um address é mutual no smart contract | 
| POST/lifecycle/pause | pause | Pausa o smart contract onlyAdmin |
| POST/lifecycleq/unpause | unpause | Ativa o smart contract onlyAdmin |
| GET/lifecycle/paused/{contract} | isPaused | Retorna o status atual pause / unpause |

### Parâmetros de Saída

Abaixo está a lista dos parâmetros retornados:

| Método | Parâmetro Saida |
| - | - |
| POST/insurance-claim | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| PUT/insurance-claim | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| POST/insurance-claim/consult-claims | Valores das informações de um sinistro | 
| POST/insurance-claim/consult-mutual-claims | ![consult](/img/must-secure/consult.png)|
| POST/policy-report | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| PUT/policy-report | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| POST/policy-report/consult-mutual-policies-report | Lista address contract police report e owner {   "success": true,   "code": "100-1000",   "message": "sucess",   "data": [     [       "0x139d6E02A3fF517b11971c6c49f75BfD33741ee6",       "0x8f03bE3AD8971202da1aEAB4dB0ee78682cabB6b",       "0xe421e1CC7A39F84598d1B85d0858c6113BB28D37",       "0xAbacaB210CE4A502Efc5a88885c9a95094821878",       "0x995967Cc0783E75a6EdCE62d763D15088C06e922"     ],     [       "0x17cA6A08758F4A078B9c53ca25E6F6736dF34094",       "0x17cA6A08758F4A078B9c53ca25E6F6736dF34094",       "0x275d671F09697b46EE82238ede224fC89eA26365",       "0x275d671F09697b46EE82238ede224fC89eA26365",       "0x275d671F09697b46EE82238ede224fC89eA26365"     ]   ] } |
| POST/policy-report/consult-policy-report | Valores das informações do laudo |
| POST/role/admin | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| DELETE/role/admin | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| GET/role/admin/{contract}/{address} | ![address](/img/must-secure/address.png) |
| POST/role/mutual | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| DELETE/role/mutual | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| GET/role/mutual/{contract}/{address} | ![address2](/img/must-secure/address.png) |
| POST/lifecycle/pause | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| POST/lifecycleq/unpause | transaction link etherscan https://etherscan.io/tx/0x7f1e4b740ed1a4b64a481b0b1100631d9eba8f8b458b37619319415652ef0017 |
| GET//lifecycle/paused/{contract} | contract / status: <pause/unpause>

#### Messages

| Code | Message |
| - | - |
| 100-1000 | Success! < response > |
| 100-1010 | Retorna lista de errors |
| 100-1011 | Gas required < gas > or always failing transaction. |
| 100-1013 | Insurance Company has no claim. |
| 100-1014 | Invalid private key < privetKey > |
| 100-1017 | Status: <pause/unpause> < nameContract > |
| 100-1020 | Smart Contract address is invalid. |
| 100-1030 | Smart Contract address is empty. |
| 100-1031 | Transaction subscriber has to be Insurance Company. |
| 100-1033 | Smart contract < nameSmartContract > is <pause/unpause> |
| 100-1040 | Invalid address  Insurance Company |
| 100-1050 | Empty address  Insurance Company |
| 100-2010 | Transaction to add admin < nameContract >! |
| 100-2011 | Transaction to add mutual < nameContract >! |
| 100-2020 | Transaction to remove admin < nameContract >! |
| 100-2021 | Transaction to remove mutual < nameContract >! |
| 100-2030 | Is Admin = true |
| 100-2031 | Is admin = false |
| 100-2032 | Is Insurance Company= true |
| 100-2033 | Is  Insurance Company = false |
| 100-2100 | Registered Report < address > |
| 100-3011 | Transaction update status insurance claim | 
| 100-3021 | Transaction update status policy report. |
| 100-3100 | Transaction Failed, address does not have permission. |
| 100-7002 | Wallet address is invalid. |
| 100-7017 | Transaction register insurance claim! |

#### Dicionário de dados

insurance-claim

| Categoria | Variavel | Descrição | Type | Exemplo |
| - | - | - | - | - |
| privateKey | | Chave privada de quem assina a transação (msg.sender) | string | A9AC29CBEB110215AE6D5AF5D8731A848160A3A7DABEF198B832A38D4B4385E2 |
| | | | | |
| mutual | wallets | Numeros da carteiras de cada seguradora pertencente ao sinistro. | string | [0x09c15427Fed859ed46AFFB996bCd62f3b9180137] |
| | | | | |
| apoliceData | | | | |
| | apolice | Identificação da apólice (interno) | uint256 | 123456 |
| | start_validity | Data de início da vigência | uint256 | 01/01/2020 | 
| | end_validity | Data de fim da vigência | uint256 | 02/01/2020 |
| | apolice_status | Status da apólice | uint256 | 1 | 
| | | | | |
| claimInformation | | | | |
| | claim | Identificação do sinistro (interno) | string | 123456 |
| | claimStatus | Status do sinistro | uint256 | 1 |
| | | | | |
| conductorData | | | | |
| | name_complete | Nome do motorista | string | client |
| | date_of_birth | Data de nascimento | string | 01/01/2020 |
| | marital_status | Estado civil | uint256 | 1 |
| | cnpj_cpf | CPF / CNPJ | string | 11111111111 |
| | gender | Gênero | uint256 | 1 |
| | profession | Profissão | uint256 | dev |
| | cnh | Carteira de Habilitação | uint256 | 1234567890 | 
| | category_cnh | Categoria da carteira de habilitação | string | b |
| | date_validate_cnh | Data da validade da carteira de habilitação | string | 01/03/2020 |
| | | | | | 
| ocurrenceData | | | | |
| | claim_number | Numero do sinistro (interno) | uint256 | 123456 |
| | date_occurrence | Data da ocorrência do sinistro | string | 01/10/2020 | 
| | time_occurrence | Horário da ocorrência do sinistro. | string | 13 |
| | place_occurrence | Local da ocorrência do sinistro | string | place |
| | police_report | Laudo da polícia | uitn256 | 678767 |
| | protocol_police_report | Protocolo do laudo policial | uint256 | 1 |
| | conductor_guilty_occurrence | Condutor no momento da ocorrência | uint256 | 1 |
| | ocurrence_description | Descrição da ocorrência | string | adc |
| | victims | Quantidade de vítimas | uint256 | 1 |
| | damage_victims | Descrição dos danos causados nas vítimas | uint256 | 1 |
| | damage_vehicle | Descrição dos danos causados no veículo | uint256 | 1 |
| | | | | |
| thirdPartyData | | | | |
| | involvement_3rd | | uint256 | 2 |
| | how_many_involvement | | uint256 | 3 |
| | licenses_plates | | string[] | [aaa1234] |
| | damage_caused | | string | none |
| | | | | |
| vehicleData | | | | |
| | vehicle_type | Tipo do veículo | uint256 | 1 |
| | maker | Marca | uint256 | 4 |
| | model | Modelo | uint256 | 19 |
| | numer_slides | | uint256 | 5 |
| |  year_manufacture | Ano de fabricação | uint256 | 2010 |
| | year_model | Modelo ano | uint256 | 2011 |
| | license_plate | Placa | string | 1 |
| | chassis | Chassis | string | 11111A1111 |
| | renavam | Renavan | string | 11111N1111 |
| | fuel | Tipo decombustível | uint256 | 1 |

policy-report

| Categoria | Variavel | Descrição | Type | Exemplo |
| - | - | - | - | - |
| privateKey | | Chave privada de quem assina a transação (msg.sender) | string | A9AC29CBEB110215AE6D5AF5D8731A848160A3A7DABEF198B832A38D4B4385E2 |
| | | | | |
| mutual | wallets | Numeros da carteiras de cada seguradora pertencente ao sinistro. | string | [0x09c15427Fed859ed46AFFB996bCd62f3b9180137] |
| | | | | |
| occurrenceData 
| | claimNumber | Identificação do sinistro (interno) | string | 321123 |
| | dateOcurrence | Data de ocorrência | unit256 | 1585084539000 |
| | timeOcurrence | Horario da ocorrência | unit256 | 1585084539000 |
| | placeOcurrence | Localização da ocorrencia | string | Avenida Paulista1392 |
| | policeReport | Relatório policial | unit256 | 121 |
| | protocolPoliceReport | Identificação do protocolo do laudo policial | unit256 | 321344 |
| | conductorGuiltyOccurrence | Condutor no momento da ocorrência | unit256 | 1 |
| | ocurrenceDescription | Descrição da ocorrência | string | dsad11 |
| | victims | Quantidade de vítimas | unit256 | 1 |
| | damageVictims | Descrição dos danos causados nas vítimas | string | Houve danos das vitimas descrição |
| | damageVehicle | Descrição dos danos causados no veículo | string | Relato dos danos causados no veiculo |
| | | | | |
| assistanceData | | | | |
| | cnpjCpf | CPF/CNPJ | string | 99999999999 |
| | nameComplete | Nome Completo da assistência técnica | string | Assistencia tecnica |
| | | | | |
| technicalReport | | | | |
| | reportNumber | Identificação do laudo (interna) | string | 252415 |
| | reportStatus | Status do laudo | unit256 | 2 |
| | damageComponents | Componentes danificados | string[] | [2, 1, 32] |
| | manpower | Descrição da mão de obra | string | Descrição da mão de obra |
| | technicalAdvice | Relato do parecer técnico | string | Relato do parecer técnico |

### Implementação

Requisitos 

- [NPM >=6.13.4](https://www.npmjs.com/get-npm)
- [GIT >=2.21.1](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NODE.JS >= 10.0.0](https://nodejs.org/en/)

#### Clonar este repositório

Precisa estar com a ssh configurada , com o acesso e chave você pode clonar o repositório a partir do terminal:

```
git clone git@bitbucket.org:janusplatform/hbtrust.domain.claims.git
```

#### Instalar as dependências

No terminal acesse a pasta raiz do repositório que foi clonado execute o comando para instalar as dependências:

```
npm install
```

Todas as dependências necessárias para executar a API serão instaladas no seu diretório.

#### Criar e configurar o arquivo .env

Para poder executar a API é necessário criar na raiz do diretório o arquivo .env Clone o arquivo .env.example com as seguintes especificações:

```
MNENOMIC = // Your metamask's recovery words
INFURA_API_KEY = // Your Infura API Key after its registration
NETWORK_ID = // 1-Mainnet 3-Ropsten 4-Rinkeby 42-Kovan 1001-Development
TOKEN = // PDBToken Address
```

Após criar e configurar o .env a seu diretório já está configurado para executar a API.

#### Executar o nodemon no localhost

No terminal acesse a pasta raiz do repositório que foi clonado execute o comando para executar a API:

```
npm run start
```

Após executar este comando o nodemon será inicializado e a API já estará funcionando no endereço http://localhost:3000.

## API Message

**Padrão de mensagens:**

```
res.status(xxx).send({
success: true,
code: '100-2030',
message: 'message',
data: result
error: err.message
});
```

Exemplos:

```
{
    "success": false,
    "code": "100-1010",
    "errors": [
        {
            "message": "apoliceData.apolice is required"
        },
        {
            "message": "conductorData.date_of_birth is required"
        }
    ]
}
```

```
{
    "success": false,
    "code": "100-1010",
    "message": "message",
    "data": [
        {
            "0x09c15427Fed859ed46AFFB996bCd62f3b9180137"
        },
        {
            "0x09c15427Fed859ed46AFFB996bCd62f3b9180137"
        }
    ]
    "link": "https://rinkeby.etherscan.io/tx/undefined"
}
```

| Code | Message | Policy | Claim/Report | Token |
| - | - | :-: | :-: | :-: |
| 100-1000 | Success! < response > | x | x | x |
| 100-1010 | Retorna um array com os campos que não foram required que não foram enviados | | x | x |
| 100-1011 | Gas required < gas > or always failing transaction. | x | x | x |
| 100-1012 | Mutual has no policy. | x | | |
| 100-1013 | Mutual has no claim. | | x | |
| 100-1014 | Invalid private key < privetKey > | x | x | x |
| 100-1015 | Minter wallet address is invalid. | | | x |
| 100-1016 | Burner wallet address is invalid. | | | x |
| 100-1017 | Status: <pause/unpause> < nameContract > | | x | |
| 100-1020 | Smart Contract address is invalid. | x | x | | 
| 100-1030 | Smart Contract address is empty. | x | x | |
| 100-1031 | Transaction subscriber has to be Mutual. | x | x | |
| 100-1032 | Don't have a policy with that address | x | | |
| 100-1033 | Smart contract < nameSmartContract > is <pause/unpause>
| 100-1040 | Mutual's wallet address is invalid. | x | x | |
| 100-1050 | Mutual's wallet address is empty. | | x | |
| 100-1060 | Admin's wallet address is invalid. | x | | x |
| 100-1070 | Admin's wallet address is empty. | | | x |
| 100-2010 | Transaction to add admin < nameContract >! | x | x | |
| 100-2011 | Transaction to add mutual < nameContract >! | x | x | |
| 100-2020 | Transaction to remove admin < nameContract >! | x | x | |
| 100-2021 | Transaction to remove mutual < nameContract >! | x | x | |
| 100-2030 | Is Admin = true | x | x | |
| 100-2031 | Is admin = false | x | x | |
| 100-2032 | Is Mutual = true | x | x | |
| 100-2033 | Is Mutual = false | x | x | |
| 100-2040 | Administrator added to the Factory Claim Smart Contract. |
| 100-2050 | Administrator removed from Factory Claim Smart Contract. |
| 100-2060 | Is Administrator of the Factory Claim Smart Contract. | 
| 100-2061 | You are not an Administrator of the Factory Claim Smart Contract. | 
| 100-2070 | Administrator added to the Factory Report Smart Contract. | 
| 100-2080 | Administrator removed from the Factory Report Smart Contract. |
| 100-2090 | Is the Administrator of the Factory Report Smart Contract. |
| 100-2091 | You are not an Administrator of the Factory Report Smart Contract. |
| 100-2100 | Registered Report < address > | x | x | |
| 100-2110 | Transaction Failed, smart contract already <pause/unpause> |
| 100-2120 | Roles: account already has role | | | x |
| 100-2121 | Roles: account does not have role | | | x |
| 100-3010 | Claim status field is empty. | 
| 100-3011 | Transaction update status insurance claim | | x | |
| 100-3020 | Report status field is empty. |
| 100-3021 | Transaction update status policy report. | | x | |
| 100-3030 | Policy status field is empty. |
| 100-3031 | Sucess transaction update status policy! | x | | |
| 100-3100 | Transaction Failed, address does not have permission. | x | x | x |
| 100-7000 | Internal error. | x | | |
| 100-7001 | Unknown error. |
| 100-7002 | Wallet address is invalid. | x | x | x |
| 100-7003 | Wallet address is empty. | | | x |
| 100-7004 | Amount is invalid. | | | x |
| 100-7005 | Amount is empty. | | | x |
| 100-7006 | Wallet quantity is empty. | | | x |
| 100-7007 | Wallet successfully created! |
| 100-7008 | Destination wallet address is invalid. | | | x |
| 100-7009 | Destination wallet address is empty. | | | x |
| 100-7011 | Invalid role | | | x |
| 100-7012 | Wallet address has no role. | | | x |
| 100-7013 | Wallet address is in role < functionname >. | | | x |
| 100-7014 | Wallet address has been removed from role < functionname >. | | | x |
| 100-7015 | Wallet address has been added to role < functionname >. | | | x |
| 100-7016 | Sucess Transaction! Police registred | x | | |
| 100-7017 | Transaction register insurance claim! | | x | |