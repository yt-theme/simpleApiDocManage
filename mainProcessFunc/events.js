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

// 通知父窗口刷新
ipcMain.on("call_parent_refresh", (event, arg) => {
    const window_id = arg.window_id
    global.win_objs[window_id] && global.win_objs[window_id].webContents.send("refresh_data", "ok")

})

// 通知此类型窗口刷新
ipcMain.on("call_types_refresh", (event, arg) => {
    const window_id = arg.window_id     // 参数二选一
    const window_type = arg.window_type // 参数二选一
    if (window_id) {
        let type = ""
        // 1.查此id对应的type
        for (let ite in global.win_types) {
            if (ite == window_id) {
                type = global.win_types[ite].type
                break
            }
        }
        // 将此type的窗口全部执行refresh方法
        for (let ite in global.win_types) {
            if (global.win_types[ite].type == type) {
                global.win_types[ite].window.webContents.send("refresh_data", "ok")
                break
            }
        }
    }
    else if (window_type) {
        for (let ite in global.win_types) {
            if (global.win_types[ite].type == window_type) {
                global.win_types[ite].window.webContents.send("refresh_data", "ok")
                break
            }
        }
    }

})