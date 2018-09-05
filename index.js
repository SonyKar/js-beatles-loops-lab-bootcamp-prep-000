function theBeatlesPlay(musicians, instruments) {
  var i = 0;
  var strings = [];
  while(i < musicians.length) {
    strings[i] = musicians[i] + " plays " + instruments[i];
    i++;
  }
}