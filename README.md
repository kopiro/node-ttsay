## TTSAY

TTS (Text-To-Speech) in Node.JS using system native APIs.

### Usage

```javascript

var TTSay = require('ttsay');

TTSay.speak('Hi!');

TTSay.speak('Hello, with callback', function() {
    console.log("TTS ended");
});
```