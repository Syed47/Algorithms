
// Implementation of Circuler Queue
function Queue(size = 0) {
	this.front = 0;
	this.rear  = -1;
	this.size  = size;
	this.arr   = {};
	for (let i = 0; i < size; i++) {
		this.arr[i] = null;
	}
}

Queue.prototype.enqueue = function(item) {
	if (this.is('full')) throw new Error('[Queue full]')
	this.rear = (this.rear + 1) % this.size;
	this.arr[this.rear] = item;
	return this.arr[this.rear];
}

Queue.prototype.dequeue = function() {
	let item = this.arr[this.front];
	this.arr[this.front] = null;
	this.front = (this.front + 1) % this.size;
	return item;
}
Queue.prototype.is = function(arg) {
	if (arg !== 'empty' && arg !== 'full') {
		console.log('###############')
		throw new TypeError('[Parameter not valid]')
	}
	let is = true;
	for (let i in this.arr) {
		if (this.arr[i] && arg === 'empty'){
			is = false;
			break;
		}
		if (!this.arr[i] && arg === 'full') {
			is = false;
			break;
		}
	}
	return is;
}


let queue = new Queue(3);

console.log(queue.enqueue('a'))
console.log(queue.enqueue('b'))
console.log(queue.enqueue('c'))
console.log(queue.is('empty'))

try {
	// console.log(queue.enqueue('d'))
} catch(err) {
	console.log(err)
}
console.log(queue.is('full'))

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.is('full'))
console.log(queue.is('empty'))
