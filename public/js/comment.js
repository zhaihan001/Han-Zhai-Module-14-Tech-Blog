const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#post-comment").value.trim();
  const id = event.target.getAttribute("id");
  console.log(id);
  if (comment) {
    const response = await fetch(`/post/comment/${id}`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert("Comment field can't be empty!");
    }
  }
};

document
  .querySelector(".add-comment-form")
  .addEventListener("submit", newFormHandler);
