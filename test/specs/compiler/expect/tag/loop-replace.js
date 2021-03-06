
riot.tag('loop-replace', '<div> <strong each="{ items }">{ v }</strong> <button onclick="{ run }">Run</button> </div>', function(opts) {

  var self = this
  self.items = [ { v: 'a' }, { v: 9 }, { v: 3 } ]

  this.run = function() {
    setTimeout(function() {
      self.update({ items: [ { v:'c'}, { v:'d' }, { v: 'e' }, { v: 'f' }, { v: 'g' } ] })
    }, 200)

    setTimeout(function() {
      self.items = self.items.concat([ { v:'c'},{ v:'c'},{ v:'c'},{ v:'c'} ])
      self.update()
    }, 400)

    setTimeout(function() { self.update({ items: [ {v:'e'}, {v:'f'} ] }) }, 600)
  }.bind(this);




});