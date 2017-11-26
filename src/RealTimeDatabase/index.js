var firebase = require("firebase")
var config = require('../config')
firebase.initializeApp(config)

var database = firebase.database()


function createNode(){
        database.ref('Companies/' + 0)
            .set({
            name: "NFinitySolutions"
        }).then(function () {
            closeConnection()
    })
}



function readNode() {
    var compRef = database.ref('Companies/' + 0)
        compRef.on('value', function(snapshot) {
          console.log(snapshot.val())
          closeConnection()
      })
}

function updateNode() {
    database.ref('Companies/' + 0)
            .update({
            name: "NFinitySolutions",
            age: 1,
            members: 3
        }).then(function () {
            closeConnection()
    })
}


function deleteNode() {
     database.ref('Companies/' + 0)
            .remove()
            .then(function () {
            closeConnection()
    })
}




function closeConnection() {
    setTimeout(function() {
        console.log('Closing connection')
        database.goOffline()
    }, 100)
}

createNode()
readNode()
updateNode()
// deleteNode()