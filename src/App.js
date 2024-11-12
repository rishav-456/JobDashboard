import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CandidateList from "./pages/Candidates";
import Assignment from "./pages/Assessment";
import JobDetail from "./components/JobDetail";
import CandidateDetails from "./components/CandidateDetail";
import Header from "./components/Header";
import CreateAssesment from "./pages/createAssesment";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 8);
    setCaptcha(randomCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSignIn = () => {
    if (email && password && captcha === captchaInput) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials or captcha");
    }
  };

  return (
    <div>
      <Header setIsAuthenticated={setIsAuthenticated} />
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidates/:jobId" element={<CandidateList />} />
          <Route
            path="/candidate/:candidateId"
            element={<CandidateDetails />}
          />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <div
          style={{
            display: "flex",
            paddingTop:"100px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "450px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <h2>Admin Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "18px",
                margin: "15px 0",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "18px",
                margin: "15px 0",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <div style={{ marginBottom: "15px" }}>
              <span>{captcha}</span>
              <button
                onClick={generateCaptcha}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  border: "none",
                  backgroundColor: "#f0f0f0",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Refresh Captcha
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              style={{
                width: "100%",
                padding: "18px",
                margin: "15px 0",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <button
              onClick={handleSignIn}
              style={{
                width: "100%",
                padding: "18px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
