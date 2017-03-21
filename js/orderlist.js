function Orderlist() {
  this.orders = [];
}

Orderlist.prototype.add = function(order) {
  this.orders.push(order);
};

Orderlist.prototype.del = function(index) {
  if (index > -1) {
    this.orders.splice(index, 1);
  }
};

Orderlist.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for(var i = 0; i < this.orders.length; i++) {
    list.innerHTML += this.orders[i].toHTML();
    console.log(list.innerHTML);
  }
};
