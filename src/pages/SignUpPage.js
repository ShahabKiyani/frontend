import React, { useState } from "react";
import { auth } from "../components/firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase sign up function
import { useNavigate } from "react-router-dom"; // For redirecting after successful sign up
import { Link } from "react-router-dom"; // Link component for navigation to login

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For redirecting after successful sign up

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed up successfully:", user);
        navigate("/login"); // Redirect to login page after successful sign up
      })
      .catch((error) => {
        setError(error.message); // Show error message if sign-up fails
        console.error("Error signing up:", error.message);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
