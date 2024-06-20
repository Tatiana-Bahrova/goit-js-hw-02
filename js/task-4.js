function getShippingCost(country) {
  switch (country) {
    case 'China': {
      let price = 100;
      return `Shipping to ${country} will cost ${price} credits`;
    }
    case 'Chile': {
      let price = 250;
      return `Shipping to ${country} will cost ${price} credits`;
    }
    case 'Australia': {
      let price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
    }
    case 'Jamaica': {
      let price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
    }
    default: {
      return 'Sorry, there is no delivery to your country';
    }
  }
}
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
