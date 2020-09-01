// Code your solution here
function findMatching(arr, str){
  return arr.filter(s => {
    return s === str.downCase()
  })
}
