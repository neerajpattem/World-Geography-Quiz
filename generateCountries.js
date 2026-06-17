const fs = require("fs");

const rawData = fs.readFileSync(
    "./data/countries.json",
    "utf8"
);

const countriesData = JSON.parse(rawData);

const countries = countriesData
    .filter(country => country.unMember)
    .map(country => ({
        country: country.name.common,
        code: country.cca2.toLowerCase(),
        capital: country.capital
            ? country.capital[0]
            : "N/A",
        continent:
        country.subregion === "North America"
        ? "North America"
        : country.subregion === "Central America"
        ? "North America"
        : country.subregion === "Caribbean"
        ? "North America"
        : country.subregion === "South America"
        ? "South America"
        : country.region
    }));

const output =
`const countries = ${JSON.stringify(
    countries,
    null,
    4
)};`;

fs.writeFileSync(
    "./data/countries.js",
    output
);

console.log(
    `Generated ${countries.length} countries`
);