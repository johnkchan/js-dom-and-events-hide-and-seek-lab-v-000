function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML,10) + n).toString();
  }
}