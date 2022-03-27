import './RandomProduct.css';

//this component is for showing random product
const RandomProduct = ({ productName, productImg, price }) => {
    return (
        <div className='random-selection'>
            <img src={productImg} alt="" />
            <p>{productName}</p>
            <p>{price}</p>
        </div>
    );
};

export default RandomProduct;