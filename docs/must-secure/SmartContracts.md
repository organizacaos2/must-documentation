---
sidebar_position: 4
---
# Smart Contracts

## Policy Smart Contract

**Registrar Apólice**

![RegistrarApolice](/img/must-secure/RegistrarApolice.png)


> **Rinkeby** | https://rinkeby.etherscan.io/address/0x059369f9866f9a4dd74a86c068f676e4d76856bb 

**Smart Contract**

|   |   |   |
| - | - | - |
| **Self destroy** | Sim | only Owner |
| **Pausable** | Sim | only Admin |
| **Factory** | Sim | Generate Policies Instances |

**Roles and Functions**

- Admin role tem permissão nas funções:
    - Add Admin
    - Remove Admin
    - Pause / Unpause
    - add Insurance Company
    - remove Insurance Company

- Insurance Company role tem permissão nas funções:
    - Generate Policy
    - All Consults Policy

**Parâmetros Policy**

- Todos são Obrigatórios

```
{
	"privateKey":"7FDE0137C2E831A713A7415FB1256E7605EBFF04020345EB4E043B0C95BF27BD",
	"insuranceCompany": {
    	"wallets": ["0x71fC0e20F2DA5853CE9174A54093f5b2918cCfa2", "0x17cA6A08758F4A078B9c53ca25E6F6736dF34094"]
	},
	"coverage": {
	    "prizeAmount": "1000",
	    "fipePercentage": "5",
	    "app": "1",
	    "glasses": 1,
	    "rcfMaterials": "1",
	    "rcfBodily": "1",
	    "reserveCar": 1,
	    "franchise": 1,
	    "productCoverage": [
	      "1", "2"
	    ]
	},
	"policyInformation": {
	    "proposal": "1",
	    "apolice": "13334",
	    "startValidity": 1586305780,
	    "endValidity": 1617841780,
	    "apoliceStatus": 1
	},
	"policyHoldedrData": {
	    "nameComplete": "client",
	    "dateOfBirth": 492308980,
	    "maritalStatus": 1,
	    "pocket": "1",
	    "cnpjCpf": "11111111111",
	    "gender": 1,
	    "relationshipPolicyHolder": 1
	},
	"vehicleData": {
	    "typeParam": 1,
	    "marker": 1,
	    "model": 1,
	    "numerSlides": 5,
	    "yearManufacture": 2000,
	    "yearModel": 2001,
	    "licensePlate": "11111",
	    "chassis": "1111111111",
	    "renavam": "1111111111",
	    "fuel": 1,
	    "newVehicle": 1,
	    "vehicleFinaced": 1,
	    "color": 3
	},
	"driverData": {
	    "nameComplete": "client",
	    "dateOfBirth":492308980 ,
	    "maritalStatus": 1,
	    "pocket": "1",
	    "cpfCnpj": "111111111111",
	    "gender": 1,
	    "profession": 1,
	    "cnh": "111111",
	    "dateFirstCnh":955153780 ,
	    "garage": 1,
	    "usesWork": 1,
	    "vehicleUse": 1
		}
}
```

**Functions**

> **Factory**

- Para gerar uma apólice e realizar consulta precisa ser uma Seguradora

| Function | Parâmetros Entrada | Descrição |
| -------- | ------------------ | --------- |
| Generate Policy | todos os parametros acima, ```onlyInsuranceCompany``` | Cria a apólice (Policy smart contract) e retorna o hash da transação. |
| Consult Insurance Company Policies | Address insurance Company ```onlyInsuranceCompany``` | Consulta que retorna todas as Apólices referentes a uma seguradora. Retorna: ```(address[] memory policyAddress, address[] memory ownerAddress)``` |

> **Policy**

- Para fazer consulta ou alterar o staus precisa ser uma Seguradora

