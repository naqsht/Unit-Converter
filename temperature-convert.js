function temperature_converter(){

    var valNum = Number(document.getElementById("tempValue").value);
    if (valNum==null){
        return null;
    }

    
    var temp_from = document.getElementById("tempFrom").selectedIndex;
    var temp_to = document.getElementById("tempTo").selectedIndex;
    var str_from_to = temp_from.toString() + temp_to.toString();
    var arr_num = parseInt(str_from_to);
    var result=0;



    if(arr_num==0){ //c to c
        result = valNum;
    }

    else if(arr_num==1){ // c to f
        result = (valNum*(9/5)) + 32;
    }

    else if(arr_num==2){ // c to k
        result = valNum + 273.15;
    }

    else if(arr_num==10){ // f to c
        result = (valNum-32)*(5/9);
    }

    else if(arr_num==11){ // f to f
        result = valNum;
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

    else if(arr_num==22){ // k to k
        result = valNum;
    }

    else{ // none
        return null;
    }
    document.getElementById("message").innerHTML = result;
    return result;
    
}