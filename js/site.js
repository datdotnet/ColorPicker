var GLOBAL = {};
GLOBAL.ListColor = [];
GLOBAL.ListColorPicker =[];

$(document).ready(function(){
    addAllColors();
    addListColorPicker();
    RenderColorPicker();
});

function RenderColorPicker(){
  var i = 0, len = GLOBAL.ListColorPicker.length;
  var htmlString = '';
  for(i; i < len; i++){
    htmlString += GLOBAL.ListColorPicker[i].getHtmlElement();
  }
  $('.container').html(htmlString);
}
