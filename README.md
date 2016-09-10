Simple integrator for react router history and google tag manager

## Install

`npm install --save google-tag-manager-react-router-integrator`

## Test

`npm run test`

## Dev environment

`npm run dev`

## Use

```js
import gtmIntegrator from 'google-tag-manager-react-router-integrator';

const historyChangeHandler = location => {
    // push informations with dataLayer
}
gtmIntegrator('GTM_CONTAINER_ID')(history)(historyChangeHandler);
```