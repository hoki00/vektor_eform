package controllers

import (
	"github.com/astaxie/beego"
)

type InstallationSurveyFormController struct {
	beego.Controller
}

func (c *InstallationSurveyFormController) Get() {
	// installationSurveyForm.html => FSP (Form Survey Pemesangan UPS)
	c.Data["URL"] = "/installation-survey-form"
	c.TplName = "installationSurveyForm.html"
}
