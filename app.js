const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const listItems = listUl.children;
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = "lightskyblue";
lastListItem.style.backgroundColor = "lightsteelblue";

function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = "up";
  up.textContent = "Up";
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = "down";
  down.textContent = "Down";
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = "remove";
  remove.textContent = "Remove";
  li.appendChild(remove);
}

for (let i = 0; i < listItems.length; i++) {
  attachListItemButtons(listItems[i]);
}

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});

listUl.addEventListener('click', (evt) => {
  if (evt.target.tagName === "BUTTON") {
    if (evt.target.className === "remove") {
      let li = evt.target.parentNode;
      listUl.removeChild(li);
    };
    if (evt.target.className === "up") {
      let li = evt.target.parentNode;
      let prevLi = li.previousElementSibling;
      if (prevLi !== null) {
        listUl.insertBefore(li, prevLi);
      };
    };
    if (evt.target.className === "down") {
      let li = evt.target.parentNode;
      let nextLi = li.nextElementSibling;
      if (nextLi !== null) {
        listUl.insertBefore(nextLi, li);
      };
    };
  };
});
