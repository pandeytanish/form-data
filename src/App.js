import React from 'react';

export default function App() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target); 

    fetch(
      "https://script.google.com/macros/s/AKfycbzBAB4oGZIqSCkT5WBieBJ66jAhSokKP8RnElXC5_X1Ehc6uG-P0za9NuzFmjSjMnpt/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
    <h1> Contact us</h1>
        <form  onSubmit={handleSubmit}>
          <input placeholder="Enter Your Name" name="Name" type="text" required />
          <input placeholder="Enter Your Email" name="Email" type="email" required />
          <textarea placeholder="Enter your Message" name="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
        </>
  );
}
