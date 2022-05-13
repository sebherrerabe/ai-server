fetch("http://api.ai-server.becode.org/api/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    username: "test-user",
    password: "test",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
