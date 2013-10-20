
/**
 * SVG Namespace
 */

var ns = 'http://www.w3.org/2000/svg';

/**
 * Create SVG Elements with `tag` and `len`.
 *
 * @param {String} tag
 * @param {Number} len
 * @return {Array}
 * @api public
 */

module.exports = function(tag, len){
  var el = document.createElementNS(ns, tag)
    , len = len || 1
    , ret = [];

  if (1 == len) return [el];

  for (var i = 0; i < len; ++i) {
    ret.push(el.cloneNode());
  }

  return ret;
};
