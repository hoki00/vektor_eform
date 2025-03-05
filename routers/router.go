package routers

import (
	"vektor_eform/controllers"

	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.AuthController{})
    beego.Router("/login", &controllers.AuthController{}, "get,post:Login")
    beego.Router("/register", &controllers.AuthController{}, "get,post:Register")
    beego.Router("technical-form", &controllers.TechnicalController{})
    beego.Router("assignment-form", &controllers.AssignmentFormController{})
    beego.Router("battery-form", &controllers.BatteryFormController{})
    beego.Router("single-phase-form", &controllers.SinglePhaseFormController{})
    beego.Router("installation-survey-form", &controllers.InstallationSurveyFormController{})
    beego.Router("project-testing-form", &controllers.ProjectChecklistFormController{})
}
