// Creating a simple array from scratch
// Features include a 
// member variables: length attribute, data attribute,
// functions: getItem at Index, push object to the end of the array, pop an item from the end, and delete an item based on a given index


class MyArray {
    
    constructor() {
        this.length = 0
        this.data = {}
    }
    
    getItem(index) {
        return this.data[index]
    }
    
    push(item) {
        this.data[this.length] = item
        this.length++
        return this.data
    }
    
    pop() {
        const item = this.data[this.length -1]
        delete this.data[this.length -1]
        this.length--
        return item
    }
    
    // A bit ugly - time O(2N) and memory is O(2n)
    unshift(item){
        
        // we are adding an item to the beginning so we need to add the item at 0 and shift the keys to the right
        let tempData ={};
        for(let i=0; i<= this.length; i++) {
            tempData[i] = ""
        }
        
        tempData[0] = item
        
        for(let i=1; i<=this.length; i++) {
            tempData[i] = this.data[i-1]
        }
        
        this.data=tempData
        
        this.length++
    }
    
    deleteAtIndex(index) {
        const item = this.data[index]
        
        //shift item keys to the left because we are deleting an item
        for(let i=0; i<this.length; i++) {
            this.data[index - 1] = this.data[index]
        }
        
        delete this.data[index]
        this.length--
        return item
    }
    
    toString() {
        return this.data.values();
    }
}



// Test
let myArray = new MyArray()
myArray.push("Mark")
myArray.push("You")
myArray.push("Me")
myArray.push("Us")
console.log(myArray)
// console.log(myArray.getItem(1))
// console.log(myArray.pop())
// console.log(myArray)
// console.log(myArray.deleteAtIndex(1))
console.log(myArray.unshift("paul"))
console.log(myArray)