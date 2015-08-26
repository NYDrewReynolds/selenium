/*
 user clicks Button
 $.post
 Create actions
 Response
 Add new comment to the UI
 */

function submitComment(event) {
    event.preventDefault();
    console.log("hi, you submitted");
}

function commentData() {
    return {    author_name:  $("#comment_author_name").val(),
                article_id: $("#comment_article_id").val(),
                body: $("#comment_body").val();
        }
}

$(document).ready(function () {
    $("#new_comment").submit(submitComment);
});
