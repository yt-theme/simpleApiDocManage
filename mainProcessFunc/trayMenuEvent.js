const { app } = require('electron')

module.exports = {
    // 通知区域点击退出
    trayQuit: function (menuItem, browserWindow, event) {
        app.quit()
    }
}