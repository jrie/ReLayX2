const path = require('path')
const fs = require('fs')

let saveFileFolder = path.join(__dirname, 'saves')
let saveFilePath = ''

function saveData(evt) {
    try {
        fs.mkdirSync('saves')
        console.log('Created save directory..')
    } catch (err) {
        console.log('Save directory present..')
    }

    fs.writeFile(saveFilePath, evt.target.textContent, function (err) {
        if (err === null) console.log('Saved to file: "' + saveFilePath + '" (' + evt.target.textContent.length + ' bytes)')
        else console.log('Error when saving:', error)
    })
    
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#savePanel').addEventListener('change', saveData)

    document.querySelector('body').addEventListener('keyup', function(evt) {
        if (evt.shiftKey && evt.keyCode >= 49 && evt.keyCode <= 57) {
            let slotNum = evt.keyCode - 48
            saveFilePath = path.join(saveFileFolder, 'slot_'+ slotNum +'.json')
        }
    })
})
