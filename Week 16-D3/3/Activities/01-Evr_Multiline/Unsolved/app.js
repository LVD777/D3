// https://github.com/d3/d3-time-format#locale_format

/* Ternary Operator */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


/* Create the canvas size */
var svgHeight = 960; 
var svgWidth = 500; 

var margins = {
    top: 20,
    right: 40, 
    bottom: 60, 
    left: 50
}
var width = svgWidth - margin.left - margin.top; 
var height = svgWidth - margin.right - margin.bottom;

/** Append the SVG to the body */
var svg  = d3.select("body").append("svg")
            .attr("height", height)
            .attr("width", width)


/** Import the data  */



/** * create the x & y scales  */
// why did we use scaleTime() =>  https://github.com/d3/d3-scale/blob/master/README.md#scaleTime



/* Create x & y axis   */


/** Add the axis to the SVG  */

