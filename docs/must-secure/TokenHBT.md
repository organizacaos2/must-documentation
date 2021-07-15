---
sidebar_position: 2
---
# Token HBT

### O Token HBT

:arrow_forward: [Rinkeby](https://rinkeby.etherscan.io/address/0x5a093dd37b635f4ae8d9b3be65d3f4e7b3dd187c)

O HBT é um token padrão **ERC 223**, criado para ser uma **Stablecoin** colateralizado 1:1 com o Real (BRL), oferecendo assim a estabilidade de moedas de economias estáveis com a segurança e internacionalização da criptografia, a transparência da blockchain e a eficiência de um mercado que funciona 24 horas por dia. Além disso, elas podem ser negociadas em qualquer lugar do mundo sem barreira de entrada.  

Com o Token HBT as transações entre as seguradoras/re-seguradoras/hbtrust serão mais rápidas e internas na plataforma.

Para que isso aconteça, é pré-requisito que todos possuam uma **Carteira Digital (Wallet)** para manter esses tokens. Ao criar na plataforma usuário administrativo para seguradora/re-seguradora/hbtrust será gerada a **Carteira Digital (Wallet)**. A quantidade de tokens adquirida será “mintada” para a **Wallet** da seguradora através da aprovação da proposta e na geração da apólice.

Abaixo estrá descrito as roles e funções do Token HBT padrão ERC 223.

#### Roles

| Role | Description | Functions |
| ---- | ----------- | --------- |
| **Owner** | Address/Pessoa responsável por publicar o Contrato do Token na MainNet. Ao iniciar o Contrato, Owner deverá ser incluído automaticamente na role Admin para poder administrar as roles. Owner/Admin será responsável também por pausar/despausar o Contrato. | ![Owner](/img/must-secure/Owner.png) |
| **Admin** | Address/Pessoa responsável por manter as Roles - Adicionar ou Remover membros de todas as roles do Contrato. Admin será responsável também por pausar/despausar o Contrato. | ![Admin](/img/must-secure/Admin.png) |
| **Minter** | Address/Pessoa responsável por gerar novos Tokens. | ![Minter](/img/must-secure/Minter.png)|
| **Burner** | Address/Pessoa responsável por queimar os tokens . | ![Burner](/img/must-secure/Burner.png) |

#### Token HBT Detailed

| Function | Content | Description |
| -------- | ------- | ----------- |
| name (string) | HBTrust | Representa o valor do ativo do cliente. |
| symbol (string) | HBT | O símbolo representa a abreviação de HBTrust. |
| decimals (uint8) | 18 | Parametrizado  |

#### Standard Write Functions

| Function | Description |
| -------- | ----------- |
| transfer (address _to, uint _value, bytes _data) | Função que permite que tokens sejam transferidos de um address declarado. |
| transfer (address _to, uint _value) | Função que permite que tokens sejam transferidos de um address declarado. |
| transferFrom (address _from, address _to, uint256 _value) | Permite a transferência de tokens autorizados pelo address_from , desde que o address_from dê permissão allowance. |
| mintTo (address _to, uint256 _value) | Permite que o Minter gere novos tokens. Emite o evento mint para o address declarado. Aumenta o totalSupply. |
| burnFrom (address _from, uint256 _value) | Permite que o Burner “queime“ os tokens. Emite o evento burn para o address declarado. Diminui o totalSupply. |
| pause | Permite que os Admins travem o Contrato pausando-o. O Token iniciará automaticamente pausado - podendo ser despausado pelos Admins. |
| unpause | Permite que os Admins despausem o contrato do Token. |
| allowance (address _owner, address _spender) | Retorna o número de Tokens que o address_spender tem a permissão de gastar em nome do address_owner utilizando o transferFrom |
| approve (address _spender, uint256 _value) | Define o valor amount que o address_spender pode gastar do address_owner dos tokens |
| increaseApproval (address _spender, uint256 _addedValue) | Aumenta o valor aprovado para o address_spender. |
| decreaseApproval (address _spender, uint256 _subtractedValue) | Diminui o valor aprovado para o address_spender. |

#### Standard Read Functions

| Function | Description |
| -------- | ----------- |
| balanceOf (address_owner) | Permite que qualquer endereço visualize o saldo em Tokens. |
| totalSupply | Indica a quantidade total de cada um dos Tokens em circulação. |
| paused | Permite que qualquer endereço verifique se o contrato do Token está pausado - true or false. |

#### Business Read Functions

| Function | Description |
| -------- | ----------- |
| isAdmin (address _account) | Permite que qualquer pessoa consulte um Address e verifique se o mesmo é Admin do token. Retorna Verdadeiro ou Falso. |
| isMinter (address _account) | Permite que qualquer pessoa consulte um Address e verifique se o mesmo está na role Minter do token. Retorna Verdadeiro ou Falso. |
| isBurner (address _account) | Permite que qualquer pessoa consulte um Address e verifique se o mesmo está na role Burner do token. Retorna Verdadeiro ou Falso. |

#### Business Write Functions
| Function | Description |
| -------- | ----------- |
| addAdmin | Essa função permite que o Admin inclua outros endereços na role Admin. |
| removeAdmin | Essa função permite que o Admin remova endereços da Role Admin. Será obrigatório ter pelo menos 1 Admin na role. |
| addMinter | Essa função permite que o Admin inclua endereços na role Minter. |
| removeMinter | Essa função permite que o Admin remova endereços da role Minter. |
| addBurner | Essa função permite que o Admin inclua endereços na role Burner. |
| removeBurner | Essa função permite que o Admin remova endereços da role Burner. |