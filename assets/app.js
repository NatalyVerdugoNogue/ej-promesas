function animateElement(element, start, target, duration) {
  element.style.left = start;
  let counter = 0;
  const delta = (target - start) * 40 / duration;
  return new Promise((resolve, reject) => {
    const loop = setInterval(() => {
      const current = start + counter++ * delta;
      element.style.left = current;
      if (start > target && current <= target) {
        element.style.left = current;
        clearInterval(loop);
        resolve();
      } else if (start < target && current >= target) {
        element.style.left = current;
        clearInterval(loop);
        resolve();
      }
    }, 40);
  });
}

function animateElementTop(element, start, target, duration) {
  element.style.top = start;
  let counter = 0;
  const delta = (target - start) * 40 / duration;
  return new Promise((resolve, reject) => {
    const loop = setInterval(() => {
      const current = start + counter++ * delta;
      element.style.top = current;
      if (start > target && current <= target) {
        element.style.top = current;
        clearInterval(loop);
        resolve();
      } else if (start < target && current >= target) {
        element.style.top = current;
        clearInterval(loop);
        resolve();
      }
    }, 40);
  });
}

const allLi = document.getElementsByTagName("li");

Promise.all(
  [
    animateElement(allLi[1], 0, 1110, 8000),
    animateElement(allLi[0], 0, 1110, 4000)
  ]
).then((results) => {
  return Promise.all(
    [
      animateElementTop(allLi[1], 24, 380, 6000),
      animateElementTop(allLi[0], 24, 380, 2000)
    ]
  )
}).then((results) => {
  return Promise.all(
    [
      animateElement(allLi[1], 1110, 0, 4000),
      animateElement(allLi[0], 1110, 0, 8000)
    ]
  )
}).then((results) => {
  return Promise.all(
    [
      animateElementTop(allLi[1], 380, 24, 2000),
      animateElementTop(allLi[0], 380, 240, 2000)
    ]
  )
}).catch(() => {
  console.log("Falló la animación");
});