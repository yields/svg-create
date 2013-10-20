
# svg-create

  Create SVG elements

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/svg-create

## API

#### create(tag[, length])

Create an array of svg elements of `tag`, with `length` which is defaulted to `1`.

```js
var els = create('text', 8);
assert(8 == els.length);
els.forEach(function(el){
  assert('text' == el.tagName);
});
```

## License

  MIT
