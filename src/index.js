const googleTagManagerInit = GTM_CONTAINER_ID => {
    const iframe = document.createElement('iframe');
    iframe.id = 'GTM_iframe';
    iframe.src = `http://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`;
    iframe.style = 'display:none;visibility:hidden';
    document.body.appendChild(iframe);
    (function a (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        const f = d.getElementsByTagName('iframe')[0];
        const j = d.createElement(s);
        const dl = l != 'dataLayer' ? `&l=${l}` : '';
        j.async = true;
        j.id = 'GTM_script';
        j.src = `//www.googletagmanager.com/gtm.js?id=${i}${dl}`;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', GTM_CONTAINER_ID);
    return history => {
        return fn => history.listen(fn);
    };
};

export default googleTagManagerInit;
