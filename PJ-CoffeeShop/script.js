// Navbar
const navbarBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

navbarBurger.addEventListener("click", function toggleMenu() {
  navbarBurger.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
});
//Filtter product
const filterbutton = document.querySelectorAll(".filter-button");
const productcolumns = document.querySelectorAll(".product-column");

function filterAnimation(selectedCategory, action, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      productcolumns.forEach((column) => {
        if (action === "fade-in") {
          column.classList.add("fade-out");
        } else if (action === "display") {
          const productCategory = column.dataset.category;
          if (
            productCategory === selectedCategory ||
            selectedCategory === "all"
          ) {
            column.classList.remove("is-hidden");
          } else {
            column.classList.add("is-hidden");
          }
        } else if (action === "fade-out") {
          column.classList.remove("fade-out");
        }
      });
      resolve();
    }, delay);
  });
}

async function filterProduct(event) {
  // เปลีี่ยนสีปุ่ม Active
  const selectedButton = event.target;
  filterbutton.forEach((button) => {
    button.classList.remove("is-dark");
  });
  selectedButton.classList.add("is-dark");

  // ดึงค่าจาก category
  const selectedCategory = selectedButton.dataset.category;
  console.log(selectedCategory);

  // ซ่อนแสดงสินค้าตาม category
  // productcolumns.forEach((column) => {
  //   const productCategory = column.dataset.category;
  //   if (productCategory === selectedCategory || selectedCategory === "all") {
  //     column.classList.remove("is-hidden");
  //   } else {
  //     column.classList.add("is-hidden");
  //   }
  // });

  // -Fade out-
  //   productcolumns.forEach((column) => {
  //     column.classList.add("fade-out");
  //   });
  //-Display-

  //   setTimeout(() => {
  //     productcolumns.forEach((column) => {
  //       const productCategory = column.dataset.category;
  //       if (productCategory === selectedCategory || selectedCategory === "all") {
  //         column.classList.remove("is-hidden");
  //       } else {
  //         column.classList.add("is-hidden");
  //       }
  //     });
  //   }, 500);
  // -Fade in-
  //   setTimeout(() => {
  //     productcolumns.forEach((column) => {
  //       column.classList.remove("fade-out");
  //     });
  //   }, 700);
  // -Animation-
  await filterAnimation(selectedCategory, "fade-in", 0);
  await filterAnimation(selectedCategory, "display", 500);
  await filterAnimation(selectedCategory, "fade-out", 200);
}

filterbutton.forEach((button) => {
  button.addEventListener("click", filterProduct);
});
