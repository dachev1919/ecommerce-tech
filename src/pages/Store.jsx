import Breadcrumb from "../components/Breadcrumb";
import Meta from "../components/Meta";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/pages/Store.css";
import { useState } from "react";
import { PRODUCTS } from "../assets/data/products";
import ProductCard from "../components/UI/ProductCard";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import MiniProduct from "../components/UI/MiniProduct";

const COLORS = [
    {
        id: 10001,
        color: "#000",
    },
    {
        id: 10002,
        color: "#06fcf6",
    },
    {
        id: 10003,
        color: "#0e2832",
    },
    {
        id: 10004,
        color: "#1d1e19",
    },
    {
        id: 10005,
        color: "#2c3365",
    },
    {
        id: 10006,
        color: "#2d2e2b",
    },
    {
        id: 10007,
        color: "#3a3634",
    },
    {
        id: 10008,
        color: "#381a15",
    },
    {
        id: 10009,
        color: "#484a4c",
    },
    {
        id: 10010,
        color: "#407ad8",
    },
    {
        id: 10011,
        color: "#5b5d63",
    },
    {
        id: 10012,
        color: "#656769",
    },
    {
        id: 10013,
        color: "#656668",
    },
    {
        id: 10014,
        color: "#5d9ada",
    },
    {
        id: 10015,
        color: "#74767a",
    },
    {
        id: 10016,
        color: "#86313c",
    },
    {
        id: 10017,
        color: "#818384",
    },
    {
        id: 10018,
        color: "#874c28",
    },
    {
        id: 10019,
        color: "#939096",
    },
    {
        id: 10020,
        color: "#9d9f9f",
    },
    {
        id: 10021,
        color: "#a06d6a",
    },
    {
        id: 10022,
        color: "#90d1c0",
    },
    {
        id: 10023,
        color: "#b0595f",
    },
    {
        id: 10024,
        color: "#a1dee4",
    },
    {
        id: 10025,
        color: "#a7aaa7",
    },
    {
        id: 10026,
        color: "#b4cccf",
    },
    {
        id: 10027,
        color: "#b7babb",
    },
    {
        id: 10028,
        color: "#c8c4ce",
    },
    {
        id: 10029,
        color: "#c6bcb6",
    },
    {
        id: 10030,
        color: "#e31f33",
    },
    {
        id: 10031,
        color: "#d7ccc9",
    },
    {
        id: 10032,
        color: "#dbbfbf",
    },
    {
        id: 10033,
        color: "#ee3a41",
    },
    {
        id: 10034,
        color: "#e8a4a4",
    },
    {
        id: 10035,
        color: "#e1dbd8",
    },
    {
        id: 10036,
        color: "#eccec5",
    },
    {
        id: 10037,
        color: "#f1f1f1",
    },
    {
        id: 10038,
        color: "#f5c9c9",
    },
    {
        id: 10039,
        color: "#fe8f7b",
    },
    {
        id: 10040,
        color: "#ff7158",
    },
];

