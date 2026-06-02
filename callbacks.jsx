//how does callback help solve async tasks
function fetchData() {
  setTimeout(() => {
    return "Hello";
  }, 1000);
}

const result = fetchData();

console.log(result);

//output is undefined since result first later actual result and disappeared (we didnt have await then)
//now callbacks helps

function fetchData(callback) {
  setTimeout(() => {
    callback("Hello");
  }, 1000);
}
//when data recieved now we dont return data but "When data becomes available, call this function and give it the data"

//Now after timer ends,-> callback("hello") becomes
(data) => {
  console.log(data);
}

//why promises invented ?
getUser(id, (user) => {
  getOrders(user.id, (orders) => {
    getPayment(orders[0], (payment) => {
      console.log(payment);
    });
  });
});
//messy code that why