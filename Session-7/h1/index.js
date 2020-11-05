const position = ['beforebegin', 'afterbegin', 'beforeend', 'afterend']
const container = document.getElementById('list');
for(let i = 0; i < 4 ; i++) {
    for(let x = 0;x < 3;x++){
        container.insertAdjacentHTML(position[i], `<li>${x}</li>`)
    }
  
}
