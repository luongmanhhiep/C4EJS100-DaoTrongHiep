async function getAPI(){
    const conn = await fetch('https://sheetdb.io/api/v1/ltc83d1no78gd');
    const data = await conn.json()
    for (let item of data){
        ScriptProcessorNode.push(item.name);
    }
    console.log(prods);
    update_list(prods);
}

async function searchAPI(name){
    const conn = await fetch('https://sheetdb.io/api/v1/ltc83d1no78gd/search?name=${name}')
    const data = await conn.json();
    let prods = [];
    for(let item of data){
        prods.push(item.name);
        console.log(prods);
        update_list(prods);

    }
}

getAPI();
