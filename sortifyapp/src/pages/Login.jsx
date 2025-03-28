import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    // Email validation function

    const isValidEmail = (email) => {
        return email.includes("@") && email.indexOf("@") !== 0 && email.length > 5;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        if (!email.trim() || !password.trim()) {
            setError("Both fields are required!");
            return;
        }
        if (!isValidEmail(email)) {
            setError("Enter a valid email.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        login(email);
        navigate("/details");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2> Login </h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label> Email </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-group">
                        <label> Password </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
