function drivewayFunc() {
    var drivewayCB = document.getElementById("drivewayCB");
    var drivewayFeet = document.getElementById("drivewayFeet");
    var driveway = document.getElementById("driveway");

    drivewayFeet.style.display = drivewayCB.checked ? "block" : "none";
    driveway.style.display = drivewayCB.checked ? "block" : "none";

    if(!drivewayCB.checked){

        document.getElementById("drivewayCart").innerHTML= "";
        var totCost = document.getElementById("totalCost").innerHTML;
        var drivewayCost = document.getElementById("driveway").value * 3.5;
        totCost -= drivewayCost;
        
        document.getElementById("totalCost").innerHTML = totCost;
    }
}
function sidewalkFunc() {
    var sidewalkCB = document.getElementById("sidewalkCB");
    var swNumber = document.getElementById("swNumber");
    var sidewalk = document.getElementById("sidewalk");

    swNumber.style.display = sidewalkCB.checked ? "block" : "none";
    sidewalk.style.display = sidewalkCB.checked ? "block" : "none";

    if(!sidewalkCB.checked){

        document.getElementById("sidewalkCart").innerHTML= "";
        var totalCost = document.getElementById("totalCost").innerHTML;
        var sidewalkCost = document.getElementById("sidewalk").value * 25;
        totalCost -= sidewalkCost;
        
        document.getElementById("totalCost").innerHTML = totalCost;
    }
}
function diggingFunc() {
    var diggingCB = document.getElementById("diggingCB");
    var diggingFeet = document.getElementById("diggingFeet");
    var dig = document.getElementById("dig");

    diggingFeet.style.display = diggingCB.checked ? "block" : "none";
    dig.style.display = diggingCB.checked ? "block" : "none";
}
function wireFunc() {
    var wireCB = document.getElementById("wireCB");
    var wireFeet = document.getElementById("wireFeet");
    var wire = document.getElementById("wire");

    wireFeet.style.display = wireCB.checked ? "block" : "none";
    wire.style.display = wireCB.checked ? "block" : "none";
}
function pinnedWireFunc() {
    var pinnedWireCB = document.getElementById("pinnedWireCB");
    var pinnedWireFeet = document.getElementById("pinnedWireFeet");
    var pinnedWire = document.getElementById("pinnedWire");

    pinnedWireFeet.style.display = pinnedWireCB.checked ? "block" : "none";
    pinnedWire.style.display = pinnedWireCB.checked ? "block" : "none";
}
function toggle1(source) {
    checkboxes = document.getElementsByName('pac1Box');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}
function toggle2(source) {
    checkboxes = document.getElementsByName('pac2Box');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}function toggle3(source) {
    checkboxes = document.getElementsByName('pac3Box');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}function toggle4(source) {
    checkboxes = document.getElementsByName('pac4Box');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}