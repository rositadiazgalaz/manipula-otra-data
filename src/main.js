/* Manejo del DOM */        
 const pokedata = POKEMON.pokemon;

window.onload=()=>{
    for(let i=0; i < pokedata.length; i++){
        document.getElementById("root").innerHTML +=
        `
        <img src="${pokedata[i].img}" alt="hola">
        <p>${pokedata[i].name}</p>
        `
    } 
    //filtrar por tipo  
}