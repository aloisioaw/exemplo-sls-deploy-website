## Exemplo rápido para criar um site usando S3
Nesse repositório você encontra os códigos necessários para disponibilizar conteúdos HTML em um Bucket no serviço S3 da AWS.
As configurações para que o Bucket sirva o conteúdo como se fosse uma página são feitas pelo próprio Serverless Framework no momento do deploy.

No arquivo "exemplo_permissions.json" eu deixei um exemplo das permissões necessárias para efetuar o deploy desse projeto.

Nota: não utilize esse projeto em produção. Tudo o que estiver neste repositório serve como material de estudo e não foi testado em ambientes de produção.

### Após o checkout
Rode o comando ´yarn´.

### Antes do deploy
Trocar parte o body de reposta da Lambda(arquivo lambda/handler.js, onde estiver escrito "Usuário :D (Seu nome aqui)").

### Primeiro deploy
Rode ´sls deploy´.

### Depois do deploy
Pegar a URL do endpoint GET criado para a Lambda e inserir em index.html.

### Segundo deploy
Rode ´sls deploy´ novamente.