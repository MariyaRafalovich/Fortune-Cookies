$( document ).ready(function() {

        var cookieValue = $.cookie("sessionId");    
        $.ajax({
            dataType: 'json',
            type:'GET',
            url: 'api/checkUser.php',
            data:{sessionId:cookieValue}         
        }).done(function(data){
           
              if (data == "OK") {
                var cookieValue = $.cookie("sessionId", data["sessionId"]);
                console.log("sessionId:"+ cookieValue);               
            } else {
                  window.location.href="index.html";
            }
           
        });        
 
 
});