fetch("data.json")  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }).then(data => {
    const summarySection = document.querySelector("#summary");

    data.forEach(item => {
        const category = item.category;
        const score = item.score;
        const icon = item.icon;

        const div = document.createElement('div');
        div.classList.add('summary-item', 'bg-primary-subtle', 'rounded', 'm-3', 'd-flex', 'justify-content-between', 'gap-5', 'p-2');
    
        div.innerHTML = `
            <div class="text d-flex align-items-center justify-content-between">
            <img src="${icon}" alt="${category}">
            <span class="${category.toLowerCase()} text-danger">${category}</span>
          </div>
          <span>${score} <span class="number" style="color: grey;">/100</span></span>
        `;
        summarySection.appendChild(div);
    });
}).catch(error => {
    console.log("Couldn't fetch data", error);
});