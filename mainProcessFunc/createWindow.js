const { app, Menu, Tray, BrowserWindow } = require('electron')
const uuid = require("../utils/createUuid.js")

/*
    1.
    global.win_objs 为存储窗口对象唯一识别标识信息 {
        "win uuid": 窗口对象引用,
    }
    global.win_types 存储窗口类型唯一标识信息 {
        "win uuid": {
            "type": "xxx",
            "window": win
        }
    }

    2.
    win_parent_id == 0 说明是入口函数创建的窗口
*/
global.win_objs = {}
global.win_types = {}

// 存储窗口及合并传递数据方法
function readyToShowFunc (win, type, data) {
    const self_id = uuid()
    global.win_objs[self_id] = win
    global.win_types[self_id] = {
        "type": type,
        "window": win
    }
    let tmp_data = null
    if (data) {
        tmp_data = { ...data, "relationship": { "win_parent_id": data.relationship.win_parent_id, "win_self_id": self_id } }
    }
    return tmp_data
}

module.exports = {
    // 主页
    index: function (data) {
        const win = new BrowserWindow({
            width: 620,
            height: 630,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true
            }
        })
        win.loadFile('window/index/index.html')
        // win.webContents.openDevTools()
        // 向窗口发送options
        win.once('ready-to-show',() => {
            win.show()
            const tmp_data = readyToShowFunc(win, "index", data)
            win.webContents.send('options', tmp_data)
        })
        
        return win
    },

    // 项目新增编辑
    projectAddEdit: function (data) {
        const win = new BrowserWindow({
            width: 600,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true
            }
        })
        win.loadFile('window/projectAddEdit/projectAddEdit.html')
        // win.webContents.openDevTools()
        win.once('ready-to-show',() => {
            win.show()
            const tmp_data = readyToShowFunc(win, "projectAddEdit", data)
            win.webContents.send('options', tmp_data)
        })

        return win
    },

    // 文档主页
    docIndex: function (data) {
        const win = new BrowserWindow({
            width: 1300,
            height: 800,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true
            }
        })
        win.loadFile('window/docIndex/docIndex.html')
        // win.webContents.openDevTools()
        win.once('ready-to-show',() => {
            win.show()
            const tmp_data = readyToShowFunc(win, "docIndex", data)
            win.webContents.send('options', tmp_data)
        })

        return win
    },

    // 文档新增编辑
    docAddEdit: function (data) {
        const win = new BrowserWindow({
            width: 600,
            height: 670,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true
            }
        })
        win.loadFile('window/docAddEdit/docAddEdit.html')
        // win.webContents.openDevTools()
        win.once('ready-to-show',() => {
            win.show()
            const tmp_data = readyToShowFunc(win, "docAddEdit", data)
            win.webContents.send('options', tmp_data)
        })

        return win
    },

    // 文档新增编辑
    docDetail: function (data) {
        const win = new BrowserWindow({
            width: 900,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true
            }
        })
        win.loadFile('window/docDetail/docDetail.html')
        // win.webContents.openDevTools()
        win.once('ready-to-show',() => {
            win.show()
            const tmp_data = readyToShowFunc(win, "docDetail", data)
            win.webContents.send('options', tmp_data)
        })

        return win
    },

    // 模块管理
    moduleIndex: function (data) {
        const win = new BrowserWindow({
            width: 600,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true
            }
        })
        win.loadFile('window/moduleIndex/moduleIndex.html')
        // win.webContents.openDevTools()
        win.once('ready-to-show',() => {
            win.show()
            const tmp_data = readyToShowFunc(win, "moduleIndex", data)
            win.webContents.send('options', tmp_data)
        })

        return win
    },
}