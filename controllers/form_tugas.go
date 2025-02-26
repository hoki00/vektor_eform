package controllers

import (
	"github.com/astaxie/beego"
)

type FormTugasController struct {
	beego.Controller
}

func (c *FormTugasController) Get() {
	// formTugas.html => engineer assignment form (form penugasan teknisi)
	c.Data["URL"] = "/form-tugas"
	c.TplName = "formTugas.html"
}
