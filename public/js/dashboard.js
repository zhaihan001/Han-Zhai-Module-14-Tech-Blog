const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post_title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

const editButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    document.location.replace(`/dashboard/updatepost/${id}`);
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

if (document.querySelector(".post-list")) {
  let editButtons = document.querySelectorAll(".editButton");
  let deleteButtons = document.querySelectorAll(".deleteButton");
  for (let i = 0; i < deleteButtons.length; i++) {
    editButtons[i].addEventListener("click", editButtonHandler);
    deleteButtons[i].addEventListener("click", delButtonHandler);
  }
}