|   |   |   |
| - | - | - |
| Update Status Policy | Address Policy smart contract New status = ```status onlyInsuranceCompany``` | Atualiza o status de uma apólice e retorna o hash da transação. |
| Consult Policy Coverage | Address Policy smart contract ```onlyInsuranceCompany``` | Consulta que retorna todos os parametro da Cobertura de uma apólice. ```(string memory prizeAmount,string memory fipePercentage,string memory app,uint32 glasses,string memory rcfMaterials,string memory rcfBodily,uint32 reserveCar,uint32 franchise,string[] memory productCoverage)``` |
| Consult Driver | Address Policy smart contract ```onlyInsuranceCompany``` | Consulta que retorna todos os parametro do Motorista de uma apólice. ```(string memory nameComplete,uint64 dateOfBirth,uint32 maritalStatus,string memory pocket,string memory cpfCnpj,uint32 gender,uint64 profession,string memory cnh,uint256 dateFirstCnh,uint32 garage,uint32 usesWork,uint32 vehicleUse)``` |
| Consult Policy Holder | Address Policy smart contract ```onlyInsuranceCompany``` | Consulta que retorna todos os parametro do Segurado de uma apólice. ```(string memory nameComplete,uint64 dateOfBirth,uint32 maritalStatus,string memory pocket,string memory cnpjCpf,uint32 gender,uint32 relationshipPolicyHolder)``` |
| Consult Policy Information | Address Policy smart contract ```onlyInsuranceCompany``` | Consulta que retorna todos os parametro da Apólice de uma apólice. ```(string memory proposal,string memory apolice,uint64 startValidity,uint64 endValidity,uint32 apoliceStatus)``` |
| Consult Policy Insurance Company | Address Policy smart contract ```onlyInsuranceCompany``` | Consulta que retorna todos os parametro da Seguradora de uma apólice. ```address[] memory insuranceCompanyWallets``` |
| Consult Vehicle | Address Policy smart contract ```onlyInsuranceCompany``` | Consulta que retorna todos os parametro do veiculo de uma apólice. ```(string memory vehicle_type, string memory maker, string memory model,uint256 numer_slides, uint256 year_manufacture, uint256 year_model, uint256 fuel,uint32 newVehicle,uint32 color)```|
| Consult Vehicle Documents | Address Policy smart contract ```onlyInsuranceCompany``` | Consulta que retorna todos os parametro dos documentos do veiculo de uma apólice.```(string memory license_plate, string memory chassis, string memory renavam,uint32 vehicleFinaced)```|

> Access

|   |   |   |
| - | - | - |
| Add Admin | Address ```onlyAdmin``` | Adiciona um address como admin do contrato de factory e retorna o hash da transação. |
| Remove Admin | Address ```onlyAdmin``` | Remove um address da funçao de admin do contrato de factory e retorna o hash da transação. |
| Is Admin | Address | Verifica se o address é admin do contrato de factory, retorna true / false |
| add Insurance Company | Address ```onlyAdmin``` | Adiciona um address a role Insurance Company do contrato de factory e retorna o hash da transação. |
| remove Insurance Company | Address ```onlyAdmin``` | Remove um address a role Insurance Company do contrato de factory e retorna o hash da transação. |
| Is Insurance Company | Address | Verifica se o address é Insurance Company  do contrato de factory, retorna true / false |

## Claim Smart Contract Factory

### Registrar Sinistro

![RegistrarSinistro](/img/must-secure/RegistrarSinistro.png)


> **Rinkeby**
> https://rinkeby.etherscan.io/address/0x74c64cd873c8f89d9e114caf38e5c9def51f6319

#### Smart Contract

|   |   |   |
| - | - | - |
| **Self destroy** | Sim | only Owner |
| **Pausable** | Sim | only Admin |
| **Factory** | Sim | Generate Claims Instances |

#### Roles and Functions

- Admin role tem permissão nas funções:
    - Add Admin
    - Remove Admin
    - Pause / Unpause
    - add Insurance Company
    - remove Insurance Company

- Insurance Company role tem permissão nas funções:
    - Generate Claim
    - All Consults Claim

#### Parâmetros Claim

- Todos são Obrigatórios

```
{
  "privateKey": "string",
  "insuranceCompany": [
    "string"
  ],
  "apoliceData": {
    "apolice": 0,
    "startValidity": "2020-04-28",
    "endValidity": "2020-04-28",
    "apoliceStatus": 0
  },
  "claimInformation": {
    "claim": 0,
    "claimStatus": "string"
  },
  "conductorData": {
    "nameComplete": "string",
    "dateOfBirth": "2020-04-28",
    "maritalStatus": 0,
    "cnpjCpf": 0,
    "gender": 0,
    "profession": "string",
    "cnh": 0,
    "categoryCnh": "string",
    "dateValidateCnh": "2020-04-28"
  },
  "occurenceData": {
    "claimNumber": 0,
    "dateOccurrence": "2020-04-28",
    "timeOccurence": "string",
    "placeOccurence": "string",
    "policeReport": 0,
    "protocolPoliceReport": 0,
    "conductorGuiltyOccurrence": 0,
    "ocurrenceDescription": 0,
    "victims": 0,
    "damageVictims": "string",
    "damageVehicle": "string"
  },
  "thirdPartyData": {
    "involvement3rd": 0,
    "howManyInvolvement": 0,
    "licensesPlates": [
      "string"
    ],
    "damageCaused": "string"
  },
  "vehicleData": {
    "vehicleType": "string",
    "maker": "string",
    "model": "string",
    "numerSlides": 0,
    "yearManufacture": 0,
    "yearModel": 0,
    "licensePlate": "string",
    "chassis": "string",
    "renavam": "string",
    "fuel": 0
  }
}
```

