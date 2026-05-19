const elForm = document.querySelector(".form"),
  elBtn = document.querySelector(".submit");

const API = `https://fakestoreapi.com/auth/login`;

//addevent

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = elForm["username"].value.trim();
  const password = elForm["password"].value.trim();

  if (!username || !password) {
    Toastify({
      text: "Invalid username or password",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover

      style: {
        background: "linear-gradient(to right, #8c092c, #600c0f)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  } else {
    const user = {
      username: username,
      password: password,
    };

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.token) {
          const { token } = data;
          localStorage.setItem("token", token);

          window.location.href = "../pages/dashboard.html";
        }
      })
      .catch((error) => {
        Toastify({
          text: "Invalid username or password",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover

          style: {
            background: "linear-gradient(to right, #8c092c, #600c0f)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        throw new Error(error);
      });
  }

  console.log(username, password);
});
