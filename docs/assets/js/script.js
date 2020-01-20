$('.article-link').on('click', function(e) {
  e.preventDefault();
  var copiedText = $(this).attr('href');
  $('.article-share-link input').val(copiedText);
  $(this).parents('.article-meta').siblings('.article-share-link').slideDown();
});


$('.article-share-link i').on('click', function() {
  $('.article-share-link').slideUp();
});
