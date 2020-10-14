// Design an in-memory file system to simulate the following functions:

// ls: Given a path in string format. If it is a file path, return a list that only contains this file's name. 
//If it is a directory path, return the list of file and directory names in this directory. 
//Your output (file and directory names together) should in lexicographic order.

// mkdir: Given a directory path that does not exist, you should make a new directory according to the path. 
// If the middle directories in the path don't exist either, you should create them as well. 
// This function has void return type.

// addContentToFile: Given a file path and file content in string format. 
// If the file doesn't exist, you need to create that file containing given content. 
// If the file already exists, you need to append given content to original content. This function has void return type.

// readContentFromFile: Given a file path, return its content in string format.



// Example:

// Input: 
// ["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]
// [[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]

// Output:
// [null,[],null,null,["a"],"hello"]

// Explanation:
// filesystem


// Note:

// You can assume all file or directory paths are absolute paths which begin with / and do not end with / except that the path is just "/".
// You can assume that all operations will be passed valid parameters and users will not attempt to retrieve file content or list a directory or file that does not exist.
// You can assume that all directory names and file names only contain lower-case letters, and same names won't exist in the same directory.

// class Directory {
//     contructor() {
//         this.directories = {}
//         this.files = {}
//     }

//     directories() {
//         return this.directories
//     }

//     files() {
//         return this.files
//     }
// }

class FileSystem {
    constructor() {
        this.root = { files: {}, directories: {} }
    }

    // ls: Given a path in string format. If it is a file path, return a list that only contains this file's name. 
    // If it is a directory path, return the list of file and directory names in this directory. 
    // Your output (file and directory names together) should in lexicographic order.
    /** 
     * @param {string} path
     * @return {string[]}
     */
    ls(path) {
        let currentDir = this.root
        let lsPaths = path.split("/")

        if (path != "/") {
            for (let i = 1; i < lsPaths.length; i++) {
                let value = lsPaths[i]
                currentDir = currentDir.directories[value]
            }
        }

        return Object.keys(currentDir.directories).sort((a, b) => { return a - b })
    }


    // mkdir: Given a directory path that does not exist, you should make a new directory according to the path. 
    // If the middle directories in the path don't exist either, you should create them as well. 
    // This function has void return type.
    /** 
     * @param {string} path
     * @return {void}
     */
    mkdir(path) {
        let currentDir = this.root
        let createdPaths = path.split("/")
        for (let i = 1; i < createdPaths.length; i++) {
            if (currentDir.directories[createdPaths[i]] == undefined) {
                currentDir.directories[createdPaths[i]] = { files: {}, directories: {} }
            }
            currentDir = currentDir.directories[createdPaths[i]]
        }
    }

    // addContentToFile: Given a file path and file content in string format. 
    // If the file doesn't exist, you need to create that file containing given content. 
    // If the file already exists, you need to append given content to original content. This function has void return type.
    /** 
     * @param {string} filePath 
     * @param {string} content
     * @return {void}
     */
    addContentToFile(filePath, content) {
        let currentDir = this.root
        let createdPaths = filePath.split("/")
        for (let i = 1; i < createdPaths.length; i++) {
            currentDir = currentDir.directories[createdPaths[i]]
        }
        let fileName = createdPaths[createdPaths.length-1]
        if(currentDir.files[fileName] == undefined) {
            currentDir.files[fileName] = {name: fileName, content: content}
        } else {
            currentDir.files[fileName].content += content
        }
    }

    // readContentFromFile: Given a file path, return its content in string format.
    /** 
     * @param {string} filePath
     * @return {string}
     */
    readContentFromFile(filePath) {
        let currentDir = this.root
        let paths = filePath.split("/")
        for(let i=1; i<paths.length; i++) {
            currentDir = currentDir.directories[paths[i]]
        }
        let fileName = paths[paths.length-1]
        return currentDir.files[fileName].content
    }
}


/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */

let fs = new FileSystem()
fs.mkdir("/mark/mathis")
fs.mkdir("/mark/taylor")
fs.mkdir("/mark/mark.txt")
console.log(fs.ls("/mark"))
fs.addContentToFile("/mark/mark.txt", "hello!")
fs.addContentToFile("/mark/mark.txt", "again...")
console.log(fs.readContentFromFile("/mark/mark.txt"))
