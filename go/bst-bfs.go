package main

import "fmt"

func bfsSearch(bst []string, value string) {
	left := 0
	right := len(bst) - 1

	for left <= right {
		mid := (left + right) / 2
		if bst[mid] == value {
			fmt.Printf("Found %q at index %v", value, mid)
		}

		if bst[mid] < value {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
}

func main() {
	bst := []string{"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"}
	bfsSearch(bst, "c")
}