const Store = () => {
    const [grid, setGrid] = useState("grid-1");
    const [products, setProducts] = useState(PRODUCTS);

    const categoriesFilterHandler = category => {
        if (category === "all") {
            setProducts(PRODUCTS);
        } else {
            const newProductList = PRODUCTS.filter(product => product.category === category);
            setProducts(newProductList);
        }
    };

    const sortByHandler = filter => {
        switch (filter) {
            case "high": {
                const highProducts = PRODUCTS.filter(product => product.rating > 4.5);
                setProducts(highProducts);
                break;
            }
            case "mid": {
                const midProducts = PRODUCTS.filter(product => product.rating > 3.5 && product.rating <= 4.5);
                setProducts(midProducts);
                break;
            }
            case "low": {
                const lowProducts = PRODUCTS.filter(product => product.rating <= 3.5);
                setProducts(lowProducts);
                break;
            }
            default: {
                setProducts(PRODUCTS);
                break;
            }
        }
    };

    return (
        <>
            <Meta title="Our Store" canonical="store/"/>
            <Breadcrumb title="Our Store"/>
            <div className="store pb-5">
                <Container fluid="xxl">
                    <Row>
                        <Col className="col-3">
                            <div className="category-filter card-wrapper mb-4">
                                <h3 className="filter-title">Shop By Categories</h3>
                                <ul>
                                    <li className="mb-2" onClick={ () => categoriesFilterHandler("all") }>All</li>
                                    <li className="mb-2" onClick={ () => categoriesFilterHandler("watch") }>Watch</li>
                                    <li className="mb-2" onClick={ () => categoriesFilterHandler("tv") }>TV</li>
                                    <li className="mb-2" onClick={ () => categoriesFilterHandler("camera") }>Camera</li>
                                    <li className="m-0" onClick={ () => categoriesFilterHandler("laptop") }>Laptop</li>
                                </ul>
                            </div>

                            <div className="card-wrapper mb-4">
                                <h3 className="filter-title">Filter By</h3>

                                <div className="filter-availability mb-4">
                                    <h4 className="filter-subtitle">Availability</h4>
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="stock"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="stock"
                                        >
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className="form-check form-check-disable">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="out-stock"
                                            disabled
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="out-stock"
                                        >
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>

                                <div className="filter-price mb-4">
                                    <h4 className="filter-subtitle">Price</h4>

                                    <div className="filter-price__items d-flex align-items-center">
                                        <div className="filter-price__item d-flex align-items-center">
                                            $
                                            <FloatingLabel label="From" className="d-flex align-items-center">
                                                <Form.Control type="number" step={ 50 } min={ 0 } placeholder="From"/>
                                            </FloatingLabel>
                                        </div>

                                        <div className="filter-price__item d-flex align-items-center">
                                            $
                                            <FloatingLabel label="To" className="d-flex align-items-center">
                                                <Form.Control type="number" step={ 50 } min={ 0 } placeholder="To"/>
                                            </FloatingLabel>
                                        </div>
                                    </div>
                                </div>

                                <div className="filter-color">
                                    <h4 className="filter-subtitle">Color</h4>
                                    <ul className="filter-colors d-flex flex-wrap">
                                        {
                                            COLORS.map(({ id, color }) => (
                                                <li key={ id } style={ { background: color } }/>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="filter-color">
                                    <h4 className="filter-subtitle">Size</h4>

                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="size-s"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="size-s"
                                        >
                                            S (2)
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 form-check-disable">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="size-m"
                                            disabled
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="size-m"
                                        >
                                            M (0)
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 form-check-disable">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="size-l"
                                            disabled
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="size-l"
                                        >
                                            L (0)
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 form-check-disable">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="size-xl"
                                            disabled
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="size-xl"
                                        >
                                            XL (0)
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 form-check-disable">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="size-xxl"
                                            disabled
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="size-xxl"
                                        >
                                            XXL (0)
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="card-wrapper mb-4">
                                <h3 className="filter-title">Product Tags</h3>

                                <div className="filter-tags">
                                    <span className="badge">
                                        #Headphone
                                    </span>
                                    <span className="badge">
                                        #Laptop
                                    </span>
                                    <span className="badge">
                                        #Mobile
                                    </span>
                                    <span className="badge">
                                        #Oppo
                                    </span>
                                    <span className="badge">
                                        #Speaker
                                    </span>
                                    <span className="badge">
                                        #Tablet
                                    </span>
                                    <span className="badge">
                                        #iPhone
                                    </span>
                                    <span className="badge">
                                        #Wire
                                    </span>
                                </div>
                            </div>

                            <div className="card-wrapper">
                                <h3 className="filter-title">Random Product</h3>

                                {
                                    PRODUCTS.slice(3, 5).map((product, index) => (
                                        <MiniProduct key={ Number(product.id) + index * 5312 } product={ product }/>
                                    ))
                                }
                            </div>
                        </Col>
                        <Col className="col-9">
                            <div className="category-header card-wrapper mb-4 d-flex justify-content-between">
                                <div className="category-header__left">
                                    <div className="category-header__sort-by d-flex align-items-center gap-3">
                                        <p className="mb-0">Sort By:</p>
                                        <select onChange={ (e) => sortByHandler(e.target.value) }>
                                            <option value="default">Default</option>
                                            <option value="high">High Rate</option>
                                            <option value="mid">Mid Rate</option>
                                            <option value="low">Low Rate</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="category-header__right d-flex align-items-center gap-3">
                                    <p className="mb-0">{ products.length } products</p>
                                    <div className="category-header__grids d-flex align-items-center gap-2">
                                        <div
                                            className={ `category-header__grid one ${ grid === "grid-1" && "active" }` }
                                            onClick={ () => setGrid("grid-1") }
                                        >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div
                                            className={ `category-header__grid two ${ grid === "grid-2" && "active" }` }
                                            onClick={ () => setGrid("grid-2") }
                                        >
                                            <span/>
                                            <span/>
                                            <span/>
                                        </div>
                                        <div
                                            className={ `category-header__grid three ${ grid === "grid-3" && "active" }` }
                                            onClick={ () => setGrid("grid-3") }
                                        >
                                            <span/>
                                            <span/>
                                        </div>
                                        <div
                                            className={ `category-header__grid four ${ grid === "grid-4" && "active" }` }
                                            onClick={ () => setGrid("grid-4") }
                                        >
                                            <span/>
                                            <span/>
                                            <span/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={ `category-products d-grid ${ grid }` }>
                                {
                                    products.map(product => (
                                        <ProductCard key={ product.id } product={ product }/>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Store;