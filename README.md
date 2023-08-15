# Login Backend

Integração com o projetinho frontend da @User. Para isso, foi necessáiro o desenvolvimento da web view
de signup e user.

🔗 projeto dela: [ Link do projeto dela ] <br>
🔗 Ajustes de integração: [ Link do seu projeto que fez a integração ]

## Rotas

No backend temos rotas autenticadas e não autenticadas. Além disso, têm  rotas para validação de registros de novos usuários

Method | EndPoint | Body Params | Query Params | Headers | Returns
:---------: | :------ | :-------: | :--------: | :--------: | :--------:
<strong>POST</strong>| /noauth/signin |   { "user": String, "password": String }  | - | - | authToken
<strong>GET<strong>  | /noauth/signup | - | - | - | void
<strong>dashboard<strong>  | /auth/dashboard |   - | authToken | - | user config


## Dependências
Antes de executar o server, é necessário instalar as dependências do projeto
```console
npm install
```

## Executar o código
  Para executar o servidor na porta 4000, para isso:
```console
npm start
```
