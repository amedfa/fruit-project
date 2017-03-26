$(document).foundation()


$(function() {
  $(".tablogin").click(function() {
    $("#panel1").addClass("is-active");      //add the class to the clicked element
  });
  $(".tabsignup").click(function() {
    $("#panel2").addClass("is-active");      //add the class to the clicked element
  });
});


var orderlist_t = new Orderlist();

var orderlistElement = document.getElementById("orderlist");

var Problem_group = document.getElementById("problem_group");
var Reason_group = document.getElementById("reason_group");
var Reason_code = document.getElementById("reason_code");
var Component_code = document.getElementById("component_code");
var Problem_code = document.getElementById("problem_code");
var Memo_data = document.getElementById("memo_data");

var listSelect = [Problem_group,Reason_group, Reason_code, Component_code, Problem_code]
/*Data List Option*/
var ListData = [
   ["Problem Group","Motherboard","LCD","HDD","Cable"],
   ["Problem Code","Received Damage","Cracked LCD","Liquid Damage","No Video", "Diagonal or Vertical Stripes/Lines"],
   ["Reason Group","In Warranty","Out of Warranty","Other"],
   ["Reason Code","Repair with new component","Reassembly/Reconection"],
   ["Component Code","Replaced Damage Panel","Replaced Defective Panel","Replaced Damage Motherboard","Replaced Defective Motherboard",
   "Replaced Damage HDD","Replaced Defective HDD", "Replaced Damage Cable","Replaced Defective Cable"]
  ]

/*Llenado*/
for (var j = 0; j < listSelect.length; j++) {
  var selectObj = listSelect[j];
  for (var i = 1; i < ListData[j].length; i++) {
      var option = document.createElement("option");
      option.setAttribute("value", ListData[j][i]);
      option.text = ListData[j][i];
      selectObj.appendChild(option);
  }
}
/**************************************
        Button Event
**************************************/

var bclickp = document.getElementById("bclick");
bclickp.onclick = function() {
    copyAllSelect();
    clearAllSelect();
    orderlist_t.renderInElement(orderlistElement);
}

var bclickp_close = document.getElementById("bclick_close");
bclickp_close.onclick = function() {
    clearAllSelect();
}

var dclickp = document.getElementById("dclick");
dclickp.onclick = function() {
  var x = document.getElementById("dedit").value;
  console.log(x);
    orderlist_t.del(x);
    orderlist_t.renderInElement(orderlistElement);
}

/**************************************
          Functions
**************************************/
function copyAllSelect() {
    var order1 = new Order(
       Problem_group.options[Problem_group.selectedIndex].text,
       Reason_group.options[Reason_group.selectedIndex].text,
       Reason_code.options[Reason_code.selectedIndex].text,
       Component_code.options[Component_code.selectedIndex].text,
       Problem_code.options[Problem_code.selectedIndex].text,
       Memo_data.text);
       orderlist_t.add(order1);
}

function clearAllSelect (){
  var tempSelect;
  for (var i = 0; i < listSelect.length; i++) {
    tempSelect = listSelect[i];
    tempSelect.selectedIndex=0;
  }
}
