//***Implementing stacks***

var stack = function(){
	this.storage = "";
	this.size = 0;
}

stack.prototype.push = function(val){
	this.storage = this.size > 0 ? this.storage.concat('-' + val) : this.storage.concat(val);
	this.size += 1;
}

stack.prototype.pop = function(){
	if(this.size > 0){
		var lastElem = this.storage.lastIndexOf('-');

		this.storage = this.storage.substring(0, lastElem);
		console.log('popped last elem ' + this.storage);
		this.size -= 1;
	}
}

stack.prototype.length = function(){
	console.log('length is ' + this.size);
}


//Stark members
var starks = new stack();

starks.push('Ned Stark');
starks.push('Jon Snow');
starks.push('Aria Stark');
console.log('Initial Starks stack ' + starks.storage);
starks.length();

starks.pop();
starks.length();
starks.pop();
starks.length();
starks.pop();
starks.length();
// can't pop anymore!
starks.pop();
starks.pop();

//Lannister members
var lannisters = new stack();

lannisters.push('Jaime Lannister');
lannisters.push('Tyrion Lannister');
lannisters.push('Cersei Lannister');
console.log('Initial Lannisters stack ' + lannisters.storage);
lannisters.length();

//getting rid of Cersei!
lannisters.pop();
lannisters.length();