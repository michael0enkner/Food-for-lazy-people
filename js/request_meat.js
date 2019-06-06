const app = document.getElementById('root');
console.log(app);


const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/meat', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(food => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = food.Title;

      const p = document.createElement('p');
      p.textContent = `${food.Schwierigkeit}`;

      const p1 = document.createElement('p');
      p1.textContent = `${food.Bewertung}`;

      const p2 = document.createElement('p');
      p2.textContent = `${food.Zutaten}`;

      const p3 = document.createElement('p');
      p3.textContent = `${food.Dauer}`;

      const p4 = document.createElement('p');
      p4.textContent = `${food.Beschreibung}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
