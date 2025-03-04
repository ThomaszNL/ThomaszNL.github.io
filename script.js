const formulas = [
    { category: "Mathematics", name: "Quadratic Formula", formula: "x = (-b ± √(b² - 4ac)) / 2a" },
    { category: "Mathematics", name: "Pythagorean Theorem", formula: "a² + b² = c²" },
    { category: "Mathematics", name: "Logarithm Rule", formula: "log_b(a) = log_c(a) / log_c(b)" },
    { category: "Mathematics", name: "Euler's Formula", formula: "e^(iπ) + 1 = 0" },
    { category: "Mathematics", name: "Area of a Circle", formula: "A = πr²" },
    { category: "Mathematics", name: "Binomial Theorem", formula: "(a + b)^n = Σ[k=0 to n] (nCk * a^(n-k) * b^k)" },
    { category: "Mathematics", name: "Derivative of a Function", formula: "f'(x) = lim (h→0) [f(x+h) - f(x)] / h" },
    { category: "Mathematics", name: "Integration by Parts", formula: "∫u dv = uv - ∫v du" },
    { category: "Physics", name: "Newton's Second Law", formula: "F = ma" },
    { category: "Physics", name: "Einstein's Energy Equation", formula: "E = mc²" },
    { category: "Physics", name: "Ohm's Law", formula: "V = IR" },
    { category: "Physics", name: "Hooke's Law", formula: "F = -kx" },
    { category: "Physics", name: "Wave Speed Equation", formula: "v = fλ" },
    { category: "Physics", name: "Coulomb's Law", formula: "F = k(q1q2/r²)" },
    { category: "Physics", name: "Thermodynamics First Law", formula: "ΔU = Q - W" },
    { category: "Physics", name: "Kinetic Energy", formula: "KE = 1/2 mv²" },
    { category: "Chemistry", name: "Ideal Gas Law", formula: "PV = nRT" },
    { category: "Chemistry", name: "Boyle's Law", formula: "P1V1 = P2V2" },
    { category: "Chemistry", name: "Avogadro's Law", formula: "V/n = k" },
    { category: "Chemistry", name: "Gibbs Free Energy", formula: "ΔG = ΔH - TΔS" },
    { category: "Chemistry", name: "Charles's Law", formula: "V1/T1 = V2/T2" },
    { category: "Chemistry", name: "Raoult's Law", formula: "P_solution = X_solvent * P_solvent" },
    { category: "Chemistry", name: "Henderson-Hasselbalch Equation", formula: "pH = pKa + log([A-]/[HA])" },
    { category: "Chemistry", name: "Nernst Equation", formula: "E = E° - (RT/nF)lnQ" }
];

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
