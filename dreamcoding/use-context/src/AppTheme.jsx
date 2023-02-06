import React from "react";
import "./AppTheme.css";
export default function AppTheme() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <Main className="main">
      Main
      <Profile />
      <Products />
    </Main>
  );
}

function Footer() {
  return <Footer className="footer">Footer</Footer>;
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function Products() {
  return <div>Products</div>;
}

function ProductDetail() {
  return <div>product detail</div>;
}

function User() {
  return <div>User</div>;
}
