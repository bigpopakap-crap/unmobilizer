(function(document) {

    function getCanonical() {
        var linkElem = document.querySelector('link[rel="canonical"]');
        return linkElem && linkElem.href;
    }

    function redirectToCanonical() {
        var canonical = getCanonical();
        if (canonical && (window.location.toString() !== canonical)) {
            window.location = canonical;
        }
    }

    var mobileSelectors = [
        'm', 'mobile'
    ];

    function getMobileUrl() {
        var host = window.location.hostname;

        for (var i = 0; i < mobileSelectors.length; i++) {
            if ((host.indexOf(mobileSelectors[i] + '.') >= 0)
                || ('.' + host.indexOf(mobileSelectors[i] + '.') >= 0)) {
                return mobileSelectors[i] + '.';
            }
        }

        return null;
    }

    function redirectToNonMobile(mobilePart) {
        var newUrl = window.location.toString().replace(mobilePart, '');
        window.location = newUrl;
    }

    //try both methods of redirecting
    var mobilePart = getMobileUrl();
    if (mobilePart) {
        redirectToCanonical();
        redirectToNonMobile(mobilePart);
    }

})(document);