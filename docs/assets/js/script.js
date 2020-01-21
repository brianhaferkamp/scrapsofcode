$('.article-link').on('click', function() {
  var currShareBox = $(this).parents('.article-meta').siblings('.article-share-link');
  console.log(currShareBox);
  currShareBox.slideDown();
});

$('.article-share-link i').on('click', function() {
  $('.article-share-link').slideUp();
});
