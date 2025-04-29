import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import {orderparameter,rho} from "./model.js"
import styles from "./styles.module.css"


const sc_x = d3.scaleLinear().domain(cfg.plot.domain).range([0, cfg.plot.width]);
const sc_y = d3.scaleLinear().domain([0,1]).range([0,-cfg.plot.height]);
const xAxis = d3.axisBottom(sc_x).tickFormat("");
const yAxis = d3.axisLeft(sc_y).tickFormat("");
const plotline = d3.line().x(function(d){return sc_x(d.x)}).y(function(d){return sc_y(d.y)});


const initialize = (controls,grid) => {
	
	sc_x.domain(cfg.plot.domain)
	
	const pos=grid.position(cfg.plot.anchor.x,cfg.plot.anchor.y);		

	controls.select("#plot").remove()	
	
	const plot = controls.append("g").attr("class",styles.plot)
		.attr("transform","translate("+pos.x+","+pos.y+")")
		.attr("id","plot")
	
	plot.append("text").text(cfg.plot.xlabel)
		.attr("transform","translate("+sc_x(cfg.plot.domain[1]/2)+","+25+")")
		.attr("class",styles.xlabel)
	
	plot.append("text").text(cfg.plot.ylabel)
		.attr("transform","translate("+(-20)+","+(sc_y(0.5))+")rotate(-90)")
		.attr("class",styles.ylabel)
			
	plot.append("g").call(xAxis).attr("class",styles.xaxis);
	plot.append("g").call(yAxis).attr("class",styles.yaxis);
	plot.append("path").datum(rho).attr("d",plotline).attr("class",styles.plotline)
	
	
	
}

const update = (controls) => {
	
	controls.select("."+styles.plotline).datum(rho).attr("d",plotline);
	
	if(rho.length>cfg.plot.domain[1]){
		sc_x.domain([param.tick-cfg.plot.domain[1],param.tick])
		controls.select("."+styles.xaxis).call(xAxis);
		rho.shift();
	}
}

export {initialize,update}