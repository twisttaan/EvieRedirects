import React, { useState } from "react";
import axios from "axios";

function OnTheListSubscribe() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function onChangeEmail(value: React.SetStateAction<string>) {
    setEmail(value);
  }

  function onSubmitSubscribe(e: { preventDefault: () => void }) {
    e.preventDefault();
    axios
      .get("https://onwaitlist.co/in/7016bc75a6cb", {
        params: {
          email: email,
        },
      })
      .then((result) => {
        const data = result.data;
        console.log(data);
        // use data elsewhere if you need to
        setSubscribed(true);
      });
  }

  return !subscribed ? (
    <form onSubmit={onSubmitSubscribe}>
      <input
        className="bg-purple-900 text-white p-2 rounded-lg"
        type="email"
        name="email"
        onChange={(e) => onChangeEmail(e.target.value)}
        value={email}
      />
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        type="submit"
      >
        Apply for Private Beta
      </button>
    </form>
  ) : (
    <p>Thank you for joining the waitlist!</p>
  );
}

export default OnTheListSubscribe;
