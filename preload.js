const path = require('path')
const fs = require('fs')

let saveFileFolder = 'saves'
let saveFilePath = ''
let loadFilePath = ''

function saveData(evt) {
    try {
        fs.mkdirSync('saves')
        console.log('Created save directory..')
    } catch (err) {
        console.log('Save directory present..')
    }

    fs.writeFile(saveFilePath, evt.target.textContent, function (err) {
        if (err === null) console.log('Saved to file: "' + saveFilePath + '" (' + evt.target.textContent.length + ' bytes)')
        else {
            console.log('Error when saving to file: ' + saveFilePath)
            console.log(err)
        }
    })
}

function loadData(evt)  {
    try {
        let data = ''
        fs.readFile(loadFilePath, function (err, data) {
            if (err === null) {
                console.log('Loaded from file: "' + loadFilePath + '" (' + data.toString().length + ' bytes)')
                
                let savePanel = document.querySelector('#savePanel')
                savePanel.textContent = data.toString()
                savePanel.dispatchEvent(new Event('input'))

            } else {
                console.log('Error when loading from file: ' + loadFilePath)
                console.log(err)
                let savePanel = document.querySelector('#savePanel')
                savePanel.textContent = ''
                savePanel.dispatchEvent(new Event('input'))
            }
        })
    } catch (err) {
        console.log('Error when loading from file: ' + loadFilePath)
        console.log(err)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#savePanel').addEventListener('change', saveData)
    document.querySelector('#loadSlot').addEventListener('change', loadData)

    document.querySelector('body').addEventListener('keyup', function(evt) {
        let slotNum = ''
        switch (evt.code) {
            case 'Digit1':
            case 'Digit2':
            case 'Digit3':
            case 'Digit4':
            case 'Digit5':
            case 'Digit6':
            case 'Digit7':
            case 'Digit8':
            case 'Digit9':
                slotNum = evt.code.replace('Digit', '')
                break
            default:
                return
                break
        }

        if (slotNum !== '') {
            if (evt.shiftKey) saveFilePath = path.join(saveFileFolder, 'slot_'+ slotNum +'.txt')
            else loadFilePath = path.join(saveFileFolder, 'slot_' + slotNum + '.txt')
        }
    })
})
