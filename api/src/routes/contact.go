package routes

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	mail "github.com/xhit/go-simple-mail/v2"
)

type ContactForm struct {
	Email   string
	Name    string
	Message string
}

func ContactHandler(c echo.Context) error {

	var contactForm ContactForm
	err := c.Bind(&contactForm)
	if err != nil {
		return err
	}
	sendContactEmails(contactForm)
	return c.NoContent(http.StatusOK)
}

func sendContactEmails(form ContactForm) {
	//SMTP config
	server := mail.NewSMTPClient()
	server.Host = "smtp.gmail.com"
	server.Port = 587
	server.Username = "contact.nebel@gmail.com"
	server.Password = "ptgn pmvc mlji sykj"
	server.Encryption = mail.EncryptionSTARTTLS
	server.KeepAlive = true

	// Timeout for connect to SMTP Server
	server.ConnectTimeout = 30 * time.Second
	// Timeout for send the data and wait respond
	server.SendTimeout = 30 * time.Second

	// SMTP client
	smtpClient, err := server.Connect()

	if err != nil {
		log.Fatal(err)
	}

	emailToUs := func() *mail.Email {
		email := mail.NewMSG()
		email.SetFrom("contact.nebel@gmail.com").
			AddTo("contact.nebel@gmail.com").
			SetSubject(fmt.Sprintf("contact request %s %s", form.Name, form.Email))

		email.SetBody(mail.TextHTML, form.Message)
		if email.Error != nil {
			log.Fatal(email.Error)
		}
		return email
	}

	emailToCustomer := func() *mail.Email {
		email := mail.NewMSG()
		email.SetFrom("contact.nebel@gmail.com").
			AddTo(form.Email).
			SetSubject(fmt.Sprintf("%s, your contact request is received", form.Name))

		email.SetBody(mail.TextHTML, "Thank you for contacting us! We will get back to you as soon as possible.")
		if email.Error != nil {
			log.Fatal(email.Error)
		}
		return email
	}

	err = emailToUs().Send(smtpClient)
	if err != nil {
		log.Println(err)
	} else {
		log.Println("Email sent successfully!")
	}
	err = emailToCustomer().Send(smtpClient)
	if err != nil {
		log.Println(err)
	} else {
		log.Println("Email to customer sent successfully!")
	}
	smtpClient.Close()

}
