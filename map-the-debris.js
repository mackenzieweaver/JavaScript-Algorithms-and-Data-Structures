// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris/ 
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(let i = 0; i < arr.length; i++){
    let a = arr[i].avgAlt + earthRadius;
    delete arr[i].avgAlt;
    arr[i]['orbitalPeriod'] = ((2*Math.PI)*Math.sqrt(Math.pow(a, 3)/GM)).toFixed(0);
    console.log(Object.keys(arr[i])[0], arr[i].name);
    console.log(Object.keys(arr[i])[1], arr[i].orbitalPeriod);
  }
  return arr;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
