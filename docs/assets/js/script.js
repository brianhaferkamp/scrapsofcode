Mavo.inited
    .then(() => Mavo.all[0].dataLoaded)
    .then(() => Mavo.all[0].render({"foo": ["e", "f", "g", "h", "i", "j"]}));

// $('.article-link').on('click', function(e) {
//   e.preventDefault();
//   loadSharingLink();
// });


// function loadSharingLink() {
//   var copiedText = $(this).attr('href');
//   console.log(copiedText);
//   var currShareBox = $(this).parents('.article-meta').siblings('.article-share-link');
//   console.log(currShareBox);
//   var currShareBoxInput = $(this).parents('.article-meta').siblings('.article-share-link');
//   console.log(currShareBoxInput);
//   currShareBoxInput.find('input').val(copiedText);
//   currShareBox.slideDown();
// }







// $('.article-share-link i').on('click', function() {
//   $('.article-share-link').slideUp();
// });
