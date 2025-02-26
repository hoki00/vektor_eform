package controllers

import (
	"github.com/astaxie/beego"
)

type AssignmentFormController struct {
	beego.Controller
}

func (c *AssignmentFormController) Get() {
	// assignmentForm.html => engineer assignment form (form penugasan teknisi)
	c.Data["URL"] = "/assignment-form"
	c.TplName = "assignmentForm.html"
}
