import 'modern-normalize'
import './style.scss'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

const appEl = document.querySelector<HTMLDivElement>('#app')
const counterEl = document.querySelector<HTMLButtonElement>('#counter')

if (!appEl) {
  throw new Error('#app not found')
}

if (!counterEl) {
  throw new Error('#counter not found')
}

appEl.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(counterEl)
