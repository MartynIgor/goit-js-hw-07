const categoriesUl = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${categoriesUl.length}`);

categoriesUl.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const categLength = category.querySelectorAll('ul li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${categLength}`);
});



