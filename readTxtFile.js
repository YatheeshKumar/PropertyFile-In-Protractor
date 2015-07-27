/**
 * Created by Admin on 24-07-2015.
 */


var fs = require('fs');

var value;
function getValue(key){
    var array = fs.readFileSync('temp.txt').toString().split("\n");
    for(i in array) {
        if ( array[i].indexOf(key) > -1 ) {
            value = array[i].replace(key + "=", "");
        }
    }
    return value;
}

