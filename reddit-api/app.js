const input = document.getElementById("search-input");
const addButton = document.getElementById("search-button");
const list = document.getElementById("results-list");

addButton.addEventListener("click", handleClick);
input.addEventListener("keypress", handleKeyPress);

function handleKeyPress(e) {
  if (e.key === "Enter") {
    handleClick();
  }
}

function handleClick(event) {
  const value = input.value || "";
  if (value.length > 0) {
    getResults(value);
    list.innerHTML = "";
  }
}

function getResults(value) {
  fetch("https://www.reddit.com/r/" + value + ".json?limit=5").then((res) => {
    res.json().then((result) => {
      console.log(result);

      result.data?.children?.forEach((post) => {
        let title = post.data.title || "(No Title Available)";
        let image = post.data.thumbnail?.includes(".jpg")
          ? post.data.thumbnail
          : "https://via.placeholder.com/150";
        let link = post.data.permalink ? "https://www.reddit.com" + post.data.permalink : "";
        console.log({ title: title, image: image, link: link });
        appendResult(title, image, link);
      });
    });
  });
}

function appendResult(title, image, link) {
  const listItem = document.createElement("li");

  // title
  if (title) {
    const titleEl = document.createElement("h3");
    titleEl.className = "title";
    titleEl.innerText = title;
    listItem.appendChild(titleEl);
  }
  // image
  if (image) {
    const imageEl = document.createElement("img");
    imageEl.className = "thumbnail";
    imageEl.src = image;
    listItem.appendChild(imageEl);
  }
  // link
  if (link) {
    const visitLink = document.createElement("a");
    visitLink.className = "visit-link";
    visitLink.innerText = "Visit";
    visitLink.href = link;
    listItem.appendChild(visitLink);
  }

  list.appendChild(listItem);
  input.value = "";
}

// function removeItem(event) {
//   console.log(event);
//   const listItem = event.target.parentElement;
//   list.removeChild(listItem);
// }
