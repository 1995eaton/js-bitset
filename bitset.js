var Bitset = function(size) {
  this._bitset = new Int8Array(size);
};

Bitset.prototype = {
  test: function(n) {
    return this._bitset[n];
  },
  flip: function(n) {
    this._bitset[n] ^= 1;
  },
  set: function(n) {
    if (typeof n === 'undefined') {
      for (var i = 0, max = this._bitset.length; i < max; i++) {
        this._bitset[i] = 1;
      }
    } else {
      this._bitset[n] = 1;
    }
  },
  reset: function(n) {
    if (typeof n === 'undefined') {
      for (var i = 0, max = this._bitset.length; i < max; i++) {
        this._bitset[i] = 0;
      }
    } else {
      this._bitset[n] = 0;
    }
  },
  count: function() {
    for (var i = 0, c = 0, max = this.length; i < max; i++) {
      if (this.test(i)) {
        c++;
      }
    }
    return c;
  },
  any: function() {
    for (var i = 0, max = this.length; i < max; i++) {
      if (this.test(i)) {
        return true;
      }
    }
    return false;
  },
  none: function() {
    for (var i = 0, max = this.length; i < max; i++) {
      if (this.test(i)) {
        return false;
      }
    }
    return true;
  },
  resize: function(size) {
    var _newset = new Int8Array(size);
    for (var i = 0, max = this.length; i < max; i++) {
      _newset[i] = this._bitset[i];
    }
    this._bitset = _newset;
  },
  map: function(fn, caller) {
    var max = this._bitset.length,
        _newset = new Bitset(max);
    for (var i = 0; i < max; i++) {
      _newset._bitset[i] = fn.call(caller, this._bitset[i], i, this._bitset);
    }
    return _newset;
  },
  forEach: function(fn, caller) {
    for (var i = 0, max = this.length; i < max; i++) {
      fn.call(caller, this._bitset[i], i, this._bitset);
    }
  },
  size: function() {
    return this._bitset.length;
  },
  join: function(sep) {
    var result = [];
    this.forEach(function(e) {
      result.push(e);
    });
    return result.join(typeof sep === 'undefined' ? ',' : String(sep));
  },
  toString: function() {
    return this.join(',');
  },
  toNumber: function() {
    return parseInt(this.join(''), 2);
  },
  get length() {
    return this._bitset.length;
  }
};
