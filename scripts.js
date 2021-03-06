function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var lines = text.split("<br/>");

    for (var i = 0; i < lines.length; i++) {

        var words = lines[i].split(' ');
        var line = '';

        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                context.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }

        context.fillText(line, x, y);
        y += lineHeight;
    }
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d')
var maxWidth = 400;
var lineHeight = 25;
var x = (canvas.width - maxWidth) / 2
var y = 60;
var text = 'All the world \'s<br/>a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';

context.font = '16pt Calibri';
context.fillStyle = '#333';

 //wrapText(context,text, x, y, maxWidth, lineHeight);

document.querySelector(".js-set-txt").addEventListener("keyup", function(){
    wrapText(context, this.value , x, y, maxWidth, lineHeight);
    //wrapText(context,text, x, y, maxWidth, lineHeight);
    //console.log(this.value);
});