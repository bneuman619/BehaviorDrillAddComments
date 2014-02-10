describe("Comment", function() {

  var comment;
  var title = "some title";
  var text = "some text";

  describe("should be undefined when input is empty", function () {

    beforeEach(function() {
      comment = new Comment();
    });

    it("text is undefined", function () {
      expect(comment.text).not.toBeDefined();
    });

    it("title is undefined", function () {
      expect(comment.title).not.toBeDefined();
    });

  });

  describe("should be defined when input is not empty", function () {
    beforeEach(function() {
      comment = new Comment(text, title);
    })

    it("should have text", function () {
      expect(comment.text).toBeDefined();
    })

    it("should have title", function () {
      expect(comment.title).toBeDefined();
    })

  })
})
