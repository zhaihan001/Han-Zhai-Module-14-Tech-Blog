const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post_title").value.trim();
  const content = document.querySelector("#post-content").value.trim();
  var url = event.target.baseURI;
  var postId = url.substring(url.lastIndexOf("/") + 1);
  if (title && content) {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Title and Content fields can't be empty!");
    }
  }
};

document
  .querySelector(".update-post-form")
  .addEventListener("submit", updateFormHandler);
