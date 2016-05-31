//Listen when a button, with a class of "myButton", is clicked
//You can use any jQuery/JavaScript event that you'd like to trigger the call
$('.astext').click(function() {
//Send the AJAX call to the server
  $.ajax({
  //The URL to process the request
    'url' : 'http://polls.apiblueprint.org/questions',
  //The type of request, also known as the "method" in HTML forms
  //Can be 'GET' or 'POST'
    'type' : 'GET',
  //The response from the server
    'success' : function(data) {
    //You can use any jQuery/JavaScript here!!!
      if (data == "success") {
        alert('request sent!');
      }
    }
  });
});

// Get the modal
var modal = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById("addbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



$("#addbtn").on("click", function () {
    $(this).css("background-image", "url(imges/check1.gif)");
});