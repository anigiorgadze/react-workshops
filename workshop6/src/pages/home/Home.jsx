import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";


const Home = () => {
    const [country, setCountry] = useState("");
    const navigate = useNavigate();
    const [isUserValid, setIsUserValid] = useState(false);

    const handleUniversity = (e) => {
        setCountry(e.target.value)
    }


    const submitHandler = (e) => {
        e.preventDefault();
        if (country.trim()) {
            navigate(`/results/${country}`);
        }
    }

    const validUser = (isAuthenticated) => {
        setIsUserValid(isAuthenticated);  // მომხმარებლის ვალიდაცია
    };

    return (
        <div>
        {isUserValid ? (
            <div>
                <h2>უნივერსიტეტების საძიებელი</h2>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="შეიყვანეთ ქვეყნის სახელი (მაგ: Georgia)"
                        value={country}
                        onChange={handleUniversity}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        ) : (
            // Form კომპონენტი, რომელიც იღებს onAuthenticate prop-ს
            <Form onAuthenticate={validUser} />
        )}
    </div>
    )
}

export default Home
