function getHash() {
  return window.location.hash;
}

export function getPage() {
  const hash = getHash();
  const page = hash.split('?')[0].slice(1);

  return page;
}

export function getQueries() {
  const hash = getHash();
  const queries = hash.split('?')[1];

  return queries;
}
