const findWay = (tickets) => {
  const result = [];
  let j = 0;

  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];
    const nextTicket = tickets[j + 1];

    if (ticket.to === nextTicket?.from) {
      result.push(ticket);
      return;
    }

    if (ticket.from === nextTicket?.to) {
      result.push(nextTicket);
      j++;
    }

    // if (i === )
  }

  console.log(result);
};

const tickets = [
  { from: 'London', to: 'Moscow' },
  { from: 'NY', to: 'London' },
  { from: 'Moscow', to: 'SPb' },
];
// вывод
route = [
  { from: 'NY', to: 'London' },
  { from: 'London', to: 'Moscow' },
  { from: 'Moscow', to: 'SPb' },
];

findWay(tickets);
