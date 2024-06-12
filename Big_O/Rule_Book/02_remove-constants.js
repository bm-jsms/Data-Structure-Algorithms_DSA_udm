function linearSearch(arr, key) {
	for (let i = 0; i < arr.length; i++) {// O( n )
		if (arr[i] === key) {// O(1)
			return i; // O(1)
		}
	}
	return -1; // O(1)
}

// Time Complexity -> O( n + 3 ) -> O(n)
