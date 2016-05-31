function getAgo(updateDate) {
  var fromDate = new Date(updateDate).getTime();
  var nowDate = new Date().getTime();
  var difTime = nowDate - fromDate;
  var sec = 1000;
  var min = sec * 60;
  var hrs = min * 60;
  var day = hrs * 24;
  var mon = day * 30;
  var year = mon * 12;
  var res = '';
  if (difTime >= year) {
    var num = Math.floor(difTime / year);
    res = num + ' year';
    if (num > 1) res += 's';
  } else if (difTime >= mon) {
    var num = Math.floor(difTime / mon);
    res = num + ' month';
    if (num > 1) res += 's';
  } else if (difTime >= day) {
    var num = Math.floor(difTime / day);
    res = num + ' day';
    if (num > 1) res += 's';
  } else if (difTime >= hrs) {
    var num = Math.floor(difTime / hrs);
    res = num + ' hr';
    if (num > 1) res += 's';
  } else if (difTime >= min) {
    var num = Math.floor(difTime / min);
    res = num + ' min';
    if (num > 1) res += 's';
  } else if (difTime >= sec) {
    var num = Math.floor(difTime / sec);
    res = num + ' secound';
    if (num > 1) res += 's';
  }
  res += ' ago';
  return res;
}
