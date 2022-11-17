package main

type Animal interface {
	Speak() string
}

type Dog struct {
	sound string
}

func (d Dog) Speak() string {
	return d.sound
}

func main() {
	animal := Dog{"bark"}
	println(animal.Speak())
}
