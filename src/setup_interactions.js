// here all functions are connected to the widgets, these functions can be defined here, like the 
// startstop function connected to the go button, or they can be functions defined elsewhere,
// like the initialization functions, or reset parameter functions. Regardless, here
// all functions that need to be execuded for example if a controls element is modified, are connected
// to the update() method of an widget object. See below.


import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import styles from "./styles.module.css"

var timer = {}

// this defines a startstop simulation function that execute the function iterate() that is defined in simulation.js
// it also uses information defined in config.js, in this case the delay time between iteration steps.

const startstop = (display,controls,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,controls,config),cfg.simulation.delay) : timer.stop()

}

// this function is called by index.js to connect actions and update functions to the explorables.
// once this is called, all widgets are usable in the controls panel

export default (display,controls,grid,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	// one button gets the resetparameters() method defined in resetparameters.js
	ct.go.update(() => startstop(display,controls,config)) // one button gets the startstop function defined above
	ct.setup.update(() => initialize(display,controls,grid,config)) // this once gets the initialize() method defined in simulation.js
	param.number_of_oscillators.widget.update(()=>update(display,controls,config))
	param.orlis_magic_switch.widget.update(()=>update(display,controls,config))
	param.initial_conditions.widget.update(()=>initialize(display,controls,grid,config))
	param.show_order_parameter.widget.update(()=>{
		display.selectAll("."+styles.inset)
			.transition().duration(1000).style("opacity",param.show_order_parameter.widget.value() ? 1 : 0);	
		controls.selectAll("."+styles.plot)
			.transition().duration(1000).style("opacity",param.show_order_parameter.widget.value() ? 1 : 0);	

	}) // here we say that if a specific parameter is changed, in this case the number of particles, we also re_initialize the system (model and visuals)	
}

