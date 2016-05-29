$(document).ready(function() {

  //This fires when a user attempts to log in (already have an account created)
  $("#pwr").click(function() {
    $.ajax({
		async:false,
      url: "/login",
      method: "POST",
      data: {
        "email": email,
        "password": password
      },

      statusCode: {
        200: function (response) {
           //alert("Successfully Logged In");
           //console.log(response);
           // $("#navbarform").html(sessionStorage.username);
           sessionStorage.email = email;
           console.log(sessionStorage.email);
           console.log(response);
		   
           
           var token = response.token;
           sessionStorage.setItem ("token", token);
		   var req = {
				async:false,
				
			};
			$.ajax({
				method:'GET',
				url: '/pantry',
				headers: {
					'Content-Type':'application/json',
					'Authorization':"Bearer " + token
				},
				 statusCode: {
        			200: function (response) {
						console.log(response);
						var userIngredient = response.ingredients;
						console.log(userIngredient);
						if(userIngredient.length == 0){
							 window.location.href = "/AccountLandingPage.html";
						}else{
							window.location.href = "/pantry.html";
						}
					},
					401: function() {
					  // alert("Invalid token"); 
					}
				 },
				 error: function (){
				 	 window.location.href = "/AccountLandingPage.html";
				 }
			});
		  
           console.log(token);

        },
        401: function() {
           alert("Invalid email/password");
           $('#LoginSignUpModal').modal('show');
           
        }
      },
      error: function ()
      {
        //alert("something bad happened");
        
      }
    });
    return false;
  });
  });