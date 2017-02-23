// A simple share pop-up
function sharePopup(href) {
  var h, left, shareWindow, top, w;
  w = 600;
  h = 300;
  left = (screen.width / 2) - (w / 2);
  top = (screen.height / 2) - (h / 2);
  shareWindow = window.open(href, "Window Name", "location=1,status=1,scrollbars=1,width=" + w + ",height=" + h + ",top=" + top + ",left=" + left);
  return false;
};
