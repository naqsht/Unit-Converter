var arrLength = [1,100,0.001,39.3701,3.28084,1.09361,0.000621371,null,null,null,0.01,1,0.00001,0.393701,0.0328084,0.0109361,0.0000062137,null,null,null,1000,100000,1,39370.1,3280.84,1093.61,0.621371,null,null,null,0.0254,2.54,0.0000254,1,0.0833333,0.0277778,0.000015783,null,null,null,0.3048,30.48,0.0003048,12,1,0.333333,0.000189394,null,null,null,0.9144,91.44,0.0009144,36,3,1,0.000568182,null,null,null,1609.34,160934,1.60934,63360,5280,1760,1];


function length_converter(){

    var valNum = document.getElementById("lengthValue").value;
    if (valNum==null){
        return null;
    }

    
    var length_from = document.getElementById("lengthFrom").selectedIndex;
    var length_to = document.getElementById("lengthTo").selectedIndex;
    var str_from_to = length_from.toString() + length_to.toString();
    var arr_num = parseInt(str_from_to);

    if(arrLength[arr_num]==null){
        return null;
    }
    var result= valNum*(arrLength[arr_num]);
    document.getElementById("message").innerHTML = result.toFixed(4);
    return result.toFixed(4);
    
}