**Functions**

> **Factory**

- Para gerar um sinistro e realizar consulta precisa ser uma Seguradora

| Function | Parâmetros de Entrada | Descrição |
| -------- | --------------------- | --------- |
| Generate Claim | Todos os parâmetros acima. ```onlyInsuranceCompany``` | Aramazena os dados do sinistro em blockchain e cria o smart contract do sinistro; Retorna hash da transação. |
| Consult Insurance Company Claims | Address insurance Company ```onlyInsuranceCompany``` | Consulta que retorna todos os sinistros referentes a uma seguradora. Retorna: ```(address[] memory claimAddress, address[] memory ownerAddress)```|

> **Claim**

- Para fazer consulta ou alterar o staus precisa ser uma Seguradora

|   |   |   |
| - | - | - |
| Update Status Claim | Address Claim smart contract New status = status ```onlyInsuranceCompany``` | Atualiza o status de uma apólice e retorna o hash da transação. |
| Consult Apolice | Address Claim smart contract ```onlyInsuranceCompany``` | Retorna os parametros da apólice associada ao sinistro. ```(uint256 apolice, string memory start_validity, string memory end_validity,uint256 apolice_status)``` |
| Consult Vehicle | Address Claim smart contract ```onlyInsuranceCompany``` | Retorna os parametros do veículo. ```(string memory vehicle_type, string memory maker, string memory model,uint256 numer_slides, uint256 year_manufacture, uint256 year_model, uint256 fuel) ``` |
| Consult Vehicle Licence | Address Claim smart contract ```onlyInsuranceCompany``` |Retorna os parametros dos documentos do veículo. ```(string memory license_plate, string memory chassis, string memory renavam)``` |
| Consult Conductor | Address Claim smart contract ```onlyInsuranceCompany``` | Retorna os parametros do condutor. ```(string memory name_complete, string memory date_of_birth, uint256 marital_status, uint256 cnpj_cpf, uint256 gender, string memory profession, uint256 cnh, string memory category_cnh, string memory date_validate_cnh)```|
| Consult Ocurrence | Address Claim smart contract ```onlyInsuranceCompany``` | Retorna os parametros de quando ocorreu o sinistro. ```(uint256 claim_number, string memory date_occurrence, string memory time_occurrence, string memory place_occurrence)```|
| Consult Ocurrence Report | Address Claim smart contract ```onlyInsuranceCompany``` | Retorna os parametros do sinistro. ```(uint256 police_report, uint256 protocol_police_report, uint256 conductor_guilty_occurrence, uint256 ocurrence_description, uint256 victims, string memory damage_victims, string memory damage_vehicle)``` |
| Consult Third Party | Address Claim smart contract ```onlyInsuranceCompany``` | Retorna os parametros dos envolvidos na ocorrência. ```(uint256 involvement_3rd, uint256 how_many_involvement,  string[] memory licenses_plates, string memory damage_caused)```  |
| Consult Claim Information | Address Claim smart contract ```onlyInsuranceCompany``` |Retorna os parametros do documento do sinistro. ```(uint256 claim, string memory claimStatus)``` |
| Consult Claim Insurance Company | Address Claim smart contract ```onlyInsuranceCompany``` | Retorna os parametros da Seguradora. ```(address[] memory insuranceCompanyWallets)```|

> **Access**

|   |   |   |
| - | - | - |
| Add Admin | Address ```onlyAdmin``` | Adiciona um address como admin do contrato de factory e retorna o hash da transação. |
| Remove Admin | Address ```onlyAdmin``` | Remove um address da funçao de admin do contrato de factory e retorna o hash da transação. |
| Is Admin | Address | Verifica se o address é admin do contrato de factory, retorna true / false |
| add Insurance Company | Address ```onlyAdmin``` | Adiciona um address a role Insurance Company do contrato de factory e retorna o hash da transação. |
| remove Insurance Company | Address ```onlyAdmin``` | Remove um address a role Insurance Company do contrato de factory e retorna o hash da transação. |
| Is Insurance Company | Address | Verifica se o address é Insurance Company do contrato de factory, retorna true / false |

