use axum::Json;
use lettre::{Message, SmtpTransport, Transport};
use lettre::transport::smtp::authentication::Credentials;
use serde::Deserialize;
use ts_rs::TS;

#[derive(Debug, Deserialize, TS)]
#[ts(export)]
pub struct ContactForm {
    email: String,
    name: String,
    message: String,
}

pub async fn contact_handler(Json(form): Json<ContactForm>) {
    send_contact_emails(form).expect("Could not send email!");
}

fn send_contact_emails(form: ContactForm) -> std::result::Result<(), Box<dyn std::error::Error>> {
    let email_to_us = Message::builder()
        .from("contact.nebel@gmail.com".parse().unwrap())
        .to("contact.nebel@gmail.com".parse().unwrap())
        .subject(format!("contact request {} {}", form.name, form.email))
        .body(form.message)
        .unwrap();

    let email_to_customer = Message::builder()
        .from("contact.nebel@gmail.com".parse().unwrap())
        .to(form.email.parse().unwrap())
        .subject(format!("{}, your contact request is received", form.name))
        .body(String::from("Thank you for contacting us! We will get back to you as soon as possible."))
        .unwrap();

    let creds = Credentials::new("contact.nebel@gmail.com".to_string(), "ptgn pmvc mlji sykj".to_string());

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