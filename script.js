function about_me(){
    window.location.href = '/about-me.html'
}

function home(){
    window.location.href = '/index.html'
}

function labs(){
    window.location.href = '/labs.html'
}
/* No need to edit */

function letter_card() {
  document.getElementById('opening').className = 'open-card';
}

function start_card() {
  document.getElementById('opening').className = '';
}
function video_card() {
  document.getElementById('letter').className='open-card';
}
function backToLetter_card() {
  document.getElementById('letter').className='';
}
function end_card() {
  document.getElementById('video').className='open-card';
}
function previous_card() {
  document.getElementById('video').className='';
}