$(document).ready(function(){
    var user, pass;
    $("#submit").click(function(){
        user = $("#email").val();
        pass = $("#password").val();
        $.post("http://localhost:3000/login", {
            user: user,
            password: pass
        }, function(data){
            console.log(data);
            if (data.valid)
            {
                alert("Login successful");
            }
            else
            {
                alert("Login failed");
            }
        });
    });
});
