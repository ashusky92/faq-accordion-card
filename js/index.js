$("div.question").on("click", function () {
  console.log("Question clicked");
  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");
});
