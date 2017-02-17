/*
 * Swap out an image, animated gif, in place of the current image
 * when hovering over that element
 */
$(".img").hover(
  function() {
    var src = $(this).attr("src");
    $(this).attr("src", src.replace(/\.png$/i, ".gif"));
  },
  function() {
    var src = $(this).attr("src");
    $(this).attr("src", src.replace(/\.gif$/i, ".png"));
  }
);
