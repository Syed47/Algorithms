
function Stack() {
	this.length = 0; // new item will have this index   
	this.arr = {};
}

Stack.prototype.push = function(val) {
	this.arr[this.length] = val;
	this.length++;
	return '# '+this.arr[this.length-1] 
}

Stack.prototype.pop = function() {
	this.length--; // dicrement the length 
	const popVal = this.arr[this.length]
	const tempArr = {} // temp array for coping existing values

	for (let i = 0; i < this.length; i++) {
		tempArr[i] = this.arr[i]
	}
	this.arr = {} // reset 
	for (let i = 0; i < this.length; i++) {
		this.arr[i] = tempArr[i]
	} 

	return '* '+popVal; // the remove item
}

const stack = new Stack();

console.log(stack.push(10))
console.log(stack.push(20))
console.log(stack.push(30))

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack.arr, stack.length)
