const anaymousFunction = function(number){
    return number * number;
}

console.log(anaymousFunction(5));

setTimeout(function () {  
    console.log('Execute later after 1 second')  
}, 1000);  

(function() {  
    console.log('Hello');  
})();  