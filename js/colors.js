GLOBAL.ColorType = {
  "Red": 1,
  "Green": 2,
  "Blue": 3,
  "Black": 4,
  "White": 5,
  "Orange": 6,
  "Yellow": 7,
  "Purple": 8,
  "Pink":9,
  "All": 10
}

var Color = function(colHex, colRGB, type){
  this.colorHex = colHex;
  this.colorRGB = colRGB;
  this.typeColor = type;
};

Color.prototype.getColorHex = function(){
    return this.colorHex;
};

Color.prototype.getColorRGB = function(){
  return this.colorRGB;
};

Color.prototype.getColorType = function(){
  return this.typeColor;
}

function findColorByHex(hex){
  var i = 0, length = GLOBAL.ListColor.length;
  for(i; i < length; i++){
    if(GLOBAL.ListColor[i].getColorHex() == hex){
      return GLOBAL.ListColor[i];
    }
  }
  return null;
}

//Thêm tất cả các Color trong đối số vào mảng GLOBAL.ListColor
var addColor = function() {
  var i;
    for (i = 0; i < arguments.length; i++) {
        if(!checkExistColor(arguments[i])){
          GLOBAL.ListColor.push(arguments[i]);
        }
    }
}
//Kiểm tra xem color này đã có trong danh sách chưa
function checkExistColor(color){
  var i = 0, length = GLOBAL.ListColor.length;
  for(i; i < length; i++){
    if(GLOBAL.ListColor[i].getColorHex() == color.getColorHex()){
      return true;
    }
  }
  return false;
}


function addRedColors(){
  addColor(red1, red2, red3, red4, red5, red6, red7, red8, red9, red10);
}

function addGreenColors(){
  addColor(green1, green2, green3, green4, green5, green6, green7, green8, green9, green10);
}

function addAllColors(){
   addRedColors();
   addGreenColors()
}
//Red
var red1 = new Color("#FF0000","rgb(255, 0, 0)", GLOBAL.ColorType.Red);
var red2 = new Color("#EF4836","rgb(239, 72, 54)", GLOBAL.ColorType.Red);
var red3 = new Color("#D64541","rgb(214, 69, 65)", GLOBAL.ColorType.Red);
var red4 = new Color("#F22613","rgb(242, 38, 19)", GLOBAL.ColorType.Red);
var red5 = new Color("#F64747","rgb(242, 38, 19)", GLOBAL.ColorType.Red);
var red6 = new Color("#C0392B","rgb(192, 57, 43)", GLOBAL.ColorType.Red);
var red7 = new Color("#D91E18","rgb(217, 30, 24)", GLOBAL.ColorType.Red);
var red8 = new Color("#96281B","rgb(150, 40, 27)", GLOBAL.ColorType.Red);
var red9 = new Color("#CF000F","rgb(207, 0, 15)", GLOBAL.ColorType.Red);
var red10 = new Color("#D24D57","rgb(210, 77, 87)", GLOBAL.ColorType.Red);

//Green
var green1 = new Color("#1E824C","rgb(30, 130, 76)",GLOBAL.ColorType.Green)
var green2 = new Color("#00B16A","rgb(0, 177, 106)",GLOBAL.ColorType.Green)
var green3 = new Color("#019875","rgb(1, 152, 117)",GLOBAL.ColorType.Green)
var green4 = new Color("#03A678","rgb(3, 166, 120)",GLOBAL.ColorType.Green)
var green5 = new Color("#03C9A9","rgb(3, 201, 169)",GLOBAL.ColorType.Green)
var green6 = new Color("#049372","rgb(4, 147, 114)",GLOBAL.ColorType.Green)
var green7 = new Color("#16A085","rgb(22, 160, 133)",GLOBAL.ColorType.Green)
var green8 = new Color("#1BA39C","rgb(27, 163, 156)",GLOBAL.ColorType.Green)
var green9 = new Color("#1BBC9B","rgb(27, 188, 155)",GLOBAL.ColorType.Green)
var green10 = new Color("#26A65B","rgb(38, 166, 91)",GLOBAL.ColorType.Green)
