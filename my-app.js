// my-app.js
const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck){
  if (typeof mealToCheck === 'string'){
    this._meal = mealToCheck;
  }
},
}
//console.log(tempObj.num());
console.log(tempObj._num);
console.log(tempObj['num']);
console.log(tempObj.num);