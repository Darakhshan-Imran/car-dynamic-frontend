import { Transaction } from './transactionitems';
import { TransactionItem } from './transactionitems';
import carImage1 from "../../../public/popular-cars/carImage1.png"
import carImage2 from "../../../public/popular-cars/carImage2.png"
import carImage3 from "../../../public/popular-cars/carImage3.png"
import carImage4 from "../../../public/popular-cars/carImage4.png"

const transactions: Transaction[] = [
  {
    id: '1',
    image: carImage1,
    name: 'Nissan GT - R',
    category: 'Sport Car',
    date: '20 July',
    price: 80.00,
  },
  {
    id: '2',
    image: carImage2,
    name: 'Koegnigsegg',
    category: 'Sport Car',
    date: '19 July',
    price: 99.00,
  },
  {
    id: '3',
    image: carImage3,
    name: 'Rolls - Royce',
    category: 'Sport Car',
    date: '18 July',
    price: 96.00,
  },
  {
    id: '4',
    image: carImage4,
    name: 'CR - V',
    category: 'SUV',
    date: '17 July',
    price: 80.00,
  },
]

export default function RecentTransactions() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Recent Transaction</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          View All
        </a>
      </div>
      <div className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  )
}

