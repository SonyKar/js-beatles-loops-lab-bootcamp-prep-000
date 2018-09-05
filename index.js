function theBeatlesPlay(musicians, instruments) {
  var i = 0;
  var strings = [];
  while(i < musicians.length) {
    strings[i].push(" plays ");
    i++;
  }
  return strings;
}