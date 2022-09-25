const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#post-conment").value.trim();

  if (comment) {
    const response = await fetch(`/api/posts`, {
      method: "PUT",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert("Title and Content fields can't be empty!");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
