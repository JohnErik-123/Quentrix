 function submitForm(event) {
            event.preventDefault();

            // Perform form validation and submit logic here
            var firstName = document.getElementById('firstName').value;
            var secondName = document.getElementById('secondName').value;
            var country = document.getElementById('country').value;
            var phoneNumber = document.getElementById('phoneNumber').value;
            var paymentPlan = document.getElementById('paymentPlan').value;
            var paymentMethod = document.getElementById('paymentMethod').value;

            // Add your logic for form submission and validation here
            // For demonstration purposes, let's just log the form data
            console.log("Form Submitted!");
            console.log("First Name:", firstName);
            console.log("Second Name:", secondName);
            console.log("Country:", country);
            console.log("Phone Number:", phoneNumber);
            console.log("Payment Plan:", paymentPlan);
            console.log("Payment Method:", paymentMethod);
        }