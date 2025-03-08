const daysGr = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGr = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαϊου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function() {

  this.setInterval(() => printGRDate(), 1000)

  this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
    onInsertHandler({key: count + 1, note: document.querySelector('#inputNote').value.trim(), softDelete: false})
  })

  this.document.querySelector('#inputNote').addEventListener('keyup', function(event, ) {
    if(event.key === 'Enter') {
      // event.target είναι ίδιο με querySelector απλά όταν 
      // είναι ίδιο με το element που έχουμε κάνει register 
      // το event (σε αυτή την περίπτωση το inputNote)
      onInsertHandler({key: count + 1, note: event.target.value, softDeleted: false})  
      
    }
   
  })

})

function printGRDate() {
  const currentDate = new Date()   // είναι datetime δινει και ωρες/λεπτα/δευτερολεπτα
  const day = currentDate.getDay()
  const date = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const seconds = currentDate.getSeconds()

  // Strings
  const dayStr = daysGr[day] 
  const monthStr = monthsGr[month]   
  
  const dateStr = `${dayStr}, ${date}, ${monthStr}, ${year}`
  const timeStr = `${(hours < 10) ? '0' : ''}${hours}:${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`
  document.querySelector('#dateTxt').innerHTML = dateStr + `<br>` + timeStr
}
/**
 * Controller in MVC
 * @param {Object} data 
 * @returns nothing if data.note is empty or null
 */
function onInsertHandler(data) {
  if(!data.note) return
  insertNote(data)
  reset()
}

/**
 * Model function
 */
function insertNote(note) {
  notes = [...notes, note]   // add σε array με immutable τρόπο
  count++;
  renderNotes()
}

/**
 * View rendering
 */

function renderNotes(){
  const container = document.getElementById("notesWrapper")
  
  container.innerHTML = notes.map(note => `
    <div id="${'noteTemplate' + note.key}" class="flex justify-between items-center px-[10px] py-[2px] border-b border-black">
      <div id="${'noteInfo' + note.key}" class="flex items-center">
        <input id="${'noteCheck' + note.key}" type="checkbox" onclick="strikeThrough(${note.key})" class="w-[25px] h-[25px] mr-[5px]" ${note.softDeleted ? 'checked' : ''}>
        <label id="${'noteTxt' + note.key}" for="${'noteCheck' + note.key}" class="w-[200px] max-h-[150px] leading-[1.2rem] overflow-hidden break-words whitespace-normal text-base ${note.softDeleted ? 'line-through text-gray-500' : ''}">${note.note}</label>
      </div>
      <button type="button" id="${'noteDeleteBtn' + note.key}" class="w-[35px] h-[35px]" onclick="deleteNote(${note.key})">X</button>
    </div>
    `).join("")
}

function strikeThrough(key) {
  notes = notes.map(note => 
    note.key === key ? {...note, softDeleted: !note.softDeleted} : {...note}   // update του state
  )
  renderNotes()
}

function deleteNote(key) {
  notes = notes.filter(note => note.key !== key)
  renderNotes()
}

function reset() {
  document.querySelector("#inputNote").value = ""
}