
export function Selections(age, movie, time) {
  this.age = age,
  this.movie = movie,
  this.time = time,
  this.price = 12
}

Selections.prototype.ageCheck = function(){
  if (this.age<11 || this.age>=60)
    return this.price -=2;
  else
    return this.price;
}

Selections.prototype.timeCheck = function() {
  if (this.time === "12:00pm")
  return this.price -= 3;
  else
  return this.price;

}