## Report Smart Contract Factory

**Registrar Laudo**

![RegistrarLaudo](/img/must-secure/RegistrarLaudo.png)


**Smart Contract**

|   |   |   |
| - | - | - |
| **Self destroy** | Sim | only Owner |
| **Pausable** | Sim | only Admin |
| **Factory** | Sim | Generate Policy Report Instances |

> **Rinkeby**
>
> https://rinkeby.etherscan.io/address/0x2896149d197a0f9081d14c8e15799c357d5be5fc

**Roles and Functions**

- Admin role tem permissão nas funções:
  - Add Admin
  - Remove Admin
  - Pause / Unpause
  - add Insurance Company
  - remove Insurance Company

- Insurance Company role tem permissão nas funções:
  - Generate Policy Report
  - All Consults Policy Report

**Parâmetros Policy Report**

```
{
  "privateKey": "string",
  "insuranceCompany": [
    "string"
  ],
  "occurrenceData": {
    "claimNumber": "string",
    "dateOcurrence": "2020-04-28",
    "timeOcurrence": "2020-04-28T15:35:47.928Z",
    "placeOcurrence": "string",
    "policeReport": "string",
    "protocolPoliceReport": "string",
    "conductorGuiltyOccurrence": "string",
    "ocurrenceDescription": "string",
    "victims": "string",
    "damageVictims": "string",
    "damageVehicle": "string"
  },
  "assistanceData": {
    "cnpjCpf": "string",
    "nameComplete": "string"
  },
  "technicalReport": {
    "reportNumber": "string",
    "reportStatus": "string",
    "damageComponents": [
      "string"
    ]
  },
  "manPower": "string",
  "technicalAdvice": "string"
}
```

**Functions**

> **Factory**

- Para gerar um laudo e realizar consulta precisa ser uma Seguradora

| Functions | Parâmetros | Descrição |
| --------- | ---------- | --------- |
| Generate Policy Report | Todos os parâmetros acima | Cria o smart contract de laudo e retorna o hash da transação. |
| Consult Insurance Company Policies Report | Address Insurance Company | Retorna todos os laudos da Seguradora |

> **Policy Report**

- Para fazer consulta ou alterar o staus precisa ser uma Seguradora

|           |            |           |
| --------- | ---------- | --------- |
| Update Status Report | Address Policy Report smart contract New status = status | Altera o valor do staus do laudo |
| Consult Report Insurance Company | Address Policy Report smart contract onlyInsuranceCompany | Retorna todos os parametro das Seguradoras. address[] memory insuranceCompanyWallets |
| Consul tReport Ocurrence Data | Address Policy Report smart contract onlyInsuranceCompany | Retorna todos os parametro da ocorrência. string memory claimNumber,uint256 dateOcurrence,uint256 timeOcurrence,string memory placeOcurrence,string memory policeReport,string memory protocolPoliceReport,string memory conductorGuiltyOccurrence,string memory ocurrenceDescription,string memory victims,string memory damageVictims,string memory damageVehicle |
| Consult Report Assistance Data | Address Policy Report smart contract onlyInsuranceCompany | Retorna todos os parametro da assistência string memory cnpjCpf,string memory nameComplete |
| Consult Report Techinical Report | Address Policy Report smart contract onlyInsuranceCompany | Retorna todos os parametro do laudo técnico string memory reportNumber,string memory reportStatus,string[] memory damageComponents |
| Consult Policy Report | Address Policy Report smart contract onlyInsuranceCompany |Retorna todos os parametro do laudo. string memory manpower,string memory technicalAdvice |

> **Access**

|           |            |           |
| --------- | ---------- | --------- |
| Add Admin | Address  | Adiciona um address como admin do contrato de factory e retorna o hash da transação. |
| Remove Admin | Address | Remove um address da funçao de admin do contrato de factory e retorna o hash da transação. |
| Is Admin | Address | Verifica se o address é admin do contrato de factory, retorna true / false | 
| add Insurance Company | Address | Adiciona um address a role mutual do contrato de factory e retorna o hash da transação. |
| remove Insurance Company | Address | Remove um address a role mutual do contrato de factory e retorna o hash da transação. | 
| Is Insurance Company | Address | Verifica se o address é mutual do contrato de factory, retorna true / false |