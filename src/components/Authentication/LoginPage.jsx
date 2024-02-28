import { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form_text_input"
              placeholder="Enter your name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              className="form_text_input"
              placeholder="Enter your phone number"
              onChange={(e) =>
                setUser({
                  ...user,
                  phone: parseInt(e.target.value),
                })
              }
              value={user.phone}
            />
          </div>

          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default LoginPage;
