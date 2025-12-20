import express from "express";

const app = express();

// app.get("/", async (req, res) => {
//   res.send("Server redy");
// });

app.get("/api/jokes", async (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why Math Book Is Sad",
      content: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 2,
      title: "Computer Cold",
      content:
        "Why did the computer catch a cold? Because it left its Windows open.",
    },
    {
      id: 3,
      title: "Programmer Shower",
      content:
        "Why do programmers take showers? Because they keep getting stuck in loops.",
    },
    {
      id: 4,
      title: "Debugging Joke",
      content:
        "Debugging is like being the detective in a crime movie where you are also the murderer.",
    },
    {
      id: 5,
      title: "Keyboard Problem",
      content:
        "Why did the keyboard break up with the computer? It felt it wasn’t being listened to.",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
