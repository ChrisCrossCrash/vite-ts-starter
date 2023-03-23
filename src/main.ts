import './style.scss'

const trackerBody = document.getElementById('trackerBody')

function saveProgress(day: number, col: number, checked: boolean) {
  const progressData = JSON.parse(localStorage.getItem('progressData') || '[]')
  progressData[day] = progressData[day] || []
  progressData[day][col] = checked
  localStorage.setItem('progressData', JSON.stringify(progressData))
}

function createCheckbox(day: number, col: number) {
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.onchange = (e) => {
    saveProgress(day, col, (e.target as HTMLInputElement).checked)
  }
  return checkbox
}

for (let day = 0; day < 14; day++) {
  const row = document.createElement('tr')

  // Day number
  const dayCell = document.createElement('td')
  dayCell.textContent = (day + 1).toString()
  row.appendChild(dayCell)

  // Other columns with checkboxes
  for (let col = 0; col < 6; col++) {
    const cell = document.createElement('td')
    cell.appendChild(createCheckbox(day, col))
    row.appendChild(cell)
  }

  trackerBody?.appendChild(row)
}

// Load progress from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const progressData = JSON.parse(localStorage.getItem('progressData') || '[]')
  if (!progressData) return
  progressData.forEach((dayData: boolean[], day: number) => {
    const row = trackerBody?.children[day] as HTMLTableRowElement
    if (!dayData) return
    dayData.forEach((checked, col) => {
      const checkbox = row.cells[col + 1].children[0] as HTMLInputElement
      checkbox.checked = checked
    })
  })
})

export {}
