const formulas = [
    { category: "Mathematics", name: "Quadratic Formula", formula: "x = (-b ± √(b² - 4ac)) / 2a" },
    { category: "Physics", name: "Newton's Second Law", formula: "F = ma" },
    { category: "Chemistry", name: "Ideal Gas Law", formula: "PV = nRT" },
    { category: "Mathematics", name: "Pythagorean Theorem", formula: "a² + b² = c²" },
    { category: "Physics", name: "Einstein's Energy Equation", formula: "E = mc²" }
];

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const formulasGrid = document.getElementById("formulas-grid");

    function renderFormulas(filter = "") {
        formulasGrid.innerHTML = "";
        formulas.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()) || f.category.toLowerCase().includes(filter.toLowerCase()))
            .forEach(formula => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `<h2>${formula.name}</h2><p>${formula.category}</p><p>${formula.formula}</p>`;
                formulasGrid.appendChild(card);
            });
    }

    searchInput.addEventListener("input", (e) => renderFormulas(e.target.value));

    renderFormulas();
});
