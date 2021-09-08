$(function() {
  $('.accordion__trigger').click(function() {
    $(".accordion__body").not($(this).next()).slideUp(300);
    $(this).next().slideToggle(300);

    $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("active");
    $(this).closest(".accordion__item").toggleClass("active");
  });
});