import React, { Component } from "react";
import Lform from "./loginform-form";

class Loginform extends Lform {
  dosubmit() {
    //call to server
    console.log("submitted");
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="p-5">
        <h1>Login Form</h1>
        <form onSubmit={this.handlesubmit}>
          {this.renderinput("username", "Username")}
          {this.renderinput("password", "Password", "password")}
          {this.renderbutton("Login")}
        </form>
      </div>
    );
  }
}

export default Loginform;
