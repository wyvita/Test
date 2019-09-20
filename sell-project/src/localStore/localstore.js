

export default {
	read(key){
		let result = window.localStorage.getItem(key);
		if(!result)
		  result = [];
		return JSON.pars(result);
	},
	write(key,obj){
		let result = JSON.stringify(obj);
		window.localStorage.setItem(key,result);
	}
}
