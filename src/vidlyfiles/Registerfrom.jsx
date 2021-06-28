import React, { Component } from "react";
import Joi from "joi-browser";
import Lform from "./../Forms/loginform-form";

class Registerform extends Lform {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };
  dosubmit() {
    console.log("submitted");
  }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handlesubmit}>
          {this.renderinput("username", "Username")}
          {this.renderinput("password", "Password", "password")}
          {this.renderinput("name", "Name")}
          {this.renderbutton("Register")}
        </form>
      </div>
    );
  }
}

export default Registerform;
