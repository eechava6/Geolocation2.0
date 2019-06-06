const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
//Once document is ready
$(document).ready(function() {

$("#login").click(function(){
//When users click in login button send a post request with data
//entered if data sent match with DB, redirects to UserPage, else show error.
    $.post("/users/authenticateUser" ,{ username: $("#username").val(), password: $("#password").val()}).
    done(function(res) {
      if(res.status === "success"){
        window.location.assign('/users/userPage')
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

