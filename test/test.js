
describe('svg-create', function(){

  var create = require('svg-create')
    , assert = require('assert');

  it('should be defaulted to 1', function(){
    var els = create('text');
    assert(1 == els.length);
    assert('text' == els[0].tagName);
  })

  it('should return the given length', function(){
    var els = create('text', 8);
    assert(8 == els.length);
    els.forEach(function(el){
      assert('text' == el.tagName);
    });
  })

})
