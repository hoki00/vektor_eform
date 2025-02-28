package routers

import (
	"vektor_eform/controllers"

	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.TechnicalController{})
    beego.Router("assignment-form", &controllers.AssignmentFormController{})
    beego.Router("battery-form", &controllers.BatteryFormController{})
    beego.Router("single-phase-form", &controllers.SinglePhaseFormController{})
    beego.Router("installation-survey-form", &controllers.InstallationSurveyFormController{})
    beego.Router("project-testing-form", &controllers.ProjectChecklistFormController{})
}
