export default function health(obj) {
  if (obj.health < 15) {
    return 'critical';
  }
  if (obj.health < 50) {
    return 'wounded';
  }
  return 'healthy';
}
