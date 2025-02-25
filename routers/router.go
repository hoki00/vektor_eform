package routers

import (
	"vektor_eform/controllers"

	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
    beego.Router("form-tugas", &controllers.FormTugasController{})
}
