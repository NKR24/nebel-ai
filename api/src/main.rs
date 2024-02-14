mod send_email;

use axum::{Json, Router, routing::post};
use axum::http::header::CONTENT_TYPE;
use axum::http::Method;
use serde::Deserialize;

use tower_http::cors::{CorsLayer, Any};

#[derive(Debug, Deserialize)]
struct ContactForm {
    email: String,
    name: String,
    commentary: String,
}

async fn contact_handler(Json(form): Json<ContactForm>) {
    send_email::send_email(form).expect("Could not send email!");
}

#[tokio::main]
async fn main() {
    let cors = CorsLayer::new()
        .allow_methods([Method::POST])
        .allow_origin(Any)
        .allow_headers([CONTENT_TYPE]);

    let app = Router::new().route("/contact", post(contact_handler)).layer(cors);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3021").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

