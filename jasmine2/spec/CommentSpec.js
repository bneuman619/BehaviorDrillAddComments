describe("Comment", function() {

  var comment;
  var text = "some text";

  beforeEach(function() {
    comment = new Comment(text);
  });

  it("should have text", function () {
    expect(comment.text).toEqual(text);
  });

})
