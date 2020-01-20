$('.article-link').on('click', function(e) {
  e.preventDefault();
  var copiedText = $(this).attr('href');
  var currShareBox = $(this).parents('.article-meta').siblings('.article-share-link');
  var currShareBoxInput = $(this).parents('.article-meta').siblings('.article-share-link').find('input');
  currShareBoxInput.val(copiedText);
  currShareBox.slideDown();
});


$('.article-share-link i').on('click', function() {
  $('.article-share-link').slideUp();
});
