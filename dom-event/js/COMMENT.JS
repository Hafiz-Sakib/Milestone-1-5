//1.Add  Button Event Listner
document
  .getElementById("submit-comment")
  .addEventListener("click", function () {
    //2.get User Comment
    const commentBox = document.getElementById("new-comment");
    //   const userComment = commentBox.value;

    //3.add Comment

    const newComment = document.createElement("p");
    newComment.innerText = commentBox.value;

    //4.Append The Comment

    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(newComment);

    //clean the CommentBox
    commentBox.value = "";
  });
