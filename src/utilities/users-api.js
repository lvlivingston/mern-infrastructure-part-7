const BASE_URL = '/api/users';

export async function logIn(credentials) {
  const options = getOptionsPost();
  options.body = JSON.stringify(credentials);
  const res = await fetch(`${BASE_URL}/login`, options);
  // Check if request was successful
  if (res.ok) {
    // resolves to token
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}

export async function signUp(userData) {
  const options = getOptionsPost();
  options.body = JSON.stringify(userData);
  const res = await fetch(BASE_URL, options);
  // Check if request was successful
  if (res.ok) {
    // resolves to token
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}

/*-- Helper Functions --*/

function getOptionsPost() {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
}