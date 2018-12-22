$(document).ready(function(){


$("#generate").click(function(){

  var title = $("#title").val();
  var subtitle = $("#subtitle").val();
  var author = $("#author").val();
  var publisher = $("#publisher").val();
  var year = $("#year").val();
  var color = $("#bgcolor").val();


  $("#title1").text(title);
  $("#subtitle1").text(subtitle);
  $("#author1").text(author);
  $("#publisher1").text(publisher);
  $("#year1").text(year);
  $("#area").css("background-color", color);
  });
});