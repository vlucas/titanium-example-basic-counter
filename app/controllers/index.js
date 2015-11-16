// controllers/index.js
$.counter.set('count', $.counter.get('count') || 42);

function inc(e) {
  var newCount = $.counter.get('count') + 1;
  console.log('> UPDATE counter to: ' + newCount);
  $.counter.save({ count: newCount });
}

$.index.open();



