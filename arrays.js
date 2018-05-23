var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, newEl){
  return [newEl, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, newEl){
  arr.unshift(newEl);
  return arr;
}

function addElementToEndOfArray(arr, newEl){
  return [ ...arr, newEl];
}

function destructivelyAddElementToEndOfArray(arr, newEl){
  arr.push(newEl);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
   arr.shift();
   return arr;
}

function removeElementFromBeginningOfArray(arr){
  arr =  arr.slice(0,1);
  return arr;
} 

function destructivelyRemoveElementFromEndOfArray(arr){
   arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length-1);
}
