//types of promises methods:

// Promise.all(): executes fast. Doesnt wait for the promises to settle. If one fail, rejects entirely
const getUser = () =>
  Promise.resolve("User");

const getPosts = () =>
  Promise.resolve("Posts");

const getNotifications = () =>
  Promise.reject("Notification Service Down");

try {
  const result = await Promise.all([
    getUser(),
    getPosts(),
    getNotifications()
  ]);

  console.log(result);

} catch (err) {
  console.log("Error:", err);
}
//output: Error: Notification failure (we get failure although some tasks suceeded)


// Promise.allSettled(): Waits for all the promises to settle. If one fail, doesnt fail entirely
//useful in palces such as dashboard, where if notif fails other features stil show where partial success is acceptable
const result = await Promise.allSettled([
  getUser(),
  getPosts(),
  getNotifications()
]);

console.log(result);
//output: even if notifications failed, we get the results of user, psts etc

//Doesnt reject rather send status of each task and doesnt reject all


//Promise.race(): returns whichever settles first 
Promise.race([
  new Promise(resolve =>
    setTimeout(() => resolve("A"), 1000)
  ),

  new Promise(resolve =>
    setTimeout(() => resolve("B"), 500)
  )
]);
//Output: B

//Promise.any: Returns first successful promise.Ignores failures.
Promise.any([
  Promise.reject("A"),
  Promise.resolve("B"),
  Promise.resolve("C")
]);
//Output:B
//If all fail, then aggregate error


//Promise.finally: Runs regardless of success/failure.
try {
  setLoading(true);

  await fetchData();

} finally {
  setLoading(false);// to perform after promise (irrespective of success or failure)
}

//Differnec e between promise.race and primise.any