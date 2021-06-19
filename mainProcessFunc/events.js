const { ipcMain, ipcRenderer } = require("electron")
const { db_project, db_doc, db_module, db_setting } = require("./nedb.js")
const createWindow = require("./createWindow")

// 调用nedb消息
ipcMain.on("createWindow", (event, arg) => {
    createWindow[arg.window](arg.data)
    // event.returnValue = { err, newDoc }
})

// 通知主窗口刷新
ipcMain.on("call_index_refresh", (event, arg) => {
    global.index_window.webContents.send("index_refresh", arg)
})
