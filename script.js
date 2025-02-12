document.querySelectorAll("[data-json-copy]").forEach((copyButton) => {
  copyButton.addEventListener("click", function () {
    let codeSnippetText = document.querySelector(
      `[data-json-target="${this.getAttribute("data-json-copy")}"]`
    ).textContent;
    if (codeSnippetText) {
      try {
        let codeSnippet = JSON.parse(codeSnippetText);
        document.addEventListener("copy", (event) => {
          event.clipboardData.setData(
            "application/json",
            JSON.stringify(codeSnippet)
          );
          event.preventDefault();
        });
        document.execCommand("copy");
      } catch (error) {
        alert("Invalid JSON format");
      }
    }
  });
});
