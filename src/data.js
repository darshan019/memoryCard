import uniqid from 'uniqid'
import alphaLegion from './assets/alphaLegion.png'
import bloodAngels from './assets/bloodAngels.png'
import darkAngels from './assets/darkAngels.png'
import deathGuard from './assets/deathGuard.png'
import emperorsChildren from './assets/emperorsChildren.png'
import imperialFists from './assets/imperialFists.png'
import ironHands from './assets/ironHands.png'
import ironWarriors from './assets/ironWarrior.png'
import nightLords from './assets/nightLords.png'
import  ravenGuard from './assets/ravenGuard.png'
import salamanders from './assets/salamanders.png'
import sonsOfHorus from './assets/sonsOfHorus.png'
import spaceWolf from './assets/spaceWolf.png'
import thousandSons from './assets/thousandSons.png'
import ultraMarines from './assets/ultraMarines.png'
import whiteScars from './assets/whiteScars.png'
import wordBearers from './assets/wordBearers.png'
import worldEaters from './assets/worldEaters.png'


let levelOneData = [
  {
    name: 'Alpha Legion',
    image: alphaLegion,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Imperial Fists',
    image: imperialFists,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Emperor\'s Children',
    image: emperorsChildren,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Salamanders',
    image: salamanders,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Death Guard',
    image: deathGuard,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Blood Angels',
    image: bloodAngels,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Iron Hands',
    image: ironHands,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Dark Angels',
    image: darkAngels,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Night Lords',
    image: nightLords,
    id: uniqid(),
    clicked: false
  }
  
]

let levelTwoData = [
  {
    name: 'Iron Warriors',
    image: ironWarriors,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Raven Guard',
    image: ravenGuard,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Space Wolves',
    image: spaceWolf,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'White Scars',
    image: whiteScars,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Ultramarines',
    image: ultraMarines,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Sons Of Horus',
    image: sonsOfHorus,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Word Bearers',
    image: wordBearers,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'World Eaters',
    image: worldEaters,
    id: uniqid(),
    clicked: false
  },
  {
    name: 'Thousand Sons',
    image: thousandSons,
    id: uniqid(),
    clicked: false
  }
]

export { levelOneData, levelTwoData }