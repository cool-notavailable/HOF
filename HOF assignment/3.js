const items = [
  {
    name: "Phone",
    priceUSD: 499,
  },
  {
    name: "Laptop",
    priceUSD: 1999,
  },
  {
    name: "Accessories",
    priceUSD: 199,
  },
];

const exchangeRate = 80;

function convertToINR(priceInUSD) {
  return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
  ...item,
  priceINR: convertToINR(item.priceUSD),
}));

console.log(itemsInINR);
