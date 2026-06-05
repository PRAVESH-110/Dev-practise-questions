//Aggregation pipelines (use aggregation to solve)

orders
{
  _id,
  userId,
  category,
  productName,
  amount,
  status,
  createdAt
}
//1. Count Total Orders
db.orders.aggregate([
    {
        $count:"totalorders"
    }
])

// 2. Count Orders By Status
db.orders.aggregate([
    {
        $group:{
            _id: "$status",
            count: { $sum: 1 }
        }
    }
])