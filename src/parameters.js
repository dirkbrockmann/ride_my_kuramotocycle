// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use


export default {
		dt:0.005,
		L:1,
		agentsize: [6,3],
		omega_0: 1.0,
		omega_var:0.2,
		r_var:0.2,
		orderparametersize:6,
		orderparameterlength:0.5,
		
		angular_speed: {
			range:[1,4],
		default:3
		},
		coupling_strength: {
			range:[0,2],
			default:0
		},
		number_of_oscillators:{
			range : [1,200],
			default : 100
		},
		angular_speed_variability:{
			range : [0,1],
			default : 0.672
		},
		initial_conditions : {
			choices:["random init. cond.","identical init. cond."],
		default:0
		},
		show_order_parameter: {
		default: true
		},
		comoving_reference_frame: {
		default: false
		},
		comoving_reference_frame: {
			default: false
		},
		orlis_magic_switch:{
			default: false,
			label:"Orli's Magic Switch"
		}
		
}

