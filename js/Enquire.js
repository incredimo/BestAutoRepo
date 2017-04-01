// Contact Form Scripts

$(function() {

    $("#EnquiryForm input,#EnquiryForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitesuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var CBName = $("input#Brandname").val();
            var CName = $("input#CarModel").val();
            var message = $("textarea#PartName").val();
            var firstName = name; // For esuccess/Failure Message
            // Check for white space in name for esuccess/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/Enquire.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    CBName: CBName,
                    CName: CName,
                    message: message
                },
                cache: false,
                esuccess: function() {
                    // esuccess message
                    $('#esuccess').html("<div class='alert alert-esuccess'>");
                    $('#esuccess > .alert-esuccess').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#esuccess > .alert-esuccess')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#esuccess > .alert-esuccess')
                        .append('</div>');

                    //clear all fields
                    $('#EnquiryForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#esuccess').html("<div class='alert alert-danger'>");
                    $('#esuccess > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#esuccess > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#esuccess > .alert-danger').append('</div>');
                    //clear all fields
                    $('#EnquiryForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/esuccess boxes */
$('#name').focus(function() {
    $('#esuccess').html('');
});
