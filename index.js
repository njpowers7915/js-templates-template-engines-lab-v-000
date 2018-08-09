function addComment() {
  event.preventDefault();
  var bodyText = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;
 
  var commentBody = createCommentBody(bodyText);
  var commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}

function createCommentBody(comment) {
  var bodyDiv = document.createElement("div");
  var bodyPara = document.createElement("p");
  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyPara);
  return bodyDiv;
}

function createCommenterLabel(commenter) {
  var commenterDiv = document.createElement("div");
  var commenterLabel = document.createElement("p");
  commenterLabel.innerHTML = "posted by:&nbsp;";
  var commenterName = document.createElement("span");
  commenterName.innerHTML = commenter;
  commenterLabel.appendChild(commenterName);
  commenterDiv.appendChild(commenterLabel);
  return commenterLabel;
}

function postNewComment(body, commenter) {
  var commentsDiv = document.getElementById("comments");
  var newCommentDiv = document.createElement("div");
  newCommentDiv.appendChild(body);
  newCommentDiv.appendChild(commenter);
  commentsDiv.appendChild(newCommentDiv);
}





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
