use axum::Json;
use lettre::{Message, SmtpTransport, Transport};
use lettre::transport::smtp::{authentication::Credentials};
use crate::ContactForm;

pub fn send_email(form: ContactForm) -> std::result::Result<(), Box<dyn std::error::Error>> {
    let email = Message::builder()
        .from("khvorostinn@gmail.com".parse().unwrap())
        .to(form.email.parse().unwrap())
        .subject(form.name)
        .body(String::from(form.commentary))
        .unwrap();

    let creds = Credentials::new("khvorostinn@gmail.com".to_string(), "nnjk afkx vixt lijs".to_string());

    let mailer = SmtpTransport::starttls_relay("smtp.gmail.com")
        .unwrap()
        .credentials(creds)
        .build();

    match mailer.send(&email) {
        Ok(_) => println!("Email sent successfully!"),
        Err(e) => eprintln!("Could not send email: {:?}", e),
    }

    Ok(())
}