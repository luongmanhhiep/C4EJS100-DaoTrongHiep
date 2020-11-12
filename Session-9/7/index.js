async function load(){
    const conn = await fetch('http://quotes.rest/qod.json');
    const data = await conn.json();
    console.log(data)
    show(data);
}
load();
function show(data){
    let quote = data.contents.quotes[0].quote;
    let author = data.contents.quotes[0].author;
    const main = document.getElementById('main');
    main.insertAdjacentHTML('beforeend',`
    <p><b>${quote}</b></p>
    <p><b>${author}</b></p>
    `)
}