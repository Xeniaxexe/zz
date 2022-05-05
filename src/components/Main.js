import './Main.css';
function Main() {
  return (
    <div className='Main'>
      <div className='sabaki'>
        <a href='/'>
          <img src='/images/sabaki.png' width='857px' height='756px' alt='' />
        </a>
      </div>

      <h1 className='nadp'>Твой новый друг с доставкой на дом </h1>
      <h1 className='nadp1'>
        онлайн зоо-магазин с доставкой,идеальное решение,когда лень выходить из
        дома{' '}
      </h1>
      <div className='b'>
        <h1 className='nadp2'>Собаки </h1>
        <a href='/'>
          <img src='/images/Picture1.png' width='218px' height='180px' alt='' />
        </a>
      </div>
      <div className='c'>
        <h1 className='nadp3'>Попугаи</h1>
        <a href='/'>
          <img src='/images/Picture2.png' width='218px' height='180px' alt='' />
        </a>
      </div>
    </div>
  );
}

export default Main;
