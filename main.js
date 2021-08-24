//i say take my selfie and computer says taking selfie i five seconds//
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition;
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if (content=="take my selfie"){
        console.log("taking selfie.....")
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking selfie in five seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis)
    Webcam.attach( '#camera' );
    setTimeout(function()  {
        takesnapshot();
        save();
    }, 5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 camera=document.getElementById("camera");
 function takesnapshot(){
Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_url+"'>";
});     
 }
 function save(){
     link=document.getElementById("link");
     image=document.getElementById("selfie_img").src;
     link.href=image;
     link.click();
 }