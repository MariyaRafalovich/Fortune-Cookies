$( document ).ready(function() {
    
    $("#button").click(function(){         
        $.ajax({
            dataType: 'json',
            url: 'api/getData.php'
        }).done(function(questions){
            
            for (var i = 0; i < questions.data.length; i++) {
                
                var randomQuestion = Math.floor(Math.random() * questions.data.length);
            }         
            
            document.write ("<div><p>" + questions.data[randomQuestion].des + "</p></div>"); 

            $("head").append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">');

            $("head").append('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>');

            $("head").append('<link rel="stylesheet" href="style.css">');

            $("p").addClass('ptext');
            $("body").append('');

            $("div").addClass("newMainblock");

            // buttons 

            $("div").append("<button>"+"facebook");
            $("button").addClass("facebook");

            $("div").append("<buttontype>"+"twitter");
            $("buttontype").addClass("twitter");

            // facebook link
            $(".facebook").click(function() {
                window.open("http://www.google.com");
            }); 
            
        });
    }); 
    
}); 

 









    


