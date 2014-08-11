var OpenSpendingKr = OpenSpendingKr || {};

OpenSpendingKr.Utils = OpenSpendingKr.Utils || {};

OpenSpendingKr.Utils.formatAmount = function (num) {
  var jo = 1000000000000;
  var uk = 100000000;
  var chunman = 10000000;

  var s = '';
  var rest = Math.abs(num);

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

  if(num < chunman) {
    var nChunman = Math.floor(rest / chunman);
    s = nChunman + '천만'
  }

  return s;
};