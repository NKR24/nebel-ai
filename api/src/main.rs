use axum::http::header::CONTENT_TYPE;
use axum::http::Method;
use axum::routing::post;
use tower_http::cors::{Any, CorsLayer};

use crate::routes::contact::contact_handler;

mod routes;

#[tokio::main]
async fn main() {
    let cors = CorsLayer::new()
        .allow_methods([Method::POST])
        .allow_origin(Any)
        .allow_headers([CONTENT_TYPE]);
    let app = axum::Router::<()>::new()
        .route("/contact", post(contact_handler))
        .layer(cors);
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3021").await.unwrap();

    println!("Server http://localhost:3021/");
    axum::serve(listener, app).await.unwrap();
}

