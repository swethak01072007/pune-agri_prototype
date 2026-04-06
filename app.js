const app = document.getElementById('app');

function splash() {
  app.innerHTML = `<div class='screen'><h1>Smart Agro</h1><p>Maximize Your Crop Profit</p></div>`;
  setTimeout(login, 1500);
}

function login() {
  app.innerHTML = `
  <div class='screen'>
    <h2>Login</h2>
    <p>Demo: farmer_demo / 123456</p>
    <input id='user' placeholder='Username'>
    <input id='pass' type='password' placeholder='Password'>
    <button class='btn' onclick='doLogin()'>Login</button>
    <p id='error' style='color:red'></p>
  </div>`;
}

function doLogin() {
  const u = document.getElementById('user').value;
  const p = document.getElementById('pass').value;
  if(u==='farmer_demo' && p==='123456') dashboard();
  else document.getElementById('error').innerText='Invalid Credentials';
}

function dashboard() {
  app.innerHTML = `
  <div class='screen'>
    <h2>Welcome Farmer</h2>
    <button class='btn' onclick='inputScreen()'>Start Analysis</button>
  </div>`;
}

function inputScreen() {
  app.innerHTML = `
  <div class='screen'>
    <h2>Crop Input</h2>
    <select id='crop'>
      <option>Banana</option>
      <option>Tomato</option>
      <option>Turmeric</option>
    </select>
    <input id='qty' placeholder='Quantity'>
    <input id='loc' placeholder='Location'>
    <input type='date' id='date'>
    <button class='btn' onclick='analyze()'>Analyze</button>
  </div>`;
}

function analyze() {
  const crop = document.getElementById('crop').value;
  let result='';
  if(crop==='Banana') result='Banana Fiber | +30% Profit';
  if(crop==='Tomato') result='Tomato Paste | +25% Profit';
  if(crop==='Turmeric') result='Turmeric Powder | +35% Profit';

  app.innerHTML = `
  <div class='screen'>
    <h2>Recommendation</h2>
    <div class='card'>
      <h3>${result}</h3>
      <p>Processing increases market value and reduces waste.</p>
    </div>
    <button class='btn' onclick='dashboard()'>Back</button>
  </div>`;
}

splash();