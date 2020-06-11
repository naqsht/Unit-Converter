var arrWeight =[1,0.001,Math.pow(10,-6),(9.8421)*(Math.pow(10,-7)),0.00220462,0.035274,null,null,null,null,1000,1,0.001,(9.84207)*(Math.pow(10,-4)),2.20462,35.274,null,null,null,null,Math.pow(10,6),1000,1,0.984207,2204.62,35274,null,null,null,null,(1.106)*(Math.pow(10,6)),1016.05,1.01605,1,2240,35840,null,null,null,null,453.592,0.453592,((4.53592)*Math.pow(10,-4)),((4.46429)*Math.pow(10,-4)),1,16,null,null,null,null,28.3495,0.0283495,((2.835)*Math.pow(10,-5)),((2.7902)*Math.pow(10,-5)),1]

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


function weight_converter(){

    var valNum = Number(document.getElementById("weightValue").value);
    if (valNum==null){
        return null;
    }

    
    var weight_from = document.getElementById("weightFrom").selectedIndex;
    var weight_to = document.getElementById("weightTo").selectedIndex;

    if(weight_from == weight_to){ // case when From and To unit is same
        result = valNum;
        document.getElementById("message").innerHTML = result;
        return result;
    }

    var str_from_to = weight_from.toString() + weight_to.toString();
    var arr_num = parseInt(str_from_to);

    if(arrWeight[arr_num]==null){
        return null;
    }

    var result= valNum*(arrWeight[arr_num]);

    var f_result = roundResult(result);

    document.getElementById("message").innerHTML = f_result;
    return f_result;
    
}