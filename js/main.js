async function getPizza(){
    const response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const data=await response.json();
 
    const pizza = data.recipes;
    const result=pizza.map(function(ele){
        return `
        <div class="pizza">
          <img src='${ele.image_url}' alt='this is photo pizza'>
              <div class="pizza-info">
                    <div class="rating">
                        <span>${ele.social_rank}</span>
                        <span>${ele.recipe_id}</span>
                    </div>
                    <p class="author">${ele.publisher}</p>
                </div>
       <div class="pizza-detail">
                    <p class="title">${ele.title}</p>
                    <p>${ele.source_url}</p>
                </div>
                 <div class="btn">
                     Order Now
                </div>
        </div>
        `;
    }).join('');
  
    document.querySelector(".food .continer .pizza-wrapper").innerHTML = result;
}
getPizza();