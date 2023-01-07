export function addParams(name: string, value: string) {
  const { paramName, paramValue, isAdded } = checkParams(name, value);
  if (isAdded) {
    return;
  }
  const params = getURLSearchParams();
  params.append(paramName, paramValue);

  changeHash(params.toString());
}

function changeHash(queries: string) {
  const page = getPage();
  window.location.hash = page + '?' + queries;
}

function checkParams(name: string, value: string) {
  let paramName = '';
  let paramValue = '';
  let isAdded = false;
  const params = getURLSearchParams();
  const keys = getParamKeys();
  const values = getParamValues();

  if (keys.indexOf(name) === -1) {
    paramName = name;
    paramValue = value;
  } else if (values.includes(value)) {
    isAdded = true;
    paramName = name;
    const prevValue = params.get(paramName)?.split('↕');
    if (prevValue?.length !== 1) {
      const newValue = prevValue?.filter((item) => item !== value);
      params.set(paramName, newValue!.join('↕'));
      changeHash(params.toString());
    } else {
      params.delete(paramName);
      changeHash(params.toString());
    }
  } else {
    isAdded = true;
    paramName = name;
    const prevValue = params.get(paramName);
    paramValue = prevValue + '↕' + value;
    params.set(paramName, paramValue);
    changeHash(params.toString());
  }

  return { paramName, paramValue, isAdded };
}

function getHash() {
  return window.location.hash;
}

export function getPage() {
  const hash = getHash();
  const page = hash.split('?')[0].slice(1);

  return page;
}

function getParamKeys() {
  const keys = [];
  const params = getURLSearchParams();
  for (const value of params.keys()) {
    keys.push(value);
  }

  return keys;
}

export function getParamsSecificValue(key: string) {
  const params = getURLSearchParams();
  const value = params.get(key);
  if (value) {
    return value;
  }

  return null;
}

export function getParamValues() {
  const values = [];
  const params = getURLSearchParams();
  for (const key of params.keys()) {
    values.push(params.get(key));
  }

  return values.join('↕');
}

export function getQueries() {
  const hash = getHash();
  const queries = hash.split('?')[1];

  return queries;
}

function getURLSearchParams() {
  const queries = getQueries();
  return new URLSearchParams(queries);
}
