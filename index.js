function theBeatlesPlay(musicians, instruments) {
  var i = 0;
  var strings = [];
  while(i < musicians.length) {
    strings[i].push(musicians[i] + " plays " + instruments[i]);
    i++;
  }
  return strings;
}