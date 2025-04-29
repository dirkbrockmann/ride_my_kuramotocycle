import param from "./parameters.js"
import {each,range,map,mean,sumBy,meanBy,filter} from "lodash-es"
import {rad2deg,deg2rad} from "./utils"
import {randomNormal} from "d3"

const dt = param.dt;
const L = param.L;
const r_var = param.r_var;

var agents = [];
var active_agents =[];
var rho;
var orderparameter;

const rd = randomNormal(0,param.omega_var);
const Nmax = 2*param.number_of_oscillators.range[1];

function compute_orderparameter (agents){
	return {
		x:meanBy(agents,"x"),
		y:meanBy(agents,"y"),
	}
}

const initialize = () => {

	param.timer={}; param.tick=0;


	agents = map(range(Nmax), i => {
		const domega = rd();
		const theta = param.initial_conditions.widget.value() ? 0 : 2 * Math.PI * Math.random();

		return {
			id:i,
			r:L-r_var+r_var*(Math.random()-0.5),
			theta: theta,
			domega:domega,
			omega: param.omega_0 + domega * param.angular_speed_variability.widget.value(),
			x : Math.cos(theta),
			y : Math.sin(theta)
		}
	})

	for(let i=0;i<agents.length/2;i++){
		agents[i].domega = -agents[agents.length-i-1].domega;
		agents[agents.length-i-1].id = agents[i].id;
	}

	each(agents, d => {
		d.active = d.id < param.number_of_oscillators.widget.value() ? 1 : 0;
	})
	

	active_agents = filter(agents,d=>{return d.active==1});
	orderparameter = compute_orderparameter(active_agents)
	rho = [{x:param.tick,y:Math.sqrt(orderparameter.x*orderparameter.x+orderparameter.y*orderparameter.y)}];
};


const go  = () => {
	
	param.tick++;
	
	function CS(agents){
		return {C:d3.mean(agents,function(d){return d.x}),S:d3.mean(agents,function(d){return d.y})}
	}
	
	active_agents = filter(agents,d=>d.active==1);
	const f = {x:meanBy(active_agents,"x"),y:meanBy(active_agents,"y")}
	
	each(agents,d => {
		d.dx = d.active == 1 ? (Math.cos(d.theta)*f.y-Math.sin(d.theta)*f.x) : 0;
	})
	
	each(agents,d => {
		d.omega = param.omega_0 + d.domega * param.angular_speed_variability.widget.value();
		d.omega = param.omega_0 + d.domega * param.angular_speed_variability.widget.value(),
		d.dtheta = dt*param.angular_speed.widget.value()*(d.omega+param.coupling_strength.widget.value()*d.dx);
		d.theta += d.dtheta;
		d.x = Math.cos(d.theta);
		d.y = Math.sin(d.theta);
	})
	
	orderparameter = compute_orderparameter(active_agents)
	rho.push ({x:param.tick,y:Math.sqrt(orderparameter.x*orderparameter.x+orderparameter.y*orderparameter.y)});
	
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	
	each(agents, d => {
		d.active = d.id < param.number_of_oscillators.widget.value() ? 1 : 0;
	})
	
	// each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,active_agents,orderparameter,rho,initialize,go,update}
