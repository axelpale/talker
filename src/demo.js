var lately = require('./lately')
var asyn = require('async')

var distr = lately({
  hello: 4,
  world: 3
})

var helloed = distr.learn({
  space: 5,
  book: 3,
  food: 1,
  banana: 3,
  drink: 2,
  rare: 2
})

var synth = window.speechSynthesis
var voices = synth.getVoices()
var voice = voices[3]

window.utterances = []

var speak = (word, cb) => {
  var utterThis = new window.SpeechSynthesisUtterance(word)
  utterThis.voice = voice
  utterThis.rate = 0.75 // speed
  utterThis.volume = 0.75
  window.utterances.push(utterThis)

  if (typeof cb !== 'function') cb = () => {}
  utterThis.onend = cb

  synth.speak(utterThis)
}

document.querySelector('#start-talk').onclick = function () {
  console.log('Speaking...')
  asyn.forever((next) => {
    var sampledWord = helloed.sampleOne()
    speak(sampledWord)
    setTimeout(next, 1000)
  })
}
