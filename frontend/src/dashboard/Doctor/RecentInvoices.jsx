import React from "react";

const invoices = [
  { name: "Adrian Marshall", date: "10 Nov 2024", amount: "₹ 1000" },
  { name: "Pratik Sharma", date: "18 Oct 2024", amount: "₹ 1800" },
  { name: "Gaurav Gupta", date: "24 Oct 2024", amount: "₹ 750" },
];

const RecentInvoices = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-3">Recent Invoices</h3>
      <ul className="divide-y divide-gray-200">
        {invoices.map((invoice, index) => (
          <li key={index} className="py-2 flex justify-between">
            <div>
              <p className="font-semibold">{invoice.name}</p>
              <p className="text-gray-500 text-sm">{invoice.date}</p>
            </div>
            <p className="text-gray-800 font-bold">{invoice.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentInvoices;
