import {withvat, format} from './pricing.js';

import {orders} from './orders.js';

const ordersWithTotals = orders.map(order => ({
  ...order,
  total: order.items.reduce((sum, { price, qty }) => {
    return sum + price * qty;
  }, 0)
}));

const largeOrders = ordersWithTotals.filter(
    order => order.total > 500
);
const grandTotal = ordersWithTotals.reduce(
  (sum, { total }) => sum + total,
  0
);

console.log ('Orders with totals:', ordersWithTotals);
console.log ( 'large  orders :' , largeOrders );
console.log ( ' grand total : ', grandTotal);
