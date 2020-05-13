var totalCost = 0;
var tempCost = 0;

function drivewayCost() {
    var driveway = document.getElementById("driveway").value;
    var totCost = document.getElementById("totalCost").innerHTML;
    var drivewayCart = document.getElementById("drivewayCart").innerHTML;

    driveway *= 3.5;
    totalCost -=tempCost;
    totalCost += driveway; 
    tempCost = driveway;

    document.getElementById("totalCost").innerHTML = totalCost;

    if(drivewayCart.length != 0 ){
        document.getElementById("drivewayCart").innerHTML = "";
    }

    document.getElementById("drivewayCart").innerHTML += "Cost of the driveway ($"+driveway+")</h5>";
    /*

    if(){


        totalCost += driveway;
        document.getElementById("drivewayCart").innerHTML += "Cost of the driveway ($"+driveway+")</h5>";
        flip=false;
 
    }else{

        totalCost -= tempCost;
        totalCost += driveway;
        document.getElementById("drivewayCart").remove();
        document.getElementById("cart").innerHTML += "Cost of the driveway ($"+driveway+")";

    }
    tempCost = driveway;
    document.getElementById("totalCost").innerHTML = totalCost; */

}        
function sidewalkCost() {
    var sidewalk = document.getElementById("sidewalk").value;
    sidewalk *= 25;
    totalCost += sidewalk;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the sidewalk ($"+sidewalk+")<br><br>";
}
function diggingCost() {
    var dig = document.getElementById("dig").value;
    dig *= 1.25;
    totalCost += dig;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of digging ($"+dig+")<br><br>";
}
function wireCost() {
    var wire = document.getElementById("wire").value;
    wire *= .7;
    totalCost += wire;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the wire ($"+wire+")<br><br>";
}
function pinnedWireCost() {
    var pinnedWire = document.getElementById("pinnedWire").value;
    pinnedWire *= 25;
    totalCost += pinnedWire;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the pinned wire ($"+pinnedWire+")<br><br>";
}

function indoorSPCost(){
    var indoorSP = document.getElementById("indoorSP");

    indoorSP.checked ? totalCost+= 189 : totalCost-=189;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the indoor SP ($189)<br><br>";

}

function outdoorSPCost(){
    var outdoorSP = document.getElementById("outdoorSP");

    outdoorSP.checked ? totalCost+=209 : totalCost-=209;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the indoor SP ($209)<br><br>";
}            
function indoorSGCost(){
    var indoorSG = document.getElementById("indoorSG");

    indoorSG.checked ? totalCost+=279 : totalCost-=279;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the indoor SG ($279)<br><br>";
}
function microSUCost(){
    var microSU = document.getElementById("microSU");

    microSU.checked ? totalCost+=129 : totalCost-=129;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the micro SU ($129)<br><br>";

}
function dualCost(){
    var dual = document.getElementById("dual");

    dual.checked ? totalCost+=129 : totalCost-=129;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the dual ($129)<br><br>";

}
function batteryCost(){
    var battery = document.getElementById("battery");

    battery.checked ? totalCost+=129 : totalCost-=129;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the battery ($129)<br><br>";

}
function microPCCost(){
    var microPC = document.getElementById("microPC");

    microPC.checked ? totalCost+=399 : totalCost-=399;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the micro PC ($399)<br><br>";

}
function shieldsCost(){
    var shields = document.getElementById("shields");

    shields.checked ? totalCost+=189 : totalCost-=189;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the shields ($189)<br><br>";
}
function powerCost(){
    var power = document.getElementById("power");

    power.checked ? totalCost+=74.95 : totalCost-=74.95;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the power ($74.95)<br><br>";

}
function singleCost(){
    var single = document.getElementById("single");

    single.checked ? totalCost+=129 : totalCost-=129;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the single ($129)<br><br>";

}
function boundaryCost(){
    var boundary = document.getElementById("boundary");

    boundary.checked ? totalCost+=599 : totalCost-=599;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the boundary ($599)<br><br>";

}
function gpsCost(){
    var indoorSP = document.getElementById("gps");

    gps.checked ? totalCost+=799 : totalCost-=799;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the gps ($799)<br><br>";

}
function winterCost(){
    var winter = document.getElementById("winter");

    winter.checked ? totalCost+=99 : totalCost-=99;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the winter ($99)<br><br>";

}
function doormanCost(){
    var doorman = document.getElementById("doorman");

    doorman.checked ? totalCost+=699 : totalCost-=699;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the doorman ($699)<br><br>";


}
function laborCost(){
    var labor = document.getElementById("labor");

    indoorSP.checked ? totalCost+= 0: totalCost-= 0;
    document.getElementById("totalCost").innerHTML = totalCost;
    document.getElementById("cart").innerHTML += "Cost of the labor<br><br>";

}