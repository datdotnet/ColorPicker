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
$('#blue').on('click',function(){
  resetColor();
  addBlueColors();
  addListColorPicker();
  RenderColorPicker();
});

$('#purple').on('click',function(){
  resetColor();
  addPurpleColors();
  addListColorPicker();
  RenderColorPicker();
});
$('#black').on('click',function(){
  resetColor();
  addBlackColors();
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
  hideBackDetail();
  $('body').css('background-color', '#1E824C');
  $('#color-detail').removeClass('showDetail');
  $('#btn-hex').removeClass('showButtonDetail');
  $('#btn-rgb').removeClass('showButtonDetail');

  $('#color-detail').addClass('hideDetail');
  $('#btn-hex').addClass('hideButtonDetail');
  $('#btn-rgb').addClass('hideButtonDetail');
  setTimeout(function(){
    $('#bound').css('display','none');
  },500);
}

function showDetailBox(){
  showBackDetail();
  centerDetailBox();
  $('#bound').css('display','block');
  $('#color-detail').removeClass('hideDetail');
  $('#btn-hex').removeClass('hideButtonDetail');
  $('#btn-rgb').removeClass('hideButtonDetail');


  $('#color-detail').addClass('showDetail');
  $('#btn-hex').addClass('showButtonDetail');
  $('#btn-rgb').addClass('showButtonDetail');
}

function disappearDetailColorBox(){
  $('.back-detail').css('display','none');
  $('#bound').css('display','none');
}

function showBackDetail(){
  $('.back-detail').css('display','block');
  $('.back-detail').removeClass('hideBackDetail');
  $('.back-detail').addClass('showBackDetail');
  $('.back-detail').css('width', $(window).width());
  $('.back-detail').css('height', $(window).height());
}

function hideBackDetail(){
  $('.back-detail').css('display','none');
  $('.back-detail').removeClass('showBackDetail');
  $('.back-detail').addClass('hideBackDetail');
}

jQuery.fn.center = function () {
    this.css("position","fixed");
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
