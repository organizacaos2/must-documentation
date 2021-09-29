# Requisitos de produto

## Objetivo

Sistema integrado de gestão das atividades comerciais de uma empresa, tais como: movimentação de estoque, clientes, documentos, funcionários, impostos, produtos, serviços. 

O sistema terá controle de acesso aos módulos com base em roles. 

 Cada empresa (cliente) terá uma instância de banco de dados dedicada, sendo a aplicação capaz de realizar conexões a múltiplos bancos de dados diferentes ao mesmo tempo.

A principal vantagem deste modelo é o isolamento “físico”, isolando o impacto das operações de cada empresa.

![1](/img/must-ERP/Objective.png)

O sistema também terá um mecanismo de criação de benefícios com a distribuição de vouchers ou tokens utilizando a tecnologia blockchain.

## Requisitos

| Requirement | User Story | Status |
| - | - | - |
| Login | Como um usuário cadastrado quero fazer o login na aplicação. | **DONE** |
| Login com 2FA | Como um usuário cadastrado quero fazer o login na aplicação com segurança. | **DONE** |
| Recuperação e Alteraçao de senha | Como um usuário cadastrado quero recuperar minha senha ou alterar caso necessário. | **DONE** |
| Cadastrar usuário | Como admin da aplicação quero cadastrar novos usuários. | **DONE** |
| Cadastrar funcionário | Como admin da aplicação quero cadastrar os funcionários da empresa. | TO DO |
| Gerenciar Funções | Como admim da aplicação quero definir os níveis de acesso dos usuários na aplicação. | **DONE** |
| Cadastrar clientes | Como admim da aplicação quero cadastrar meus clientes e manter uma relação dos produtos comprados e controle de pagamentos. | **DONE** |
| Cadastrar produtos | Como gestor do estoque quero cadastrar os novos produtos. | **DONE** |
| Cadastrar categorias e subcategoria | Como gestor do estoque quero relacionar os produtos por grupos e categorias. | **DONE** |
| Listar produtos inativos | Como gestor do estoque quero verificar quais produtos estão definidos como inativos. | TO DO |
| Importar produtos em lote | Como gestor do estoque quero cadastrar os produtos de uma forma dinâmica. | TO DO |
| Cadastrar loja | Como admin quero  cadastrar filiais de loja diferentes para controlar a mercadoria do estoque. | **DONE** |
| Ajustar Estoque | Como gestor do estoque quero registrar as movimentações dos produtos no estoque. | **DONE** |
| Cadastrar Variação de Produto | Como gestor do estoque quero registrar as variações referente a cada produtos. | **DONE** |
| Emitir etiqueta de produto | Como estoquista quero emitir as etiquetas dos produtos do estoque. | TO DO |
| Cadastrar Fornecedor | Como gestor do estoque quero cadastrar os fornecedores dos produtos que vendemos. | **DONE** |
| Cadastrar marca | Como usuário cadastrado com permissão no backoffice, eu quero registrar e gerenciar as marcas vendidas na loja e então preciso de um cadastro de nomes de marca | **DONE** |
| Cadastro de Ordens de Serviço | | TO DO |
| Cadastro de movimentação financeira  | | TO DO|
| Cadastro de centro de custo | | TO DO |
| Cadastro de conta bancária | | TO DO |
| Vincular loja usuário | Como usuário administrador ou supervisor da aplicação, eu quero vincular usuários as respectivas lojas então preciso de um cadastro de usuários com possibilidade de associação de loja por usuário | **DONE** |
| Emissão de relatórios | | TO DO |
| Visão de produtos do estoque | Como usuário com permissão de visualizar produtos, eu quero acessar uma lista de produtos do estoque e visualizar os detalhes de cada produto, então preciso de uma visão de produto do meu estoque | **DONE** |
| Listar movimentação de estoque | Como usuário com permissão em movimentação de estoque, eu quero visualizar a lista de movimentação e então preciso de uma página que eu possa acessar as informações das movimentações | **DONE** |
| Lançar produtos na venda | Como vendedor, eu quero lançar os produtos vendidos de uma venda, então preciso criar uma lista de produtos lançados para registrar a venda | **DONE** |
| Confirmar venda | Como vendedor, eu quero registrar a minha venda de produtos cadastrados, então preciso de uma forma para fazer o registro do meio de pagamento, emitir um comprovante da venda realizada e informar o CPF do cliente caso necessário. | **DONE** |
| Criar campanha | Como um Administrador, eu quero criar campanhas para oferecer pontos de fidelidade, então preciso cadastrar campanhas no sistema | **DONE** |
| Histórico movimentação token - campanha | Como um administrador, eu quero gerenciar os pontos da campanha, então preciso de uma lista das movimentações do token | **DONE** |
| Creditar ou Descontar pontos de fidelidade | Como um lançador de vendas, eu quero creditar ou descontar pontos de fidelidade do cliente, então preciso de inserir informações do cliente no momento da venda | **DONE** |
| Loja - criar token para campanhas | Como um administrador, eu quero criar um token para a loja, então implementar um plano de fidelidade para a loja | **DONE** |
| Abertura do caixa | Como um operador de caixa, eu quero informar o valor inicial do meu caixa, então  abrir o caixa e manter o registro para conferência | **DONE** |
| Caixa listar recebíveis | Como um operador de caixa, eu quero visualizar todos os lançamentos do caixa e selecionar um deles, então efetuar o recebimento e registro das operações | **DONE** |
| Fechamento do caixa | Como um operador do caixa, eu quero emitir um relatório com as operações do caixa, então fazer o fechamento e a conferência do caixa | **DONE** |
| Listar contas a receber | Como um usuário financeiro, eu quero registrar os recebimentos do estabelecimento, então controlar o fluxo de caixa | **DONE** |
| Contas a pagar | Como um usuário financeiro, eu quero registrar e administrar as contas a pagar do estabelecimento, então preciso de um controle de contas a pagar | **DONE** |
| Cadastrar NF de saida | Quando uma nota fiscal for emitida, eu quero ter a possibilidade de cadastrar essa nota fiscal no ERP, para que eu possa ter o controle fiscal | **DONE** |
| Cadastrar NF de entrada | Quando eu receber uma nota fiscal de um fornecedor / prestador, eu quero ter a possibilidade de cadastrar essa nota fiscal no ERP, para que eu possa ter um controle fiscal das notas de entrada | **DONE** |
| Fluxo de caixa | Como um usuário financeiro, eu quero acompanhas as entradas e saídas do estabelecimento, então vou acessar a página de fluxo de caixa | **DONE** |
| Fechamento de períodos contábeis | Como um usuário contabil, eu quero definir o status das movimentaçõe como em fechamento para analisar as entradas e saídas do estabelecimento, então vou acessar o fechamento de períodos contábeis | **DONE** |

