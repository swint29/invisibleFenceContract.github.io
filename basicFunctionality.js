function drivewayFunc() {
    var drivewayCB = document.getElementById("drivewayCB");
    var drivewayFeet = document.getElementById("drivewayFeet");
    var driveway = document.getElementById("driveway");

    drivewayFeet.style.display = drivewayCB.checked ? "block" : "none";
    driveway.style.display = drivewayCB.checked ? "block" : "none";
}
function sidewalkFunc() {
    var sidewalkCB = document.getElementById("sidewalkCB");
    var swNumber = document.getElementById("swNumber");
    var sidewalk = document.getElementById("sidewalk");

    swNumber.style.display = sidewalkCB.checked ? "block" : "none";
    sidewalk.style.display = sidewalkCB.checked ? "block" : "none";
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