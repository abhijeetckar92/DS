

"use strict";

class Map{
	constructor(args){
		this.collection = {};
		this.count = 0;
		console.log(args);
	}

	set(key,value){
		this.collection[key]=value;
		this.count++;
	}

	has(key){
		return (key in this.collection);
	}

	get(key){
		return (key in this.collection ? this.collection[key]:null);
	}

	remove(key){
		if(key in this.collection){
			delete this.collection[key];
			this.count--;
		}
	}

}

var map = new Map([{"abhijeet":10},{"tanmay":20}]);

console.log(map.get);