const { ipcMain, ipcRenderer } = require("electron")
const { db_project, db_doc, db_module, db_setting } = require("./nedb.js")
const createWindow = require("./createWindow")

// 创建窗口
ipcMain.on("createWindow", (event, arg) => {
    createWindow[arg.window](arg)
    // event.returnValue = { err, newDoc }
})

// 销毁窗口
ipcMain.on("destoryWindow", (event, arg) => {
    if (arg.relationship && arg.relationship.win_self_id) {
        const target_win = global.win_objs[arg.relationship.win_self_id]
        target_win.close()
        delete target_win
    }
})

// 通知主窗口刷新
ipcMain.on("call_index_refresh", (event, arg) => {
    const window_id = arg.window_id
    global.win_objs[window_id] && global.win_objs[window_id].webContents.send("refresh_data", "ok")
})
