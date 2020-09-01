// Code your solution here
function findMatching(arr, str){
  return arr.filter(s => {
    return s.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, str){
  return arr.filter(s => {
    return s.match(str)
  })
}
