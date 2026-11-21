// Hides the ((more)) marker on a full blog post. On the blog's front page the
// marker is where the post is cut off and "Continue reading" appears.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".md-content p").forEach(function (p) {
    if (p.textContent.trim() === "((more))") p.remove();
  });
});
