# 🚀 Mentoria Masterclass QAzando - Testes Automatizados **Framework CodeceptJS**.

Este repositório faz parte do treinamento **Masterclass da [QAzando](https://qazando.com.br/)**.  
Aqui está centralizado todo o aprendizado utilizando o **[Framework CodeceptJS](https://codecept.io/)**.

---

## 🖥️ Ambiente Utilizado

- **WSL2** com **Ubuntu 22.04 LTS**
- **Node.js**
- **CodeceptJS**
- **Playwright**
- **WebDriver**

---

## 📦 Instalação das Dependências

### 1. Instalar Node.js no Ubuntu via NVM


# Descarregar e instalar a NVM:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh
```
# Em vez de reiniciar a shell, carregue o NVM:
```bash
. "$HOME/.nvm/nvm.sh"
```
# Instalar Node.js versão 22 (LTS mais recente):
```bash
nvm install 22
```
# Consultar a versão da Node.js:
```bash
node -v  # Deveria imprimir "v22.19.0"
nvm current  # Deveria imprimir "v22.19.0"
```
# Consultar a versão da npm:
```bash
npm -v  # Deveria imprimir "10.9.3"

```

### 2. Instalar os frameworks (executar dentro da pasta do projeto)


📂 Instalar CodeceptJS + Playwright no diretório "tests"
```bash
npx create-codeceptjs tests
```
 ou 

📂 Instalar CodeceptJS + WebdriverIO no diretório "tests"
```bash
npx create-codeceptjs tests --webdriverio
```
## ▶️ Inicializar o projeto

Se você criou uma pasta para instalar playwright ou webdriver, precisa no terminal estar dentro da pasta no meu caso mandei criar dentro da pasta tests

```bash
npx codeceptjs init
```

Para obter suporte à autocompletação:

```bash
npx codeceptjs def
```

## ▶️ Execução dos Testes

### 🔹 Rodar todos os testes (com passos visíveis)
```bash
npx codeceptjs run --steps
```

### 🔹 Rodar com UI (Interface Gráfica)
```bash
npx codeceptjs ui
```

### 🔹 Rodar em modo Headless (sem abrir navegador)
```bash
npm run codeceptjs:headless
```

### 🔹 Rodar apenas um arquivo de teste específico
```bash
npx codeceptjs run tests/nomeDoArquivo_test.js --steps
```

### 🔹 Rodar cenário específico (usando .only no teste)
```js
Scenario.only('nome do cenário', ({ I }) => {
   // passos do teste
});
```

### 🔹 Rodar testes por tag 
```bash
npx codeceptjs run --grep @suatag --steps
```

---

## 💡 Dica Final
Mantenha sempre o projeto atualizado:  
```bash
npm update
```

Comando único para limpar o projeto
```bash
npm uninstall codeceptjs playwright webdriverio && rm -rf node_modules package-lock.json
```
