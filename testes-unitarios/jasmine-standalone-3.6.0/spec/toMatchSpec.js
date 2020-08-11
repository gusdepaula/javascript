describe('Teste do toMatch', function(){
    it("Deve validar o uso do toMatch'", function() {
        var texto = "teste com Jasmine";
        var obj2 = { valor: true };
        expect(texto).toMatch("Jasmine");
        expect(texto).toMatch(/jasmine/i);
        expect("12345-456").toMatch(/^\d{5}-\d{3}$/);
    });
});