let count = 0
const countEl = document.getElementById('count-el')
const entryEl = document.getElementById('entry-el')
const message = 'Previous Entries: '

function increment() {
  if ((count) => 0) {
    count++
  }
  countEl.textContent = count
}

function saveEntries() {
  if (count != 0) {
    const countStr = count + ' - '
    entryEl.textContent += countStr
    count = 0
    countEl.textContent = count
  }
}

function clearAll() {
  count = 0
  countEl.textContent = count
  entryEl.textContent = message
}
