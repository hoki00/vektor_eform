package controllers

import (
	"github.com/astaxie/beego"
)

type ProjectChecklistFormController struct {
	beego.Controller
}

func (c *ProjectChecklistFormController) Get() {
	// projectChecklistForm.html => UPS Project & Checklist Form (Checklist & Commisioning Report)
	c.Data["URL"] = "/project-testing-form"
	c.TplName = "projectChecklistForm/projectChecklistForm.html"
}
