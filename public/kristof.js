window.onload=function() { $('#content').load('/intro'); }

$('#email').click(function() { alert('You can reach me at {my first name} at {my first name} dot me.'); });

$('#intro').click(function() { $('#content').load('/intro'); } );
$('#resume').click(function() { $('#content').load('/resume'); } );
$('#code').click(function() { $('#content').load('/code'); } );