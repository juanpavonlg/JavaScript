function discoverOriginalPrice(discountedPrice, salePercentage) {
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
} // discoverOriginalPrice()

console.log(discoverOriginalPrice(75, 25));
