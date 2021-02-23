/*
 The data parameter will be the data the chart should work from Start with just an Array of numbers
e.g. [1, 2, 3, 4, 5]

The options parameter should be an object which has options for the chart.
    e.g.width and height of the bar chart

The element parameter should be a DOM element or jQuery element that the chart will get rendered into.
*/

//find the largest number in this array
function largest(numArray) {
  let largestNum = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > largestNum) {
      largestNum = numArray[i];
    }
  }
  return largestNum
}

function drawBarChart(data, options, element) {
  //0x0 canvas from html homepage
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  //adjusting canvas size options[x,y]
  ctx.canvas.width = options[0];
  ctx.canvas.height = options[1];
  //chart edges
  let leftMax = canvas.width / 100 * 10;
  let rightMax = canvas.width / 100 * 90;
  let chartBottom = canvas.height / 100 * 90; //y values are inverted 0,0 is top left
  let chartTop = canvas.height / 100 * 10;
  // draw y-axis
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(leftMax, chartBottom); //10% from top and bottom
  ctx.lineTo(leftMax, chartTop);
  ctx.stroke();
  //x-axis
  ctx.moveTo(leftMax, chartBottom); //10% from left and right
  ctx.lineTo(rightMax, chartBottom);
  ctx.stroke();
  ctx.closePath(); 
  //bar width
  let barWidth = (rightMax - leftMax) / (data.length * 2); //half white space
  ctx.lineWidth = barWidth;
  //bar take total pixels / largest number to get the units in pixels
  let units = (chartBottom - chartTop) / largest(data);
  //drawing bars
  ctx.beginPath();
  for (let i = 0; i < data.length; i++) {
    ctx.moveTo(leftMax + (barWidth * (2 * i)) + barWidth, chartBottom);
    ctx.lineTo(leftMax + (barWidth * (2 * i)) + barWidth, chartBottom-(data[i]*units));
    ctx.stroke();
  }
  ctx.closePath();
  //ctx.fillStyle = "#FF0000";
  //ctx.fillRect(0, 0, 150, 75);

}

drawBarChart([10, 20, 30, 40], [600, 400], false);



