import './bottle.css'

const Bottle = ({bottle,handleCart}) => {
    const {img,name,price,stock} = bottle;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <h3>Remaining: {stock}</h3>
            <button onClick={()=> handleCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;