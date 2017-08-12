'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var maxTime = -1;
  var i;

  for (i = 0; i < times.length; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }
  var histHeight = 150;
  var step = histHeight / maxTime;
  var barSpace = 50;
  var barWidth = 40;
  var barMaxY = 230;
  var textInterval = 5;
  var textHeight = 16;

  var randomColor = function () {
    var randAlpha = (Math.random() * 0.7 + 0.3).toFixed(1);
    return 'rgba(0, 0, 255, ' + randAlpha + ')';
  };

  var drawText = function (score, name) {
    ctx.fillStyle = 'black';
    ctx.font = '14px PT Mono';
    ctx.fillText(score, currentX, barMaxY - barHeight - textInterval);
    ctx.fillText(name, currentX, barMaxY + textInterval + textHeight);
  };

  for (i = 0; i < times.length; i++) {
    var currentX = barSpace + (barSpace + barWidth) * (i + 1);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255 , 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor();
    }

    var barHeight = times[i] * step;
    ctx.fillRect(currentX, barMaxY - barHeight, barWidth, barHeight);
    drawText(Math.floor(times[i]), names[i]);
  }

};
