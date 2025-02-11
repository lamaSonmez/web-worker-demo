/// <reference lib="webworker" />

// Listen for messages from the main thread
addEventListener('message', ({ data }) => {
  const result = calculateSum(data);
  postMessage(result); // Send the result back
});

function calculateSum(limit: number): number {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    sum += i;
  }
  return sum;
}
