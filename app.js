const aboutText = document.getElementById("about-text");
  const readMoreBtn = document.getElementById("read-more-btn");

  let expanded = false;

  readMoreBtn.addEventListener("click", () => {
    expanded = !expanded;
    if (expanded) {
      aboutText.classList.remove("max-h-[180px]");
      readMoreBtn.textContent = "Read less";
    } else {
      aboutText.classList.add("max-h-[180px]");
      readMoreBtn.textContent = "Read more";
    }
  });