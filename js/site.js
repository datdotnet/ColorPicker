var GLOBAL = {};
GLOBAL.ListColor = [];
GLOBAL.ListColorPicker =[];
GLOBAL.clipboard =''; // Lưu giá trị được copy

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

$('#all').on('click', function(){
  addAllColors();
  addListColorPicker();
  RenderColorPicker();
});

$('#red').on('click',function(){
  resetColor();
  addRedColors();
  addListColorPicker();
  RenderColorPicker();
});

$('#green').on('click',function(){
  resetColor();
  addGreenColors();
  addListColorPicker();
  RenderColorPicker();
});

function resetColor() {
  GLOBAL.ListColor = [];
  GLOBAL.ListColorPicker =[];
}

//--Xử lý copy giá trị màu vào clipboard
$('#btn-hex').on('click',function(){
  if(GLOBAL.clipboard != ''){
      GLOBAL.clipboard.destroy();
  }

  GLOBAL.clipboard = new Clipboard('.btn-hex', {
        text: function() {
            return $('#hex-value').html();
        }
  });
});

$('#btn-rgb').on('click',function(){
  if(GLOBAL.clipboard != ''){
      GLOBAL.clipboard.destroy();
  }
  GLOBAL.clipboard = new Clipboard('.btn-rgb', {
        text: function() {
            return $('#rgb-value').html();
        }
  });
});
