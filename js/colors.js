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

function addBlueColors(){
  addColor(blue1,blue2,blue3,blue4,blue5,blue6,blue7,blue8,blue9,blue10,blue11,blue12,blue13,blue14,blue15,blue16);
}

function addBlackColors(){
  addColor(black1, black2, black3, black4, black5, black6, black7);
}

function addPurpleColors(){
  addColor(purple1, purple2, purple3, purple4, purple5, purple6, purple7, purple8);
}

function addWhiteColors(){
  addColor(white1, white2, white3, white4);
}

function addYellowColors(){
  addColor(yellow1, yellow2, yellow3, yellow4, yellow5, yellow6, yellow7);
}
function addAllColors(){
   addRedColors();
   addGreenColors();
   addBlueColors();
   addPurpleColors();
   addBlackColors();
   addWhiteColors();
   addYellowColors();
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
var green1 = new Color("#1E824C","rgb(30, 130, 76)",GLOBAL.ColorType.Green);
var green2 = new Color("#00B16A","rgb(0, 177, 106)",GLOBAL.ColorType.Green);
var green3 = new Color("#019875","rgb(1, 152, 117)",GLOBAL.ColorType.Green);
var green4 = new Color("#03A678","rgb(3, 166, 120)",GLOBAL.ColorType.Green);
var green5 = new Color("#03C9A9","rgb(3, 201, 169)",GLOBAL.ColorType.Green);
var green6 = new Color("#049372","rgb(4, 147, 114)",GLOBAL.ColorType.Green);
var green7 = new Color("#16A085","rgb(22, 160, 133)",GLOBAL.ColorType.Green);
var green8 = new Color("#1BA39C","rgb(27, 163, 156)",GLOBAL.ColorType.Green);
var green9 = new Color("#1BBC9B","rgb(27, 188, 155)",GLOBAL.ColorType.Green);
var green10 = new Color("#26A65B","rgb(38, 166, 91)",GLOBAL.ColorType.Green);

//Blue
var blue1 = new Color("#6BB8F0","rgb(107, 184, 240)",GLOBAL.ColorType.Blue);
var blue2 = new Color("#81CFE0","rgb(129, 207, 224)",GLOBAL.ColorType.Blue);
var blue3 = new Color("#52B3D9","rgb(82, 179, 217)",GLOBAL.ColorType.Blue);
var blue4 = new Color("#59ABE3","rgb(89, 171, 227)",GLOBAL.ColorType.Blue);
var blue5 = new Color("#19B5FE","rgb(25, 181, 254)",GLOBAL.ColorType.Blue);
var blue6 = new Color("#1E8BC3","rgb(30, 139, 195)",GLOBAL.ColorType.Blue);
var blue7 = new Color("#22A7F0","rgb(34, 167, 240)",GLOBAL.ColorType.Blue);
var blue8 = new Color("#2574A9","rgb(37, 116, 169)",GLOBAL.ColorType.Blue);
var blue9 = new Color("#336E7B","rgb(51, 110, 123)",GLOBAL.ColorType.Blue);
var blue10 = new Color("#3498DB","rgb(52, 152, 219)",GLOBAL.ColorType.Blue);
var blue11 = new Color("#4183D7","rgb(65, 131, 215)",GLOBAL.ColorType.Blue);
var blue12 = new Color("#446CB3","rgb(68, 108, 179)",GLOBAL.ColorType.Blue);
var blue13 = new Color("#4B77BE","rgb(75, 119, 190)",GLOBAL.ColorType.Blue);
var blue14 = new Color("#5C97BF","rgb(92, 151, 191)",GLOBAL.ColorType.Blue);
var blue15 = new Color("#1F3A93","rgb(31, 58, 147)",GLOBAL.ColorType.Blue);
var blue16 = new Color("#3A539B","rgb(58, 83, 155)",GLOBAL.ColorType.Blue);

//Black
var black1 = new Color("#67809F","rgb(103, 128, 159)",GLOBAL.ColorType.Black);
var black2 = new Color("#6C7A89","rgb(108, 122, 137)",GLOBAL.ColorType.Black);
var black3 = new Color("#95A5A6","rgb(149, 165, 166)",GLOBAL.ColorType.Black);
var black4 = new Color("#2C3E50","rgb(44, 62, 80)",GLOBAL.ColorType.Black);
var black5 = new Color("#34495E","rgb(52, 73, 94)",GLOBAL.ColorType.Black);
var black6 = new Color("#22313F","rgb(34, 49, 63)",GLOBAL.ColorType.Black);
var black7 = new Color("#000000","rgb(0, 0, 0)",GLOBAL.ColorType.Black);

//Purple
var purple1 = new Color("#663399","rgb(102, 51, 153)",GLOBAL.ColorType.Purple);
var purple2 = new Color("#674172","rgb(103, 65, 114)",GLOBAL.ColorType.Purple);
var purple3 = new Color("#8E44AD","rgb(142, 68, 173)",GLOBAL.ColorType.Purple);
var purple4 = new Color("#913D88","rgb(145, 61, 136)",GLOBAL.ColorType.Purple);
var purple5 = new Color("#9A12B3","rgb(154, 18, 179)",GLOBAL.ColorType.Purple);
var purple6 = new Color("#9B59B6","rgb(155, 89, 182)",GLOBAL.ColorType.Purple);
var purple7 = new Color("#BE90B4","rgb(190, 144, 180)",GLOBAL.ColorType.Purple);
var purple8 = new Color("#BF55EC","rgb(191, 85, 236)",GLOBAL.ColorType.Purple);

//White
var white1 = new Color("#FFFFFF","rgb(255, 255, 255)",GLOBAL.ColorType.White);
var white2 = new Color("#CCFFFF","rgb(204, 255, 255)",GLOBAL.ColorType.White);
var white3 = new Color("#FFFFCC","rgb(255, 255, 204)",GLOBAL.ColorType.White);
var white4 = new Color("#E6E6E6","rgb(230, 230, 230)",GLOBAL.ColorType.White);

var yellow1 = new Color("#F39C12","rgb(243, 156, 18)",GLOBAL.ColorType.Yellow);
var yellow2 = new Color("#F4B360","rgb(244, 179, 96)",GLOBAL.ColorType.Yellow);
var yellow3 = new Color("#F4DD3F","rgb(244, 221, 63)",GLOBAL.ColorType.Yellow);
var yellow4 = new Color("#F5AB35","rgb(245, 171, 53)",GLOBAL.ColorType.Yellow);
var yellow5 = new Color("#F5D7BE","rgb(245, 215, 190)",GLOBAL.ColorType.Yellow);
var yellow6 = new Color("#F7CA18","rgb(247, 202, 24)",GLOBAL.ColorType.Yellow);
var yellow7 = new Color("#F9BF3B","rgb(249, 191, 59)",GLOBAL.ColorType.Yellow);
