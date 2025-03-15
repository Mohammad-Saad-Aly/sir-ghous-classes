// var arr = ['a','b','c','d']
// document.writeln(arr + "<br>")

// var para = 'hello world hello saylani hello smit'
// var test = para.split(' ')

// for(var i=0; i < test.length; i++){
//     test[i] = test[i][0].toUpperCase() + test[i].slice(1)
// }

// var final = test.join(' ')

// document.writeln(final)

var str = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+='
var pass = ''
var len = +prompt("Enter kitni length")

for (var i = 0; i < len; i++) {
    pass += str[Math.floor(Math.random() * str.length)]
} document.writeln(pass)



