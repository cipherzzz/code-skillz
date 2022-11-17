package main

import "fmt"

func fib(n int) int {
	fibs := []int{0, 1}
	for i := 2; i <= n; i++ {
		fibs = append(fibs, fibs[i-1]+fibs[i-2])
	}
	return fibs[len(fibs)-1]
}

func fib2(n int) int {
	a, b := 0, 1
	for i := 0; i < n; i++ {
		a, b = b, a+b // a = b, b = a+b - in place swap
	}
	return a
}

func fibRecursive(n int) int {
	if n == 0 {
		return 0
	}
	if n == 1 {
		return 1
	}
	return fibRecursive(n-1) + fibRecursive(n-2)
}

func main() {
	n := 6 //8
	fmt.Println(fib(n))
	fmt.Println(fibRecursive(n))
	fmt.Println(fib2(n))
}
