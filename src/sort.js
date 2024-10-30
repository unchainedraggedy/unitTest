export default function sortCharacters(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
