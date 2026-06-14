function getCurrentWeek() {
  const now = new Date();

  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;

  const oneWeek = 1000 * 60 * 60 * 24 * 7;

  return Math.ceil(diff / oneWeek);
}

module.exports = { getCurrentWeek };