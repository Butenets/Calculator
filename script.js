function test(num_znaz){
    document.getElementById("test").innerHTML += num_znaz;
    osnova();
};
function ravno(num_znaz){
    document.getElementById("test").innerHTML += num_znaz;
    osnova();
}
function clears(){
    document.getElementById("test").innerHTML ='';
}
addEventListener("keydown", function (e){
    var a = e.key;
    if(a == 1 | a == 2 | a == 3 | a == 4 | a == 5 | a == 6 | a == 7 | a == 8 | a == 9 | a == 0 | a == '*'| a == '/'| a == '+'| a == '-'){
        document.getElementById("test").innerHTML += a;
        osnova();
    }
    if(a == 'Backspace'){
        var x = document.getElementById("test").innerHTML.substring(0, document.getElementById("test").innerHTML.length - 1);
        document.getElementById("test").innerHTML = x;
    }
    if(a == 'Delete'){
        clears();
    }
    if(a == "=" || a == "Enter"){
        document.getElementById("test").innerHTML += "=";
        osnova();
    }
    })
    function osnova(){
        let elemtest = document.getElementById("test").innerHTML;
    let checkznach = elemtest.split(/[\+|\-|\*/|\=/g]/);
    var int = checkznach.length;
    if(int>2){
        var n = document.getElementById("test").innerHTML.substring(0, document.getElementById("test").innerHTML.length - 1);
    if(n.indexOf("+") !== -1){
    document.getElementById("test").innerHTML = (Number(checkznach[0])) + (Number(checkznach[1]));
    }
    if(n.includes("-")){
    document.getElementById("test").innerHTML = (Number(checkznach[0])) - (Number(checkznach[1]));
    }
    if(n.includes("*")){
    document.getElementById("test").innerHTML = (Number(checkznach[0])) * (Number(checkznach[1]));
    }
    }
    }