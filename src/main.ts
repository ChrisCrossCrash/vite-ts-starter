// Inspired heavily by the tutorial:
// https://www.youtube.com/watch?v=bAwEj_mSzOs

import anime from 'animejs/lib/anime.es.js'
import './style.scss'

let rows: number
let cols: number

const TILE_SIZE = 50

const colors = [
  'rgb(229, 57, 53)',
  'rgb(253, 216, 53)',
  'rgb(244, 81, 30)',
  'rgb(76, 175, 80)',
  'rgb(33, 150, 243)',
  'rgb(156, 39, 176)',
]

const grid = document.querySelector<HTMLDivElement>('#tiles')

if (!grid) {
  throw new Error('Grid element not found')
}

let count = -1

const handleOnClick = (event: MouseEvent) => {
  count = (count + 1) % colors.length

  const targetIndex = Array.from(grid.children).indexOf(
    event.target as HTMLElement
  )

  anime({
    targets: '.tile',
    backgroundColor: colors[count],
    delay: anime.stagger(20, {
      grid: [cols, rows],
      from: targetIndex,
    }),
  })
}

const createTile = (index: number) => {
  const tile = document.createElement('div')
  tile.classList.add('tile')
  tile.onclick = handleOnClick
  return tile
}

const setupGrid = () => {
  grid.innerHTML = ''
  rows = Math.floor(grid.clientHeight / TILE_SIZE)
  cols = Math.floor(grid.clientWidth / TILE_SIZE)
  grid.style.setProperty('--rows', rows.toString())
  grid.style.setProperty('--columns', cols.toString())

  const tiles = Array.from(Array(rows * cols)).map((_, index) =>
    grid.appendChild(createTile(index))
  )
}

setupGrid()
window.addEventListener('resize', setupGrid)
