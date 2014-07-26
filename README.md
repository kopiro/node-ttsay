## TTSAY

TTS (Text-To-Speech) in Node.JS using system native APIs.

## Installation

```
npm install ttsay
```


### Usage

```javascript

var TTSay = require('ttsay');

TTSay.speak('Hi!');

TTSay.speak('Hello, with callback', function() {
    console.log("TTS ended");
});
```