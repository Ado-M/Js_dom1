function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}
// Outputs a number between 0 and 255 inclusive 
console.log(randomInteger(255));
//////////////////////
var random = Math.floor(Math.random())
 colorList = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey"]

 


var randomColor = Math.floor(Math.random()*16777215).toString(16);
//document.body.style.backgroundColor = `#${randomColor}`

var div_1 = document.getElementById('dv1')
var div_2 = document.getElementById('dv2')
var div_3 = document.getElementById('dv3')
var div_4 = document.getElementById('dv4')
var div_btn = document.getElementById('div-btn')


 function div_btn() { 
     var randomColor = Math.floor(Math.random()*16777215).toString(16);
     div_btn.style.backgroundColor = `#${randomColor}`
  }
document.querySelector('#div-btn').addEventListener('click', function () {
    document.getElementById('dv1')= 'blue'
})


