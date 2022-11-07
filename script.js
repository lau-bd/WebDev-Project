import data from './data.json' assert { type: 'json' };
// console.log(data);

//-------------TRIE MAKING ALL DIVS IN JS BUT WOULDN'T CONCATENATE AS WANTED, SAT AWAY FROM EACH OTHE RON THE PAGE
// const parentDiv = document.createElement('div');
// parentDiv.classList.add('parent_container');
// document.body.append(parentDiv);

// const backgroundDiv = document.createElement('div');
// backgroundDiv.classList.add('background_container');
// // parentDiv.append(backgroundDiv);
// document.body.append(backgroundDiv);

// const centralDiv = document.createElement('div');
// centralDiv.classList.add('central_container');
// // parentDiv.append(centralDiv);
// document.body.append(centralDiv);

// document.body.append(parentDiv);
// ---------------------
for (let el in data) {
  const dataItem = data[el];
  const list = document.createElement('ul');
  // list.style.background = 'lightgray';
  list.classList.add('no_bullet');

  const logo = document.createElement('img');
  logo.style.width = "30px";
  logo.style.background = dataItem.logoBackground;
  logo.setAttribute('src',dataItem.logo);

  const li2 = document.createElement('li');
//   const dot = document.createElement('p');
//   dot.innerText = ' . ';
//   li2.innerText = dataItem.postedAt + dot + dataItem.contract;
  li2.innerHTML = dataItem.postedAt + ' &#x2022 ' + dataItem.contract;
  li2.classList.add('p');

  const li4 = document.createElement('li');
  const position = dataItem.position;
  li4.classList.add('h3');
  li4.append(position);

  const li5 = document.createElement('li');
  const company = dataItem.company;
  li5.classList.add('p');
  li5.append(company);

  const li6 = document.createElement('li');
  const location = dataItem.location;
  li6.classList.add('h4');
  li6.append(location);

  list.appendChild(logo);
// list.appendChild(img);
  list.appendChild(li2);
  list.appendChild(li4);
  list.appendChild(li5);
  list.appendChild(li6);
  // list.style.hieght = "70px";
//   document.body.append(list);
document.querySelector('.central_container').append(list);
}
//---------------------------------------
