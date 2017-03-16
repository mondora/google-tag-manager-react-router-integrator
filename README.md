[![npm version](https://badge.fury.io/js/google-tag-manager-react-router-integrator.svg)](https://badge.fury.io/js/google-tag-manager-react-router-integrator)
[![Build Status](https://travis-ci.org/mondora/google-tag-manager-react-router-integrator.svg?branch=master)](https://travis-ci.org/mondora/google-tag-manager-react-router-integrator)
[![Coverage Status](https://coveralls.io/repos/github/mondora/google-tag-manager-react-router-integrator/badge.svg?branch=master)](https://coveralls.io/github/mondora/google-tag-manager-react-router-integrator?branch=master)
[![Dependency Status](https://david-dm.org/mondora/google-tag-manager-react-router-integrator.svg)](https://david-dm.org/mondora/google-tag-manager-react-router-integrator)
[![devDependency Status](https://david-dm.org/mondora/google-tag-manager-react-router-integrator/dev-status.svg)](https://david-dm.org/mondora/google-tag-manager-react-router-integrator#info=devDependencies)

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