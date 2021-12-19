async function csvField(url, campo){
    let list = [];
    let a ;
     return await axios.get(url).then( function(response){   
        let obj = $.csv.toObjects(response.data);
        for(var i=0; i< obj.length;i++){
            for(var aux in obj[i]){
                if(aux == campo)
                    list.push(obj[i][aux]);         
            }
        }
                     
    }).then(res => list);   
}

async function main (){
    
    const list1 = await csvField('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Character');
    const list2 = await csvField('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Description/role');
    
}


window.onload = () => {

    main()

}
