let currentPlayer = "O"; // You start first
const status = document.getElementById("status");

// Select all cells and add click listeners
document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", () => {
    // Prevent overwriting filled cells
    if (cell.textContent !== "") return;

    // Fill with current player's mark
    cell.textContent = currentPlayer;

    // Optionally add style
    cell.style.color = currentPlayer === "O" ? "blue" : "red";

    // Switch player
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    status.textContent = `Player ${currentPlayer}'s turn`;
  });
});
