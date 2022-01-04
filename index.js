// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(){
  cats.push('Ralph');
}

function destructivelyPrependCat(){
  cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
  cats.pop();
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}

const newcat = ['Broom'];

function appendCat(){
  let newcat = ([...cats, 'Broom']);
  return newcat;
}

const firstcat = ['Arnold'];

function prependCat(){
  let firstcat = (['Arnold', ...cats]);
  return firstcat;
}

function removeLastCat(){
  return cats.slice(0,-1);
}

function removeFirstCat(){
  return cats.slice(1);
}
  