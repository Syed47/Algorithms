
const floor = Math.floor, random = Math.random

function sortedArray(length) {
	const arr = []
	for (let i = 0; i < length; i++) {
		arr.push(Math.floor(Math.random()*9+1))
	}
	arr.sort()
	return arr;
}

// Wikipedia implementation
function binary_search(arr, node) {
	console.log(arr)
    let l = 0;
   	let r = arr.length - 1

    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (arr[m] < node) {
            l = m + 1
        } else if (arr[m] > node) {
            r = m - 1
        } else {
            return m
        }
	}
    return 'not found'
}



// My own implementation
// function binary_search(arr, node) {
// 	console.log(arr)
// 	let mid = floor(arr.length / 2)
// 	let l_mid;

// 	while(mid !== l_mid) {
// 		if (node > arr[mid]) {
// 			mid += floor(mid/2)
// 			l_mid = mid
// 		} else if (node < arr[mid]) {
// 			mid = floor(mid/2)
// 			l_mid = mid
// 		} else {
// 			return 'found '+arr[mid]+' at '+mid
// 		}
// 	}
// 	return 'not found'

// }

let result = binary_search(sortedArray(10), 5)

console.log(result)