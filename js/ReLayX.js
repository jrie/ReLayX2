// Design template generator
function getDesign (designName, width, height) {
  // The design item
  const design = {}

  switch (designName) {
    case 'snowwhite':
      design.background = [['rect'], ['solid'], [['#eee']], [[0, 0, width, height]]]

      design.defaultMouse = ['#fff', '#000', 'round', 'line', [0, 0, 1, 0, 12, 10, 12, 15, 5, 15]]
      design.dragMoveMouse = ['#fff', '#000', 'round', 'line', [
        -0.5, -8.5,
        -2.5, -5.5,
        -4.5, -3.5,
        -2.5, -3.5,
        -2.5, 1.5,
        -7.5, 1.5,
        -7.5, -0.5,
        -9.5, 1.5,
        -11.5, 3.5,
        -9.5, 5.5,
        -7.5, 7.5,
        -7.5, 5.5,
        -2.5, 5.5,
        -2.5, 10.5,
        -4.5, 10.5,
        -2.5, 12.5,
        -0.5, 15.5,
        1.5, 12.5,
        3.5, 10.5,
        2.5, 10.5,
        2.5, 5.5,
        6.5, 5.5,
        6.5, 7.5,
        8.5, 5.5,
        11.5, 3.5,
        8.5, 1.5,
        6.5, -0.5,
        6.5, 1.5,
        2.5, 1.5,
        2.5, -3.5,
        3.5, -3.5,
        1.5, -5.5
      ]]
      design.gridStrokeColor = 'rgba(0,0,0, 0.5)'
      design.hightlighterColor = 'rgba(40,40,40,0.1)'

      design.itemSelectionColor = ['#cecece', '#fff']
      design.containerElement = ['solid', ['#9a9a9a']]
      design.containerBorderColor = 'rgba(0,0,0,0.5)'
      design.notificationColor = '#000'
      design.labelColor = '#ccc'
      design.helpTextColor = '#ccc'

      // Resizers
      design.resizeCorners = ['#222', '#fff', '#ccc']
      // Hot corners
      design.resizers = {
        coords: [
          [[7, 7], [23, 7], [7, 23], [7, 7]],
          [[-7, -7], [-23, -7], [-7, -23], [-7, -7]],
          [[-7, 7], [-23, 7], [-7, 23], [-7, 7]],
          [[7, -7], [23, -7], [7, -23], [7, -7]]
        ],
        start: [
          [0, 0],
          [1, 1],
          [1, 0],
          [0, 1]
        ]
      }

      // Input fields
      design.textCursor = ['#fff', 1]
      design.contentInputFieldText = '#333'
      design.contentInputBackground = 'rgba(0,0,0, 0.6)'
      break
    case 'firebird':
    default:
      design.background = [['rect'], ['solid'], [['#6a0000']], [[0, 0, width, height]]]
      design.defaultMouse = ['#fff', '#000', 'round', 'line', [0, 0, 1, 0, 12, 10, 12, 15, 5, 15]]
      design.dragMoveMouse = ['#fff', '#000', 'round', 'line', [
        -0.5, -8.5,
        -2.5, -5.5,
        -4.5, -3.5,
        -2.5, -3.5,
        -2.5, 1.5,
        -7.5, 1.5,
        -7.5, -0.5,
        -9.5, 1.5,
        -11.5, 3.5,
        -9.5, 5.5,
        -7.5, 7.5,
        -7.5, 5.5,
        -2.5, 5.5,
        -2.5, 10.5,
        -4.5, 10.5,
        -2.5, 12.5,
        -0.5, 15.5,
        1.5, 12.5,
        3.5, 10.5,
        2.5, 10.5,
        2.5, 5.5,
        6.5, 5.5,
        6.5, 7.5,
        8.5, 5.5,
        11.5, 3.5,
        8.5, 1.5,
        6.5, -0.5,
        6.5, 1.5,
        2.5, 1.5,
        2.5, -3.5,
        3.5, -3.5,
        1.5, -5.5
      ]]
      design.gridStrokeColor = 'rgba(255,255,255,0.2)'
      design.hightlighterColor = 'rgba(255,200,0,0.3)'

      design.itemSelectionColor = ['#aa4a00', '#8a1a00']
      design.containerElement = ['solid', ['rgba(56, 0, 0, 0.55)']]
      design.containerBorderColor = 'rgba(0,0,0, 0.5)'
      design.notificationColor = '#aeaeae'
      design.labelColor = '#aeaeae'
      design.helpTextColor = '#aeaeae'

      // Resizers
      design.resizeCorners = ['#111', '#ae0', '#ccc']
      // Hot corners
      design.resizers = {
        coords: [
          [[7, 7], [23, 7], [7, 23], [7, 7]],
          [[-7, -7], [-23, -7], [-7, -23], [-7, -7]],
          [[-7, 7], [-23, 7], [-7, 23], [-7, 7]],
          [[7, -7], [23, -7], [7, -23], [7, -7]]
        ],
        start: [
          [0, 0],
          [1, 1],
          [1, 0],
          [0, 1]
        ]
      }

      // Input fields
      design.textCursor = ['rgba(255,255,255, 0.7', 1]
      design.contentInputFieldText = '#333'
      design.contentInputBackground = 'rgba(0,0,0, 0.6)'
      break
  }

  return design
}

