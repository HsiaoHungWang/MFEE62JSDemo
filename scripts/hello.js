function sayHi(name){
  //name => undefined => !false=> true
  //name => Jack => !true => false
  if(!name){
     name = "Guest";
  }
  return `Hello ${name}`
}