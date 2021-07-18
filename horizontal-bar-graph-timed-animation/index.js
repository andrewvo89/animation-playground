const DELAY = 500;
let currentTimeout = 0;

const bars = document.querySelectorAll(".graph__bar");
for (const bar of bars) {
  setTimeout(() => {
    const percentage = Math.random() * 100;
    bar.style.width = `${percentage}%`;
    const label = bar.children[0];
    label.style.opacity = 1;
    label.innerText = `${Math.floor(percentage)}%`;
  }, (currentTimeout += DELAY));
}
