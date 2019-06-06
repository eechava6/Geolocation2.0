const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

$(document).ready(function() {
  $("#register").click(function(){
      //When users click in register button send a post request with data
      //entered if data sent is ok, redirects to authentication and creates
      //a new user in DB, else show error.
      $.post("/users/registerUser", { username: $("#username").val(),
       email: $("#email").val(),
       password: $("#password").val(),}).done(function(res) {
        if(res.status === "success"){
          window.location.assign('/users/authenticateUser')
        }else{
          $("#failed").show();
          if(res.status === "host"){
            Toast.fire({
                type: 'error',
                title: 'No microservice found'
              })
        }
        }
        })
      
      error: (error) => {
        console.log(JSON.stringify(error));
      }
    });
  });
  
  