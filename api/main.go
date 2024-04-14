package main

import (
	"server/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.CORS())
	e.POST("/contact", routes.ContactHandler)
	e.Logger.Fatal(e.Start("0.0.0.0:3021"))
}
