const UI_MODE_SAVE_KEY = 'ui_mode'
const UI_DARK = 'dark'
const UI_LIGHT = 'light'

// toggle
const htmlToggle = document.querySelector('.toggle')
htmlToggle.onclick = () => onClickToggle()

// initial state
const readStorage = localStorage.getItem(UI_MODE_SAVE_KEY)
const initialState = readStorage ?? UI_LIGHT
initialize(initialState)

function initialize(state) {
   console.log('Made with ❤️ on Sublime Text');
   const toggle = state === UI_DARK ? true : false
   updateHTML(toggle)
}

function onClickToggle() {
   const toggle = !htmlToggle.classList.contains('on')
   updateHTML(toggle)

   const state = toggle ? UI_DARK : UI_LIGHT
   updateStorage(state)
}

function updateHTML(toggle) {
   htmlToggle.classList.toggle('on', toggle)
   document.body.classList.toggle('light', toggle)

   setTimeout(() => {
      document.body.classList.add('ready')
   }, 50)
}

function updateStorage(state) {
   localStorage.setItem(UI_MODE_SAVE_KEY, state)
}
