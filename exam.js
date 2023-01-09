const add = require ('./add')
const read = require ('./read')

//get user input
const data = process.argv

var note = {}

if(data[2]) {
    note = {
        Employee: data[2],
        Role: data[3],
        Department: data[4], 
    }
    var oldNote = read()
    add(note, oldNote)
}
if(data[2] == 'read'){
    present(read())
}