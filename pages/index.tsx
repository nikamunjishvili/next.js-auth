import { useRef, useState } from "react";
import styles from "./styles/auth.module.css";

function Home() {
  const EmailInputRef = useRef<any>();
  const FeedBackRef = useRef<any>();

  function handleSubmit(event: any) {
    event.preventDefault();

    const enteredEmail = EmailInputRef.current.value;
    const enteredFeedback = FeedBackRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Log In</h1>

      <form className={styles.formContaiener} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            ref={EmailInputRef}
          />
        </div>
        <div>
          <label htmlFor="feedback">Your Password</label>
          <input
            className={styles.input}
            type="password"
            id="feedback"
            ref={FeedBackRef}
          />
        </div>
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
export default Home;
