const formulas = [
    { category: "Mathematics", name: "Quadratic Formula", formula: "x = (-b ± √(b² - 4ac)) / 2a" },
    { category: "Physics", name: "Newton's Second Law", formula: "F = ma" },
    { category: "Chemistry", name: "Ideal Gas Law", formula: "PV = nRT" },
    { category: "Mathematics", name: "Pythagorean Theorem", formula: "a² + b² = c²" },
    { category: "Physics", name: "Einstein's Energy Equation", formula: "E = mc²" },
    { category: "Mathematics", name: "Euler's Formula", formula: "e^(iπ) + 1 = 0" },
    { category: "Physics", name: "Ohm's Law", formula: "V = IR" },
    { category: "Chemistry", name: "Avogadro's Law", formula: "V/n = k" }
];

for (let i = 0; i < 200; i++) {
    formulas.push({ category: i % 3 === 0 ? "Mathematics" : i % 3 === 1 ? "Physics" : "Chemistry", name: `Formula ${i+9}`, formula: `x^${i} + y^${i} = z^${i}` });
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const categoryFilter = document.getElementById("category-filter");
    const searchBtn = document.getElementById("search-btn");
    const formulasGrid = document.getElementById("formulas-grid");

    function renderFormulas(filter = "", category = "all") {
        formulasGrid.innerHTML = "";
        formulas.filter(f => (category === "all" || f.category === category) && (f.name.toLowerCase().includes(filter.toLowerCase()) || f.formula.toLowerCase().includes(filter.toLowerCase())))
            .forEach(formula => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `<h2>${formula.name}</h2><p>${formula.category}</p><p>${formula.formula}</p>`;
                formulasGrid.appendChild(card);
            });
    }

    function handleSearch() {
        renderFormulas(searchInput.value, categoryFilter.value);
    }

    searchBtn.addEventListener("click", handleSearch);
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    });
    categoryFilter.addEventListener("change", handleSearch);

    renderFormulas();
});
