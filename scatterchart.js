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

//console.log(data);

var margin = {top: 100, right: 15, bottom: 60, left: 60}
  , width = 500 - margin.left - margin.right
  , height = 500 - margin.top - margin.bottom;
    
var x = d3.scale.linear()
                .domain([0, 30])
                .range([ 0, width ]);
    
var y = d3.scale.linear()
                .domain([0, 30])
                .range([ height, 0 ]);
 
var chart = d3.select('body')
  .append('svg:svg')
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .attr('class', 'chart')     

var main = chart.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .attr('width', width)
  .attr('height', height)
  .attr('class', 'main') 

 // draw the x axis
var xAxis = d3.svg.axis()
  .scale(x)
  .orient('bottom');

xAxis.tickValues(d3.range(0, 30, 5)).tickFormat(d => d + "%");

main.append('g')
  .attr('transform', 'translate(0,' + height + ')')
  .attr('class', 'axis')
  .call(xAxis)
  .append("text")
     .attr("class", "label")
     .attr("transform", "rotate(-90)")
     .attr("y", 0)
     .attr("x", 150)
     .attr("dy", "-4em")
     .style("text-anchor", "middle")
     .text("Dropped Out ")
;
    // draw the y axis
var yAxis = d3.svg.axis()
  .scale(y)
  .orient('left').tickFormat(d => d + "%");

yAxis.tickValues(d3.range(0, 30, 5));

main.append('g')
  .attr('transform', 'translate(0,0)')
  .attr('class', 'axis')
  .call(yAxis)
  .append("text")
      .attr("class", "label")
      .attr("y", 420)
      .attr("x", 170)
      .attr("dy", "-4em")
     // .style("text-anchor", "end")
      .text("Advansed Regents")
;

var g = main.append("svg:g"); 
var colorScale = d3.scale.category10(); 

g.selectAll("scatter-dots")
  .data(data)
  .enter().append("svg:circle")
      .attr("cx", function (d,i) { return x(d[0]); } )
      .attr("cy", function (d) { return y(d[1]); } )
      .attr("r", 8)
      .attr("fill", function(d, i){
        console.log(d);  
        return colorScale(d[2]); 
      })
      .on("mouseover", function(d){
        // console.log("over")
         let xx = d[0];
        let yy = d[1];
        tooltip.attr("transform", "translate("+ x(xx)+","+y(yy)+")");
        text.text(d[2]);
        tooltip.transition().duration(150).attr("opacity", 1);
        // tooltip.attr("x", x(xx)).attr("y", y(yy));
         // text.attr("x", 10).attr("y", 10);
         // tooltip.attr("y", "-100");
      })
        .on("mouseout", function(d){
        // console.log("out")

         // tooltip.attr("transform","translate(-100, -100)")
        tooltip
           .transition()
          .duration(150)
          .attr("opacity", 0)
          .each("end", function(){
            console.log("end");
            tooltip.attr("transform","translate(-1000, -1000)")
          })
        ;
        // tooltip.attr("x", x(xx)).attr("y", y(yy));
        // text.attr("x", 10).attr("y", 10);
        // tooltip.attr("y", "-100");
      })
;


let tooltip = main.append("g")
        .attr("transform", "translate(-100, -100)")
        .attr("opacity", 0);
    ;

  tooltip.append("rect")
    // .attr("fill", "none")
    .attr("width", "50")
    .attr("height", "25")
    .attr("fill", "yellow")
    .attr("x", "0")
    .attr("y", "0")
    .attr("stroke", "black")
    .attr("stroke-width", "1")
  ;

  let text = tooltip.append("text")
                .attr("x", "10")
                .attr("y", "10")
                .attr("fill", "black")
                .attr("font-family", "sans-serif")
                .attr("font-size", "20px")
                .text(function(d) { return d; })
  ;

let legendText2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
 legendText2.setAttribute("x", "215");
legendText2.setAttribute("y", "110");
legendText2.setAttribute("font-family", "Verdana");
legendText2.setAttribute("font-size", "12");
legendText2.textContent = '2006';
svg.appendChild(legendText2);


let legendRect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
legendRect1.setAttribute("fill", "red");
legendRect1.setAttribute("width", "10");
legendRect1.setAttribute("height", "10");
legendRect1.setAttribute("x", "260");
legendRect1.setAttribute("y", "60");
legendRect1.setAttribute("stroke", "black");
legendRect1.setAttribute("stroke-width", "1");
svg.appendChild(legendRect1);

let legendRect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
legendRect2.setAttribute("fill", "green");
legendRect2.setAttribute("width", "10");
legendRect2.setAttribute("height", "10");
legendRect2.setAttribute("x", "260");
legendRect2.setAttribute("y", "80");
legendRect2.setAttribute("stroke", "black");
legendRect2.setAttribute("stroke-width", "1");
svg.appendChild(legendRect2);

let legendRect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
legendRect3.setAttribute("fill", "blue");
legendRect3.setAttribute("width", "10");
legendRect3.setAttribute("height", "10");
legendRect3.setAttribute("x", "260");
legendRect3.setAttribute("y", "100");
legendRect3.setAttribute("stroke", "black");
legendRect3.setAttribute("stroke-width", "1");
svg.appendChild(legendRect3);

