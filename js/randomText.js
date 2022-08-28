const  randomText = () =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data => innnTextRandom(data.quote))
}

const innnTextRandom = data =>{
    const settext = document.getElementById('randomText');
    const p = document.createElement('p');
    p.innerText = data;
    settext.appendChild(p)
}

randomText()

