
function searchBST(bst, data) {
    let left = 0; // left array index
    let right = bst.length - 1; // right array index
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // check midpoint
        if(bst[mid] == data) {
            right = mid;
            break
        }

        if(bst[mid] < data) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    return bst[right] == data ? right : -1;
}


let bst = [0,2,4,5,7,9];
let node = searchBST(bst, 6);
console.log(node)
