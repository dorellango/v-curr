# v-curr
Simple vue directive that works as a wrapper for currency.js

## Instalation

1. Install the plugin

`npm install --save v-curr`

2. Add the plugin into your app:

```javascript
import Vue from 'vue'
import VCurr from 'v-curr';

Vue.use(VCurr);
```

## Usage

`<span v-curr="10000"></span>`

It goint to be render as...

`<span>$10.000</span>`

Or any other format that you want 👇

## Options

To customize the output just pass an object as a 2nd argument of `Vue.use` .

For all the available options please check https://github.com/scurker/currency.js#options

```javascript
import Vue from 'vue'
import VCurr from 'v-curr';

Vue.use(VCurr, {
    separator: '.',
    precision: 0,
    formatWithSymbol: true
});
```
