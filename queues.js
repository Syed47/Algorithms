const print = console.log

function Queue() {
	this.length = 0;
	this.arr = {} 
	this.tempArr = {}
}


Queue.prototype.enqueue = function(val) {
	for (let i = 0; i < this.length; i++) this.tempArr[i] = this.arr[i];

	this.arr[0] = val;
	this.length++;

	for (let i = 1; i < this.length; i++) this.arr[i] = this.tempArr[i-1];
	this.tempArr = {} // to clear memory space : efficency

	return '# '+this.arr[0];
}

Queue.prototype.isEmpty = function() {
	return this.length === 0;
}

Queue.prototype.dequeue = function() {
	this.length--;
	const return_val = this.arr[this.length];

	for (let i = 0; i < this.length; i++) this.tempArr[i] = this.arr[i];
	this.arr = {}
	for (let i = 0; i < this.length; i++) this.arr[i] = this.tempArr[i];
	this.temp = {} // to clear memory space : efficency

	return '* '+return_val;
}


const queue = new Queue();

console.log(queue.enqueue(10))
console.log(queue.enqueue(20))
console.log(queue.enqueue(30))
console.log(queue.arr, queue.length)
console.log(queue.isEmpty())
print('-----------------------------------------')
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.arr, queue.length)
console.log(queue.isEmpty())
