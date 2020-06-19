
function adress({rua:rua,numero:numero,bairro:bairro,cidade:cidade,uf:uf})  {    
    console.log('O usuário mora em ' + cidade + '/' + uf + ', no bairro ' + bairro + ', na rua ' + rua + ' com n° ' + numero)
}
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "Sâo Paulo",
    uf: "SP"
};
adress(endereco);

