package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	// index.html => LDT (Lembar Detail Teknisi)
	c.Data["URL"] = "/"
	c.TplName = "index.html"
}
