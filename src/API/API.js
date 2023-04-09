import React, { useState } from "react";

const API = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_API_KEY_HERE",
      },
      body: JSON.stringify({
        prompt: question,
        max_tokens: 100,
        temperature: 0.5,
        n: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => setResponse(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>
        <button type="submit">Ask</button>
      </form>

      {response && response.choices[0].text}
    </div>
  );
};
