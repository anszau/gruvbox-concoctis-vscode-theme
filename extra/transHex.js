const t = [];
for (var i = 1; i >= 0; i -= 0.01) {
  i = Math.round(i * 100) / 100;
  var alpha = Math.round(i * 255);
  var hex = (alpha + 0x10000)
    .toString(16)
    .substr(-2)
    .toUpperCase();
  var percent = Math.round(i * 100)
    .toString()
    .concat("%");
  t.push({ percent, hex, alpha });
}

console.table(t);
