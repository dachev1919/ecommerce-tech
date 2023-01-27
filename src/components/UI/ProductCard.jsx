import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import "../../styles/components/UI/ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/cart/cartSlice";
import { toast } from "react-toastify";
import { wishlistActions } from "../../store/wishlist/wishlistSlice";
import { IoGitCompareOutline, IoGitCompareSharp } from "react-icons/io5";
import { compareActions } from "../../store/compare/compareSlice";

function truncate(str, n) {
    return (str.length > n) ? str.slice(0, n - 1) + "..." : str;
}

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const inWishlist = useSelector(state => state.wishlist.wishlistItems.find(item => item.id === product.id));
    const inCompare = useSelector(state => state.compare.compareItems.find(item => item.id === product.id));

    const {
        id,
        image,
        title,
        brand,
        price,
        rating,
        secondImage,
    } = product;

    const addToCartHandler = () => {
        dispatch(cartAction.addItem(product));

        toast.success('product added successfully');
    }

    const addToWishlist = () => {
        dispatch(wishlistActions.addItem(product));
    }

    const addToCompare = () => {
        dispatch(compareActions.addItem(product));
    }

    return (
        <div className="product-card card-wrapper without-margin rounded-3 position-relative mb-4">
            <div className="product-card__image mb-1">
                <Link to={ `/ecommerce-tech/store/${ id }` }>
                    <img src={ image } alt="product"/>
                    <img src={ secondImage } alt="product"/>
                </Link>
            </div>
            <div className="product-card__details">
                <h6 className="product-card__brand mb-1">{ brand }</h6>
                <Link to={ `/ecommerce-tech/store/${ id }` }><h5
                    className="mb-1 product-card__title">{ truncate(title, 25) }</h5></Link>
                <ReactStars
                    count={ 5 }
                    size={ 16 }
                    isHalf={ true }
                    value={ rating }
                    edit={ false }
                    activeColor="#ffd700"
                />
                <p className="product-card__price mb-1 mt-1">${ price }</p>
            </div>
            <div className="product-card__action-bar position-absolute">
                <div className="d-flex flex-column gap-1">
                    <div className='product-card__action-button' onClick={() => addToWishlist()}><img style={{ width: '16px' }} src={ `${inWishlist ? 'images/wish-black.svg' : 'images/wish.svg'}` } alt="wish"/></div>
                    <div className='product-card__action-button' onClick={() => addToCartHandler()}><img src="images/add-cart.svg" alt="add"/></div>
                    <Link className='product-card__action-button' to={`/ecommerce-tech/store/${ id }`}><img src="images/view.svg" alt="view"/></Link>
                    <div className='product-card__action-button' onClick={() => addToCompare()}>
                        {
                            inCompare ? <IoGitCompareSharp /> : <IoGitCompareOutline />
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;