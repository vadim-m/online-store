export function addParams(name: string, value: string) {
  const queries = getQueries();
  const params = new URLSearchParams(queries);
  for (const value of params.values()) {
    console.log(value);
  }
  params.append(name, value);

  changeHash(params.toString());
}

function changeHash(queries: string) {
  const page = getPage();
  window.location.hash = page + '?' + queries;
}

function getHash() {
  return window.location.hash;
}

export function getPage() {
  const hash = getHash();
  const page = hash.split('?')[0].slice(1);

  return page;
}

export function getParamValues() {
  const values = [];
  const queries = getQueries();
  const params = new URLSearchParams(queries);
  for (const value of params.values()) {
    values.push(value);
  }
  console.log(values);
  return values;
}

export function getQueries() {
  const hash = getHash();
  const queries = hash.split('?')[1];

  return queries;
}
