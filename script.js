function countDown(number,callback){
    if(number>0){
        document.getElementById("container").innerHTML = number;
        console.log(number);
        setTimeout(function(){
            countDown(number-1,callback);
        },1000);
    }else{
        callback();
    }
}


function display(){
    var div = document.getElementById("container").innerHTML = "Happy Independence Day!";
    
}



countDown(10,display);