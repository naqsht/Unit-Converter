arrWeight =[]

function weight_converter(){

    var valNum = Number(document.getElementById("weightValue").value);
    if (valNum==null){
        return null;
    }

    
    var weight_from = document.getElementById("weightFrom").selectedIndex;
    var weight_to = document.getElementById("weightTo").selectedIndex;
    var str_from_to = weight_from.toString() + weight_to.toString();
    var arr_num = parseInt(str_from_to);

    if(arrWeight[arr_num]==null){
        return null;
    }
    var result= valNum*(arrWeight[arr_num]);
    document.getElementById("message").innerHTML = result;
    return result;
    
}