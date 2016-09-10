import 'babel-polyfill';
import {jsdom} from 'jsdom';

// Setup fake DOM
global.document = jsdom();
global.window = document.defaultView;
global.navigator = {
    userAgent: 'node.js'
};