// this connects the model and the visualization. For each we have three categories of events
// 1. initialization, 2. update, 3. iteration
// this is used by index.js, e.g. to initialize the explorable

import {initialize as model_init, update as model_update, go as model_go} from "./model.js"
import {initialize as visual_init, update as visual_update, go as visual_go} from "./viz.js"
import {initialize as plot_init, update as plot_update} from "./plot.js"

function iterate (display,controls,config) {
	model_go();
	visual_go(display,config);
	plot_update(controls);
};

function initialize (display,controls,grid,config) {
	model_init();
	visual_init(display,config); 
	plot_init(controls,grid);
};

function update (display,controls,config) {
	model_update();
	visual_update(display,config);
	plot_update(controls);
}

export {iterate,initialize,update}