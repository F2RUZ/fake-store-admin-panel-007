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

function ShowProducts(data) {
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
