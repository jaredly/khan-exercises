define(function(require) {

window.MathBox = function(elem) {
    if (!elem) {
        throw new Error("No element provided to Mathbox");
    }

    elem.append('<h3>Math Box</h3>');
    var text = $('<textarea></textarea>').appendTo(elem);
    text.on('keydown', function (e) {
      if (e.keyCode !== 13) return;
      var val = text.val();
      var sel = text[0].selectionStart;
      var before = val.slice(0, sel);
      var after = val.slice(sel);
      var lines = before.split('\n');
      var result;
      try {
        result = eval(lines[lines.length-1]) + '';
      } catch (e) {
        return;
      }
      before += ' = ' + result;
      text.val(before + '\n' + after);
      e.preventDefault();
      text[0].selectionStart = text[0].selectionEnd = sel + result.length + 4;
    });

};

});
