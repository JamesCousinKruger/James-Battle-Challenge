// HTML DIVS
const messageBox = document.getElementById('message')
const myScoreBox = document.getElementById('my-score')
const jamesScoreBox = document.getElementById('james-score')

// POSSIBLE VALUES FOR JAMES TO CHOOSE FROM
const jamesChoices = ['batte', 'gaz', 'maskgaz']

// THE SCORES
let myScore = 20;
let jamesScore = 20;

// SELECT A RANDOM ITEM - THE BRAIN
const selectRandomItem = array => array[Math.floor(Math.random() * array.length)]

// VISUAL CHANGES
const classToggle = function(item, className) {
  document.querySelector(`.${item}`).classList.add(className)  
  setTimeout( function() {
   document.querySelector(`.${item}`).classList.remove(className)
    }, 800)
}

// PLAY THE GAME WHEN CLICKED
const play = function(userChoice) {
  let jamesChoice = selectRandomItem(jamesChoices)
 
  switch (userChoice + jamesChoice) {
    case 'battebatte':
    case 'gazgaz':
    case 'maskgazmaskgaz':
      classToggle(userChoice, 'gray-glow')
      break
      
    case 'battegaz':
    case 'gazmaskgaz':
    case 'maskgazbatte':

      classToggle(userChoice, 'red-glow')
      myScore--
      break
      
    case 'battemaskgaz':
    case 'gazbatte':
    case 'maskgazgaz':
 
      classToggle(userChoice, 'green-glow')
      jamesScore--
      break
      
  }
  showMessage(userChoice + jamesChoice)
  document.getElementById('my-score').innerText = myScore+" pv"
  document.getElementById('james-score').innerText = jamesScore+" pv"
  
  if (myScore == 0 && jamesScore > 0) {
    jameswin()
    alert('Tu pensais quoi ? James est le fils spirituel de Chuck Norris, il est impossible de gagner...')
    myScore = 20
    jamesScore = 20
  }
  if (jamesScore == 0 && myScore > 0) {
    userwin()
    alert('James est bon seigneur cette fois ci, il te laisse cette victoire mais gare à toi en rentrant chez toi...')
    myScore = 20
    jamesScore = 20
  }
}

// SHOW MESSAGE
const showMessage = items => {
  let term = ''
  switch (items) {
    case 'maskgazgaz':
    case 'gazmaskgaz':
      term = 'Le masque à gaz est insensible à la gazeuse ! Le porteur de la gazeuse se prend un coup de poing.'
      break
      
    case 'gazbatte':
    case 'battegaz':
      term = 'Impossible au porteur de la batte de porter un coup sans se prendre du gaz, de ce fait, il pleure et vomis partout...'
      break
      
    case 'battemaskgaz':
    case 'maskgazbatte':
      term = 'Mauvais choix pour le porteur du masque à gaz ! Il se retrouve sans défense... et sans tête...'
      break
      
    default:
      term = 'Aucun de vous ne prend le dessus sur son adversaire !'
      break
  }
  messageBox.innerText = term
}

const userwin = function() {
  let img = document.getElementById('userwin')
  img.style.display = 'block'
}

const jameswin = function() {
  let img = document.getElementById('jameswin')
  img.style.display = 'block'
}

// CHOOSE PLAYER
const choosePlayer = function(player) {
  let img = document.querySelector(`#${player} img`)
  let url = img.src
  document.getElementById('player-name').innerText = player;
  
 // RAMJET
  ramjet.transform(img, myScoreBox.parentNode, {
  	done: function() {
      document.querySelector('.characters').classList.add('fade')
      myScoreBox.parentNode.style.background = `url(${url})`
      document.querySelector('.challenge').classList.add('show')
    }
  })
}
console.log()