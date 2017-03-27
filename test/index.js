import chai, {expect} from 'chai';
import {jsdom} from 'jsdom';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import googleTagManagerInit from '../src';

describe('googleTagManagerInit', () => {

    beforeEach(() => {
        global.document = jsdom();
    });

    it('creates a googletagmanager iframe with passed GTM_CONTAINER_ID', () => {
        googleTagManagerInit('myGTM_CONTAINER_ID');
        expect(document.getElementById('GTM_iframe')).to.not.be.equal(null);
        expect(
            document.getElementById('GTM_iframe').src
        ).to.be.equal(
            'http://www.googletagmanager.com/ns.html?id=myGTM_CONTAINER_ID'
        );
    });

    it('creates a googletagmanager iframe with correct style', () => {
        googleTagManagerInit('myGTM_CONTAINER_ID');
        expect(document.getElementById('GTM_iframe').style.display).to.equal('none');
        expect(document.getElementById('GTM_iframe').style.visibility).to.equal('hidden');

    });

    it('creates a script iframe with passed GTM_CONTAINER_ID', () => {
        googleTagManagerInit('GTM_CONTAINER_ID');
        expect(document.getElementById('GTM_script')).to.not.be.equal(null);
        expect(
            document.getElementById('GTM_script').src
        ).to.be.equal(
            '//www.googletagmanager.com/gtm.js?id=GTM_CONTAINER_ID'
        );
    });

    it('returns a function', () => {
        expect(googleTagManagerInit('GTM_CONTAINER_ID')).to.be.a('function');
    });

    it('fires passed function when history listenere is triggered', () => {
        const history = {
            listen: fn => fn()
        };
        const spy = sinon.spy();
        googleTagManagerInit('GTM_CONTAINER_ID')(history)(spy);
        expect(spy).to.have.callCount(1);
    });

});
