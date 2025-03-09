import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContextProvider';
import { useCart } from '../../../context/CartContext'; // 🛒 კალათის კონტექსტი
import routes from '../../../constants/routes';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'; // 🛒 Cart Icon

const NavBar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAuthContext();
  const { cart } = useCart(); // 🛒 კალათის მონაცემები
  const [menuOpen, setMenuOpen] = useState(false); // მენიუს ღილაკის მდგომარეობა

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    dispatch({ type: "LOG_OUT" });
    navigate(routes.singIn);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <nav className='navbar'>
      <h1 className='logo'>Pizza & Desserts</h1>

      {/* 🔹 მენიუს ღილაკი მობილურზე */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* 🔹 მენიუ */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {!state.isAuthenticated ? (
          <>
            <NavLink to={routes.home} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to={routes.singIn} onClick={() => setMenuOpen(false)}>Sign In</NavLink>
            <NavLink to={routes.signUp} onClick={() => setMenuOpen(false)}>Sign Up</NavLink>
          </>
        ) : (
          <>
            <NavLink to={routes.produts} onClick={() => setMenuOpen(false)}>Products</NavLink>
            {/* 🛒 Cart Button */}
            <NavLink to="/cart" className="cart-icon" onClick={() => setMenuOpen(false)}>
              <FaShoppingCart />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </NavLink>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
