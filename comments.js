// Shorthand for document ready
$(function(){

  $("button").on("click", function () {
    create_add_comment_field();
  })

});

function set_add_comment_click() {
   $("button").on("click", function () {
    create_add_comment_field();
  });
}

function create_add_comment_field() {
  var comment_field = $("<form id='new_comment'> \
    <textarea id='comment_text' row='10' col='10'></textarea> \
    <input type='text' id='comment_author' /> \
    <input type='submit'>Submit comment</input></form> ");

  comment_field.appendTo('#comment_area');
}

function append_comment(comment) {
  var comment_html = "<li>" + comment.text + "<span class='author'>" + comment.author + "</span></li>"
  $(comment_html).appendTo('#comment_list');
}

function Comment(text, author) {
  this.text = text;
  this.author = author;
}

function create_add_comment_field() {
  var comment_field = $("<form id='new_comment'> \
    <textarea id='comment_text' row='10' col='10'></textarea> \
    <input type='text' id='comment_author' /> \
    <input type='submit'>Submit comment</input></form> ");

  comment_field.appendTo('#comment_area');

  $("#new_comment").on("submit", function () {
    event.preventDefault();
    var comment = new Comment($("textarea").val(), $("#comment_author").val());

    append_comment(comment);
    comment_field.remove();

   });
}
