for(var i=1;i<100;i++){
  var p = document.createElement('p')
  if((i%3 === 0) && (i%5 === 0)){
    p.innerHTML ='FizzBuzz'
  } else if(i%3 === 0){
    p.innerHTML = 'Fizz'
  } else if(i%5 === 0){
    p.innerHTML = 'Buzz'
  } else {
    p.innerHTML = String(i)
  }
  document.getElementById('list').appendChild(p)
}
