# password-generator
# Projeto de Gerenciamento de Senhas e QR Code

Este é um projeto de aprendizado que abrange a criação e manipulação de senhas, além de funcionalidades relacionadas a QR Codes. O projeto utiliza Node.js e demonstra como organizar um código de forma modular.

## Estrutura do Projeto

```
src/
|-- prompts/
|   |-- prompt-main.js
|   |-- prompt-qrcode.js
|-- services/
|   |-- password/
|   |   |-- create.js
|   |   |-- handle.js
|   |-- qr-code/
|   |   |-- create.js
|   |   |-- handle.js
|   |-- utils/
|       |-- permitted-characters.js
```

### Descrição dos Diretórios e Arquivos

- **prompts/**: Contém os scripts principais para interações com o usuário.
  - **prompt-main.js**: Script principal que gerencia a execução do programa.
  - **prompt-qrcode.js**: Script para manipulação de QR Codes.
  
- **services/**: Contém os serviços principais da aplicação, divididos em subdiretórios por funcionalidade.
  - **password/**: Serviços relacionados à criação e manipulação de senhas.
    - **create.js**: Script para a criação de senhas.
    - **handle.js**: Script para manipulação de senhas (validação, atualização, etc).
    
  - **qr-code/**: Serviços relacionados à criação e manipulação de QR Codes.
    - **create.js**: Script para a criação de QR Codes.
    - **handle.js**: Script para manipulação de QR Codes.
    
  - **utils/**: Utilitários usados em várias partes da aplicação.
    - **permitted-characters.js**: Script que define os caracteres permitidos para criação de senhas.

## Funcionalidades

- **Criação e Manipulação de Senhas**:
  - Gerar senhas seguras.
  - Validar a força de uma senha.
  - Atualizar senhas existentes.

- **Criação e Manipulação de QR Codes**:
  - Gerar QR Codes a partir de textos ou URLs.
  - Exibir QR Codes no terminal.

## Pacotes Utilizados

- **[RegEx](https://blog.formacao.dev/introducao-as-regex/)**: Utilizado para validação de senhas e outras operações de correspondência de padrões.
- **chalk** (opcional): Para estilizar a saída do terminal.
- **qrcode-terminal**: Para gerar e exibir QR Codes no terminal.

## Instalação

1. Clone o repositório para o seu ambiente local:
    ```sh
    git clone https://github.com/seu-usuario/projeto-senhas-qrcode.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd projeto-senhas-qrcode
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

### Interações com Prompts

- **Prompt Principal**:
    ```sh
    node src/prompts/prompt-main.js
    ```

- **Prompt de QR Code**:
    ```sh
    node src/prompts/prompt-qrcode.js
    ```

### Exemplo de Uso

#### Criação de Senha

```javascript
const { createPassword } = require('../services/password/create');

const newPassword = createPassword(12);
console.log('Nova Senha:', newPassword);
```

#### Manipulação de Senha

```javascript
const { validatePassword } = require('../services/password/handle');

const isValid = validatePassword('ExemploSenha123!');
console.log('Senha é válida:', isValid);
```

#### Criação de QR Code

```javascript
const { createQRCode } = require('../services/qr-code/create');

createQRCode('https://example.com');
```

#### Exibição de QR Code no Terminal

```javascript
const { displayQRCode } = require('../services/qr-code/handle');

displayQRCode('https://example.com');
```

## Estrutura das Classes e Funções

### Password

#### create.js

```javascript
function createPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

module.exports = { createPassword };
```

#### handle.js

```javascript
function validatePassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
}

module.exports = { validatePassword };
```

### QR Code

#### create.js

```javascript
const qrcode = require('qrcode-terminal');

function createQRCode(text) {
    qrcode.generate(text, { small: true }, function (qrcode) {
        console.log(qrcode);
    });
}

module.exports = { createQRCode };
```

#### handle.js

```javascript
const qrcode = require('qrcode-terminal');

function displayQRCode(text) {
    qrcode.generate(text, { small: true }, function (qrcode) {
        console.log(qrcode);
    });
}

module.exports = { displayQRCode };
```

## Contribuição

Se você deseja contribuir com este projeto, por favor, siga os passos abaixo:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça as modificações desejadas e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório original (`git push origin feature/nova-funcionalidade`).
5. Crie um novo Pull Request.

## Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
