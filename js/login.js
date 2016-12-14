$( document ).ready(function() {


    /* Create new Item */
    $("#login-submit").click(function(e){

        e.preventDefault(); 
        var form_action = $("#login-form").attr("action");
        var username = $("#login-form").find("input[name='username']").val();
        var password = $("#login-form").find("input[name='password']").val();    
        
        if(username != '' && password != ''){
            $.ajax({
                dataType: 'json',
                type:'GET',
                url: form_action,
                data:{username:username, password:password}         
            }).done(function(data){
            
                //SAVE COOKIE
                if (data["sessionId"]) {
                    var cookieValue = $.cookie("sessionId", data["sessionId"]);
                    console.log(cookieValue);
                    window.location.href="items.html";
                } else {
                   $("#loginError").show();
                }
            });        
        }
    });


    $( "#username" ).keypress(function() {
      $("#loginError").hide();
    });


    $( "#password" ).keypress(function() {
      $("#loginError").hide();
    });


});