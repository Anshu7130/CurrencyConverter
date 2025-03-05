const BASE_URL= "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}"
Const BASE_URL_=https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json // To fetch currencies


const dropdowns = document.querySelectorAll(".dropdown select");
for (let select of dropdowns) {
for (let currCode in countryList) {
    let newOption = document.createElement("option");
		newOption.innerText = currCode;
		newOption.value= currCode;
		select.append(newOption);
}
} 