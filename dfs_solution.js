function(grid) {
    let count = 0
    const row = grid.length
    const col = grid[0].length
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            // if we find 'land', then we search for the island size
            if(grid[i][j] === "1"){
                dfs(i,j) 
                count++ 
            }
        }
    } 
    
    
    function dfs(row, col){
        // if we're past the bounds of the area, return
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) return  
        
        // if we find water, there's no more land connecting to the island so return
        if(grid[row][col] === "0") return 
        
        // set current location to '0' so we know we counted it
        grid[row][col] = "0" 
        
        // call dfs on surrounding coordinates to find adjacent land
        dfs(row - 1, col) 
        dfs(row + 1, col) 
        dfs(row, col - 1) 
        dfs(row, col + 1)
    }
    
    return count
};
