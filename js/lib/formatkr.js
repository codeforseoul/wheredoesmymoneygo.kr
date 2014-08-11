var OpenSpendingKr = OpenSpendingKr || {};

OpenSpendingKr.Utils = OpenSpendingKr.Utils || {};

OpenSpendingKr.Utils.formatAmount = function (num) {
  var jo = 1000000000000;
  var uk = 100000000;
  var chunman = 10000000;
  var man = 10000;

  var s = '';
  var rest = Math.abs(num);

  if(num == 0) {
      return '0';
  }

  if(num >= jo) {
    var nJo = Math.floor(rest / jo);
    rest = rest - nJo * jo;
    s = s + nJo + '조';
  }

  if(num >= uk) {
    var nUk = Math.floor(rest / uk);
    rest = rest - nUk * uk;
    s = s + nUk + '억';
  }

  if(num < uk && num > man) {
    var nMan = Math.floor(rest / man);
    s = s + nMan + '만';
  }

  if(num < man) {
    s = num;
  }
  
  return s;
};