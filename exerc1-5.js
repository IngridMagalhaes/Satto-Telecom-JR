function habilidades(usuarios){
    for(user of usuarios){
           console.log('O ' + user.nome + ' possui as habilidades: ' + user.habilidades.join(',') )
    }
}
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", 'Elixir']
    }
    
];
habilidades(usuarios);