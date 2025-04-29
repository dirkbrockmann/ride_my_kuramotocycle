// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 200,
		slider_show: true,
		slider_gap : 1.5,
		slider_anchor: {x:6,y:1},
		toggle_anchor: {x:6,y:8},
		toggle_label_pos:"right",
		toggle_gap : 1.5,
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:4,y:5},
		resetbutton_anchor:{x:2,y:5},
		radio_anchor:{x:1,y:6.5},
		radio_size:40,
		radio_label_position:"right",
		radio_shape:"rect",
	},
	simulation: {
		delay:10
	},
	plot:{
		yrange:1,
		anchor: {x:1,y:11},
		fontsize : 12,
		tick: 4,
		size:100,
		width:150,
		height:100,
		domain:[0,1000],
		xlabel:"time",
		ylabel:"order parameter"
	}
}