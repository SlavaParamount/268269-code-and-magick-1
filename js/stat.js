'use strict';

window.renderStatistics = function (ctx, names, times) {
  var maxTime = -1;
  var histHeight = 150;
  var barSpace = 50;
  var barWidth = 40;
  var barMaxY = 230;
  var textInterval = 5;
  var textHeight = 16;

  (function drawCloud() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'white';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  })();

  (function getMaxTime() {
    for (var i = 0; i < times.length; i++) {
      if (maxTime < times[i]) {
        maxTime = times[i];
      }
    }
  })();

  var step = histHeight / maxTime;

  var getRandomColor = function () {
    var randAlpha = (Math.random() * 0.7 + 0.3).toFixed(1);
    return 'rgba(0, 0, 255, ' + randAlpha + ')';
  };


  var drawColumn = function (j) {
    var currentX = barSpace + (barSpace + barWidth) * (i + 1);
    var barHeight = times[j] * step;

    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255 , 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }

    ctx.fillRect(currentX, barMaxY - barHeight, barWidth, barHeight);
    ctx.fillStyle = 'black';
    ctx.font = '14px PT Mono';
    ctx.fillText(Math.floor(times[j]), currentX, barMaxY - barHeight - textInterval);
    ctx.fillText(names[j], currentX, barMaxY + textInterval + textHeight);
  };

  for (var i = 0; i < times.length; i++) {
    drawColumn(i);
  }
};
