
$("#submit").click(function () {
    let hasfname = false;
    let haslname = false;
    let hasEmail = false;
    let isEmailValid = false;
    let hasRadioChecked = false;
    let hasMessage = false;
    let hasConsent = false;

    if ($('#fname').val() === '') {
        $('#fname-warning').removeClass('hide');
        hasfname = false;
    } else {
        $('#fname-warning').addClass('hide');
        hasfname = true;
    }

    if ($('#lname').val() === '') {
        $('#lname-warning').removeClass('hide');
        haslname = false;
    } else {
        $('#lname-warning').addClass('hide');
        haslname = true;
    }

    if ($('#email').val() === '') {
        $('#email-warning').removeClass('hide');
        hasEmail = false;
    } else {
        $('#email-warning').addClass('hide');
        hasEmail = true;
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        isEmailValid = regex.test($('#email').val());
        if (!isEmailValid) {
            $('#email-not-valid').removeClass('hide');
        } else {
            $('#email-not-valid').addClass('hide');
        }
    }
    if ($('input[name="query_type"]:checked').val() === 'general-enquiry') {
        hasRadioChecked = true;
        $('#query-warning').addClass('hide');
    } else if ($('input[name="query_type"]:checked').val() === 'support-request') {
        hasRadioChecked = true;
        $('#query-warning').addClass('hide');
    } else {
        $('#query-warning').removeClass('hide');
    }

    if ($('#message').val() === '') {
        $('#message-warning').removeClass('hide');
        hasMessage = false;
    } else {
        hasMessage = true;
        $('#message-warning').addClass('hide');
    }

    if ($('#consent').is(':checked')) {
        hasConsent = true;
        $('#consent-warning').addClass('hide');
    } else {
        hasConsent = false;
        $('#consent-warning').removeClass('hide');
    }

    if (hasfname && haslname && hasEmail && isEmailValid && hasRadioChecked && hasMessage && hasConsent) {
        $("#exampleModal").modal('show');
    }
})

$('#general-enquiry').click(function () {
    if ($('input[name="query_type"]:checked').val() == 'general-enquiry') {
        $('#general-enquiry').addClass('green-box');
        $('#support-request').removeClass('green-box');
    }
});

$('#support-request').click(function () {
    if ($('input[name="query_type"]:checked').val() == 'support-request') {
        $('#general-enquiry').removeClass('green-box');
        $('#support-request').addClass('green-box');
    }
});

