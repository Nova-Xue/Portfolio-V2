$(document).ready(function (){

    function avgOfArry(arr){
        var sum = 0;
        for(var i=0;i<arr.length;i++){
            sum += arr[i];
        }
        return sum/(arr.length);
    }

    console.log(avgOfArry([2,3,4,5]));
    
});