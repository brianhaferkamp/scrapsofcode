$('.article-link').on('click', function() {
  loadSharingLink();
});


function loadSharingLink() {
  var copiedText = $(this).attr('data-link');
  console.log(copiedText);
  var currShareBox = $(this).parents('.article-meta').siblings('.article-share-link');
  console.log(currShareBox);
  var currShareBoxInput = $(this).parents('.article-meta').siblings('.article-share-link');
  console.log(currShareBoxInput);
  currShareBoxInput.find('input').val(copiedText);
  currShareBox.slideDown();
}







$('.article-share-link i').on('click', function() {
  $('.article-share-link').slideUp();
});
