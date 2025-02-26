package routers

import (
	"vektor_eform/controllers"

	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.TechnicalController{})
    beego.Router("assignment-form", &controllers.AssignmentFormController{})
    beego.Router("battery-form", &controllers.BatteryFormController{})
}
