# registerAnimationFrame()
```js
export function registerAnimationFrame(id) {
  animationFrameIds.push(id);
}
```

EG:
```js

function animate() {
  // Your animation code here

  // Request next frame and register the id
  const id = requestAnimationFrame(animate);
  registerAnimationFrame(id);
}

// Start animation
animate();
```

# registerInterval()
```js
export function registerInterval(id) {
  intervalIds.push(id);
}
```

EG:
```js
// Start an interval to do something every second
const intervalId = setInterval(() => {
  console.log('Interval tick');
}, 1000);

registerInterval(intervalId);
```

# registerEventListener
```js
export function registerEventListener(element, type, handler) {
  eventListeners.push({ element, type, handler });
  element.addEventListener(type, handler);
}
```

EG:
```js
const button = document.querySelector('#myButton');

function handleClick(event) {
  console.log('Button clicked!');
}

registerEventListener(button, 'click', handleClick);

```



