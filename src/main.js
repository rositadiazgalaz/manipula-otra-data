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
    SelectTypeByFilter = document.getElementById("selectedByType");
    SelectTypeByFilter.addEventListener("change", ()=>{
        /* OTRA FORMA DE GUARDAR VALOR  DE SELECT */
        //let valueSelect=SelectTypeByFilter.options[SelectTypeByFilter.selectedIndex].value;
        let selectValue=document.getElementById("selectedByType").value;
        console.log(selectValue);
       // console.log(valueSelect);

        let filteringSelectedType =filterByType(pokedata, selectValue);
        document.getElementById("root").innerHTML="";

        filteringSelectedType.forEach(element => {
            document.getElementById("root").innerHTML+=
            `
            <img src="${element.img}">
            <p>${element.name}</p>
            <p>${element.type}</p>
            `
            
        });

    }) 
}