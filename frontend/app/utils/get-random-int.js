export default function getRandomInt(min, max, seedFn = Math.random) {
  return Math.floor(seedFn() * (max - min + 1)) + min;
}
