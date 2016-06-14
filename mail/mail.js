
var express = require('express');
var router = express.Router();
var mandrill = requirejs('node-mandrill')('Yg0fG6fsBGN60AiFnCvCOA');


    $("#contactForm").submit(function(){
       alert("heyyyy");
        //send an e-mail to jim rubenstein
        mandrill('/messages/send', {
            message: {
                to: [{email: 'moransh4@gmail.com', name: 'moran'}],
                from_email: 'moransh4@gmail.com',
                subject: "Hey, what's up?",
                text: "Hello, I sent this message using mandrill."
            }
        }, function(error, response)
        {
            //uh oh, there was an error
            if (error) console.log( JSON.stringify(error) );

            //everything's good, lets see what mandrill said
            else console.log(response);
        });
    });


























//jQuery(function($)
//{
//    $("#contactForm").submit(function()
//    {
//        var email = $("#email").val(); // get email field value
//        var name = $("#name").val(); // get name field value
//        var msg = $("#message").val(); // get message field value
//        var phone = $("#phone").val(); // get message field value
//
//        $.ajax(
//            {
//                type: "POST",
//                url: "https://mandrillapp.com/api/1.0/messages/send.json",
//                data: {
//                    'key': 'Yg0fG6fsBGN60AiFnCvCOA',
//                    'message': {
//                        'from_email': email,
//                        'from_name': name,
//                        'headers': {
//                            'Reply-To': email
//                        },
//                        'subject': 'Website Contact Form Submission',
//                        'text': msg,
//                        'to': [
//                            {
//                                'email': 'moransh4@gmail.com',
//                                'name': 'moran sharabi',
//                                'type': 'to'
//                            }]
//                    }
//                }
//            })
//            .done(function(response) {
//                alert('Your message has been sent. Thank you!'); // show success message
//                $("#name").val(''); // reset field after successful submission
//                $("#email").val(''); // reset field after successful submission
//                $("#msg").val(''); // reset field after successful submission
//                $("#phone").val(''); // reset field after successful submission
//
//            })
//            .fail(function(response) {
//                alert('Error sending message.');
//            });
//        return false; // prevent page refresh
//    });
//});