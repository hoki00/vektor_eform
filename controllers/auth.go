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
    username := c.GetString("username")
    password := c.GetString("password")

	if (username == "admin" && password == "admin") {
		c.Redirect("/technical-form", 302)
	} else {
		c.Data["ErrorMessage"] = "Invalid Username or Password"
		c.TplName = "loginPage.tpl"
	}
}

func (c *AuthController) Register() {
    c.TplName = "registrationPage.html"
}

