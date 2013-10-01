/*!
 * Piwik - Web Analytics
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

$(document).ready(function () {

    $('.extendPlatform .uploadPlugin').click(function (event) {
        event.preventDefault();

        piwikHelper.modalConfirm('#installPluginByUpload', {
            yes: function () {
                window.location = link;
            }
        });
    });

    $('#uploadPluginForm').submit(function (event) {

        $zipFile = $('[name=pluginZip]');

        if (!$zipFile.val()) {
            event.preventDefault();
            alert('Please select a ZIP file.');
        }
    });

});