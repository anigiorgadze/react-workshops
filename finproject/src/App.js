import React from "react";
import "./App.css";
import "./media.css"
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar/NavBar/NavBar";
import { CartProvider } from "./context/CartContext";
import { useAuthContext } from "./context/AuthContextProvider"; // 🔹 **AuthContext იმპორტი** 

function App() {
  const { state } = useAuthContext(); // 🔹 **მომხმარებლის სტატუსი**

  return (
    <CartProvider> 
      {/* ✅ თუ მომხმარებელი შესულია, ვამატებთ `authenticated` კლასს */}
      <div className={`App ${state.isAuthenticated ? "authenticated" : ""}`}>
        <NavBar />
        <AppRoutes />
      </div>
    </CartProvider>
  );
}

export default App;
