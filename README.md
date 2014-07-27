## TTSAY

TTS (Text-To-Speech) in Node.JS using system native APIs.

## Installation

```
npm install ttsay
```


### Usage

```javascript

var Say = require('ttsay');

Say('Hi!');

Say('Hello, with callback', function() {
    console.log("TTS ended");
});
```