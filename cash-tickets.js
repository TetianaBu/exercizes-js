const tickets = (people) => {
  const bills = people.map((bill) => Number(bill));
  const cash = {
    25: 0,
    50: 0
  };
  for (let index = 0; index < bills.length; index++) {
    const bill = bills[index];
    switch (bill) {
      case 25:
        cash[25] += 1;
        break;
      case 50:
        if (cash[25] >= 1) {
          cash[50] += 1;
          cash[25] -= 1;
        } else {
          return 'NO';
        }
        break;
      case 100:
        if (cash[50] >= 1 && cash[25] >= 1) {
          cash[50] -= 1;
          cash[25] -= 1;
        } else if (cash[25] >= 3) {
          cash[25] -= 3;
        } else {
          return 'NO';
        }
        break;
    }
  }
  return 'YES';
};