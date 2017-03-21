function Order(group_problem, group_reason, description_p, diagnosis_p, repair_p, memo_p) {
  this.group_problem = group_problem;
  this.group_reason = group_reason;
  this.description_p = description_p;
  this.diagnosis_p = diagnosis_p;
  this.repair_p = repair_p;
  this.memo_p = memo_p;
}

Order.prototype.toHTML = function() {
  var htmlString = '<li';
    htmlString += '>';
    htmlString += this.group_problem;
    htmlString += ' # '
    htmlString += this.group_reason;
    htmlString += ' - '
    htmlString += this.description_p;
    htmlString += ' $ '
    htmlString += this.diagnosis_p;
    htmlString += ' * '
    htmlString += this.repair_p;
    htmlString += ' + '
    htmlString += this.memo_p;
    htmlString += '</li>';
    console.log(htmlString);
    return htmlString;
  };

  /********DATA***************/
