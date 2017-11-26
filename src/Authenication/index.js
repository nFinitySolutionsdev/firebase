var firebase = require("firebase")
var config = require('../config')
firebase.initializeApp(config)

var database = firebase.database()