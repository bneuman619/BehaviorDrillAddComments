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
      expect(comment.author).toBeDefined();
    })

  })
})

describe("Fixtures", function() {


  var fixture;

  beforeEach(function() {
    loadFixtures('test.html');

  });

  it('should not break my test suite', function() {
    expect(undefined).not.toBeDefined();
   });

  it("should have text 'squirrel' in div3", function () {
    fixture = $("#fixture_test");
    expect(fixture).toHaveText("Squirrel");
  });

  describe("Should be able to add comments on the end of comment_list", function () {
    beforeEach(function() {
      comment_list_before_add = $("#comment_list li");
      var comment = new Comment("testing", "this");
      append_comment(comment);
    });

    it("comment list should be one longer after adding comment", function () {
      var after_comment_count = $("#comment_list li").length;
      expect(after_comment_count).toEqual(comment_list_before_add.length + 1);
    });

    it("added comment element should include comment text", function () {
      var last_comment = $("#comment_list li:last");
      expect(last_comment).toContainText("testing");
    });

    it("added comment element should include author text", function () {
      var last_comment = $("#comment_list li:last");
      var author = $(last_comment).children().filter(".author");
      expect(author).toHaveText("this");
    })
  });

  describe("Should be able to add 'add comment field' on the end of comment area", function () {
    it("should be no form in comment area before hitting 'add comment'", function () {
      var comment_area_form = $("#comment_area form");
      expect(comment_area_form.length).toEqual(0);
    });

    it("should be form in comment area after hitting 'add comment'", function () {
      create_add_comment_field();
      var comment_area_form = $("#comment_area form");
      expect(comment_area_form.length).toEqual(1);
    });

  });

  describe("'New comment' button should add comment field", function () {
    beforeEach(function() {
      set_add_comment_click();
    });

    it("should be no form in comment area before hitting 'add comment'", function () {
      var comment_area_form = $("#comment_area form");
      expect(comment_area_form.length).toEqual(0);
    });

     it("should be form in comment area after hitting 'add comment'", function () {
      $("button").trigger("click");
      var comment_area_form = $("#comment_area form");
      expect(comment_area_form.length).toEqual(1);
    });
  })

  describe("Submitting new comment form should append comment", function () {
    beforeEach(function() {
      set_add_comment_click();
      $("button").trigger('click');
    });

    it("text field should be empty to start", function () {
      var text_length = $("#comment_text").val().length;
      expect(text_length).toEqual(0);
    });

    it("author field should be empty to start", function () {
      var text_length = $("#comment_author").val().length;
      expect(text_length).toEqual(0);
    });

    it("text field should be filled in when typed into", function () {
      $("#comment_text").val('foo');
      var comment_text = $("#comment_text");
      expect(comment_text.val()).toEqual("foo");
    });

    it("text field should be filled in when typed into", function () {
      $("#comment_author").val('foo');
      var comment_author = $("#comment_author");
      expect(comment_author.val()).toEqual("foo");
    });


  })

  // describe("Submitting form", function () {
  //   beforeEach(function() {
  //     comment_list_before_add = $("#comment_list li");
  //     // set_add_comment_click();
  //     // $("button").trigger('click');

  //   });

  //   it("length of comment list should not change before add", function () {
  //     expect($("#comment_list li").length).toEqual(comment_list_before_add.length);
  //   });

  //   it('length of comment list should increase by one after add', function () {
  //      create_add_comment_field();
  //     create_add_comment_submit();
  //     $("#comment_text").val('foo');
  //     $('#comment_author').val('bar');
  //     $("#new_comment").trigger('submit');
  //     var new_length = $("#comment_list li").length;
  //     expect(new_length).toEqual(comment_list_before_add.length + 1);
  //   })
  // });

})
