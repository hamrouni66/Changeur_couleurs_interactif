document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    // Génère une couleur aléatoire en format hexadécimal (#RRGGBB)
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Changement de couleur au clic
    changeColorBtn.addEventListener("click", () => {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    });
});
