package controllers

import (
	"github.com/astaxie/beego"
)

type SinglePhaseFormController struct {
	beego.Controller
}

func (c *SinglePhaseFormController) Get() {
	// singlePhaseForm.html => single phase ups test & comm (form test & comm ups satu fase)
	c.Data["URL"] = "/single-phase-form"
	c.TplName = "singlePhaseForm.html"
}
