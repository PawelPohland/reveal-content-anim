const animParagraphs = document.querySelectorAll(".content p");
let delay = 1 / animParagraphs.length;

animParagraphs.forEach((paragraph) => {
  delay += 0.5;
  paragraph.style.setProperty("--delay", `${delay}s`);
});
