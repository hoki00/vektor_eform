package controllers

import (
	"github.com/astaxie/beego"
)

type BatteryFormController struct {
	beego.Controller
}

func (c *BatteryFormController) Get() {
	// batteryForm.html => Battery Checklist Form
	c.Data["URL"] = "/battery-form"
	c.TplName = "batteryForm.html"
}