// Main ReLayX
const system = {}
const mouse = {}
// eslint-disable-next-line no-unused-vars
function relayx (canvasItem, designName, width, height, gridX, gridY, gridStart, gridEnd) {
  // General variables
  // The main painting/container canvas
  const canvas = document.getElementById(canvasItem)
  const dc = canvas.getContext('2d')

  // The grid and background canvas
  const bgCanvas = document.querySelector('#relaxBackground')
  const bgContext = bgCanvas.getContext('2d')

  // The mouse canvas
  const overlayCanvas = document.querySelector('#relaxOverlayCanvas')
  const overlayContext = overlayCanvas.getContext('2d')

  // Debug console shortcut
  function lg (msg) {
    if (system.showNotifications) system.notifications.push([0, msg])
    if (window.console) window.console.log(msg)
  }

  // Set styles
  canvas.width = width
  canvas.height = height
  canvas.style.cursor = 'none'

  bgCanvas.width = width
  bgCanvas.height = height
  bgCanvas.style.cursor = 'none'

  overlayCanvas.width = width
  overlayCanvas.height = height
  overlayCanvas.style.cursor = 'none'
  // -----------------------------------------------------------------------

  let design = getDesign(designName, width, height, gridX, gridY)
  system.designNames = ['snowwhite', 'firebird']
  system.currentDesign = system.designNames.indexOf(designName)

  // Our dataholder
  system.width = width
  system.height = height

  // Set the grid for the current canvas based on inputs or defaults
  if (typeof (gridStart) === 'object' && gridStart.length === 2) {
    system.gridStartX = gridStart[0]
    system.gridStartY = gridStart[1]
  } else {
    system.gridStartX = 0
    system.gridStartY = 0
  }
  if (typeof (gridEnd) === 'object' && gridEnd.length === 2) {
    system.gridEndX = gridEnd[0]
    system.gridEndY = gridEnd[1]
  } else {
    system.gridEndX = canvas.width
    system.gridEndY = canvas.height
  }

  // Debug stuff
  /*
    If enabled we draw the mouse drawing coords in x and y for easier
    debugging of custom cursors
    */
  system.debugMouseDrawing = false

  // Regular stuff
  system.gridX = gridX
  system.gridY = gridY
  system.layoutData = []
  system.layoutSize = 0
  system.activeGroup = null
  system.lastGroupAddition = null
  system.groups = []
  system.lastId = 0
  system.drawGrid = true
  system.drawHighlight = true
  system.drawResizers = true
  system.drawImages = true
  system.copyItem = null
  system.keyMap = {}
  system.mirrorHorizontal = true
  system.expandMode = 'border'
  system.spaceGridX = 0
  system.spaceGridY = 0
  system.showHelp = false
  system.showNotifications = true
  system.notifications = []
  system.showHelpNote = true
  system.shiftPressed = false
  system.ctrlPressed = false
  system.storage = window.localStorage || null
  system.drawLabels = true
  system.drawContainers = true
  system.displayBrowserGrid = false
  system.browserSpacingStart = 113
  system.browserSpacing = 113
  system.scrollX = window.scrollX
  system.scrollY = window.scrollY
  system.imgShadow = []
  system.lastActionTime = 0

  mouse.x = 0
  mouse.y = 0
  mouse.threshold = 50

  mouse.offsetX = system.scrollX
  mouse.offsetY = system.scrollY
  mouse.startX = 0
  mouse.startY = 0
  mouse.endX = 0
  mouse.endY = 0
  mouse.selection = null
  mouse.previousSelection = null
  mouse.currentAction = null
  mouse.snapToGrid = false
  mouse.showCursor = false
  mouse.highlightSelection = false
  mouse.cursorAt = [0, 0, 0]
  mouse.cursorText = ''
  mouse.cursorBlinkRate = 28
  mouse.cursorBlink = true
  mouse.hasCorner = null
  mouse.hasCornerPx = [0, 0]

  // Helper functions
  // Create and return a copy of an array item
  function getArrayCopy (arrayItem) {
    const arrayCopy = []
    for (const item of arrayItem) {
      if (typeof (item) === 'object') {
        const subArray = []
        for (const subItem of item) subArray.push(subItem)
        arrayCopy.push(subArray)
      } else arrayCopy.push(item)
    }

    return arrayCopy
  }

  // Create a gradient based on a direction string, x, y coords, width, height and color
  function createGradient (direction, x, y, width, height, colors) {
    let stepSize = 0
    let current = 0.0
    let background

    stepSize = (1.0 / (colors.length - 1)).toPrecision(2)
    current = 1.0
    switch (direction) {
      case 'lr':
        colors = getArrayCopy(colors).reverse()
        break
      case 'rl':
        background = dc.createLinearGradient(x, y, x + width, y)
        break
      case 'tb':
        colors = getArrayCopy(colors).reverse()
        break
      case 'bt':
        break
      default:
        background = dc.createLinearGradient(x, y, x, y + height)
        break
    }

    for (const color of colors) {
      background.addColorStop(current, color)
      current -= stepSize
    }

    return background
  }

  // Draw an design item providing the indexes for
  // drawTypes (rect, line, circle), fillStyles index, colors Index, drawingCoordinate Index
  function drawItem (designItemName, drawTypeIndex, styleIndex, colorIndex, drawingCoordsIndex) {
    if (!design.hasOwnProperty(designItemName)) {
      lg('design name for drawing not defined: ' + designItemName)
      return
    }

    const designItem = design[designItemName]
    const drawtypes = designItem[drawTypeIndex]
    const styles = designItem[styleIndex]
    const colors = designItem[colorIndex]
    const coords = designItem[drawingCoordsIndex]

    let drawType = ['', '']
    let drawStyle = ['', '']
    let useStrokeOnly = false

    for (const index in drawtypes) {
      drawType = drawtypes[index].split('_', 2)
      useStrokeOnly = false

      dc.beginPath()
      switch (drawType[0]) {
        case 'rect':
          dc.rect(coords[index][0], coords[index][1], coords[index][2], coords[index][3])
          break
        case 'line':
        case 'stroke': {
          const linePoints = coords[index]
          const drawingSteps = linePoints.length
          dc.moveTo(linePoints[0], linePoints[1])
          for (let item = 0; item < drawingSteps; item += 2) {
            dc.lineTo(linePoints[item], linePoints[coords + 1])
          }

          dc.lineTo(linePoints[0], linePoints[1])
          break
        }
        case 'circle':
          dc.moveTo(coords[index][0], coords[index][1])
          if (parseFloat(drawType[1]) !== 'NaN') {
            dc.arc(coords[index][0], coords[index][1], drawType[1], 0, 6.3)
          } else {
            lg('No circle size set for designItem, use  \'circle_sizeInPx\' : ' + designItemName + ' at index ' + index)
            return
          }
          break
        default:
          lg('Invalid drawing command for designItem: ' + designItemName + ' at index ' + index)
          return
      }

      dc.closePath()

      // Do the filling
      drawStyle = styles[index].split('_', 2)
      if (drawType[0] === 'stroke') {
        dc.strokeStyle = colors[index][0]
        useStrokeOnly = true
      } else if (drawStyle[0] === 'solid') {
        dc.fillStyle = colors[index][0]
      } else if (drawStyle[0] === 'gradient') {
        if (drawType[0] === 'rect') {
          dc.fillStyle = createGradient(drawStyle[1], coords[index][0], coords[index][1], coords[index][2], coords[index][3])
        } else {
          // Assume that we have boundaries provided if the last item of the design is a two length array
          // else fall back to single color drawing
          if (designItem[designItem.length - 1].length === 2) {
            const boundaryCoords = designItem[designItem.length]
            dc.fillStyle = createGradient(drawStyle[1], coords[index][0], coords[index][1], boundaryCoords[0], boundaryCoords[1])
          } else {
            dc.fillStyle = colors[index][0]
          }
        }
      }

      if (useStrokeOnly) {
        dc.stroke()
      } else {
        dc.stroke()
        dc.fill()
      }
    }
  }

  // Draw the mouse
  function drawMouse () {
    let activeMouse = design.defaultMouse
    let mouseOffsetX = 0
    let mouseOffsetY = 0
    let scaleXY = 1

    switch (mouse.currentAction) {
      case 'inputText':
        // Cursor when we input text into labels and such
        activeMouse = design.defaultMouse
        mouseOffsetX = 0
        mouseOffsetY = 0
        scaleXY = 1
        break
      case 'dragContainer':
      case 'dragGroup':
        // Cursor when dragging a single or a group of containers
        activeMouse = design.dragMoveMouse
        mouseOffsetX = 0
        mouseOffsetY = 0
        scaleXY = 1
        break
      case 'default':
      default:
        // The default mouse cursor
        activeMouse = design.defaultMouse
        mouseOffsetX = 0
        mouseOffsetY = 0
        scaleXY = 1
        break
    }

    const drawingCords = activeMouse[4]
    const drawingSteps = drawingCords.length

    overlayContext.fillStyle = activeMouse[0]
    overlayContext.strokeStyle = activeMouse[1]
    overlayContext.lineJoin = activeMouse[2]

    overlayContext.moveTo(mouse.x + (mouseOffsetX * scaleXY), mouse.y + (mouseOffsetY * scaleXY))
    overlayContext.beginPath()

    if (activeMouse[3] === 'line') {
      overlayContext.lineWidth = 2
      if (system.debugMouseDrawing) {
        for (let index = 0; index < drawingSteps; index += 2) {
          overlayContext.lineTo(mouse.x + Math.round(drawingCords[index] * scaleXY) + mouseOffsetX, mouse.y + Math.round(drawingCords[index + 1] * scaleXY) + mouseOffsetY)
          console.log((Math.round(drawingCords[index] * scaleXY) + mouseOffsetX) + ', ' + (Math.round(drawingCords[index + 1] * scaleXY) + mouseOffsetY))
        }

        console.log('---------------------------------------')
      } else {
        for (let index = 0; index < drawingSteps; index += 2) {
          overlayContext.lineTo(mouse.x + Math.round(drawingCords[index] * scaleXY) + mouseOffsetX, mouse.y + Math.round(drawingCords[index + 1] * scaleXY) + mouseOffsetY)
        }
      }

      overlayContext.closePath()
      overlayContext.stroke()
      overlayContext.fill()
    } else if (activeMouse[3] === 'stroke') {
      overlayContext.lineWidth = 1
      for (let index = 0; index < drawingSteps; index += 2) {
        overlayContext.lineTo(mouse.x + drawingCords[index], mouse.y + drawingCords[index + 1])
      }

      overlayContext.closePath()
      overlayContext.stroke()
    }

    dc.strokeStyle = '#000'
  }

  // Draw the grid
  function drawGrid () {
    let currentX = system.gridStartX
    let currentY = system.gridStartY

    bgContext.lineWidth = 0.5
    bgContext.strokeStyle = design.gridStrokeColor
    bgContext.clearRect(0, 0, system.width, system.height)
    bgContext.beginPath()

    while (currentY <= system.gridEndY) {
      bgContext.moveTo(0, currentY)
      bgContext.lineTo(system.width, currentY)
      currentY += gridY
    }

    while (currentX <= system.gridEndX) {
      bgContext.moveTo(currentX, 0)
      bgContext.lineTo(currentX, system.height)
      currentX += gridX
    }

    bgContext.closePath()
    bgContext.stroke()

    for (const container of system.layoutData) bgContext.clearRect(container[2], container[3], container[4] - container[2], container[5] - container[3])
  }

  function checkMouseDown (evt) {
    system.scrollX = mouse.offsetX + window.scrollX
    system.scrollY = mouse.offsetY + window.scrollY

    mouse.startX = evt.clientX - mouse.offsetX + system.scrollX
    mouse.startY = evt.clientY - mouse.offsetY + system.scrollY
    const mX = evt.clientX - mouse.offsetX + system.scrollX
    const mY = evt.clientY - mouse.offsetY + system.scrollY

    let hasSelection = false
    let offsetGridX = 0
    let offsetX = 0
    let offsetGridY = 0
    let offsetY = 0

    if (evt.button !== 0) return

    if (mouse.currentAction === 'mirrorSelection') {
      if (dc.isPointInPath(mX, mY)) {
        const mStartX = mouse.selection[2]
        const mStartY = mouse.selection[3]
        const mEndX = mouse.selection[4]
        const mEndY = mouse.selection[5]
        const containerX = mEndX - mStartX
        const containerY = mEndY - mStartY

        if (system.mirrorHorizontal) {
          if (system.spaceGridX > 0) {
            offsetGridX = system.spaceGridX
            offsetX = containerX + system.spaceGridX
          } else {
            offsetGridX = mStartX - system.gridStartX
            offsetX = 0
          }

          let startX = system.gridStartX + system.spaceGridX
          if (mX > mStartX) {
            while (startX + offsetX <= system.gridEndX - containerX) {
              // Dont use isPointInPath here as it would mess up with the mirror drawings
              if (mX >= startX + offsetX && mX <= mEndX + offsetX && mY >= mStartY && mY <= mEndY) {
                // Check that we dont have any containers at this location
                for (const container of system.layoutData) {
                  if (mX >= container[2] && mX <= container[4] && mY >= container[3] && mY <= container[5]) {
                    return
                  }
                }
                // otherwise create the container at this position
                createLayoutContainer(mStartX + offsetX, mStartY, mEndX + offsetX, mEndY, true)
                break
              }

              offsetX += offsetGridX + containerX
            }
          } else if (system.spaceGridX !== 0) {
            startX = mStartX
            offsetX = containerX + system.spaceGridX

            while (startX - containerX >= system.gridStartX) {
              // Dont use isPointInPath here as it would mess up with the mirror drawings
              if (mX >= startX - offsetX && mX <= mEndX - offsetX && mY >= mStartY && mY <= mEndY) {
                // Check that we dont have any containers at this location
                for (const container of system.layoutData) {
                  if (mX >= container[2] && mX <= container[4] && mY >= container[3] && mY <= container[5]) {
                    return
                  }
                }
                // otherwise create the container at this position
                createLayoutContainer(mStartX - offsetX, mStartY, mEndX - offsetX, mEndY, true)
                break
              }

              offsetX += containerX + system.spaceGridX
            }
          } else {
            offsetGridX = mStartX - system.gridStartX

            while (offsetX + containerX + offsetGridX <= system.gridEndX - mEndX) {
              offsetX += offsetGridX + containerX

              // Dont use isPointInPath here as it would mess up with the mirror drawings
              if (mX >= mStartX + offsetX && mX <= mEndX + offsetX && mY >= mStartY && mY <= mEndY) {
                // Check that we dont have any containers at this location
                for (const container of system.layoutData) {
                  if (mX >= container[2] && mX <= container[4] && mY >= container[3] && mY <= container[5]) {
                    return
                  }
                }
                // otherwise create the container at this position
                createLayoutContainer(mStartX + offsetX, mStartY, mEndX + offsetX, mEndY, true)
                break
              }
            }
          }
        } else {
          if (system.spaceGridY > 0) {
            offsetGridY = system.spaceGridY
            offsetY = containerY + system.spaceGridY
          } else {
            offsetGridY = mStartY - system.gridStartY
            offsetY = 0
          }
          if (mY > mStartY) {
            const startY = system.gridStartY + system.spaceGridY
            while (startY + offsetY <= system.gridEndY - containerY) {
              // Dont use isPointInPath here as it would mess up with the mirror drawings
              if (mX >= mStartX && mX <= mEndX && mY >= startY + offsetY && mY <= mEndY + offsetY) {
                // Check that we dont have any containers at this location
                for (const container of system.layoutData) {
                  if (mX >= container[2] && mX <= container[4] && mY >= container[3] && mY <= container[5]) {
                    return
                  }
                }

                // otherwise create the container at this position
                createLayoutContainer(mStartX, mStartY + offsetY, mEndX, mEndY + offsetY, true)
                break
              }
              offsetY += offsetGridY + containerY
            }
          } else if (system.spaceGridY !== 0) {
            const startY = mStartY
            offsetY = containerY + system.spaceGridY

            while (startY - containerY >= system.gridStartY) {
              // Dont use isPointInPath here as it would mess up with the mirror drawings
              if (mX >= mStartX && mX <= mEndX && mY >= startY - offsetY && mY <= mEndY - offsetY) {
                // Check that we dont have any containers at this location
                for (const container of system.layoutData) {
                  if (mX >= container[2] && mX <= container[4] && mY >= container[3] && mY <= container[5]) {
                    return
                  }
                }
                // otherwise create the container at this position
                createLayoutContainer(mStartX, mStartY - offsetY, mEndX, mEndY - offsetY, true)
                break
              }

              offsetY += containerY + system.spaceGridY
            }
          } else {
            offsetGridY = mStartY - system.gridStartY

            while (offsetY + containerY + offsetGridY <= system.gridEndY - mEndY) {
              offsetY += offsetGridY + containerY

              // Dont use isPointInPath here as it would mess up with the mirror drawings
              if (mX >= mStartX && mX <= mEndX && mY >= mStartY + offsetY && mY <= mEndY + offsetY) {
                // Check that we dont have any containers at this location
                for (const container of system.layoutData) {
                  if (mX >= container[2] && mX <= container[4] && mY >= container[3] && mY <= container[5]) {
                    return
                  }
                }
                // otherwise create the container at this position
                createLayoutContainer(mStartX, mStartY + offsetY, mEndX, mEndY + offsetY, true)
                break
              }
            }
          }
        }
      }

      return
    }

    for (const layoutItem of system.layoutData) {
      // Draw hot resize corners and check for point in path
      mouse.hasCorner = null
      mouse.hasCornerPx = [0, 0]
      for (let index = 0; index < design.resizers.start.length; ++index) {
        const startX = design.resizers.start[index][0] === 0 ? layoutItem[2] : layoutItem[4]
        const startY = design.resizers.start[index][1] === 0 ? layoutItem[3] : layoutItem[5]

        dc.beginPath()
        for (const coordinate of design.resizers.coords[index]) dc.lineTo(startX + coordinate[0], startY + coordinate[1])
        dc.closePath()

        if (dc.isPointInPath(mouse.x, mouse.y)) {
          mouse.hasCorner = design.resizers.start[index]
          const cornerX = design.resizers.start[index][0] === 0 ? mouse.x - layoutItem[2] : mouse.x - layoutItem[4]
          const cornerY = design.resizers.start[index][1] === 0 ? mouse.y - layoutItem[3] : mouse.y - layoutItem[5]
          mouse.hasCornerPx = [cornerX, cornerY]
          mouse.currentAction = 'resizeCorner'
          return
        }
      }

      // Check layout container pathes
      dc.beginPath()
      dc.rect(layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])
      dc.closePath()

      if (dc.isPointInPath(mX, mY)) {
        if (mouse.selection !== mouse.previousSelection) mouse.previousSelection = mouse.selection
        mouse.selection = layoutItem
        hasSelection = true
        if (layoutItem[9] !== -1) system.activeGroup = layoutItem[9]
        else if (mouse.previousSelection !== null && mouse.previousSelection[9] !== -1 && mouse.currentAction === 'grouping') system.activeGroup = mouse.previousSelection[9]
        else system.activeGroup = null
        break
      }
    }

    if (hasSelection) {
      if (mouse.currentAction === 'grouping') {
        if (mouse.previousSelection === mouse.selection && system.activeGroup === null && system.lastGroupAddition === mouse.selection[0]) return

        if (mouse.selection[9] === -1) {
          // Create new group..
          if (system.activeGroup === null && mouse.selection[9] === -1) {
            system.activeGroup = system.groups.length
            system.groups.push([mouse.previousSelection[0], mouse.selection[0]])
            mouse.selection[9] = system.activeGroup
            mouse.previousSelection[9] = system.activeGroup
          } else if (system.activeGroup !== null) {
            //  or join
            system.groups[system.activeGroup].push(mouse.selection[0])
            mouse.selection[9] = system.activeGroup
          }

          system.lastGroupAddition = mouse.selection[0]
        } else if (system.activeGroup !== null && mouse.selection[9] !== -1 && mouse.previousSelection[9] === system.activeGroup) {
          // Remove entry of group
          const group = system.groups[system.activeGroup]
          const index = group.indexOf(mouse.selection[0])
          if (index !== -1) {
            group.splice(index, 1)

            if (group.length === 1) {
              // Remove a group with a single item left
              system.groups.splice(system.activeGroup, 1)

              // Update ahead group information
              const groupStart = system.activeGroup
              for (const layoutItem of system.layoutData) {
                if (layoutItem[9] > groupStart) --layoutItem[9]
                else if (layoutItem[9] === groupStart) layoutItem[9] = -1
              }

              system.activeGroup = null
              system.lastGroupAddition = null
            }

            mouse.selection[9] = -1
          }
        }

        return
      }

      //  Restore the mouse action mode
      if (mouse.previousSelection !== null && mouse.previousSelection[0] === mouse.selection[0]) mouse.currentAction = 'dragContainer'
      else mouse.currentAction = 'selected'

      return
    }

    // In case of nothing we draw
    mouse.currentAction = 'drawing'
    mouse.selection = null
    drawMouse()
  }

  function checkMouseUp (evt) {
    system.scrollX = window.scrollX
    system.scrollY = window.scrollY

    mouse.endX = evt.layerX
    mouse.endY = evt.layerY

    if (mouse.currentAction === 'resizeCorner') {
      mouse.currentAction = null
      return
    } else if (mouse.currentAction === 'drawing') {
      createLayoutContainer(mouse.startX, mouse.startY, mouse.endX, mouse.endY, true)
      mouse.currentAction = null
      return
    } else if (mouse.currentAction === 'mirrorSelection') {
      let mStartX = 0
      let mStartY = 0
      let mEndX = 0
      let mEndY = 0

      if (mouse.snapToGrid) {
        mStartX = Math.floor(mouse.startX / system.gridX) * system.gridX
        mStartY = Math.floor(mouse.startY / system.gridY) * system.gridY
        mEndX = Math.ceil(mouse.x / system.gridX) * system.gridX
        mEndY = Math.ceil(mouse.y / system.gridY) * system.gridY
      } else {
        mStartX = mouse.startX
        mStartY = mouse.startY
        mEndX = mouse.endX
        mEndY = mouse.endY
      }

      const containerX = mEndX - mStartX
      const containerY = mEndY - mStartY
      let offsetGridX = 0
      let offsetX = 0

      if (system.mirrorHorizontal) {
        if (containerX >= mouse.threshold) {
          let containerId = createLayoutContainer(mStartX, mStartY, mEndX, mEndY, true)
          system.groups.push([containerId])
          system.activeGroup = system.groups.length - 1
          system.layoutData[system.layoutSize - 1][9] = system.activeGroup

          if (system.spaceGridX > 0) offsetGridX = offsetGridX = system.spaceGridX
          else offsetGridX = mStartX - system.gridStartX

          while (offsetX + containerX + offsetGridX <= system.gridEndX - mEndX) {
            offsetX += offsetGridX + containerX
            containerId = createLayoutContainer(mStartX + offsetX, mStartY, mEndX + offsetX, mEndY, true)
            system.groups[system.activeGroup].push(containerId)
            system.layoutData[system.layoutSize - 1][9] = system.activeGroup
          }

          if (system.spaceGridX > 0) {
            const startX = mStartX
            offsetX = offsetGridX + containerX

            while (startX - offsetX >= system.gridStartX) {
              containerId = createLayoutContainer(mStartX - offsetX, mStartY, mEndX - offsetX, mEndY, true)
              system.groups[system.activeGroup].push(containerId)
              system.layoutData[system.layoutSize - 1][9] = system.activeGroup
              offsetX += offsetGridX + containerX
            }
          }
        }
      } else {
        let offsetGridY = 0
        let offsetY = 0

        if (containerY >= mouse.threshold) {
          if (system.spaceGridY > 0) offsetGridY = system.spaceGridY
          else offsetGridY = mStartY - system.gridStartY

          let containerId = createLayoutContainer(mStartX, mStartY, mEndX, mEndY, true)
          system.groups.push([containerId])
          system.activeGroup = system.groups.length - 1
          system.layoutData[system.layoutSize - 1][9] = system.activeGroup

          while (offsetY + containerY + offsetGridY <= system.gridEndY - mEndY) {
            offsetY += offsetGridY + containerY
            containerId = createLayoutContainer(mStartX, mStartY + offsetY, mEndX, mEndY + offsetY, true)
            system.groups[system.activeGroup].push(containerId)
            system.layoutData[system.layoutSize - 1][9] = system.activeGroup
          }

          if (system.spaceGridY > 0) {
            const startY = mStartY
            offsetY = offsetGridY + containerY

            while (startY - offsetY >= system.gridStartY) {
              containerId = createLayoutContainer(mStartX, mStartY - offsetY, mEndX, mEndY - offsetY, true)
              system.groups[system.activeGroup].push(containerId)
              system.layoutData[system.layoutSize - 1][9] = system.activeGroup
              offsetY += offsetGridY + containerY
            }
          }
        }
      }

      mouse.currentAction = null
      return
    }

    if (mouse.currentAction === 'dragContainer' || mouse.currentAction === 'dragGroup') {
      mouse.currentAction = 'selected'
    }

    if (system.drawGrid) drawGrid()
  }

  function createLayoutContainer (mStartX, mStartY, mEndX, mEndY, useSnapping) {
    let itemStartX = 0
    let itemEndX = 0
    let itemStartY = 0
    let itemEndY = 0

    if (mouse.snapToGrid) {
      mStartX = Math.floor(mStartX / system.gridX) * system.gridX
      mStartY = Math.floor(mStartY / system.gridY) * system.gridY
      if (useSnapping) {
        mEndX = Math.ceil(mEndX / system.gridX) * system.gridX
        mEndY = Math.ceil(mEndY / system.gridY) * system.gridY
      }
    }

    if (mStartX < mEndX) {
      itemStartX = mStartX
      itemEndX = mEndX
    } else {
      itemStartX = mEndX
      itemEndX = mStartX
    }

    if (mStartY < mEndY) {
      itemStartY = mStartY
      itemEndY = mEndY
    } else {
      itemStartY = mEndY
      itemEndY = mStartY
    }

    // Set the boundaries for the container inside the grid
    if (itemStartX < system.gridStartX) {
      itemStartX = system.gridStartX
    }

    if (itemStartY < system.gridStartY) {
      itemStartY = system.gridStartY
    }

    if (itemEndX < system.gridStartX) {
      itemEndX = system.gridStartX
    } else if (itemEndX > system.gridEndX) {
      itemEndX = system.gridEndX
    }

    if (itemEndY < system.gridStartY) {
      itemEndY = system.gridStartY
    } else if (itemEndY > system.gridEndY) {
      itemEndY = system.gridEndY
    }

    // If the selection height or width is smaller then the threshold, cancel the action
    if (itemEndX - itemStartX < mouse.threshold) {
      return
    } else if (itemEndY - itemStartY < mouse.threshold) {
      return
    }

    // generate new ID to avoid collisions
    let id = 0
    do {
      id = new Date().getTime()
    }
    while (id === system.lastId)
    system.lastId = id

    // id, designElementName, x, y, xEnd, yEnd, border, padding, margin, groupIndex, labeltext, img data or img path
    system.layoutData.push([id, 'containerElement', itemStartX, itemStartY, itemEndX, itemEndY, 0, 0, 0, -1, '', null])
    ++system.layoutSize

    if (system.drawGrid) drawGrid()
    return id
  }

  // Render the resizers
  function drawResizers () {
    // If nothing is selected simply return
    if (mouse.selection === null) return

    for (let index = 0; index < design.resizers.start.length; ++index) {
      const startX = design.resizers.start[index][0] === 0 ? mouse.selection[2] : mouse.selection[4]
      const startY = design.resizers.start[index][1] === 0 ? mouse.selection[3] : mouse.selection[5]

      overlayContext.fillStyle = design.resizeCorners[0]
      overlayContext.beginPath()
      for (const coordinate of design.resizers.coords[index]) overlayContext.lineTo(startX + coordinate[0], startY + coordinate[1])
      overlayContext.closePath()
      overlayContext.fill()
      overlayContext.lineWidth = 1
      overlayContext.strokeStyle = design.resizeCorners[2]
      overlayContext.stroke()

      if (mouse.selection !== null && overlayContext.isPointInPath(mouse.x, mouse.y)) {
        overlayContext.fillStyle = design.resizeCorners[1]
        overlayContext.beginPath()
        for (const coordinate of design.resizers.coords[index]) overlayContext.lineTo(startX + coordinate[0], startY + coordinate[1])
        overlayContext.closePath()
        overlayContext.fill()
      }
    }
  }
  // Draw labes for a particular layout item
  function drawLabels (layoutItem) {
    overlayContext.textAlign = 'center'
    overlayContext.font = 'Normal 0.75em Open Sans'

    const centerX = layoutItem[2] + ((layoutItem[4] - layoutItem[2]) * 0.5)
    const centerY = layoutItem[3] + ((layoutItem[5] - layoutItem[3]) * 0.5)

    let textWidth = (overlayContext.measureText(layoutItem[10]).width * 0.5)
    if (textWidth !== 0) textWidth += 6

    const textSizes = (overlayContext.measureText((layoutItem[4] - layoutItem[2]).toFixed(0) + 'x' + (layoutItem[5] - layoutItem[3]).toFixed(0) + 'px').width * 0.5) + 6
    const textCoords = (overlayContext.measureText('(' + layoutItem[2].toFixed(0) + ', ' + layoutItem[3].toFixed(0) + ')').width * 0.5) + 6

    overlayContext.fillStyle = design.contentInputBackground
    overlayContext.fillRect(centerX - textWidth, centerY - 44, textWidth * 2, 24)
    overlayContext.fillRect(centerX - textSizes, centerY - 15, textSizes * 2, 24)
    overlayContext.fillRect(centerX - textCoords, centerY + 10, textCoords * 2, 24)

    overlayContext.fillStyle = design.labelColor
    overlayContext.fillText(layoutItem[10], centerX, centerY - 28)
    overlayContext.fillText((layoutItem[4] - layoutItem[2]).toFixed(0) + 'x' + (layoutItem[5] - layoutItem[3]).toFixed(0) + 'px', centerX, centerY)
    overlayContext.fillText('(' + layoutItem[2].toFixed(0) + ', ' + layoutItem[3].toFixed(0) + ')', centerX, centerY + 25)
  }

  // Render the layout items
  function renderLayoutItems () {
    let itemDesign = []
    dc.lineWidth = 0
    if (mouse.selection === null) {
      for (const layoutItem of system.layoutData) {
        itemDesign = design[layoutItem[1]]
        if (itemDesign[0] === 'solid') dc.fillStyle = itemDesign[1]

        // Drawing the border
        if (layoutItem[6] !== 0) {
          dc.lineWidth = layoutItem[6]
          dc.beginPath()
          dc.rect(layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])
          dc.closePath()
          dc.strokeStyle = design.containerBorderColor
          dc.stroke()
        }

        // Draw containers
        if (system.drawContainers) dc.fillRect(layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])

        // Draw container images if present
        if (system.drawImages && layoutItem[11] !== null && layoutItem[11] !== '') {
          dc.drawImage(layoutItem[11], layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])
        }

        // Draw the labels
        if (system.drawLabels && !system.showHelp) drawLabels(layoutItem)
      }
    } else {
      for (const layoutItem of system.layoutData) {
        itemDesign = design[layoutItem[1]]

        // Drawing the border
        if (layoutItem[6] !== 0) {
          dc.lineWidth = layoutItem[6]
          dc.beginPath()
          dc.rect(layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])
          dc.closePath()
          dc.strokeStyle = design.containerBorderColor
          dc.stroke()
        }

        // If container drawing is off, enable image rendering
        if (!system.drawContainers && system.drawImages && layoutItem[11] !== null && layoutItem[11] !== '') dc.drawImage(layoutItem[11], layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])

        if (system.drawContainers) {
          if (system.activeGroup !== null && layoutItem[9] === system.activeGroup && mouse.selection[9] === layoutItem[9]) {
            if (mouse.selection[0] === layoutItem[0]) dc.fillStyle = design.itemSelectionColor[1]
            else dc.fillStyle = design.itemSelectionColor[0]

            dc.fillRect(layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])
          } else if (mouse.selection[0] === layoutItem[0]) {
            dc.fillStyle = design.itemSelectionColor[0]
            dc.fillRect(layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])
          } else {
            if (itemDesign[0] === 'solid') dc.fillStyle = itemDesign[1]
            dc.fillRect(layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])
          }

          // Draw resizers and image if present
          if (system.drawResizers && mouse.selection === layoutItem) {
            if (system.drawImages && layoutItem[11] !== null && layoutItem[11] !== '') {
              if (system.imgShadow.indexOf(layoutItem[0]) !== -1) {
                const targetImage = document.querySelector('#img_' + layoutItem[0])
                targetImage.style.visibility = 'visible'
                targetImage.style.left = layoutItem[2] + 'px'
                targetImage.style.top = layoutItem[3] + 'px'
                targetImage.style.width = (layoutItem[4] - layoutItem[2]) + 'px'
                targetImage.style.height = (layoutItem[5] - layoutItem[3]) + 'px'
              } else dc.drawImage(layoutItem[11], layoutItem[2], layoutItem[3], layoutItem[4] - layoutItem[2], layoutItem[5] - layoutItem[3])
            } else if (!system.drawImages) {
              if (system.imgShadow.indexOf(layoutItem[0]) !== -1) {
                const targetImage = document.querySelector('#img_' + layoutItem[0])
                targetImage.style.visibility = 'hidden'
              }
            }

            drawResizers()
          }
        }

        // Draw the highlighting border of the container drop target
        if (mouse.highlightSelection && mouse.selection[0] === layoutItem[0]) {
          overlayContext.lineWidth = 3
          overlayContext.strokeStyle = design.itemSelectionColor
          overlayContext.beginPath()
          overlayContext.rect(mouse.selection[2], mouse.selection[3], mouse.selection[4] - mouse.selection[2], mouse.selection[5] - mouse.selection[3])
          overlayContext.stroke()
        }

        // Draw the labels
        if (system.drawLabels) drawLabels(layoutItem)
      }
    }
  }

  function drawSelection () {
    dc.strokeStyle = '#000'
    const previousFill = dc.fillStyle
    dc.fillStyle = 'rgba(255,255,255, 0.2)'

    let mStartX = mouse.startX
    let mStartY = mouse.startY
    let mEndX = mouse.x
    let mEndY = mouse.y

    if (mouse.selection === null) {
      if (mouse.startX < system.gridStartX) mouse.startX = system.gridStartX
      else if (mouse.startX > system.gridEndX) mouse.startX = system.gridEndX

      if (mouse.startY < system.gridStartY) mouse.startY = system.gridStartY
      else if (mouse.startY > system.gridEndY) mouse.startY = system.gridEndY

      mStartX = mouse.startX
      mStartY = mouse.startY
      mEndX = mouse.x
      mEndY = mouse.y

      if (mEndX > system.gridEndX) mEndX = system.gridEndX
      else if (mEndX < system.gridStartX) mEndX = system.gridStartX

      if (mEndY > system.gridEndY) mEndY = system.gridEndY
      else if (mEndY < system.gridStartY) mEndY = system.gridStartY

      dc.beginPath()
      if (mouse.snapToGrid) {
        mStartX = Math.floor(mouse.startX / system.gridX) * system.gridX
        mStartY = Math.floor(mouse.startY / system.gridY) * system.gridY
        mEndX = Math.ceil(mouse.x / system.gridX) * system.gridX
        mEndY = Math.ceil(mouse.y / system.gridY) * system.gridY
        dc.rect(mStartX, mStartY, mEndX - mStartX, mEndY - mStartY)
      }

      if (mouse.currentAction === 'drawing') {
        dc.rect(mStartX, mStartY, mEndX - mStartX, mEndY - mStartY)
      }
      dc.closePath()
      dc.fill()
    } else {
      mStartX = mouse.selection[2]
      mStartY = mouse.selection[3]
      mEndX = mouse.selection[4]
      mEndY = mouse.selection[5]
    }

    const containerX = mEndX - mStartX
    const containerY = mEndY - mStartY

    dc.beginPath()
    if (mouse.currentAction === 'mirrorSelection') {
      let offsetGridX = 0
      let offsetX = 0
      let offsetGridY = 0
      let offsetY = 0
      let startX = 0
      let startY = 0

      if (system.mirrorHorizontal) {
        // Repeat current selection horizontally

        if (system.spaceGridX > 0) {
          offsetGridX = system.spaceGridX
        } else {
          offsetGridX = mStartX - system.gridStartX
        }

        offsetX = 0
        dc.rect(mStartX, mStartY, mEndX - mStartX, mEndY - mStartY)

        if (containerX >= mouse.threshold) {
          while (offsetX + containerX + offsetGridX <= system.gridEndX - mEndX) {
            offsetX += offsetGridX + containerX
            dc.rect(mStartX + offsetX, mStartY, containerX, containerY)
          }

          if (system.spaceGridX > 0) {
            offsetX = containerX + system.spaceGridX
            startX = mStartX - offsetX
            while (startX > system.gridStartX) {
              dc.rect(mStartX - offsetX, mStartY, containerX, containerY)
              offsetX += system.spaceGridX + containerX
              startX -= system.spaceGridX + containerX
            }
          }
        }
      } else {
        // Repeat current selection vertically
        if (system.spaceGridY > 0) {
          offsetGridY = system.spaceGridY
        } else {
          offsetGridY = mStartY - system.gridStartY
        }

        offsetY = 0
        dc.rect(mStartX, mStartY, mEndX - mStartX, mEndY - mStartY)

        if (containerY >= mouse.threshold) {
          while (offsetY + containerY + offsetGridY <= system.gridEndY - mEndY) {
            offsetY += offsetGridY + containerY
            dc.rect(mStartX, mStartY + offsetY, containerX, containerY)
          }

          if (system.spaceGridY > 0) {
            offsetY = containerY + system.spaceGridY
            startY = mStartY - offsetY
            while (startY > system.gridStartY) {
              dc.rect(mStartX, mStartY - offsetY, containerX, containerY)
              offsetY += system.spaceGridY + containerY
              startY -= system.spaceGridY + containerY
            }
          }
        }
      }
    }

    dc.closePath()
    dc.fill()

    dc.fillStyle = previousFill
  }

  function renderHelp () {
    bgContext.clearRect(0, 0, system.width, system.height)
    overlayContext.clearRect(0, 0, system.width, system.height)

    overlayContext.fillStyle = 'rgba(33, 37, 52, 1.0)'
    overlayContext.beginPath()
    overlayContext.rect(0, 0, system.width, system.height)
    overlayContext.closePath()
    overlayContext.fill()
    overlayContext.textAlign = 'left'

    const shortcuts = ['[I] Toggles this help on/off',
      '[G] key toggles the grid on an off, [Shift + G] toggles custom designs',
      '[D] toogles row / column highlighting / [Shift + D] toggles browser scroll grid on/off',
      '[Control] cancels ongoing action or when grouping/ungrouping items',
      '[Shift] snaps to grid when drawing selection, moving an item (click and drag) and mirroring.',
      'This also works whenAlso on resizing.',
      '[Shift + I] Toggles image display on and off',
      '[Left click and drag movement] Moves a single item or a single item of a group',
      '[Y / Z] Move mode on/off switch, moves a element or group if grouped, can be used with snapping',
      '[Del] Deletes a single element or a grouped element',
      '[T] Toggles container visibility on or off - use with images!',
      '[C] create a copy of a single item selection',
      '[V] pastes the copy at cursor location, snapping is possible',
      '[Spacebar] Mirror mode',
      'By default uses distance from grid start to cursor for mirroring.',
      'This can be changed by pressing [W] or [Q] for each axis independently',
      '[X] Toggles mirror mode horizontally or vertically',
      '[Q / W] decrease / increase mirror grid spacing on selected axis - used with [SPACE] and [X]',
      '[E] zeros/erases the grid spacing values for both mirroring axis',
      '[+ or -] Increase or decrase the border on a single item or a group of items',
      '[Shift + Arrow up, down, left or right] Moves the current selected container up, down, left or right',
      '[1 to 9] Loads the design from slot 1 to 9, [SHIFT + 1 ... 9] saves a design to slot 1 to 9',
      'in the desktop version this will also save the designs to "saves/slot_NUMBER.txt". The browser version',
      'only uses the browsers local storage but is limited to 5 up to 10 MB depending on the browser used.',
      '[Shift + BACKSPACE] Clears all saved data',
      '[L] Create or rename a labeled item if selected, if nothing is selected, turns label rendering on or off'
    ]

    overlayContext.fillStyle = design.helpTextColor

    overlayContext.font = 'Bold 1.25em Open Sans'
    overlayContext.fillText('__ ReLayX Shortcuts _______________________________________________________________________', canvas.width * 0.25, 60)

    overlayContext.font = 'Normal 1em Open Sans'
    let offsetY = 90
    for (const item in shortcuts) {
      overlayContext.fillText(shortcuts[item], canvas.width * 0.25, (item * 26) + offsetY)
    }

    offsetY += shortcuts.length * 26 + 70
    overlayContext.font = 'Bold 1.25em Open Sans'
    overlayContext.fillText('__ First steps ________________________________________________________________________________', canvas.width * 0.25, offsetY - 32)

    const first = [
      'Click and drag to create a selection, release the mouse to create a container item.',
      'The container can now be moved by pressing left, to activate, and dragging. Notice the color change when',
      'selected.',
      '',
      'If you want to snap the item to the grid, you can press [SHIFT] to do so, this also snaps the container into the grid.',
      'To delete the container press [DEL].',
      '',
      'To create a copy press [C] and [V] to paste it at the mouse cursor location,',
      'snapping can be used here too when holding [SHIFT] while pressing [V] once.'
    ]

    overlayContext.font = 'Normal 1em Open Sans'
    for (const item in first) {
      overlayContext.fillText(first[item], canvas.width * 0.25, (item * 26) + offsetY)
    }

    offsetY += first.length * 26 + 70
    overlayContext.font = 'Bold 1.25em Open Sans'
    overlayContext.fillText('__ Grouping __________________________________________________________________________________', canvas.width * 0.25, offsetY - 32)

    const group = [
      'If you have two or more containers, you can group them together. This can be done by selecting',
      'another ungrouped (see the color when clicking on it) and holding [CONTROL] and left click onto it',
      'they now are grouped and change there colors when selected.',
      '',
      'Grouped items can be moved each by left click and drag or as whole by pressing [Y or Z], [Y or Z] is ',
      'a toggle, no need to hold down the key - and move the mouse around, snapping using [SHIFT] snapping',
      ' is possible too.To ungroup an item, select the grouped container and then click, while',
      'holding [CONTROL], on it again, its then ungrouped. This is also shown by its colors.'
    ]

    overlayContext.font = 'Normal 1em Open Sans'
    for (const item in group) {
      overlayContext.fillText(group[item], canvas.width * 0.25, (item * 26) + offsetY)
    }

    offsetY += group.length * 26 + 70
    overlayContext.font = 'Bold 1.25em Open Sans'
    overlayContext.fillText('__ Mirroring __________________________________________________________________________________', canvas.width * 0.25, offsetY - 32)

    const mirror = [
      'The simplest way to test mirroring is by drawing a selection and keep holding the left mouse button',
      'not to finish the selection and holding [SPACE]. Press [W] once to increase  the mirror distance to one',
      'grid unit.',
      '',
      'Mirrors along the axis will appear, press [W] to increase it even once more to see the difference.',
      'If you are happy, release the left mouse button while keeping [SPACE] holded until the action finishes.',
      'Youve got a grouped row of those containers, aligned to the grid spacing you selected.',
      '',
      'Another quick way to create mirrors: Select one of those new containers, anyone will be good.',
      'Now hold [SPACE] and press [X] once, if nothing appears, press [W] again, you should now see',
      'a column of possible mirrors. Left click on one to while holding [SPACE] to create one at that location.',
      '',
      'Pressing [Q] will decrease the grid spacing by one unit to zero, while [W] will increase it. If you reach',
      'zero the default spacing is used. Meaning, if you draw a selection with 2 gridspaces away from the left,',
      'you will get mirrors when holding [SPACE] in size of the container plus 2 gridspaces away. [Q / W] avoid',
      'that limitation.',
      '',
      'If you have set spacing on any axis, this will also draw mirrors on the whole X or Y row/column. If you want',
      'to create copies, use the shadowing trick by selection the element and setting the grid axis spacing',
      'pressing [Q] or [W].'
    ]

    overlayContext.font = 'Normal 1em Open Sans'
    for (const item in mirror) {
      overlayContext.fillText(mirror[item], canvas.width * 0.25, (item * 26) + offsetY)
    }

    offsetY += mirror.length * 26 + 70

    overlayContext.font = 'Bold 1.25em Open Sans'
    overlayContext.fillText('__ Images _____________________________________________________________________________________', canvas.width * 0.25, offsetY - 32)

    const images = [
      'Images can be dragged and dropped into the canvas area. To insert an image, create and select a',
      'container and drag and drop the desired image (JPG, PNG, GIF, WEBP) from the desktop to the application.',
      '',
      'Also it is possible to insert a image in its original width and height, by not having any selection and',
      'dropping the image onto a free space.'
    ]

    overlayContext.font = 'Normal 1em Open Sans'
    for (const item in images) {
      overlayContext.fillText(images[item], canvas.width * 0.25, (item * 26) + offsetY)
    }

    offsetY += images.length * 26 + 70

    overlayContext.font = 'Bold 1.25em Open Sans'
    overlayContext.fillText('Find more @ https://github.com/jrie/ReLayX2', canvas.width * 0.25, offsetY - 32)
  }

  function renderNotifications () {
    let notes = system.notifications.length
    let offsetY = 0
    if (system.showHelpNote) offsetY = window.scrollY + 70
    else offsetY = window.scrollY + 40

    dc.fillStyle = design.notificationColor
    dc.textAlign = 'left'

    if (!system.showHelp && system.showHelpNote) {
      dc.font = 'Bold 1.25em Open Sans'
      dc.fillText('Press [I] to open help, [U] to hide/show this message', window.scrollX + 20, window.scrollY + 40)
    }

    dc.font = 'Normal 1.25em Open Sans'
    while (notes--) {
      if (system.notifications[notes][0] < 65) {
        ++system.notifications[notes][0]
        dc.fillText(system.notifications[notes][1], 20, offsetY)
        offsetY += 24
      } else {
        system.notifications.splice(notes, 1)
      }
    }
  }

  // Mainloop
  function mainloop () {
    drawItem('background', 0, 1, 2, 3, false)

    if (system.drawHighlight) {
      overlayContext.clearRect(0, 0, system.width, system.height)
    }

    renderLayoutItems()

    if (system.drawHighlight) {
      overlayContext.fillStyle = design.hightlighterColor
      overlayContext.fillRect(Math.floor(mouse.x / system.gridX) * system.gridX, 0, system.gridX, canvas.height)
      overlayContext.fillRect(0, Math.floor(mouse.y / system.gridY) * system.gridY, canvas.width, system.gridY)
    }

    // Render included help overlay
    if (system.showHelp) renderHelp()

    // Display the browser scrolling grid
    // TODO: Might need a little redo in spacing size
    if (system.displayBrowserGrid) {
      let y = system.browserSpacingStart - mouse.offsetY
      dc.beginPath()
      dc.lineWidth = 1
      dc.strokeStyle = '#000'
      while (y < system.height) {
        dc.moveTo(0, y)
        dc.lineTo(system.width, y)
        y += system.browserSpacing
      }
      dc.closePath()
      dc.stroke()
    }

    if (mouse.currentAction === 'drawing' || mouse.currentAction === 'mirrorSelection') drawSelection()
    if (system.showNotifications) renderNotifications()

    // Draw the input text
    if (mouse.currentAction === 'inputText') {
      overlayContext.fillStyle = design.contentInputFieldText
      // Draw the input cursor in demand
      if (++mouse.cursorBlink === mouse.cursorBlinkRate) {
        mouse.cursorBlink = 0
        mouse.showCursor = !mouse.showCursor
      }

      if (mouse.showCursor) {
        overlayContext.beginPath()
        overlayContext.moveTo(mouse.cursorAt[0], mouse.cursorAt[1])
        overlayContext.lineTo(mouse.cursorAt[0], mouse.cursorAt[1] + 12)
        overlayContext.closePath()
        overlayContext.strokeStyle = design.textCursor[0]
        overlayContext.lineWidth = design.textCursor[1]
        overlayContext.stroke()
      }
    }

    drawMouse()
    window.requestAnimationFrame(mainloop)
  }

  // Bind the mouse to the current window
  function handleMouseMove (evt) {
    const mousePreviousX = mouse.x
    const mousePreviousY = mouse.y

    system.scrollX = mouse.offsetX + window.scrollX
    system.scrollY = mouse.offsetY + window.scrollY

    mouse.x = evt.clientX - mouse.offsetX + system.scrollX - canvas.offsetTop
    mouse.y = evt.clientY - mouse.offsetY + system.scrollY - canvas.offsetLeft

    if (mouse.currentAction === 'dragContainer' || (system.activeGroup === null && mouse.currentAction === 'dragGroup')) {
      mouse.selection[2] += mouse.x - mousePreviousX
      mouse.selection[3] += mouse.y - mousePreviousY
      mouse.selection[4] += mouse.x - mousePreviousX
      mouse.selection[5] += mouse.y - mousePreviousY

      if (mouse.snapToGrid) {
        mouse.selection[2] = Math.round(mouse.selection[2] / system.gridX) * system.gridX
        mouse.selection[3] = Math.round(mouse.selection[3] / system.gridY) * system.gridY
        mouse.selection[4] = Math.round(mouse.selection[4] / system.gridX) * system.gridX
        mouse.selection[5] = Math.round(mouse.selection[5] / system.gridY) * system.gridY
      }
    } else if (system.activeGroup !== null && mouse.currentAction === 'dragGroup') {
      const mX = mouse.x - mousePreviousX
      const mY = mouse.y - mousePreviousY

      for (const groupItem of system.groups[system.activeGroup]) {
        for (const layoutItem of system.layoutData) {
          if (layoutItem[0] !== groupItem) continue
          layoutItem[2] += mX
          layoutItem[3] += mY
          layoutItem[4] += mX
          layoutItem[5] += mY

          if (mouse.snapToGrid) {
            layoutItem[2] = Math.round(layoutItem[2] / system.gridX) * system.gridX
            layoutItem[3] = Math.round(layoutItem[3] / system.gridY) * system.gridY
            layoutItem[4] = Math.round(layoutItem[4] / system.gridX) * system.gridX
            layoutItem[5] = Math.round(layoutItem[5] / system.gridY) * system.gridY
          }

          if (system.imgShadow.indexOf(layoutItem[0]) !== -1) {
            const shadowImage = document.querySelector('#imgContainer #img_' + layoutItem[0])
            shadowImage.style.left = layoutItem[2] + 'px'
            shadowImage.style.top = layoutItem[3] + 'px'
          }
        }
      }
    } else if (mouse.selection !== null && mouse.currentAction === 'resizeCorner' && mouse.hasCorner !== null) {
      // Check resizing and resizing boundaries
      if (mouse.hasCorner[0] === 0 && mouse.hasCorner[1] === 0) {
        // Top left
        mouse.selection[2] = mouse.x - mouse.hasCornerPx[0]
        mouse.selection[3] = mouse.y - mouse.hasCornerPx[1]

        if (mouse.selection[4] - mouse.selection[2] < 50) mouse.selection[2] = mouse.selection[4] - 50
        if (mouse.selection[5] - mouse.selection[3] < 50) mouse.selection[3] = mouse.selection[5] - 50
      } else if (mouse.hasCorner[0] === 1 && mouse.hasCorner[1] === 0) {
        // Top Right
        mouse.selection[4] = mouse.x - mouse.hasCornerPx[0]
        mouse.selection[3] = mouse.y - mouse.hasCornerPx[1]

        if (mouse.selection[4] - mouse.selection[2] < 50) mouse.selection[4] = mouse.selection[2] + 50
        if (mouse.selection[5] - mouse.selection[3] < 50) mouse.selection[3] = mouse.selection[5] - 50
      } else if (mouse.hasCorner[0] === 0 && mouse.hasCorner[1] === 1) {
        // Bottom Left
        mouse.selection[2] = mouse.x - mouse.hasCornerPx[0]
        mouse.selection[5] = mouse.y - mouse.hasCornerPx[1]

        if (mouse.selection[4] - mouse.selection[2] < 50) mouse.selection[2] = mouse.selection[4] - 50
        if (mouse.selection[5] - mouse.selection[3] < 50) mouse.selection[5] = mouse.selection[3] + 50
      } else {
        // Bottom right
        mouse.selection[4] = mouse.x - mouse.hasCornerPx[0]
        mouse.selection[5] = mouse.y - mouse.hasCornerPx[1]

        if (mouse.selection[4] - mouse.selection[2] < 50) mouse.selection[4] = mouse.selection[2] + 50
        if (mouse.selection[5] - mouse.selection[3] < 50) mouse.selection[5] = mouse.selection[3] + 50
      }

      if (mouse.snapToGrid) {
        mouse.selection[2] = Math.round(mouse.selection[2] / system.gridX) * system.gridX
        mouse.selection[3] = Math.round(mouse.selection[3] / system.gridY) * system.gridY
        mouse.selection[4] = Math.round(mouse.selection[4] / system.gridX) * system.gridX
        mouse.selection[5] = Math.round(mouse.selection[5] / system.gridY) * system.gridY
      }
    }

    // if (system.drawGrid) drawGrid()
  }

  function handleInputFieldInput (evt) {
    if (mouse.selection === null) return

    if (evt.keyCode === 9) {
      // Tab key pressed
      evt.preventDefault()
      return
    }

    // system.layoutData.push([id, 'containerElement', itemStartX, itemStartY, itemEndX, itemEndY, 0, 0, 0, -1, ''])
    let text = mouse.selection[10]

    dc.font = 'Normal 0.75em Open Sans'
    if (mouse.cursorAt[2] === text.length) {
      mouse.cursorAt[0] = mouse.selection[2] + ((mouse.selection[4] - mouse.selection[2]) * 0.5) + (dc.measureText(text).width * 0.5)
      mouse.cursorAt[1] = mouse.selection[3] + ((mouse.selection[5] - mouse.selection[3]) * 0.5) - 38
      mouse.cursorAt[2] = text.length
    }

    switch (evt.keyCode) {
      case 35: {
        // End key
        evt.preventDefault()
        mouse.cursorAt[0] = mouse.selection[2] + ((mouse.selection[4] - mouse.selection[2]) * 0.5) + (dc.measureText(mouse.selection[10]).width * 0.5)
        mouse.cursorAt[2] = text.length
        return
      }
      case 36: { // Pos1 key
        evt.preventDefault()
        mouse.cursorAt[0] = mouse.selection[2] + ((mouse.selection[4] - mouse.selection[2]) * 0.5) - (dc.measureText(mouse.selection[10]).width * 0.5)
        mouse.cursorAt[2] = 0
        return
      }
      case 9:
        // Tab key
        evt.preventDefault()
        break
      case 32:
        // Spacebar
        evt.preventDefault()
        break
      case 13:
        // Enter key
        evt.preventDefault()
        mouse.currentAction = null
        document.removeEventListener('keydown', handleInputFieldInput)
        return
      case 17:
        // Control/Strg key
        return
      case 46:
        // Delete key
        if (mouse.cursorAt[2] < text.length) {
          mouse.cursorAt[0] += Math.round(dc.measureText(text.charAt(mouse.cursorAt[2])).width * 0.5)
          text = text.substring(0, mouse.cursorAt[2]) + text.substring(mouse.cursorAt[2] + 1, text.length)
          mouse.selection[10] = text
        }
        return
      case 8: { // Backspace key
        evt.preventDefault()
        if (mouse.cursorAt[2] > 0) {
          mouse.cursorAt[0] -= Math.round(dc.measureText(mouse.selection[10].charAt(mouse.cursorAt[2] - 1)).width * 0.5)
          text = text.substring(0, mouse.cursorAt[2] - 1) + text.substring(mouse.cursorAt[2], text.length)
          --mouse.cursorAt[2]
          mouse.selection[10] = text
        }
        return
      }
      case 16: { // Shift key
        evt.preventDefault()
        return
      }

      case 37: { // Arrow key left
        evt.preventDefault()

        if (mouse.cursorAt[2] !== 0) {
          --mouse.cursorAt[2]
          mouse.cursorAt[0] -= dc.measureText(text.charAt(mouse.cursorAt[2])).width
        }

        return
      }

      case 39: { // Arrow key right
        evt.preventDefault()
        if (mouse.cursorAt[2] < text.length) {
          ++mouse.cursorAt[2]
          mouse.cursorAt[0] += dc.measureText(text.charAt(mouse.cursorAt[2])).width
        }
        return
      }
    }

    if (evt.key.length === 1) {
      const letterWidth = dc.measureText(evt.key).width
      const maxWidth = mouse.selection[4] - mouse.selection[2] - 10
      if (dc.measureText(text).width + letterWidth > maxWidth) return

      if (mouse.cursorAt[2] < text.length) mouse.selection[10] = mouse.selection[10].substring(0, mouse.cursorAt[2]) + evt.key + mouse.selection[10].substring(mouse.cursorAt[2], text.length)
      else mouse.selection[10] += evt.key

      ++mouse.cursorAt[2]
      mouse.cursorAt[0] += Math.round(letterWidth * 0.5)
    }
  }

  function handleKeyboardDown (evt) {
    if (mouse.currentAction === 'inputText') {
      evt.preventDefault()
      return
    }

    if (system.shiftPressed && mouse.selection !== null) {
      system.keyMap[evt.keyCode] = true
      if (system.keyMap['38'] === true) {
        // Arrow key up
        if (mouse.selection[3] > system.gridX) {
          mouse.selection[3] -= system.gridX
          mouse.selection[5] -= system.gridX
        } else {
          mouse.selection[5] = mouse.selection[5] - mouse.selection[3]
          mouse.selection[3] = 0
        }
      }

      if (system.keyMap['40'] === true) {
        // Arrow key down
        if (mouse.selection[5] < system.height) {
          mouse.selection[3] += system.gridX
          mouse.selection[5] += system.gridX
        } else {
          mouse.selection[3] = system.height - (mouse.selection[5] - mouse.selection[3])
          mouse.selection[5] = system.height
        }
      }

      if (system.keyMap['37'] === true) {
        // Arrow key left
        if (mouse.selection[2] > system.gridY) {
          mouse.selection[2] -= system.gridY
          mouse.selection[4] -= system.gridY
        } else {
          mouse.selection[4] = mouse.selection[4] - mouse.selection[2]
          mouse.selection[2] = 0
        }
      }

      if (system.keyMap['39'] === true) {
        // Arrow key right
        if (mouse.selection[4] < system.width) {
          mouse.selection[2] += system.gridY
          mouse.selection[4] += system.gridY
        } else {
          mouse.selection[2] = system.width - (mouse.selection[4] - mouse.selection[2])
          mouse.selection[4] = system.width
        }
      }

      return
    }

    if (mouse.selection !== null) {
      if (evt.keyCode === 46) {
        // Delete key
        for (let item = 0; item < system.layoutSize; item++) {
          if (system.layoutData[item][0] === mouse.selection[0]) {
            let hasNewSelection = false

            // Remove the underlying animated image if present
            const shadowIndex = system.imgShadow.indexOf(mouse.selection[0])
            if (shadowIndex !== -1) {
              const targetImage = document.querySelector('#img_' + mouse.selection[0])
              targetImage.parentNode.removeChild(targetImage)
              system.imgShadow.splice(shadowIndex, 1)
            }

            // Remove the container and jump to next in line in case of groups
            for (let groupIndex = 0; groupIndex < system.groups.length; groupIndex++) {
              const itemIndex = system.groups[groupIndex].indexOf(mouse.selection[0])
              if (itemIndex !== -1) {
                if (system.groups[groupIndex].length === 1) {
                  system.groups.splice(groupIndex, 1)
                  system.activeGroup = null
                  mouse.selection = null
                } else {
                  system.groups[groupIndex].splice(itemIndex, 1)
                  const lastIndex = system.groups[groupIndex][system.groups[groupIndex].length - 1]
                  for (let layoutIndex = 0; layoutIndex < system.layoutSize; layoutIndex++) {
                    if (system.layoutData[layoutIndex][0] === lastIndex) {
                      mouse.selection = system.layoutData[layoutIndex]
                      mouse.previousSelection = null
                      hasNewSelection = true
                      system.activeGroup = groupIndex
                      break
                    }
                  }
                }

                break
              }
            }

            system.layoutData.splice(item, 1)
            --system.layoutSize

            for (let group = 0; group < system.groups.length; group++) {
              for (const layoutItem of system.layoutData) {
                if (system.groups[group].indexOf(layoutItem[0]) !== -1) {
                  layoutItem[9] = group
                }
              }
            }

            if (!hasNewSelection) {
              mouse.previousSelection = null
              mouse.selection = null
              system.activeGroup = null
            }

            if (system.drawGrid) drawGrid()
            return
          }
        }
      } else if (evt.keyCode === 17) {
        // Control key grouping of elements or ungrouping
        mouse.currentAction = 'grouping'
        return
      }
    }

    if (evt.keyCode === 76) {
      if (mouse.selection !== null && system.drawLabels) {
        mouse.currentAction = 'inputText'
        dc.font = 'Normal 0.75em Open Sans'
        mouse.cursorAt[0] = mouse.selection[2] + ((mouse.selection[4] - mouse.selection[2]) * 0.5) + (dc.measureText(mouse.selection[10]).width * 0.5)
        mouse.cursorAt[1] = mouse.selection[3] + ((mouse.selection[5] - mouse.selection[3]) * 0.5) - 38
        mouse.cursorAt[2] = mouse.selection[10].length
        evt.preventDefault()
        document.addEventListener('keydown', handleInputFieldInput)
        return
      } else {
        system.drawLabels = !system.drawLabels
        mouse.currentAction = null
        lg('Use labels is set to ' + system.drawLabels)
      }
    }
    if (evt.keyCode === 17) {
      // Control key
      system.ctrlPressed = true
    } else if (evt.keyCode === 16) {
      // Shift key snapping
      mouse.snapToGrid = true
      system.shiftPressed = true
    } else if (evt.keyCode === 89 || evt.keyCode === 90) {
      // Y key, allows moving off items when pressend once, disables if pressed a second time
      if (mouse.selection !== null) {
        if (mouse.currentAction !== 'dragGroup') {
          mouse.currentAction = 'dragGroup'
          lg('Activated dragging.')
        } else {
          mouse.currentAction = 'selected'
          lg('Deactivated dragging.')
        }
      }
    } else if (evt.keyCode === 32) {
      // Space bar pressed, turns on mirroring
      evt.preventDefault()
      if ((mouse.currentAction === 'drawing' || mouse.selection !== null) && mouse.currentAction !== 'mirrorSelection') {
        mouse.currentAction = 'mirrorSelection'
        lg('Mirroring selection.')
      }
    } else if (evt.keyCode === 187 || evt.keyCode === 107) {
      // Plus sign on keyboard or plus on numpad
      if (mouse.selection !== null) {
        let targetIndex = 0
        if (system.expandMode === 'border') {
          targetIndex = 6
        } else if (system.expandMode === 'margin') {
          targetIndex = 7
        } else if (system.expandMode === 'padding') {
          targetIndex = 8
        } else return

        if (system.activeGroup !== null) {
          for (let index = 0; index < system.groups[system.activeGroup].length; index++) {
            const itemId = system.groups[system.activeGroup][index]
            for (let item = 0; item < system.layoutSize; item++) {
              if (system.layoutData[item][0] === itemId) {
                ++system.layoutData[item][targetIndex]
                break
              }
            }
          }
        } else ++mouse.selection[targetIndex]
      }
    } else if (evt.keyCode === 189 || evt.keyCode === 109) {
      // Minus sign on keyboard or minus on numpad

      if (mouse.selection !== null) {
        let targetIndex = 0
        if (system.expandMode === 'border') {
          targetIndex = 6
        } else if (system.expandMode === 'margin') {
          targetIndex = 7
        } else if (system.expandMode === 'padding') {
          targetIndex = 8
        } else return

        if (system.activeGroup !== null) {
          for (let index = 0; index < system.groups[system.activeGroup].length; index++) {
            const itemId = system.groups[system.activeGroup][index]
            for (let item = 0; item < system.layoutSize; item++) {
              if (system.layoutData[item][0] === itemId) {
                if (system.layoutData[item][targetIndex] > 0) {
                  --system.layoutData[item][targetIndex]
                }
                break
              }
            }
          }
        } else if (mouse.selection[targetIndex] > 0) --mouse.selection[targetIndex]
      }
    }
  }

  function saveDesign (slot) {
    if (system.storage === null) {
      lg('Cannot use loading or saving function in this browser.')
      return
    }

    const layoutKey = 'layout_' + slot
    const layoutSubKey = layoutKey + '_'
    let hasError = false
    let item = 0
    document.querySelector('#savePanel').textContent = ''

    try {
      system.storage.setItem(layoutKey, true)
    } catch (err) {
      if (err.code === window.DOMException.QUOTA_EXCEEDED_ERR) {
        window.alert('Could not save data because of storage limit.\n\nError: "' + err.name + '"\nMessage: ' + err.message)
        system.shiftPressed = false
        return
      }
    }

    for (item = 0; item < system.layoutSize; item++) {
      if (system.layoutData[item][11] !== null) {
        const temp = system.layoutData[item][11]
        system.layoutData[item][11] = system.layoutData[item][11].src.toString().replace(/,/g, '|||')
        try {
          system.storage.setItem(layoutSubKey + item, system.layoutData[item].join('|#|'))
        } catch (err) {
          if (err.code === window.DOMException.QUOTA_EXCEEDED_ERR) {
            system.layoutData[item][11] = temp
            window.alert('Could not save data because of storage limit.\n\nError: "' + err.name + '"\nMessage: ' + err.message)
            system.shiftPressed = false
            system.storage.removeItem(layoutKey)
            hasError = true
          }

          break
        }
        document.querySelector('#savePanel').textContent += system.layoutData[item].join('|#|') + '\n'
        system.layoutData[item][11] = temp
      } else {
        try {
          system.storage.setItem(layoutSubKey + item, system.layoutData[item].join('|#|'))
        } catch (err) {
          if (err.code === window.DOMException.QUOTA_EXCEEDED_ERR) {
            system.storage.removeItem(layoutKey)
            window.alert('Could not save data because of storage limit.\n\nError: "' + err.name + '"\nMessage: ' + err.message)
            system.shiftPressed = false
            hasError = true
          }

          break
        }
        document.querySelector('#savePanel').textContent += system.layoutData[item].join('|#|') + '\n'
      }
    }

    if (!hasError) {
      if (navigator.userAgent.toLowerCase().indexOf('electron/') !== -1) {
        document.querySelector('#savePanel').dispatchEvent(new window.Event('change'))
      } else {
        system.storage.setItem(layoutSubKey + item, false)
      }

      lg('Design saved in slot ' + slot + '.')
      return
    }

    let currentKey = system.storage.key(0)
    let keyIndex = 0

    while (currentKey !== null) {
      if (currentKey.startsWith(layoutKey)) system.storage.removeItem(currentKey)
      currentKey = system.storage.key(keyIndex++)
    }

    lg('Error saving design, ran out of browser space.')
  }

  function loadElectronSlot (evt) {
    if (evt.target.textContent === '') {
      lg('No design found at slot ' + document.querySelector('#loadSlot').value.toString() + '.')
      return
    }

    system.layoutData = []
    system.layoutSize = 0
    system.shadowImages = []
    system.groups = []
    system.activeGroup = null
    mouse.selection = null

    const shadowImages = document.querySelectorAll('#imgContainer img')
    for (const shadowImage of shadowImages) shadowImage.parentNode.removeChild(shadowImage)

    const groupIndexes = []

    const storageData = evt.target.textContent.split('\n')

    for (const line of storageData) {
      if (line.length === 0) continue
      const storageItemData = line.split('|#|')

      for (let key = 0; key < storageItemData.length; key++) {
        // Handle image data specially
        if (key === 11) {
          if (storageItemData[11] === '') storageItemData[11] = null
          else {
            const imageMap = new window.Image()
            imageMap.dataset.containerId = storageItemData[0]
            if (storageItemData[11].toLowerCase().indexOf('.gif') === -1) imageMap.addEventListener('load', addImageToLayout)
            else imageMap.addEventListener('load', addAnimatedImageToLayout)
            if (storageItemData[11].startsWith('data:')) imageMap.src = storageItemData[11].replace(/\|\|\|/gm, ',')
            else imageMap.src = storageItemData[11]

            storageItemData[11] = imageMap
          }
          continue
        }

        // Regular values
        const floatVal = parseFloat(storageItemData[key])
        if (!Number.isNaN(floatVal)) {
          storageItemData[key] = floatVal
        }
      }

      const groupKey = storageItemData[9]
      if (groupKey !== -1) {
        if (groupIndexes.indexOf(groupKey) === -1) {
          groupIndexes.push(groupKey)
          system.groups.push([storageItemData[0]])
        } else {
          system.groups[groupIndexes.indexOf(groupKey)].push(storageItemData[0])
        }

        storageItemData[9] = groupIndexes.indexOf(groupKey)
      }

      system.layoutData.push(storageItemData)
      ++system.layoutSize
    }

    system.activeGroup = null
    mouse.selection = null

    if (system.drawGrid) drawGrid()
    lg('Design loaded from slot ' + document.querySelector('#loadSlot').value.toString() + '.')
  }

  function loadBrowserSlot (slot) {
    const layoutKey = 'layout_' + slot
    const layoutSubKey = layoutKey + '_'
    let layoutIndex = 0

    if (system.storage.getItem(layoutKey) !== null) {
      system.layoutData = []
      system.layoutSize = 0
      system.imgShadow = []
      system.groups = []
      system.activeGroup = null
      mouse.selection = null

      const groupIndexes = []
      const shadowImages = document.querySelectorAll('#imgContainer img')
      for (const shadowImage of shadowImages) shadowImage.parentNode.removeChild(shadowImage)

      while (system.storage.getItem(layoutSubKey + layoutIndex) !== null && system.storage.getItem(layoutSubKey + layoutIndex) !== 'false') {
        const storageItemData = system.storage.getItem(layoutSubKey + layoutIndex).split('|#|')
        for (let key = 0; key < storageItemData.length; key++) {
          // Handle image data specially
          if (key === 11) {
            if (storageItemData[11] === '') storageItemData[11] = null
            else {
              const image = new window.Image()
              if (storageItemData[11].startsWith('data:')) image.src = storageItemData[11].replace(/\|\|\|/gm, ',')
              else image.src = storageItemData[11]

              if (storageItemData[11] === '') storageItemData[11] = null
              else {
                const imageMap = new window.Image()
                imageMap.dataset.containerId = storageItemData[0]
                if (storageItemData[11].toLowerCase().indexOf('image/gif') === -1) imageMap.addEventListener('load', addImageToLayout)
                else imageMap.addEventListener('load', addAnimatedImageToLayout)

                if (storageItemData[11].startsWith('data:')) imageMap.src = storageItemData[11].replace(/\|\|\|/gm, ',')
                else imageMap.src = storageItemData[11]

                storageItemData[11] = imageMap
              }
              continue

              // storageItemData[11] = image
            }
            continue
          }

          // Regular values
          const floatVal = parseFloat(storageItemData[key])
          if (!Number.isNaN(floatVal)) {
            storageItemData[key] = floatVal
          }
        }

        const groupKey = storageItemData[9]
        if (groupKey !== -1) {
          if (groupIndexes.indexOf(groupKey) === -1) {
            groupIndexes.push(groupKey)
            system.groups.push([storageItemData[0]])
          } else {
            system.groups[groupIndexes.indexOf(groupKey)].push(storageItemData[0])
          }

          storageItemData[9] = groupIndexes.indexOf(groupKey)
        }

        system.layoutData.push(storageItemData)
        ++system.layoutSize
        ++layoutIndex
      }

      system.activeGroup = null
      mouse.selection = null

      if (system.drawGrid) drawGrid()
      lg('Design loaded from slot ' + slot + '.')
    } else {
      lg('No design found at slot ' + slot + '.')
    }
  }

  function loadDesign (slot) {
    if (system.storage === null) {
      lg('Cannot use loading or saving function in this browser.')
      return
    }

    if (navigator.userAgent.toLowerCase().indexOf('electron/') === -1) loadBrowserSlot(slot)
    else {
      const slotLoader = document.querySelector('#loadSlot')
      slotLoader.value = slot
      slotLoader.dispatchEvent(new window.Event('change'))
    }
  }

  function handleKeyboardUp (evt) {
    if (mouse.currentAction === 'inputText') {
      evt.preventDefault()
      return
    }

    if (system.drawGrid) drawGrid()

    if (evt.keyCode === 17) {
      // Ctrl key
      system.ctrlPressed = false
      if (mouse.currentAction === 'grouping') mouse.currentAction = 'selected'
      return
    }

    if (system.keyMap[evt.keyCode] !== undefined) { delete system.keyMap[evt.keyCode] }

    if (evt.keyCode === 16) {
      // Shift key - grid snapping off
      evt.preventDefault()

      // Strg key
      mouse.snapToGrid = false
      system.shiftPressed = false
      return
    }

    if (evt.keyCode === 84) {
      // T key
      system.drawContainers = !system.drawContainers
      lg('Drawing containers ' + (system.drawContainers ? 'enabled' : 'disabled'))
      return
    }

    if (system.shiftPressed) {
      if (evt.keyCode >= 49 && evt.keyCode <= 57) {
        // 1 to 9 pressed on keyboard pressed
        const slot = evt.keyCode - 48
        saveDesign(slot)
        lg('Saving design to slot ' + slot.toString() + '..')
      }

      if (evt.keyCode === 68) {
        system.displayBrowserGrid = !system.displayBrowserGrid
        lg('Display browser grid is ' + (system.displayBrowserGrid ? 'enabled' : 'disabled'))
        return
      } else if (evt.keyCode === 71) {
        if (system.currentDesign >= system.designNames.length - 1) system.currentDesign = 0
        else ++system.currentDesign
        design = getDesign(system.designNames[system.currentDesign], system.width, system.height)
        return
      }
    } else {
      if (evt.keyCode >= 49 && evt.keyCode <= 57) {
        // 1 to 9 pressed on keyboard pressed
        const slot = evt.keyCode - 48
        lg('Loading design from slot ' + slot.toString() + '..')
        loadDesign(slot)
      }
    }

    if (system.shiftPressed && evt.keyCode === 8) {
      // Backspace key
      evt.preventDefault()
      if (system.storage !== null) {
        system.storage.clear()
        lg('Storage cleared...')
        return
      }

      lg('Removing desktop save files is not yet implemented.')
    } else if (evt.keyCode === 73) {
      // I key
      if (system.shiftPressed) {
        system.drawImages = !system.drawImages
        lg('Image display is ' + (system.drawImages ? 'enabled' : 'disabled'))
      } else system.showHelp = !system.showHelp
      if (!system.showHelp && system.drawGrid) drawGrid()
    } else if (evt.keyCode === 85) {
      // U key
      system.showHelpNote = !system.showHelpNote
    } else if (evt.keyCode === 17) {
      // Control key - cancels current action, for example selection or container creation
      mouse.currentAction = null
    } else if (evt.keyCode === 71) {
      // G key toggles grid
      system.drawGrid = !system.drawGrid
      if (system.drawGrid) drawGrid()
      else bgContext.clearRect(0, 0, system.gridEndX, system.gridEndY)
      lg('Switching grid ' + (system.drawGrid ? 'on' : 'off'))
    } else if (evt.keyCode === 67) {
      // C key starts a copy
      if (mouse.selection !== null) {
        system.copyItem = mouse.selection
        lg('Taking a copy of layout item: ' + system.copyItem[0])
      } else {
        system.drawResizers = !system.drawResizers
        lg('Switching hot corner display ' + (system.drawResizers ? 'on' : 'off'))
      }
    } else if (evt.keyCode === 86) {
      // V key create a copy at cursor location
      if (system.copyItem !== null) {
        createLayoutContainer(mouse.x, mouse.y, mouse.x + system.copyItem[4] - system.copyItem[2], mouse.y + system.copyItem[5] - system.copyItem[3], false)
        mouse.selection = system.layoutData[system.layoutSize - 1]
      }
    } else if (evt.keyCode === 68) {
      // D key - toggle row/column hightlight on off
      system.drawHighlight = !system.drawHighlight
      lg('Switching colum/row highlighting ' + (system.drawHighlight ? 'on' : 'off'))
    } else if (evt.keyCode === 32) {
      // Space key up, turn repeat action off
      if (mouse.currentAction === 'mirrorSelection') {
        if (mouse.selection === null) mouse.currentAction = 'drawing'
        else mouse.currentAction = 'selected'
      }
    } else if (evt.keyCode === 88) {
      // X key, horizontal/vertical repeation
      system.mirrorHorizontal = !system.mirrorHorizontal
      lg('Setting mirroring to: ' + (system.mirrorHorizontal ? 'Horizontally' : 'Vertically'))
    } else if (evt.keyCode === 66) {
      // B key
      system.expandMode = 'border'
      lg('Setting border expand mode.')
    } else if (evt.keyCode === 77) {
      // M key
      system.expandMode = 'margin'
      lg('Setting margin expand mode.')
    } else if (evt.keyCode === 80) {
      // P key
      system.expandMode = 'padding'
      lg('Setting padding expand mode.')
    } else if (evt.keyCode === 69) {
      // E key erases the old spacing values for mirroring
      system.spaceGridX = 0
      system.spaceGridY = 0
      lg('Mirror spacing resetted on both axis to 0.')
    } else if (evt.keyCode === 87) {
      // W key increases the current selection axis grid spacing by one grid unit
      if (system.mirrorHorizontal) system.spaceGridX += system.gridX
      else system.spaceGridY += system.gridY
      lg('Increased grid spacing to: ' + system.spaceGridX + ' X and ' + system.spaceGridY + ' Y')
    } else if (evt.keyCode === 81) {
      // Q key decreases the current selection axis grid spacing by one grid unit
      if (system.mirrorHorizontal) {
        system.spaceGridX -= system.gridX
        if (system.spaceGridX < 0) system.spaceGridX = 0
      } else {
        system.spaceGridY -= system.gridY
        if (system.spaceGridY < 0) system.spaceGridY = 0
      }
      lg('Decreased grid spacing to: ' + system.spaceGridX + ' X and ' + system.spaceGridY + ' Y')
    }
  }

  function addImageToLayout (evt) {
    if (evt.target.dataset.containerId !== undefined) {
      const containerId = parseInt(evt.target.dataset.containerId)
      for (const container of system.layoutData) {
        if (container[0] === containerId) {
          mouse.selection = container
          mouse.selection[11] = evt.target
          break
        }
      }
    } else if (mouse.selection !== null) {
      mouse.selection[11] = evt.target
    } else {
      createLayoutContainer(mouse.x, mouse.y, mouse.x + evt.target.width, mouse.y + evt.target.height, false)
      mouse.selection = system.layoutData[system.layoutData.length - 1]
    }

    const shadowIndex = system.imgShadow.indexOf(mouse.selection[0])
    if (shadowIndex !== -1) {
      system.imgShadow.splice(shadowIndex, 1)
      const shadowImage = document.querySelector('#imgContainer #img_' + mouse.selection[0])
      shadowImage.parentNode.removeChild(shadowImage)
    }

    mouse.selection[11] = evt.target
    evt.target.removeEventListener('load', addImageToLayout)
    mouse.highlightSelection = false
  }

  function addAnimatedImageToLayout (evt) {
    let shadowImg
    if (evt.target.dataset.containerId !== undefined) {
      const containerId = parseInt(evt.target.dataset.containerId)
      for (const container of system.layoutData) {
        if (container[0] === containerId) {
          mouse.selection = container
          mouse.selection[11] = evt.target
          break
        }
      }
    } else if (mouse.selection !== null) {
      mouse.selection[11] = evt.target.src
    } else {
      createLayoutContainer(mouse.x, mouse.y, mouse.x + evt.target.width, mouse.y + evt.target.height, false)
      mouse.selection = system.layoutData[system.layoutData.length - 1]
    }

    if (system.imgShadow.indexOf(mouse.selection[0]) === -1) {
      system.imgShadow.push(mouse.selection[0])
      shadowImg = document.createElement('img')
      shadowImg.src = evt.target.src
      shadowImg.style = 'position: absolute; left: ' + mouse.x + 'px; top: ' + mouse.y + 'px; z-index: 1; pointer-events:none; user-select: none;'
      shadowImg.id = 'img_' + mouse.selection[0]
      document.querySelector('#imgContainer').appendChild(shadowImg)
    } else {
      const shadowImg = document.querySelector('#imgContainer #img_' + mouse.selection[0])
      shadowImg.src = evt.target.src
    }

    mouse.selection[11] = evt.target
    evt.target.removeEventListener('load', addAnimatedImageToLayout)
    mouse.highlightSelection = false
  }

  function importDroppedImage (evt) {
    for (const fileItem of evt.dataTransfer.files) {
      if (fileItem.type === 'image/jpeg' || fileItem.type === 'image/webp' || fileItem.type === 'image/png' || fileItem.type === 'image/gif') {
        if (fileItem.path !== undefined) {
          const imageMap = new window.Image()
          if (fileItem.type !== 'image/gif') imageMap.addEventListener('load', addImageToLayout)
          else imageMap.addEventListener('load', addAnimatedImageToLayout)

          imageMap.src = fileItem.path
        } else {
          const reader = new window.FileReader()
          reader.addEventListener('load', function () {
            const imageMap = new window.Image()
            if (fileItem.type !== 'image/gif') imageMap.addEventListener('load', addImageToLayout)
            else imageMap.addEventListener('load', addAnimatedImageToLayout)

            imageMap.src = reader.result
          }, false)

          reader.readAsDataURL(fileItem)
        }
      }
    }

    evt.preventDefault()
  }

  function allowImageDrop (evt) {
    evt.preventDefault()
    handleMouseMove(evt)
    mouse.highlightSelection = true
  }

  function removeImageDropdownHighlight (evt) {
    evt.preventDefault()
    mouse.highlightSelection = false
  }

  canvas.addEventListener('mousemove', handleMouseMove)
  canvas.addEventListener('mousedown', checkMouseDown)
  canvas.addEventListener('mouseup', checkMouseUp)
  canvas.addEventListener('drop', importDroppedImage)
  canvas.addEventListener('dragleave', removeImageDropdownHighlight)
  canvas.addEventListener('dragover', allowImageDrop)
  document.addEventListener('keydown', handleKeyboardDown)
  document.addEventListener('keyup', handleKeyboardUp)

  document.querySelector('#savePanel').addEventListener('input', loadElectronSlot)

  // Draw the initial grid on the bgCanvas
  drawGrid()
  mainloop()
}
