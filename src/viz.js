// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {meanBy,filter} from "lodash-es"
import {agents,active_agents,orderparameter} from "./model.js"
import styles from "./styles.module.css"

const L = param.L;
const Nmax = 2*param.number_of_oscillators.range[1];
const X = d3.scaleLinear().domain([-L,L]);
const Y = d3.scaleLinear().domain([-L,L]);
const osc_size = d3.scaleLinear().domain([0,Nmax/2]).range(param.agentsize);
const osc_color = d3.scaleLinear().range([0,0.9])
	.domain([param.omega_0-param.omega_var,param.omega_0+param.omega_var]);

const color = (x) => {return param.orlis_magic_switch.widget.value() ? d3.interpolateSpectral(x) : d3.interpolateGreys(x)};

const inset_axis_line = d3.line().x(function(d){return X(d.x)}).y(function(d){return Y(d.y)});



var thetaref=0;

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.


const initialize = (display,config) => {

	const W = config.display_size.width;
	const H = config.display_size.height;
	//
	X.range([-W/2,W/2]);
	Y.range([H/2,-H/2]);

	display.selectAll("#zero").remove();
	thetaref=0;

	const zero = display.append("g").attr("id","zero")
		.attr("transform","translate("+W/2+","+H/2+")");
	const origin = zero.append("g").attr("id","origin")
	
	origin.selectAll("."+styles.agent).data(agents).enter().append("circle")
		.attr("class",styles.agent)
		.attr("r",function(d){ return osc_size(param.number_of_oscillators.widget.value())})
		.style("fill",function(d){return color(osc_color(d.omega))})
		.attr("transform",function(d){
			return "translate("+X(d.r*Math.cos(d.theta))+","+Y(d.r*Math.sin(d.theta))+")"
		})
		.style("opacity",function(d){return d.active ? 1 : 0})
	
	//
	// origin.selectAll(null).data(agents).enter().append("circle")
	// 	.attr("class",styles.node)
	// 	.attr("cx",d=>X(d.x))
	// 	.attr("cy",d=>Y(d.y))
	// 	.attr("r",X(param.agentsize/2))
	// 	.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
		

	const inset = origin
		.append("g").attr("class",styles.inset)
		.style("opacity",param.show_order_parameter.widget.value() ? 1 : 0);							

	inset.append("path").datum([{x:-param.orderparameterlength,y:0},{x:param.orderparameterlength,y:0}])
		.attr("d",inset_axis_line).attr("class",styles.caxis);
	inset.append("path").datum([{x:0,y:-param.orderparameterlength},{x:0,y:param.orderparameterlength}])
		.attr("d",inset_axis_line).attr("class",styles.caxis);
	
	inset.append("circle").attr("class",styles.dot).attr("r",param.orderparametersize)
		.attr("transform","translate("+X(param.orderparameterlength*orderparameter.x)+","+Y(param.orderparameterlength*orderparameter.y)+")")
		
		inset.append("path").datum(
			[{x:0,y:0},{x:param.orderparameterlength*orderparameter.x,y:param.orderparameterlength*orderparameter.y}
			]).attr("class",styles.op)
			.attr("d",inset_axis_line)
	

	
	 
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,config) => {
	
	display.selectAll("."+styles.agent)
		.attr("r",function(d){ return osc_size(param.number_of_oscillators.widget.value())})
		.style("opacity",function(d){return d.active ? 1 : 0})
		.attr("transform",function(d){
		return "translate("+X(d.r*Math.cos(d.theta))+","+Y(d.r*Math.sin(d.theta))+")"
	})
	.style("fill",function(d){return color(osc_color(d.omega))})
	
	const meanom = meanBy(active_agents,"omega");

	if(param.comoving_reference_frame.widget.value()){
		thetaref+=(param.dt*param.angular_speed.widget.value()*meanBy(active_agents,"omega"))/(Math.PI)*180;
	} else {
		thetaref += 0;
	}

	display.select("."+styles.dot)
	.attr("transform","translate("+X(param.orderparameterlength*orderparameter.x)+","+Y(param.orderparameterlength*orderparameter.y)+")");
	
	display.select("."+styles.op).datum(
			[{x:0,y:0},{x:param.orderparameterlength*orderparameter.x,y:param.orderparameterlength*orderparameter.y}
			]).attr("class",styles.op)
			.attr("d",inset_axis_line)
	
	
	
	
	display.selectAll("#origin").attr("transform","rotate("+thetaref+")")	
	// display.selectAll("."+styles.node)
	// 	.attr("cx",d=>X(d.x))
	// 	.attr("cy",d=>Y(d.y))
	// 	.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	//
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	
	display.selectAll("."+styles.agent)
		.attr("r",function(d){ return osc_size(param.number_of_oscillators.widget.value())})
		.style("opacity",function(d){return d.active ? 1 : 0})
		.style("fill",function(d){return color(osc_color(d.omega))})
	
}


export {initialize,go,update}
