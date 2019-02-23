
let Coder = {};

Coder.parseLine = (element, callback)=>{

	try{
		let el = element;

		if(!element)
			throw "Element has been not specified!";
		if(!callback || typeof callback !== "function")
			throw "Callback not specified or not a function!";

		// TODO: Line parsing

		return el;
	}catch(e){
		return e;
	}
};
