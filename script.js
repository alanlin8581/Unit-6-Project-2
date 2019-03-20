$(".Calculate").click(function(){
    var firstName = $(".ip1").val();  
    var lastName = $(".ip2").val();
    var anime = $(".ip3").val();
    var value = parseInt($(".ip4").val());
    var totalvalue= (2050-2019)*365*value;
    console.log(firstName);
    console.log(lastName);
    console.log(anime);
    var finaloutput = firstName + " " + lastName + " watch " + anime + " " +totalvalue + " " + "hours by 2050";
    console.log(finaloutput);
    $(".results").text(finaloutput);
    $(".ip1").val("");
    $(".ip2").val("");
    $(".ip3").val("");
    $(".ip4").val("");
});