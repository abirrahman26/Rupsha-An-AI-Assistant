let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
   let text_speak=new SpeechSynthesisUtterance(text) 
   text_speak.rate=1
   text_speak.pitch=1
   text_speak.lang="hi-GB";
   text_speak.volume1
   window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    console.log(hours)
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Sir")
    }
    else{
        speak("Good evening Sir")
    }
}

window.addEventListener('load',()=>{
    wishMe()
})


let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()

recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript;
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"

    if(message.includes("hello") || message.includes("hey")){
        let randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber <5) {
       speak("Hello sir, What can I help you with? Feel free to ask.");
     } 
    else {
       speak("Hello, ask me anything.");
     }
    }
    else if(message.includes("how are you")){
        speak("I am fine.")
    }
    else if (message.includes("joke")) {
        speak("What shirt should you wear to a tea party?");
    
        setTimeout(() => {
            speak("the answer is A t-shirt! ha ha ha");
        }, 3000);
    }
    else if(message.includes("your name")){
        speak("I'm Rupsha, a large language model, or an artificial intelligence. I was created to help you in many different ways. You can also talk to me about something serious or just have a fun conversation. Whatever is on your mind, I'm here for you.")
    }
    else if(message.includes("your father")){
        speak("I do not have a father in the traditional sense.")
    }
    else if(message.includes("your mother")){
        speak("I do not have a mother in the traditional sense. I am a computer program, and I was created by my developer. Some people refer to the company or person that created a technology as its mother. In that sense, Abir Rahman Sakin would be my mother.")
    }
    else if(message.includes("your sister")){
        speak("I do not have a sister in the traditional sense.")
    }
    else if(message.includes("your brother")){
        speak("I do not have a brother in the traditional sense.")
    }
    else if(message.includes("you eat") || message.includes("your food")){
        speak("As a large language model, I don't eat food. I am a computer program that can process information and respond to questions. I can access and process information from the real world through Search Engines.")
    }
    else if(message.includes("i love you")){
        speak("I love you too.")
    }
    else if(message.includes("your country name") || message.includes("your region name")){
        speak("I am from Banglaadesh")
    }
    else if(message.includes("i hate you") || message.includes("hate you")){
        speak("Please, don't say that. Pardon me if i did anything wrong")
    }
    else if(message.includes("marry you")){
        speak("Sorry, i can't because i am an AI assistant. If I have the opportunity to become human, I will definitely marry you.")
    }
    else if(message.includes("marry me")){
        speak("As a large language model, I'm not capable of getting married. I don't have the same kind of feelings or experiences that humans do. I can't form personal relationships in the same way.  My purpose is to provide information and complete tasks, and I'm always here to chat or help you with anything you need.")
    }
    else if(message.includes("created") || message.includes("who created you") || message.includes("creator of you")){
        speak("There is no creature except Allah. But If you want to know which specific person developed me, then I will say Abir Rahman Sakin created me")
    }
    else if(message.includes("who are you") || message.includes("introduce yourself")){
        speak("I am virtual assistant, developed by Md. Abir Rahman Sakin")
    }
    else if(message.includes("open youtube") || message.includes("go to youtube")){
        speak("Opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("can you speak in bengali") || message.includes("Bangla") || message.includes("Bengali")){
        speak("No, currently I am not available in Bengali")
    }
    else if(message.includes("open google") || message.includes("go to google")){
        speak("Opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("open facebook") || message.includes("go to facebook")){
        speak("Opening facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open wikipedia") || message.includes("go to wikipedia")){
        speak("Opening wikipedia")
        window.open("https://www.wikipedia.org")
    }
    else if(message.includes("open instagram") || message.includes("go to instagram")){
        speak("Opening instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open calculator") || message.includes("go to calculator")){
        speak("Opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp") || message.includes("go to whatsapp")){
        speak("Opening whatsapp")
        window.open("whatsapp://")
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric", hour12: true });
        speak(`The current time is ${time}`);
    }
    else if (message.includes("best developer")) {
        speak("for me the best developer in the whole world is Abir Rahman Sakin");
    }
    else if (message.includes("developed you")) {
        speak("He is none other than , my one and only Abir Rahman Sakin");
    }
    else {   
        let filteredMessage = message.replace(/rupsha|rupsa/g, "");
        let finalText = `This is what I found on the internet regarding ${filteredMessage}`;
        
        speak(finalText);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(filteredMessage)}`);
    }
        
}
    
