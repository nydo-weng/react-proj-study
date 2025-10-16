import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
  // return <h1 style={style}>Fast React Pizza Co.</h1>;

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* {numPizzas > 0 && (
        <ul className="pizzas">
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.name} pizzaObj={pizza} />;
          })}
          </ul>
          )} */}

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven,
            all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza key={pizza.name} pizzaObj={pizza} />;
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Plase com back later ;)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert('We are currently open!');
  // } else {
  //   alert("Sorry we're closed!");
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour - 1}:59.
        </p>
      )}
    </footer>
  );

  // if (!isOpen) {
  //   return (
  //     <footer className="footer">
  //       <p>
  //         We're happy to welcome you between {openHour}:00 and {closeHour - 1}:59.
  //       </p>
  //     </footer>
  //   );
  // } else {
  //   return (
  //     <footer className="footer">
  //       <div className="order">
  //         <p>We're open until {closeHour - 1}:59. Come visit us or order online</p>
  //         <button className="btn">Order</button>
  //       </div>
  //     </footer>
  //   );
  // }

  // return React.createElement('footer', null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour - 1}:59. Come visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode 会在开发模式下, 渲染所有组件两次, 以便发现 bug, 并且查看是否有过时的 API 调用
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
