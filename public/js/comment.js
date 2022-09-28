const newFormHandler = async (event) => {
  event.preventDefault();

  var comment = document.querySelector("#post-comment").value.trim();
  var url = event.target.baseURI;
  var postId = url.substring(url.lastIndexOf("/") + 1);
  if (comment) {
    const response = await fetch(`/api/comments/`, {
      method: "POST",
      body: JSON.stringify({ comment, postId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert("Comment field can't be empty!");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    document.location.reload();
  } else {
    alert("Failed to delete post");
  }
};

document
  .querySelector(".add-comment-form")
  .addEventListener("submit", newFormHandler);

if (document.querySelector(".deleteButton")) {
  let deleteButtons = document.querySelectorAll(".deleteButton");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", delButtonHandler);
  }
}
