import routes from "../constants/routes";
import AuthGuard from "../Guards/AuthGuard";
import ProductDetails from "../pages/Details/ProductDetails";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import CartPage from "../pages/Cart/CartPage";  // ✅ კალათის გვერდის იმპორტი

const appRoutes = [
    { path: routes.home, Component: Home },
    { path: routes.produts, Component: Products, Guard: AuthGuard },
    { path: routes.singIn, Component: SignIn },
    { path: routes.signUp, Component: SignUp },
    { path: routes.details, Component: ProductDetails, Guard: AuthGuard },
    { path: routes.cart, Component: CartPage, Guard: AuthGuard }, // ✅ კალათის გვერდი
];

export default appRoutes;