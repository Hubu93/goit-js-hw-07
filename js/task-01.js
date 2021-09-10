 const categoriess = document.querySelectorAll("#categories .item");
 console.log(categoriess);
console.log(`В списке ${categoriess.length}  категории`);

categoriess.forEach(item => {
    const h2 = item.querySelector("h2");

    const h2Text = h2.innerText;
    const li = item.querySelectorAll("li");

    console.log(`${h2Text}: ${li.length}`);
});