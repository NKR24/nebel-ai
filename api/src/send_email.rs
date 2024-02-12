use axum::Json;
use lettre::{Message, SmtpTransport, Transport};
use lettre::transport::smtp::{authentication::Credentials};
use crate::ContactForm;

pub fn send_email(form: ContactForm) -> std::result::Result<(), Box<dyn std::error::Error>> {
    let email_to_us = Message::builder()
        .from("khvorostinn@gmail.com".parse().unwrap())
        .to("khvorostinn@gmail.com".parse().unwrap())
        .subject(format!("{} {}", form.name, form.email))
        .body(String::from(form.commentary))
        .unwrap();

    let email_to_customer = Message::builder()
        .from("khvorostinn@gmail.com".parse().unwrap())
        .to(form.email.parse().unwrap())
        .subject(format!("Приняли заявку вашу заявку, {}", form.name))
        .body(String::from("Спасибо большое за отклик, обработаем вашу заявку в ближайшее время"))
        .unwrap();

    let creds = Credentials::new("khvorostinn@gmail.com".to_string(), "nnjk afkx vixt lijs".to_string());

    let mailer = SmtpTransport::starttls_relay("smtp.gmail.com")
        .unwrap()
        .credentials(creds)
        .build();

    match mailer.send(&email_to_us) {
        Ok(_) => println!("Email sent successfully!"),
        Err(e) => eprintln!("Could not send email: {:?}", e),
    }

    match mailer.send(&email_to_customer) {
        Ok(_) => println!("Email to customer sent successfully!"),
        Err(e) => eprintln!("Could not send email to customer: {:?}", e),
    }

    Ok(())
}