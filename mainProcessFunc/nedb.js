const path = require("path")
const os = require("os")
const db_file_path = path.join(os.homedir(), "simpleDoc")
const Database = require("nedb")

// project
const db_project = function () {
    return new Database({ 
        "filename": path.join(db_file_path, "db_project.db"),
        "autoload": true
    })
}

// doc
const db_doc = function () {
    new Database({ 
        "filename": path.join(db_file_path, "db_doc.db"),
        "autoload": true
    })
}

// module
const db_module = function () {
    new Database({ 
        "filename": path.join(db_file_path, "db_module.db"),
        "autoload": true
    })
}

// setting
const db_setting = function () {
    new Database({ 
        "filename": path.join(db_file_path, "db_setting.db"),
        "autoload": true
    })
}

/*
    db promise
*/

function dbFind (dbObj, data) {
    return new Promise((resolve, reject) => {
        dbObj.find(dbObj, (err, docs) => {
            if (err == null) {
                resolve(docs)
            } else {
                reject(err)
            }
        })
    })
} 

module.exports = {
    db_project,
    db_doc,
    db_module,
    db_setting,
    dbFind,
}