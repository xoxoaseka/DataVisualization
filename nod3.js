let borough_selected = grads.filter((borough) => {
    return borough.Type === "Borough Total";
})

let years_selected = borough_selected.filter((year) => {
    return year.Cohort === "2002" || year.Cohort === "2004" || year.Cohort === "2006";
})

let data = years_selected.map(function(row){
  let cohort = row.Cohort;
  let advancedByTotal = 100*(parseFloat(row.Advanced) / parseFloat(row.Total));
  let droppedOutByTotal = 100*(parseFloat(row.DroppedOut) / parseFloat(row.Total));
  return [ advancedByTotal, droppedOutByTotal, cohort]
});



var svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg1.setAttribute("height",300);
svg1.setAttribute("width",300);
svg1.style.background = "white";
document.body.appendChild(svg1);


let colors = {"2002": "red", "2004": "green", "2006": "blue"}
data.forEach(function(d){
	var circles = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circles.setAttribute("cx", d[0] * 10);
	circles.setAttribute("cy", 300 - d[1] * 10);
	circles.setAttribute("r",5);
	circles.setAttribute("fill", colors[d[2]]);
	svg1.appendChild(circles);
})

// data.forEach(function (d) {
// 	let infoText = document.createElementNS("http://www.w3.org/2000/svg", "text");
//  infoText.setAttribute("x", d[0] * 10);
// infoText.setAttribute("y", 300 - d[1] * 10);
// infoText.setAttribute("font-family", "Verdana");
// infoText.setAttribute("font-size", "12");
// infoText.textContent = data[];
// svg1.appendChild(infoText);
// })


let legend = document.createElementNS("http://www.w3.org/2000/svg", "rect");
legend.setAttribute("fill", "lightYellow");
legend.setAttribute("width", "80");
legend.setAttribute("height", "70");
legend.setAttribute("x", "210");
legend.setAttribute("y", "50");
legend.setAttribute("stroke", "black");
legend.setAttribute("stroke-width", "1");
svg1.appendChild(legend);

let legendText = document.createElementNS("http://www.w3.org/2000/svg", "text");
 legendText.setAttribute("x", "215");
legendText.setAttribute("y", "70");
legendText.setAttribute("font-family", "Verdana");
legendText.setAttribute("font-size", "12");
legendText.textContent = '2002';
svg1.appendChild(legendText);

let legendText1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
 legendText1.setAttribute("x", "215");
legendText1.setAttribute("y", "90");
legendText1.setAttribute("font-family", "Verdana");
legendText1.setAttribute("font-size", "12");
legendText1.textContent = '2004';
svg1.appendChild(legendText1);

let legendText2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
 legendText2.setAttribute("x", "215");
legendText2.setAttribute("y", "110");
legendText2.setAttribute("font-family", "Verdana");
legendText2.setAttribute("font-size", "12");
legendText2.textContent = '2006';
svg1.appendChild(legendText2);


let legendRect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
legendRect1.setAttribute("fill", "red");
legendRect1.setAttribute("width", "10");
legendRect1.setAttribute("height", "10");
legendRect1.setAttribute("x", "260");
legendRect1.setAttribute("y", "60");
legendRect1.setAttribute("stroke", "black");
legendRect1.setAttribute("stroke-width", "1");
svg1.appendChild(legendRect1);

let legendRect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
legendRect2.setAttribute("fill", "green");
legendRect2.setAttribute("width", "10");
legendRect2.setAttribute("height", "10");
legendRect2.setAttribute("x", "260");
legendRect2.setAttribute("y", "80");
legendRect2.setAttribute("stroke", "black");
legendRect2.setAttribute("stroke-width", "1");
svg1.appendChild(legendRect2);

let legendRect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
legendRect3.setAttribute("fill", "blue");
legendRect3.setAttribute("width", "10");
legendRect3.setAttribute("height", "10");
legendRect3.setAttribute("x", "260");
legendRect3.setAttribute("y", "100");
legendRect3.setAttribute("stroke", "black");
legendRect3.setAttribute("stroke-width", "1");
svg1.appendChild(legendRect3);



// let xAxis = document.createElementNS("http://www.w3.org/2000/svg", "stroke");
// 		xAxis.setAttribute("x1", 100);
// 		xAxis.setAttribute("x2", 300);
// 		xAxis.setAttribute("y1", 300);
// 		xAxis.setAttribute("y2", 100);
// 		xAxis.setAttribute("stroke-width", "5");
// svg1.appendChild(xAxis);
