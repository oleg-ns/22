//1
var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
function array(arr) {
    n=arr.length
    for (i=0; i<=n; i++) {
        if ((typeof arr[i]) == "string") continue;
        else {arr.splice(i,1)}
    }
    arr.reverse()
    console.log(arr.join(""))
};
array(arr);
//2
var str = prompt("input");
function word(str) {
    var n = str.split("");
    var r = str.split("");
        r.reverse();
    var c = str.length;
    for (i=0; i<=c; i++) {
        if (n[i] == r[i]) continue;
    else {console.log("False"); break};
    }
};
word(str);
//3
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
function anClean(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join('');
        obj[sorted] = arr[i];}
        var result = [];
        for (var key in obj) result.push(obj[key]);
        return result;
};
anClean(arr);
console.log(anClean(arr));
//4
var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
var r = arr.reverse();
var t = r.join(" ,");
function reverse(t){
    return t.split("").reverse().join("");
}; reverse(t);
//5.1
var b = 0;
for (a = 1; a <=100; a++) {
    b += a;
}
console.log(b);
//5.2
var c = 0;
for (d=1; d<=100; d++) {
    if (d%2 == 0) {
c+=d;
    }
};
console.log(c);
//6
var x = +prompt("X");
var y = +prompt("Y");
var z = +prompt("Z");
function callMe(x,y,z) {
    var f = x + y + z;
        if ((typeof f) == "number") {alert(f)}
        else {console.error("Тут текст ошибки")};
}
callMe(x,y,z)
//7
    var g = ["sdf", "dsf", "fds"];
    function callMeAgain (g) {
        g.sort();
        var h = g.join(",");
        console.log(h);
    }
    callMeAgain (g);
