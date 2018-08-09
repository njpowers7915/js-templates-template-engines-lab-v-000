function postComment() {
 var commenter = document.getElementById("commenterName").value;
 var comment = document.getElementById("commentText").value;

 var commentTemplate = document.getElementById("comment-template").innerHTML;

 var templateFn = _.template(commentTemplate);

 var commentsDiv = document.getElementById("comments");

 var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 commentsDiv.innerHTML += templateHTML;
}

function createPost() {
 var title = document.getElementById("postTitle").value;
 var body = document.getElementById("postBody").value;
 var author = document.getElementById("postAuthor").value;

 var postTemplate = document.getElementById("post-template").innerHTML;

 var templateFn = _.template(postTemplate);

 var postDiv = document.getElementById("post");

 var templateHTML = templateFn({ 'title': title, 'body': body , 'author': author });
 postDiv.innerHTML += templateHTML;
}
