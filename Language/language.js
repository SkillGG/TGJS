
let Language = {};

Language.getElement = (variable, lang)=>{

	

};

Language.loadDictionary = (path, lang)=>{

};

Language.loadDictionaries = (...dictionaries)=>{
	let dics = Array.from(dictionaries);
	dics.forEach((e, i)=>{
		if(!e || !e.path || !e.lang){
			console.warn(`Dictionary number ${i+1} has not been specified properly.`);
			return;
		}
		this.loadDictionary(e.path, e.lang);
	})
}















let Lang = Language;