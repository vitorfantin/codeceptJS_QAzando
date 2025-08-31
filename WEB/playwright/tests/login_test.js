Feature('login');

Scenario('Login com sucesso',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/'); // <-- URL do site a ser testado
    I.waitForText('Login', 5); // <-- espera até 5 segundos para o texto 'Login' aparecer na página
    I.click('Login'); // <-- clica no link ou botão com o texto 'Login'
    I.fillField('#user', 'vitor@teste.com'); // <-- preenche o campo com id 'user' com o e-mail
    I.fillField('#password', 'senha123456'); // <-- preenche o campo com id 'password' com a senha
    I.click('#btnLogin'); // <-- clica no botão com id 'btnLogin' para enviar o formulário
    I.waitForText('Login realizado', 5); // <-- espera até 5 segundos para o texto 'Login realizado' aparecer na página
    I.wait(5); // <-- espera 5 segundos antes de finalizar o teste
 
}).tag('@login').tag('@sucesso'); // <-- tags para categorizar o teste

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/');
    I.waitForText('Login', 5);
    I.click('Login');
    I.fillField('#user', 'vitor@teste.com');
    I.click('#btnLogin');
    I.waitForText('Senha inválida.', 5);
    I.wait(5);
 
}).tag('@login').tag('@falha');

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/');
    I.waitForText('Login', 5);
    I.click('Login');
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.', 5);
    I.wait(5);
 
}).tag('@login').tag('@falha');

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
    I.amOnPage('https://automationpratice.com.br/');
    I.waitForText('Login', 5);
    I.click('Login');
    I.fillField('#password', 'senha123456');
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.', 5);
    I.wait(5);
 
}).tag('@login').tag('@falha');
