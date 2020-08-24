
class HashTable {
    
    constructor(size) {
        this.data = new Array(size)
    }
    
    //written for me - basically returns a number between 1 and the size passed into the constructor
    _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  
  set(key, value) {
      if(!key || typeof key !== "string") {
        console.log("invalid key:"+key)
        return
      }
      
      if(!value) {
          console.log("invalid value:"+value)
          return
      }
      
      const hash = this._hash(key)
      if(!this.data[hash]) {
          this.data[hash] = []
      }
       this.data[hash].push([key, value]);
       return this.data
  }
  
  get(key) {
      
      if(!key || typeof key !== "string") {
        console.log("invalid key:"+key)
        return
      }
      
      const items = this.data[this._hash(key)]
      if(items) {
          for(let i = 0; i<items.length; i++) {
              if(items[i][0] === key) {
                  return items[i][1]
              }
          }
      }
      return undefined
  }
  
  keys() {
      const keysArray = []
      for(let i=0; i<this.data.length; i++) {
          let items = this.data[i]
          if(items) {
              if(items.length > 1) {
                  for(let j = 0; j<items.length; j++) {
                      keysArray.push(items[j][0])
                  }
              } else {
                  keysArray.push(items[0][0])
              }
          }
      }
      return keysArray
  }
}


const hashTable = new HashTable(3)
hashTable.set("oranges", 100)
hashTable.set("apples", 200)
hashTable.set("strawberries", 200)
console.log(hashTable.data)
console.log(hashTable.keys())
