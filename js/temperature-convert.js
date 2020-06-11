function countDecimal(value) {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
}

function roundResult(result){
    num_d = countDecimal(result);

    if(num_d<=5){
        f_result = result.toFixed(num_d);
    }

    else{
        f_result = result.toFixed(5);
    }

    return f_result;
}

function temperature_converter(){

    var valNum = Number(document.getElementById("tempValue").value);
    if (valNum==null){
        return null;
    }

    
    var temp_from = document.getElementById("tempFrom").selectedIndex;
    var temp_to = document.getElementById("tempTo").selectedIndex;

    if(temp_from == temp_to){ // case when From and To unit is same
        result = valNum;
        document.getElementById("message").innerHTML = result;
        return result;
    }

    var str_from_to = temp_from.toString() + temp_to.toString();
    var arr_num = parseInt(str_from_to);
    var result=0;


    if(arr_num==1){ // c to f
        result = (valNum*(9/5)) + 32;
    }

    else if(arr_num==2){ // c to k
        result = valNum + 273.15;
    }

    else if(arr_num==10){ // f to c
        result = (valNum-32)*(5/9);
    }

    else if(arr_num==12){ // f to k
        result = (valNum-32)*(5/9) + 273.15;
    }

    else if(arr_num==20){ // k to c
        result = valNum - 273.15;
    }

    else if(arr_num==21){ // k to f
        result = ((valNum-273.15)*(9/5)) + 32; 
    }

    else{ // none
        return null;
    }

    var f_result = roundResult(result);

    document.getElementById("message").innerHTML = f_result;
    return f_result;
    
}