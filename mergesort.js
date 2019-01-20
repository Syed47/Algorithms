
function divide(arr) {
	
	if (arr.length <= 1) {console.log('final return', arr);return arr};

	let len = arr.length, midPoint = len/2, left = [], right = [], x = 0;
	while (x < len)  {
		if (x < midPoint) {
			left.push(arr[x])
		}else{
			right.push(arr[x])
		}
		x++;
	}
	console.log('*-----------',left, right)
	// the whole nuense lies here : spend your brain here
	return merge(divide(left), divide(right))  
}

function merge(left, right) {
	var merged = [],
	leftIndex = 0,  
	rightIndex = 0;

	while(leftIndex < left.length && rightIndex < right.length) { 
		if(left[leftIndex] < right[rightIndex]) { 
			merged.push(left[leftIndex]); 
			leftIndex++; 
		} else { 
			merged.push(right[rightIndex]);
			rightIndex++;  
		}
	}
	/*
		only one of these two loops will run, because either 
		right/left index will be equal to it arr(left/right) length
	*/
	for(; leftIndex < left.length; leftIndex++) {
		merged.push(left[leftIndex]);
	}
	for(; rightIndex < right.length; rightIndex++) {
		merged.push(right[rightIndex]);
	}
	console.log(left, right, merged)
	return merged; 
}
console.log(divide([8,7,6,5,4,3,2,1]))