
    
            let cards = document.querySelector(".cards");
            let content = "";
           let categories = [
    {
        img: "https://i.pinimg.com/736x/ba/c2/c9/bac2c99b5bfcd5365f8630ad447b6345.jpg",
        title: "Home Budget"
    },
    {
        img: "https://i.pinimg.com/1200x/68/b8/6d/68b86d8749686e750d7ad2a93a778f02.jpg",
        title: "Groceries Budget"
    },
    {
        img: "https://i.pinimg.com/736x/01/5d/6a/015d6a95b7d85e65c38207789e876041.jpg",
        title: "Travel Budget"
    },
    {
        img: "https://i.pinimg.com/1200x/ab/f5/77/abf577349a77da74229e106e351b3cd0.jpg",
        title: "Food Budget"
    },
    {
        img: "https://i.pinimg.com/736x/4f/a8/0a/4fa80a8d460d5aa943af6e642d04a07b.jpg",
        title: "Education Budget"
    },
    {
        img: "https://i.pinimg.com/736x/a4/d0/31/a4d03169b3f866790526794d9eb5af9c.jpg",
        title: "Savings Budget"
    },
    {
        img: "https://i.pinimg.com/736x/bf/9d/39/bf9d39e2b1f447bf18377c62f406739e.jpg",
        title: "Health Budget"
    },
    {
        img: "https://i.pinimg.com/736x/73/f0/bb/73f0bb829f927f8704e56c525825ed55.jpg",
        title: "Shopping Budget"
    }
];
for(let i = 0; i < categories.length; i++){
    content += `
        <a href="Budget_Buddy_Brain.html"?id=${i + 1}">
            <div class="Boxes">
                <img src="${categories[i].img}" alt="${categories[i].title}">
                <h3>${categories[i].title}</h3>
            </div>
        </a>
    `;
}

cards.innerHTML = content;
       
