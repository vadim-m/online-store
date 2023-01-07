function getHash() {
  return window.location.hash;
}

function changeHash(queries: string) {
  const page = getPage();
  window.location.hash = page + '?' + queries;
}

export function addParams(name:string, value:string) {
  const queries = getQueries();
  let params = new URLSearchParams(queries);
  params.append(name, value);

  changeHash(params.toString());
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
