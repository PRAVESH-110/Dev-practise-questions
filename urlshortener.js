//“Design a URL shortener like bit.ly.”

//create a base64 encoder (a short code) for each long url
database id = 12345
shortCode = base62(12345)

//db query to find the url 
findOne({ shortCode: "abc123" })

//redirect user to original url after found
res.redirect(originalUrl)


{
  shortCode: "abc123",
  originalUrl: "https://example.com/blog/post",
  createdAt: Date
}

//how to prevent duplicate urls from being created ?
while (true) {
  const code = generateRandomCode()

  const exists = await Url.findOne({ shortCode: code })

  if (!exists) {
    break
  }
}

// generate a unique index for each url
