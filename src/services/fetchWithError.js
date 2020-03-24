const methodsWithBody = ['POST', 'PUT', 'PATCH'];

export const fetchWithError = (url, method, rawJSONBody, bearerToken) => {
  return fetch(url, { 
    method: method,
    headers: methodsWithBody.includes(method) ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${bearerToken}` } : {},
    body: methodsWithBody.includes(method) ? rawJSONBody : null
  })
    .then(res => {
      if(res.ok) return res.json(); 
      throw `Response: ${res.status}`;
    });
};
