// this form is for popup


$(document).ready(function () {
    $("#form_lead").on("submit", function (e) {
    e.preventDefault();

    //$('#testkk').on('click', function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var LEAD_SOURCE_ID = $("#LEAD_ID").val();
    var data = {
        NAME: name,
        EMAIL: email,
        MOBILE: mobile,
        LEAD_SOURCE_ID: LEAD_SOURCE_ID,
    };

    var jsondata = JSON.stringify(data);

    // console.log(jsondata);

        $.ajax({
        type: "POST",
        url: "http://crm.equinoxlab.com/api/Lead_Management.svc/Insert_Lead",
        data: jsondata,
        async: false,
        processData: false,
        success: function (data) {
            // console.log(data.response);
            window.location.replace("../../thank-you.html");
        },
        contentType: "application/json",
        dataType: "json",
        });
    });
});


// console.log("this is foodtesting working");

    function validation(){
    var name = document.EnquiryForm.name.value;
    var email = document.EnquiryForm.email.value;
    // var company_name = document.EnquiryForm.company.value;
    var contact = document.EnquiryForm.phone.value;

    // console.log(name, email,  contact);

    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = true;

    // Validate name field
    if(name == ''){
        document.getElementById('nameErr').innerHTML = "Please enter a name";
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            document.getElementById('nameErr').innerHTML = "Please enter a valid name";
        } else {
            document.getElementById('nameErr').innerHTML = "";
            nameErr = false;
        }
    }

    // // Validate company name field
    // if(company_name == ''){
    //     document.getElementById('companyErr').innerHTML = "Please enter your company name";
    // } else {
    //     var regex = /^[a-zA-Z\s]+$/;                
    //     if(regex.test(company_name) === false) {
    //         document.getElementById('companyErr').innerHTML = "Please enter a valid company name";
    //     } else {
    //         document.getElementById('companyErr').innerHTML = "";
    //         companyErr = false;
    //     }
    // }

    // Validate mobile number
    if(contact == "") {
        document.getElementById('mobileErr').innerHTML = "Enter your number";
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(contact) === false) {
            document.getElementById('mobileErr').innerHTML = "Please enter a valid 10 digit number";
        } else {
            document.getElementById('mobileErr').innerHTML = "";
            mobileErr = false;
        }
    }

    // Validate email address
    if(email == "") {
        document.getElementById('emailErr').innerHTML = "Please enter your email address";
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            document.getElementById('emailErr').innerHTML = "Please enter a valid email address" 
        } else{
            document.getElementById('emailErr').innerHTML = "";
            emailErr = false;
        }
    }


    // Checking all fields
    if((nameErr || emailErr || mobileErr) == true) {
        return false;
    } else { 
        window.location.href="thank-you.html"
    }
}

