package controllers

import (
	"github.com/astaxie/beego"
)

type TechnicalController struct {
	beego.Controller
}

func (c *TechnicalController) Get() {
	// technicalForm.html => LDT (Lembar Detail Teknisi)
	c.Data["URL"] = "/"
	c.TplName = "technicalForm.html"
}
