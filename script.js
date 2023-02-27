const dog = document.querySelector('.dog');

setTimeout(() => {
  dog.style.transform = 'translate(-50%, -50%) rotate(30deg)';
}, 1000);

setTimeout(() => {
  dog.style.transform = 'translate(-50%, -50%) rotate(60deg)';
}, 2000);

setTimeout(() => {
  dog.style.transform = 'translate(-50%, -50%) rotate(90deg)';
}, 3000);

setTimeout(() => {
  dog.style.transform = 'translate(-50%, -50%) rotate(120deg)';
}, 4000);

setTimeout(() => {
  dog.style.transform = 'translate(-50%, -50%) rotate(150deg)';
}, 5000);

setTimeout(() => {
  dog.style.transform = 'translate(-50%, -50%) rotate(180deg)';
}, 6000);

setTimeout(() => {
  dog.style.transform = 'translate(-50%, -50%) rotate(0deg)';
}, 7000);
