package controllers

import (
	"github.com/astaxie/beego"
)

type AuthController struct {
    beego.Controller
}

func (c *AuthController) Get() {
    c.TplName = "loginPage.tpl"
}

func (c *AuthController) Login() {
    email := c.GetString("email")
    password := c.GetString("password")

	if (email == "admin@gmail.com" && password == "admin") {
		c.Redirect("/technical-form", 302)
	} else {
		c.Data["ErrorMessage"] = "Invalid Email or Password"
		c.TplName = "loginPage.tpl"
	}
}


