import React from "react";
import { Link } from "react-router-dom";

function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
}

const BlogCard = ({image, date, title, description, link}) => {
    return (
        <div className='blog-card card-wrapper rounded-3'>
            <div className="blog-card__image">
                <Link to={link}><img src={image} alt=""/></Link>
            </div>
            <div className="blog-card__content">
                <p className='blog-card__date mb-3'>{date}</p>
                <Link to={link}><h3 className='h6 blog-card__title mb-3'>{truncate(title, 28)}</h3></Link>
                <p className='blog-card__description mb-3'>{description}</p>
                <Link to={link} className='btn btn-primary'>Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard;