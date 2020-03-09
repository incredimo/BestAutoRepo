// Contact Form Scripts

$(function() {
  $(
    "#enquireform input,#enquireform textarea,#enquirefomr select"
  ).jqBootstrapValidation({
    preventSubmit: false,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#username").val();
      var email = $("input#usermail").val();
      var phone = $("input#userphone").val();
      var CBName = $("input#carbrand").val();
      var CName = $("input#carname").val();
      var message = $("textarea#partname").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message i
      if (firstName.indexOf(" ") >= 0) {
        firstName = name
          .split(" ")
          .slice(0, -1)
          .join(" ");
      }
      $.ajax({
        url: "././mail/contact_me.php",
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
        success: function() {
          // Success message
          $("#success").html("<div class='alert alert-success'>");
          $("#success > .alert-success")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success > .alert-success").append(
            "<strong>Your message has been sent. </strong>"
          );
          $("#success > .alert-success").append("</div>");

          //clear all fields
          $("#contactForm").trigger("reset");
        },
        error: function() {
          // Fail message
          $("#error").html("<div class='alert alert-danger'>");
          $("#error > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#error > .alert-danger").append(
            $("<strong>").text(
              "Sorry " +
                firstName +
                ", it seems that my mail server is not responding. Please try again later!"
            )
          );
          $("#error > .alert-danger").append("</div>");
          //clear all fields
          $("#contactForm").trigger("reset");
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    }
  });

  $('a[data-toggle="tab"]').click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function() {
  $("#success").html("");
});

// // Contact Form Scripts

// $(function() {
//   $("#enquireform input,#enquireform textarea,#enquireform select")
//     .not("[type=submit]")
//     .jqBootstrapValidation({
//       preventSubmit: true,
//       submitError: function($form, event, errors) {
//         // print(errors.data);
//         console.alert(errors.data);
//         // additional error messages or events
//       },
//       submitesuccess: function($form, event) {
//         event.preventDefault(); // prevent default submit behaviour
//         // get values from FORM
//         var name = $("input#name").val();
//         var email = $("input#email").val();
//         var phone = $("input#phone").val();
//         var CBName = $("input#Brandname").val();
//         var CName = $("input#CarModel").val();
//         var message = $("textarea#PartName").val();
//         var firstName = name; // For esuccess/Failure Message
//         // Check for white space in name for esuccess/Fail message
//         if (firstName.indexOf(" ") >= 0) {
//           firstName = name
//             .split(" ")
//             .slice(0, -1)
//             .join(" ");
//         }
//         $.ajax({
//           url: "././mail/Enquire.php",
//           type: "POST",
//           data: {
//             name: name,
//             phone: phone,
//             email: email,
//             CBName: CBName,
//             CName: CName,
//             message: message
//           },
//           cache: false,
//           esuccess: function() {
//             // esuccess message
//             $("#esuccess").html("<div class='alert alert-esuccess'>");
//             $("#esuccess > .alert-esuccess")
//               .html(
//                 "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
//               )
//               .append("</button>");
//             $("#esuccess > .alert-esuccess").append(
//               "<strong>Your message has been sent. </strong>"
//             );
//             $("#esuccess > .alert-esuccess").append("</div>");

//             //clear all fields
//             $("#EnquiryForm").trigger("reset");
//           },
//           error: function() {
//             // Fail message
//             $("#esuccess").html("<div class='alert alert-danger'>");
//             $("#esuccess > .alert-danger")
//               .html(
//                 "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
//               )
//               .append("</button>");
//             $("#esuccess > .alert-danger").append(
//               $("<strong>").text(
//                 "Sorry " +
//                   firstName +
//                   ", it seems that my mail server is not responding. Please try again later!"
//               )
//             );
//             $("#esuccess > .alert-danger").append("</div>");
//             //clear all fields
//             $("#EnquiryForm").trigger("reset");
//           }
//         });
//       },
//       filter: function() {
//         return $(this).is(":visible");
//       }
//     });

//   $('a[data-toggle="tab"]').click(function(e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// });

// /*When clicking on Full hide fail/esuccess boxes */
// $("#name").focus(function() {
//   $("#esuccess").html("");
// });

// function postEnquiry() {
//   var name = $("input#username").val();
//   var email = $("input#usermail").val();
//   var phone = $("input#userphone").val();
//   var CBName = $("input#carbrand").val();
//   var CName = $("input#carname").val();
//   var message = $("textarea#partname").val();
//   var firstName = name; // For Success/Failure Message
//   // Check for white space in name for Success/Fail message
//   if (firstName.indexOf(" ") >= 0) {
//     firstName = name
//       .split(" ")
//       .slice(0, -1)
//       .join(" ");
//   }
//   $.ajax({
//     url: "././mail/contact_me.php",
//     type: "POST",
//     data: {
//       name: name,
//       phone: phone,
//       email: email,
//       CBName: CBName,
//       CName: CName,
//       message: message
//     },
//     cache: false,
//     success: function() {
//       // Success message
//       $("#success").html("<div class='alert alert-success'>");
//       $("#success > .alert-success")
//         .html(
//           "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
//         )
//         .append("</button>");
//       $("#success > .alert-success").append(
//         "<strong>Your message has been sent. </strong>"
//       );
//       $("#success > .alert-success").append("</div>");

//       //clear all fields
//       $("#contactForm").trigger("reset");
//     },
//     error: function() {
//       // Fail message
//       $("#error").html("<div class='alert alert-danger'>");
//       $("#error > .alert-danger")
//         .html(
//           "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
//         )
//         .append("</button>");
//       $("#error > .alert-danger").append(
//         $("<strong>").text(
//           "Sorry " +
//             firstName +
//             ", it seems that my mail server is not responding. Please try again later!"
//         )
//       );
//       $("#error > .alert-danger").append("</div>");
//       //clear all fields
//       $("#contactForm").trigger("reset");
//     }
//   });
// }
