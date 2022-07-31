import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";

function App() {
  const FormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email);
    console.log(password);

    const Userdata = { email, password };

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Userdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.token) {
          alert("Success");
          console.log("Success");
        }

        if (data.error) {
          alert("PASSWORD MISSING");
          console.log("PASSWORD MISSING");
        }
      });
  };
  
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">ATOOLS</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Login</Navbar.Text>

            <Navbar.Text>Start Free Trial</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="login">
        <div>
          <form className="mt-5 p-5" onSubmit={FormSubmit}>
            <h3>Welcome Back</h3>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember Password
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">Forgot password?</p>
          </form>
        </div>

        <div className="mt-4 p-3">
          <img
            src="https://app.dfavo.com/assets/login/images/login-image.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
