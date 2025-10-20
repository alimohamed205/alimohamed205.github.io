
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
document.getElementById('avatar').addEventListener('click', ()=>{
  alert('Add your profile image to assets/ and replace the avatar placeholder in the HTML.');
});
