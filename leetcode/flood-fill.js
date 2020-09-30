// Algo
// similar to a microsoft paint program, we want to replace all the connected pixels of a certain color
// with the the replacement color
// To do this, we can solve recursively by taking the selected pixel's color and recursively doing a 
// dfs search for that color using the compass directions for all adjoining pixels and replacing with 
// the given color


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let replacedColor = image[sr][sc]
    fill(image, sr, sc, newColor, replacedColor)
    return image
};

function fill(image, y, x, newColor, replacedColor) {
    
    // break condition
    if(x<0 || y<0 || !image[y] || x>=image[y].length ||  y>=image.length || image[y][x] != replacedColor) {
        return false
    }
    
    image[y][x] = -Infinity //do this to keep from finding in subsequent dfs
    
    //Do the dfs in the compass directions
    fill(image, y-1, x, newColor, replacedColor) // N
    fill(image, y+1, x, newColor, replacedColor) // S
    fill(image, y, x+1, newColor, replacedColor) // E
    fill(image, y, x-1, newColor, replacedColor) // W
    
    image[y][x] = newColor // put back after dfs
    
    return true
}