(function(document) {

    var mobileSelectors = [
        'm', 'mobile'
    ];

    function getMobileUrl() {
        var host = window.location.hostname;

        for (var i = 0; i < mobileSelectors.length; i++) {
            if (host.startsWith(mobileSelectors[i] + '.')
                || (host.indexOf('.' + mobileSelectors[i] + '.') >= 0)) {
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
        redirectToNonMobile(mobilePart);
    }

})(document);
