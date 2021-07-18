setTimeout(() => {
  const bars = document.querySelectorAll(".graph__bar");
  for (const bar of bars) {
    const percentage = Math.random() * 100;
    bar.style.width = `${percentage}%`;
    const percentageLabel = document.createElement("span");
    percentageLabel.innerText = `${Math.floor(percentage)}%`;
    bar.appendChild(percentageLabel);
  }
}, 200);
