console.log('\'Allo \'Allo!');

$('#home').click(function (e) {
  console.log('home was clicked.');
  e.preventDefault();
  $('#page-content').load('_home.html');
});

$('#time-tracker').click(function (e) {
  console.log('time-tracker was clicked.');
  e.preventDefault();
  $('#page-content').load('_time_tracker.html');
});

$('#about').click(function (e) {
  console.log('about was clicked.');
  e.preventDefault();
  $('#page-content').load('_about.html');
});
