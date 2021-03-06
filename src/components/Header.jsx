import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import {IconButton, Badge} from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';

import logo from '../assets/images/Logo-2.png';

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Blog",
        path: "/blog"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
];


const Header = ({totalItems}) => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)
    const { value } =  useSelector(state => state.cartItems);

    
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            {/* <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link> */}
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={value.length} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                       
                        <div className="header__menu__item header__menu__right__item">
                                <Link to ="/login">
                                    <i className="bx bx-user"></i>
                                </Link>
                        </div>
                            
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
