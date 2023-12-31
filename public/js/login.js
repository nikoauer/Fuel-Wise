// Login function
const loginFormHandler = async (event) => {
  event.preventDefault();

  //change these query selectors respective to whatever is in html file
  const email = document.querySelector("#loginemail").value.trim();
  const password = document.querySelector("#loginpassword").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const reply = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    //   if the response is 200 then send user to /profile page
    if (reply.ok) {
      document.location.replace("/");
      console.log("successfully sent to the backend")
    } else {
      alert(reply.statusText);
    }
  }
};

//query selector needed to be added
document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
