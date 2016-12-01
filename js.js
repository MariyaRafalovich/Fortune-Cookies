$( document ).ready(function() {
    var questions = ['Today it is up to you to create the peacefulness you long for',
                'A friend asks only for your time not your money',
                'If you refuse to accept anything but the best, you very often get it',
                'A smile is your passport into the hearts of others',
                'Hard work pays off in the future, laziness pays off now',
                'Change can hurt, but it leads a path to something better',
                'Hardships often prepare ordinary people for an extraordinary destiny',
                'One must care about a world one will not see',
                'Whatever the mind of man can conceive and believe, it can achieve',
                'We become what we think about'
                ];
    
    
    $("#button").click(function(){ 
        
        for (var i = 0; i < questions.length; i++) {
            var randomQuestion = Math.floor(Math.random() * questions.length);
        } 
        document.write ("<div><p>" + questions[randomQuestion] + "</p></div>");

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

 









    


