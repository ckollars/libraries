/*
 * Create HTML elements with attributes
 * $object - A jquery DOM object
 * .right - Class element inside of $object
 */
$('<h1>', {
  html: 'html content here,
  'class': 'class-name'
}).appendTo('.right', $object);
