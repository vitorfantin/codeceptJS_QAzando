Feature('veiculos');

Scenario('Listar todos os Veículos GET 200 - Com Sucesso', ({ I }) => {
    I.sendGetRequest('/cars');
    I.seeResponseCodeIs(200);
});


Scenario('Cadastro Veiculo POST 201 - Com Sucesso', ({ I }) => {
    I.sendPostRequest('/cars', {
        "brand": "volks",
        "model": "fusca",
        "year": 2019
    });
    I.seeResponseCodeIs(201);
    I.seeResponseContainsJson({ "message": "Car successfully registered!" });
});


Scenario('Simulando Erro 404 - Not Found', ({ I }) => {
    I.sendPostRequest('/cars', {
        "brand": "Fantin",
        "model": "Vitor",
        "year": 1995
    });
    I.seeResponseCodeIs(404);
    I.seeResponseContainsJson({ "message": "Vehicle not found." });
});

Scenario('Simulando Erro 500 - Internal Server Error', ({ I }) => {
    I.sendPostRequest('/cars', {
        "brand": "volks",
        "model": "up tsi",
        "year": 2019
    });
    I.seeResponseCodeIs(500);
    I.seeResponseContainsJson({ "message": "Internal server error: model 'up tsi' is not allowed." });
});