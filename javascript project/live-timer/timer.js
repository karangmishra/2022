const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
  let a= new Date();
  let time= a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  let date= a.toLocaleDateString(undefined, options);
  console.log(a.toLocaleDateString());
  console.log(a.getHours()+":"+a.getMinutes()+":"+a.getSeconds());
  document.getElementById('time').innerHTML = date + time;  
  }, 1000);