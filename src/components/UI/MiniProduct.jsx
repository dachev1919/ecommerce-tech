import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import '../../styles/components/UI/MiniProduct.css';

function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + "..." : str;
}

const MiniProduct = ({ product }) => {
    const {
        id,
        image,
        title,
        price,
        rating,
    } = product;

    return (
        <div className="mini-product d-flex">
            <div className="mini-product__image">
                <Link to={ `/ecommerce-tech/product/${ id }` }><img src={ image } alt=""/></Link>
            </div>
            <div className="mini-product__content">
                <Link to={ `/ecommerce-tech/product/${ id }` }><h5
                    className="mb-1 mini-product__title">{ truncate(title, 25) }</h5></Link>
                <ReactStars
                    count={ 5 }
                    size={ 16 }
                    isHalf={ true }
                    value={ rating }
                    edit={ false }
                    activeColor="#ffd700"
                />
                <p className="mini-product__price mt-1 mb-0">${ price }</p>
            </div>
        </div>
    );
};

export default MiniProduct;