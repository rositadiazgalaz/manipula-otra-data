/* Manejo del DOM */        
 const pokedata = POKEMON.pokemon;

window.onload=()=>{
    for(let i=0; i < pokedata.length; i++){
        document.getElementById("root").innerHTML +=
        `<div class="col-6 col-md-3 col-lg-2">
            <div class="card" style="width:400px">
                <img class="card-img-top" src="${pokedata[i].img}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${pokedata[i].name}</h4>                
                    </div>
                </div>
        </div>
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

    });
}