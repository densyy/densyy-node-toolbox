# Densyy Node Toolbox

Uma coleção de utilitários e middlewares Node.js para construção de aplicações web robustas.

## Instalação

```bash
npm install densyy-node-toolbox
```

## Recursos

### Middlewares

- **node-cors** - Middleware CORS com headers de segurança pré-configurados
- **node-helmet** - Middleware de segurança que configura vários headers HTTP
- **node-ids** - Valida IDs MongoDB nos parâmetros da requisição
- **node-morgan** - Middleware para logging de requisições HTTP
- **node-multer** - Manipulação de upload de arquivos com nomes gerados automaticamente
- **node-token** - Middleware de autenticação JWT

### Ferramentas

- **node-jwt** - Utilitários para JSON Web Token
  - Gerar tokens
  - Verificar tokens
  - Extrair dados dos tokens

- **node-password** - Utilitários para hash e validação de senhas com bcrypt

- **node-response** - Formatador padronizado de respostas HTTP
  - Respostas de sucesso (200)
  - Respostas de criação (201)
  - Respostas de erro com códigos personalizados
  - Respostas de erro do servidor (500)
  - Respostas vazias (method: options)

- **node-validator** - Validação de entrada com regras incorporadas:
  - Campos obrigatórios
  - Valores mínimos/máximos
  - Comprimentos de string
  - Tipos de dados (número, string, array, booleano)
  - Formato de email
  - URLs
  - Datas
  - Valores hexadecimais
  - Valores permitidos (enum)
  - Slugs
  - CPF
  - CNPJ
  - Números de telefone brasileiros

### Utilitários

- **node-currency** - Formatação e cálculos de moeda

- **node-date** - Utilitários para manipulação de datas
  - Adicionar horas/dias/meses/anos
  - Formatar datas (formatos BR/EUA)
  - Converter entre strings de data e objetos Date

- **node-logger** - Utilitário de logging assíncrono com buffer

- **node-number** - Formatação e cálculos de números

- **node-string** - Utilitários para manipulação de strings
  - Remover acentos
  - Converter para slug
  - Capitalizar texto
  - Conversão para título
  - Gerar hashes aleatórios

## Exemplos de Uso

### Autenticação JWT

```javascript
import NodeJWT from 'densyy-node-toolbox/core/tools/node-jwt.js'

const jwt = new NodeJWT()

// Gerar token
const token = jwt.generateToken(payload, 'secret', '7d')

// Verificar token
const isValid = await jwt.verifyToken(token, 'secret')
```

### Validação de Entrada

```javascript
import NodeValidator from 'densyy-node-toolbox/core/tools/node-validator.js'

const rules = {
  email: 'required|email',
  password: 'required|minLength:8',
  age: 'required|number|min:18'
}

const validator = new NodeValidator(rules)
const result = await validator.validate(data)
const error = validator.firstError()
```

### Respostas HTTP

```javascript
import NodeResponse from 'densyy-node-toolbox/core/tools/node-response.js'

const response = new NodeResponse()

// Resposta de sucesso
response.success(res, { data: 'Sucesso!' })

// Resposta de erro
response.simpleError(res, 400, 'Entrada inválida')
```

### Upload de Arquivo

```javascript
import nodeMulter from 'densyy-node-toolbox/core/middlewares/node-multer.js'

app.post('/upload', nodeMulter, (req, res) => {
  // Acesse o arquivo enviado em req.file
})
```
