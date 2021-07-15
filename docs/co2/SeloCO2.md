# Selo CO2

## Business Process

?> Para acessar o processo navegável clique no link:
[Proar Business process](https://must-blockchain.github.io/Proar/BusinessArchitecture/index.html#list)

![Proar](/img/co2/Proar.png)


Aplicação Web que administra a emissão do selo da Proar.  Os Produtores e suas Produções são cadastradas e validadas e suas produções submetidas a uma auditoria para a emissão do selo validado.

Nessa versão o administrador da aplicação da Proar fica responsável pela criação dos cadastros (Produtores, Produção e Usinas) e pela criação e administração dos usuários.

A aplicação está preparada para 5 perfis de acesso:

**Administrador** - total acesso aos módulos:  Cadastro Produtor, Cadastro Produção, Validações, Auditoria, Admin e configurações

**Validador**  - acesso aos módulos: Validações e Configurações. Possui a permissão de editar o status dos registros Pendentes de Validação

**Auditor**  – acesso aos módulos:  Auditoria e Configurações. Possui a permissão de editar o status dos registros Pendentes de Auditoria.

**Produtor** - acesso aos módulos:  Cadastro produtor, Cadastro produção e Configurações. Esse perfil tem a permissão de visualizar e editar os registros do produtor/produção.

**Visualizador** – acesso aos módulos: Cadastro produtor, Cadastro produção e Configurações. Possui a permissão apenas de visualizar ou seja, neste nível visualizador, o usuário poderá visualizar os documentos que foram inseridos e o cadastro que o emissor (usuário admin ou produtor realizou) e ver os status para acompanhamento.

## Descrição dos Módulos
| Módulo | Descrição | Acesso |
| ----------- | ---------- | ---------- |
| Admin | **Cadastro usuários** - Cria um usuário e envia um e-mail para alteração de senha ao usuário. **Cadastro de usinas** - Cria a lista das usinas para o cadastro de produção.| Administrador  |
| Auditoria | Lista as produções que foram enviadas para um auditor. O auditor pode ser selecionado para o envio direto. | Administrador e Auditor |
| Cadastro Produtor | Formulário com as informações para cadastrar um produtor e fazer o upload de documentos necessários.|Administrador, Produtor e Visualizador (sem edição)|
|Cadastro Produção | Formulário com as informações para cadastrar uma produção e fazer o upload de documentos necessários. | Administrador, Produtor e Visualizador (sem edição)|
| Configurações | Tela com as informações do usuário e possibilidade de alteração de senha. | Administrador, Produtor, Visualizador, Validador, Auditor |
| Validações |Lista os registros de produtores e produção criados, com status  de aguardando validação. Um cadastro não validado fica aguardando uma ação de correção. Nesse módulo também os registros de produção podem ser vinculados a um auditor. | Administrador e Validador |

## Status dos Registros
|Status|
| ------- |
|Aguardando Documento|
|Pendente Validação|
|Pendente Auditoria|
|Certificado|
|Cancelado|

# Manual do Usuário

## Introdução
O presente manual tem como finalidade orientar os usuários na utilização das funcionalidades da aplicação Selo Proar facilitando assim o acesso e o entendimento do sistema.

## Funcionalidades
- Níveis de acesso diferentes para manter a segurança e integridade das informações

- Consulta dos status dos registros para verificação da situação

- Atualização das informações dos usuários

- Recebimento eletrônico de alerta, via e-mail para alteração de senha

##  1- Como acessar o sistema ?

Para ingressar na solução Selo Proar, o usuário deverá primeiramente acessar o endereço eletrônico onde está publicada a ferramenta (http://dominio.com) e inserir os dados de usuário e senha nos campos indicados, conforme demonstrado na figura ao abaixo:

![Home](/img/co2/home.png)


Caso o sistema não reconheça o login ou a senha, irá mostrar uma mensagem de alerta. Contate o administrador do sistema caso necessário.

---
## 2- Menu Superior e permissão de acesso
Os módulos do menu superior são exibidos conferme o perfil do usuário logado. O sistema Selo Proar possui 5 perfis de acesso:



| Perfil de acesso | Modulos no menu superior | Descrição |
| ----- | ----- | ----- |
| Administrador | Cadastro Produtor, Cadastro Produção, Meus Registros, Validação, Auditoria, Relatórios,Cadastro usuários, Cadastro de usinas e Configurações.| Total acesso aos módulos. Possui permissão de criar e editar.| 
|Validador| Validação e Configurações| Permissão de alterar o status do registro e vincular auditor.|
| Auditor | Auditoria e Configurações | Permissão de alterar o status do registro.|
| Produtor | Cadastro produtor, Cadastro produção e Configurações | Permissão de criar e editar os registros adicionados referente ao seu CAR.|
| Cooperativa| Cadastro produtor, Cadastro produção e Configurações| Permissão de criar e editar os registros adicionados referente ao seu CAR.|
| Visualizador | Cadastro produtor, Cadastro produção e Configurações | Permissão apenas de visualizar o cadadastro referente ao seu CAR para acompanhamento de status.|

A imagem abaixo exibe o menu superior no perfil do Administrador.

 ![Imagem](/img/co2/menu.png)


Para alterar o perfil de acesso de um usuário é necessário estar logado no sistema com o perfil de Administrador.

Não é possível editar o campo e-mail de um usuário já criado.

### Editar Perfil Usuário
1. No menu superior acesse o item Admin

2. Na lista de usuários clicar em editar


 ![Imagem](/img/co2/AdminUsuarios.png)


3. Um modal com as informações do usuário selecionado é aberto

4. Selecione a opção desejada no campo Nível de acesso e clique em Salvar

![Imagem](/img/co2/addUser.png)


### Re-send da senha

Essa funcionalidade envia ao usuário um e-mail com um link de acesso solicitando a alteração da senha. 


 ![Imagem](/img/co2/re-send-senha.png)


---

## 3- Criação de Usuário
É importante lembrar que para criar um novo usuário é preciso logar no sistema com o perfil de Administrador.

1. No menu superior acesse o item Admin. Clicar no ícone “Adicionar Usuário“  


 ![Imagem](/img/co2/criar-usuario.png)


2. Um modal é exibido para preencher as informações do novo usuário.

3. Após salvar, o novo usuário recebe um e-mail de aviso solicitando uma alteração de senha e já está disponível para utilizar o sistema Selo Proar conforme perfil selecionado.

![Imagem](/img/co2/addUser.png)

---
## 4- Cadastro do Produtor
O cadastro do produtor é o primeiro passo para aquisição do selo Proar. Para salvar o cadastro é necessário preencher todos os campos: CAR - Cadastro Ambiental Rural, Nome da Fazenda, Nome do Responsável, CPF Responsável, RG ou CNH, Longitude e Latitude. Também é necessário anexar todos os documentos da lista.

Esse módulo pode ser acessado pelos perfis:

- Administrador - criar e editar todos os cadastros

- Produtor/ Cooperativa - criar e editar cadastros referente ao seu CAR

- Visualizador - visualizar cadastros referente ao seu CAR

**Cadastrar um Produtor**
1. No menu superior clicar em Produtor

2. Preencher todos os campos do cadastro

3. Anexar todos os documentos da lista.

4. O botão para salvar é habilitado.

5. O cadastro salvo possui o status de “Pendente“ para a validação.


 ![Imagem](/img/co2/cadastrar-produtor.png)


---

## 5- Cadastro de Produção Safra
Segundo passo é o cadastro da produção. Necessário preencher todos os campos  e anexar todos os documentos da lista para salvar.

Esse módulo pode ser acessado pelos perfis:

- Administrador - criar e editar todos os cadastros

- Produtor/ Cooperativa - criar e editar cadastros referente ao seu CAR

- Visualizador - visualizar cadastros referente ao seu CAR

**Cadastrar uma produção**
1. No menu superior clicar em Produção

2. Preencher o campo Produtor com o numero do CAR e clique em Pesquisar

3. O nome do produtor é exibido ao lado.

4. Preencher todos os campos do cadastro.

5. Anexar todos os documentos da lista

6. O cadastro salvo possui o status de “Pendente“ para a validação.


 ![Imagem](/img/co2/cadastro-producao.png)


---

## 6- Meus Registros
Lista todos os Produtores e Produções de Safra cadastrados e seus status. A visualização desses registros dependem do nível de acesso do usuário. Um usuário com nível de acesso Visualizador não tem opção de editar o registro e apenas visualiza o registro referente ao seu CAR.

Esse módulo pode ser acessado pelos perfis:

- Administrador - criar, editar e visualiza todos os cadastros

- Produtor/ Cooperativa - criar, editar e visualiza cadastros referente ao seu CAR

- Visualizador - visualizar cadastros referente ao seu CAR


 ![Imagem](/img/co2/meus-registros.png)


**Edição de Registros**
A lista de registro dos produtores e registros das safras estão separadas por abas (Produtor e Produção), selecione a aba para ter acesso ao cadastro.

Para editar um registro clique no botão editar e um modal com todas as informações daquele registro é exibido. 

| **Modal edição do Produtor** | **Modal edição da Produção** |
|  ----------  |  -----------  |
| ![Imagem](/img/co2/editar-registro-produtor.png)| ![Imagem](/img/co2/editar-producao-safra.png)|

---

## 7- Cadatro de Usinas
O cadastro de usunas pertence ao módulo do administrador. Cria a lista de usina compradora para o cadastro de produção.

Pode ser acessado pelo perfi:

- Administrador - criar e editar o cadastro

**Cadastrar Usina**

1.  No menu superior acesse o item Admin e selecione a aba Admin Usinas

2. Clicar no ícone de “Adicionar Usina“


 ![Imagem](/img/co2/admin-usinas.png)


3. Um modal é exibido para preencher as informações da usina

4. Após salvar é exibida na lista.

 ![Imagem](/img/co2/addUsina.png)

---

## 8- Validação
Os cadastros com o status “Pendente Validação“ são exibidos nesse módulo. São separados por abas de cadastro de produtores e cadastro de produção.

Nesse módulo é possível alterar o valor do status para “Aguardando Documento“ ou “Pendente Auditoria“. Na aba vincular auditoria são exibidos os cadastros com status igual a “Pendente Auditoria“.

Esse módulo pode ser acessado pelos perfis:

- Administrador - editar status dos registros e vincular auditoria

- Validador - editar status dos registros e vincular auditoria

**Validar Produtor / Produção**

1. No menu superior clicar em Validação

2. Selecionar a aba Produtores ou Produção 

3. No botão ações selecionar o novo status para validar o cadastro.

| **Lista Validar Produtor** | **Lista Validar Produção** |
|  ----------  |  -----------  |
| ![Imagem](/img/co2/validar-produtor.png)| ![Imagem](/img/co2/validar-producao-safra.png)|

4. A tela com as informações é aberta e as opções para validar são exibidas

| **Produtor** | **Produção** |
|  ----------  |  -----------  |
| ![Imagem](/img/co2/validar-produtor-imgs.png)| ![Imagem](/img/co2/validar-producao-safra-imgs.png)|

**Vincular Auditoria**
1. A aba Vincular Auditoria exibe a lista de cadastros para ser enviado para auditoria

2. Clicar no ícone vincular em ações.


 ![Imagem](/img/co2/vincular-auditoria.png)


3. Selecione o auditor(a)

 ![Imagem](/img/co2/modal-vincular-auditoria.png)


---

## 9- Auditoria
Exibe a lista de registros com status “Pendente Auditoria“.

Nesse módulo é possível alterar o valor do status para “Pendente Validação“ ou “Certificado“.

Esse módulo pode ser acessado pelos perfis:

- Administrador - editar status dos registros

- Auditor- editar status dos registros

**Certificar Registro Produtor / Produção**

1. No menu superior clicar em Auditoria

2. Seleciona a aba do registro a ser certificado (Produtor ou Produção)

3. No botão ações selecionar o novo status para certificar o registro.


 ![Imagem](/img/co2/auditoria-produtor.png)


---

## 10- Relatórios

Pesquisa parametriza dos registros do sistema.

Esse módulo pode ser acessado pelos perfis:

- Administrador

- Validador

- Auditor


 ![Imagem](/img/co2/relatorios.png)


---

## 11- Configurações

Todos os perfis tem acesso as configurações. Nesse módulo é possível fazer a alteração de senha.

**Alteração de senha**

1. No menu superior clicar em Configurações

2. Colocar sua senha atual correta

3. Digitar a nova senha

4. Digitar novamente a nova senha no campo confirma senha e salvar


 ![Imagem](/img/co2/alterar-senha.png)
