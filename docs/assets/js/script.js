$('.article-link').on('click', function(e) {
  e.preventDefault();
  var copiedText = $(this).attr('href');
  console.log(copiedText);
//   var currShareBox = $(this).parents('.article-meta').siblings('.article-share-link');
//   console.log(currShareBox);
//   var currShareBoxInput = $(this).parents('.article-meta').siblings('.article-share-link');
//   console.log(currShareBoxInput);
//   currShareBoxInput.find('input').val(copiedText);
//   currShareBox.slideDown();
//   return false;
});


$('.article-share-link i').on('click', function() {
  $('.article-share-link').slideUp();
});
