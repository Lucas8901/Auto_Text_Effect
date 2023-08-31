const containerEl = document.querySelector('.container');

const careers = [ 'Web Developer', 'Freelancer', 'BackEnd Developer']

let carrerIndex = 0;
let characterIndex = 0

upDateText()

function upDateText(){
  
  characterIndex++
  containerEl.innerHTML = `
  <h1> Eu sou ${careers[carrerIndex].slice(0, characterIndex)}</h1>
  `

  if(characterIndex === careers[carrerIndex].length){
    carrerIndex++
    characterIndex = 0
  }

  if(carrerIndex === careers.length){
    carrerIndex = 0
  }
  setTimeout(upDateText, 250)
}

