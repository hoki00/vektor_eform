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

	page := c.GetString("page")

	// Handle different pages based on the value of the parameter
	if page == "2" {
		c.TplName = "singlePhaseForm_page2.html"
	} else {
		c.TplName = "singlePhaseForm.html"
	}
}
