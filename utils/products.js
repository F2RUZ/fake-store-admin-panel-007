const API = `https://fakestoreapi.com/products`;

const tBody = document.querySelector("tbody");

const getProducts = (url) => {
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      ShowProducts(data);
    })
    .catch((error) => {
      Toastify({
        text: "Invalid api Call",
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
};

getProducts(API);

function ShowProducts(data, newData) {
  console.log(newData);

  data.forEach((element) => {
    const { description, title, category, id, image, price } = element;
    tBody.innerHTML += `
        <tr>
              <td>${id}</td>
              <td>
                <img
                  width="60"
                  height="60"
                  src=${image}
                  alt=${description}
                />
              </td>
              <td>${title}</td>
              <td>Price : ${price}$</td>
              <td>Category : ${category}</td>
              <td>
  ${description}
              </td>
              <td>
                <button>view</button>
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
    
    `;
  });
}

//addProducts

const elForm = document.querySelector(".form");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const image = elForm["image"].value.trim();
  const title = elForm["title"].value.trim();
  const price = elForm["price"].value.trim();
  const category = elForm["category"].value.trim();
  const description = elForm["tavsif"].value.trim();

  const newPro = {
    image: image,
    title: title,
    price: price,
    category: category,
    description: description,
  };

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPro),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      Toastify({
        text: "Successful added products",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover

        style: {
          background: "linear-gradient(to right, #188c09, #58a514)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    });
});
