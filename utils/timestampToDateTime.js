module.exports = function (timestamp) {
    const dateObj = new Date(timestamp)
    const year = dateObj.getFullYear()
    let month = dateObj.getMonth() - 1
    if (month<10) (month = "0" + month)
    let date = dateObj.getDate()
    if (date<10) (date = "0" + date)
    let hour = dateObj.getHours()
    if (hour<10) (hour = "0" + hour)
    let minute = dateObj.getMinutes()
    if (minute<10) (minute = "0" + minute)
    let seconds = dateObj.getSeconds()
    if (seconds<10) (seconds = "0" + seconds)
    return `${year}-${month}-${date} ${hour}:${minute}:${seconds}`
}