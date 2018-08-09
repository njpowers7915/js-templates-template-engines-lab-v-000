





function createPost() {
  var title = document.getElementById("postTitle").value;
  var content = document.getElementById("postContent").value;
  var author = document.getElementById("postAuthor").value;
}

function postNewPost(title, content, author) {
  var
}


function postComment() {
 var commenter = document.getElementById("commenterName").value;
 var comment = document.getElementById("commentText").value;
 //create template string
 var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
 //create template function
 var templateFn = _.template(commentTemplate);
 var commentsDiv = document.getElementById("comments");
 //execute template function with JSON object for the interpolated values
 var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 //append rather than replace!
 commentsDiv.innerHTML += templateHTML;
}
