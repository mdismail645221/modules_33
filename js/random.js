function  randomLover () {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => abc(data.results))
}

const abc = users =>{
    const blockqouteCotainer = document.getElementById('blckquote-container')
   for(let user of users){
       const div = document.createElement('div');
       div.classList.add('random')
       div.innerHTML = `
            <h2>Name: ${user.name.first}</h2>
            <h3>cell:${user.cell}</h3>
            <h4>email:${user.email}</h4>
            <p>location:${user.location.city} Sate: ${user.location.state}</p>
       `;
       blockqouteCotainer.appendChild(div)
   }
}

randomLover()
