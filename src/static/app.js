document.addEventListener("DOMContentLoaded", () => {
  const sumForm = document.getElementById("sum-form");
  const messageDiv = document.getElementById("message");

  sumForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstNumber = document.getElementById("first-number").value;
    const secondNumber = document.getElementById("second-number").value;

    try {
      const response = await fetch(
        `/sum?a=${encodeURIComponent(firstNumber)}&b=${encodeURIComponent(secondNumber)}`
      );
      const result = await response.json();

      if (response.ok) {
        messageDiv.textContent = `Resultado: ${result.result}`;
        messageDiv.className = "success";
      } else {
        messageDiv.textContent = result.detail || "An error occurred";
        messageDiv.className = "error";
      }

      messageDiv.classList.remove("hidden");

      // Hide message after 5 seconds
      setTimeout(() => {
        messageDiv.classList.add("hidden");
      }, 5000);
    } catch (error) {
      messageDiv.textContent = "No se pudo obtener el resultado. Inténtalo de nuevo.";
      messageDiv.className = "error";
      messageDiv.classList.remove("hidden");
      console.error("Error summing numbers:", error);
    }
  });
});
