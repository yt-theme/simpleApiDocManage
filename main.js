const { app, Menu, Tray, BrowserWindow } = require('electron')
const path          = require('path')
const { trayQuit }  = require("./mainProcessFunc/trayMenuEvent.js")
const events        = require("./mainProcessFunc/events.js")
const createWindow  = require("./mainProcessFunc/createWindow.js")

let tray = null

// ===================================================================
//          事件
// ===================================================================
app.whenReady().then(() => {
    createTray()
    global.index_window = createWindow['index']()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// ===================================================================
//          方法
// ===================================================================

// 通知区域图标
function createTray () {
    tray = new Tray(path.join(__dirname, './img/tray.png'))
    const contextMenu = Menu.buildFromTemplate([
        { label: 'quit', type: 'normal', click: trayQuit }
    ])
    tray.setContextMenu(contextMenu)
}