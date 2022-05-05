import './Header.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Header() {
  return (
    <div className='Header'>
      <Router>
        <div className='logo'>
          <a href='/'>
            <img
              src='/images/logo.png'
              width='284.9px'
              height='81.81px'
              alt=''
            />
          </a>
        </div>
        <nav className='menu'>
          <ul>
            <li>
              {' '}
              <Link to='/products'>Главная</Link>
            </li>
            <li>
              <Link to='/anim'>Цена питомцев</Link>
            </li>
            <li>
              <Link to='/services'>Для связи</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/anim' element={<Anim />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

function Products() {
  return (
    <div className='Pr'>
      <h2> .</h2>
    </div>
  );
}

function Anim() {
  const anim = [
    { id: 1, name: 'Боб', price: 2000 },
    { id: 2, name: 'Мэри', price: 2000 },
    { id: 3, name: 'Альфред', price: 2000 },
    { id: 4, name: 'Глори', price: 2000 },
    { id: 5, name: 'Маша', price: 2000 },
    { id: 6, name: 'Марк', price: 2000 },
  ];

  let res = anim.map(function (item) {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    );
  });

  return (
    <table
      style={{
        color: 'white',
        position: 'absolute',
        padding: '630px',
        bottom: '40px',
      }}
    >
      <thead>
        <tr>
          <td>Имя</td>
          <td>Стоимость</td>
        </tr>
      </thead>
      <tbody>{res}</tbody>
    </table>
  );
}
function Services() {
  return (
    <div className='Se'>
      <div className='Contact'>
        <header>Contact</header>
        <input
          className='name-txt'
          type='text'
          placeholder='ENTER YOUR NAME'
        ></input>
        <input
          className='mail-txt'
          type='text'
          placeholder='ENTER YOUR MAIL'
        ></input>
        <textarea
          className='area-txt'
          type='text'
          placeholder='Write'
        ></textarea>
        <button className='Button'>CONTACT</button>
      </div>
    </div>
  );
}

export default Header;
