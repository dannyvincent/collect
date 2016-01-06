(function () {
  var assert = chai.assert;

  describe('When I book a collection', function() {
    it('it is validated', function(){
      var validation = new Validator();

      BookCollection(new Collection(), validation);

      assert.isTrue(validation.Complete());
    });
  });
})();
