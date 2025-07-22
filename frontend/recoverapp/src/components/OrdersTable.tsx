// import React from 'react';

// type OrderStatus = 'completed' | 'pending' | 'process';

// interface Order {
//   user:   string;
//   date:   string;
//   status: OrderStatus;
// }

// const orders: Order[] = [
//   { user: 'John Doe',       date: '01-10-2021', status: 'completed' },
//   { user: 'Jane Smith',     date: '02-11-2021', status: 'pending'   },
//   { user: 'Alice Johnson',  date: '03-12-2021', status: 'process'   },
//   { user: 'Bob Brown',      date: '04-13-2021', status: 'pending'   },
//   { user: 'Charlie Davis',  date: '05-14-2021', status: 'completed' },
// ];

// const OrdersTable: React.FC = () => (
//   <>
//     <div className="head">
//       <h3>Recent Orders</h3>
//       <i className="bx bx-search" />
//       <i className="bx bx-filter" />
//     </div>
//     <table>
//       <thead>
//         <tr>
//           <th>User</th>
//           <th>Date Order</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {orders.map((o, i) => (
//           <tr key={i}>
//             <td>
//               <img src="/img/people.png" alt={o.user} />
//               <p>{o.user}</p>
//             </td>
//             <td>{o.date}</td>
//             <td>
//               <span className={`status ${o.status}`}>
//                 {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
//               </span>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </>
// );

// export default OrdersTable;
