(function ($, settings) {

    'use strict';

    $(function ($) {
        $('body').one('click', '.' + settings.dismissCSSClass + '.is-dismissible', function () {
            $.post(settings.ajaxURL, {
                action: settings.dismissAction,
                _wpnonce: settings.dismissNonce
            });
        });
    });
})(jQuery, window.innocodeGoogleDataStudioNotices);
