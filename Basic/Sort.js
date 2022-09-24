var arr = [ 1, 30, 4, 21, 100000]



var compareFn = (a,b) =>{
    if(a<b){
        return -1
    }
    if (a>b){
        return 1
    }
    else{
        return 0
    }
}
console.log(arr.sort(compareFn));