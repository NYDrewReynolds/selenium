/*
 [X] user clicks Button
 [X] $.post
 [X] Create actions
 [X] Response
 Add new comment to the UI
 */

function submitComment(event) {
    event.preventDefault();
    console.log("hi, you submitted");
    postCommentData();
}

function commentData() {
    return {
        comment: {
            author_name: $("#comment_author_name").val(),
            article_id: $("#comment_article_id").val(),
            body: $("#comment_body").val()
        }
    };
}

function postCommentData() {
    $.post("/comments", commentData());
}

$(document).ready(function () {
    $("#new_comment").submit(submitComment);
});
