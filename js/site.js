var GLOBAL = {};
GLOBAL.ListColor = [];
GLOBAL.ListColorPicker =[];
GLOBAL.clipboard =''; // Lưu giá trị được copy

$(document).ready(function(){
    addAllColors();
    addListColorPicker();
    RenderColorPicker();
    disappearDetailColorBox();
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

  hideDetailBox();
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
  hideDetailBox();
});
$('#color-detail').on('click', function(){
  hideDetailBox();
});
function hideDetailBox(){
  $('#color-detail').removeClass('showDetail');
  $('#btn-hex').removeClass('showButtonDetail');
  $('#btn-rgb').removeClass('showButtonDetail');

  $('#color-detail').addClass('hideDetail');
  $('#btn-hex').addClass('hideButtonDetail');
  $('#btn-rgb').addClass('hideButtonDetail');

}

function showDetailBox(){
  $('#bound').css('display','block');
  centerDetailBox();
  $('#color-detail').removeClass('hideDetail');
  $('#btn-hex').removeClass('hideButtonDetail');
  $('#btn-rgb').removeClass('hideButtonDetail');

  $('#color-detail').addClass('showDetail');
  $('#btn-hex').addClass('showButtonDetail');
  $('#btn-rgb').addClass('showButtonDetail');

}

function disappearDetailColorBox(){
  $('#bound').css('display','none');
}


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
}

function centerDetailBox(){
  $('#bound').center();
}

$(window ).resize(function() {
    centerDetailBox();
});
