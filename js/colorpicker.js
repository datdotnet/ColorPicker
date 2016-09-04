
var ColorPicker = function(color){
  this.Color = color;
  this.HtmlElement ='<button  class="btn colorpicker"  style="background-color:'+this.Color.getColorHex()+'" onclick="showPicker(\''+this.Color.getColorHex()+'\')"></button>';
  if(color.getColorType() == GLOBAL.ColorType.White){
    this.HtmlElement ='<button  class="btn colorpicker-white"  style="background-color:'+this.Color.getColorHex()+'" onclick="showPicker(\''+this.Color.getColorHex()+'\')"></button>';
  }
}

ColorPicker.prototype.getColor = function(){
  return this.Color;
}

ColorPicker.prototype.getHtmlElement = function(){
  return this.HtmlElement;
}

function showPicker(color){
  var currentColor = findColorByHex(color);
  var newBodyBackGroundColor = LightenDarkenColor(color, 100);
  $('body').css('background-color', newBodyBackGroundColor);
  $('#hex-value').html(currentColor.getColorHex());
  $('#rgb-value').html(currentColor.getColorRGB());
  $('#color-detail').css('background-color',currentColor.getColorHex());
  if(currentColor.getColorType() == GLOBAL.ColorType.White){
    $('.btn-group>button').css('border','1px solid #663399');
  }
  showDetailBox();
}

function addListColorPicker() {
  var i = 0, len = GLOBAL.ListColor.length;
  for(i; i<len; i++){
    var colorPicker = new ColorPicker(GLOBAL.ListColor[i]);
    if(!checkExistColorPicker(colorPicker)){
      GLOBAL.ListColorPicker.push(colorPicker);
    }
  }
}

//Kiểm tra xem color này đã có trong danh sách chưa
function checkExistColorPicker(colorpicker){
  var i = 0, length = GLOBAL.ListColorPicker.length;
  for(i; i < length; i++){
    if(GLOBAL.ListColorPicker[i].getColor().getColorHex() == colorpicker.getColor().getColorHex()){
      return true;
    }
  }
  return false;
}


function LightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}
