function clickEvent()
{
	var k="https://";
	var s;
	sr = new webkitSpeechRecognition();
sr.onresult = evt1=>location.replace(k+evt1.results[0][0].transcript);
sr.start();

	
}