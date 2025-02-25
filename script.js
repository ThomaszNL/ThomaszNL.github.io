/* script.js */

const formulas = [
    { category: "Mathematics", name: "Quadratic Formula", formula: "x = (-b ± √(b² - 4ac)) / 2a" },
    { category: "Physics", name: "Newton's Second Law", formula: "F = ma" },
    { category: "Chemistry", name: "Ideal Gas Law", formula: "PV = nRT" },
    { category: "Mathematics", name: "Pythagorean Theorem", formula: "a² + b² = c²" },
    { category: "Physics", name: "Einstein's Energy Equation", formula: "E = mc²" },
    { category: "Mathematics", name: "Euler's Formula", formula: "e^(iπ) + 1 = 0" },
    { category: "Physics", name: "Ohm's Law", formula: "V = IR" },
    { category: "Chemistry", name: "Avogadro's Law", formula: "V/n = k" },
    { category: "Mathematics", name: "Logarithm Change of Base", formula: "log_b(a) = log_c(a) / log_c(b)" },
    { category: "Physics", name: "Wave Speed Equation", formula: "v = fλ" },
    { category: "Chemistry", name: "Boyle's Law", formula: "P1V1 = P2V2" },
    { category: "Mathematics", name: "Derivative of a Function", formula: "d/dx[f(x)] = lim (h→0) [(f(x+h) - f(x))/h]" },
    { category: "Physics", name: "Hooke's Law", formula: "F = -kx" },
    { category: "Chemistry", name: "Charles's Law", formula: "V1/T1 = V2/T2" },
    { category: "Mathematics", name: "Binomial Theorem", formula: "(a+b)^n = Σ[k=0 to n] (nCk) a^(n-k) b^k" },
    { category: "Physics", name: "Coulomb's Law", formula: "F = k(q1q2/r²)" },
    { category: "Chemistry", name: "Gibbs Free Energy", formula: "ΔG = ΔH - TΔS" },
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
