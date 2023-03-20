# Web Speech API를 활용한 토이프로젝트

과목: 토이프로젝트
진행상황: Not started
체크박스: No

[SpeechSynthesisUtterance - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)

[https://www.youtube.com/watch?v=PcS8OElvNxU&list=PLpJDjPqxGWGrSGPUBqWlsJlcLF_grNClK&index=12](https://www.youtube.com/watch?v=PcS8OElvNxU&list=PLpJDjPqxGWGrSGPUBqWlsJlcLF_grNClK&index=12)

index.html 

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="wrapper">
        <h1>Speech-Machine</h1>
        <input type="text" id="input-text">
        <button id="speak-button">speak!</button>    
    </div>
    <script src="main.js"></script>
</body>
</html>
```

main.js

```jsx
// Speech API
const speechContent = window.speechSynthesis;

//DON (id 값은 의미에 맞게 지정해 놓으면 따로 html을 확인하지 않고 어떤 id값을 주었는지 확인이 가능하다.)
const inputText = document.querySelector("#input-text");
const speakButton = document.querySelector("#speak-button");

// 액션(클릭, 마우스오버 등), function(){}, ()=>{}
speakButton.addEventListener('cleck', ()=>{
    speak(inputText.value)
})
function speak(text='hello'){
    const speech = new SpeechSynthesisUtterance(text)
    speech.lang = 'ja-JP'
    speech.rate = 1
    speechContent.speak(speech, true)
}
```