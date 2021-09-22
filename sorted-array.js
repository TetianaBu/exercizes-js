const data = [
  {
    ratingReviews: '239',
    price: {
      old: '900',
      new: '600'
    },
    name: 'Xiaomi 8'
  },
  {
    ratingReviews: '2 390',
    price: {
      old: '4 000',
      new: '3 600'
    },
    name: 'Apple 12'
  },
  {
    ratingReviews: '50',
    price: '1 500',
    name: 'Pixel 2'
  },
  {
    ratingReviews: '100',
    price: '2 000',
    name: 'Pixel 3'
  }
];

const sortedByRating = () => {
  let sortedG = [...data].sort(function (a, b) {
    let aNum = Number(a.ratingReviews.replace(/[^0-9\.]+/g, ''));
    let bNum = Number(b.ratingReviews.replace(/[^0-9\.]+/g, ''));
    return bNum - aNum;
  });
  return sortedG;
};

const sortedByPrice = () => {
  let sortedG = [...data].sort(function (a, b) {
    let aNum = Number((a.price.new || a.price).replace(/[^0-9\.]+/g, ''));
    let bNum = Number((b.price.new || b.price).replace(/[^0-9\.]+/g, ''));
    return bNum - aNum;
  });
  return sortedG;
};
