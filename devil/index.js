const urlParams = new URLSearchParams(window.location.search)
const hasImgParam = urlParams.get('has-image')
const params = [
  [ 'niac', urlParams.get('niac')],
  [ 'zurich', urlParams.get('zurich')],
  [ 'smart', urlParams.get('smart')],
  [ 'nemo', urlParams.get('nemo')],
  [ 'ci', urlParams.get('ci')],
].filter(i => i[1])

params.forEach(([planet, param]) => {
  document.querySelector(`.${planet}`)?.classList.add(param)
})

params.some(([_, param]) => param === 'fail') && document.body.classList.add('fail-bg')
hasImgParam && document.body.classList.add('has-img')

const stopAudio = (audio) => {
  audio.pause()
  audio.currentTime = 0
}

let soundIndex = 0
const sounds = [
  new Audio('sounds/sad-trombone.mp3'),
  new Audio('sounds/windows-XP-whutdown.mp3'),
  new Audio('sounds/trombone-2.mp3'),
  new Audio('sounds/windows-error.mp3'),
  new Audio('sounds/windows-XP-startup.mp3'),
  new Audio('sounds/car-alarm.mp3'),
  new Audio('sounds/darth-vader-no.mp3'),
  new Audio('sounds/evil-laugh.mp3'),
  new Audio('sounds/fart.mp3'),
  new Audio('sounds/air-raid-siren.mp3'),
]

document.getElementById('stop-sound').addEventListener('click', () => {
  sounds.forEach(stopAudio)
})

document.querySelector('.ci').addEventListener('click', () => {
  sounds.forEach(stopAudio)
  const param = urlParams.get('sound') || undefined
  const audio = sounds[+param < sounds.length ? +param : soundIndex]
  audio.play()
  soundIndex = (sounds.length - 1) === soundIndex ? 0 : soundIndex + 1
})
