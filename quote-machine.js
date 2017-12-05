
 $(document).ready(function () {
            var randomNumber;
            var randomColor;
            var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

            function myJson() {
                randomColor = Math.floor((Math.random() * colors.length) + 1);
                $("body").css("background-color", colors[randomColor]);
                $(".new_quote_btn").css("background-color", colors[randomColor]);
                $(".quote-area").css("color", colors[randomColor]);
                $(".social").css("background-color", colors[randomColor]);

                $.getJSON("/quotes.json", function (json) {
                    randomNumber = Math.floor((Math.random() * json.length) + 1);
   
                    $(".quote-area").html(json[randomNumber].quoteText);
                    $(".quote-author").html(json[randomNumber].quoteAuthor);


                     $(".twitter_btn").click(function () {
                        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + json[randomNumber].quoteText + '"  - ' + json[randomNumber].quoteAuthor));
                    });

                    $(".whatsapp_btn").attr("href", "whatsapp://send?text="+ json[randomNumber].quoteText+ "\n  -" + json[randomNumber].quoteAuthor);


                });
            }
            
            $(".new_quote_btn").on("click", function () {
                myJson();
            });

           

            myJson();
        });
