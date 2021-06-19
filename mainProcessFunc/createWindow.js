const { app, Menu, Tray, BrowserWindow } = require('electron')

module.exports = {
    // 主页
    index: function (data) {
        const win = new BrowserWindow({
            width: 1300,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true
            }
        })
        win.loadFile('window/index/index.html')
        win.webContents.openDevTools()
        
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
            win.show();
            win.webContents.send('data', data);
        })

        return win
    }
}