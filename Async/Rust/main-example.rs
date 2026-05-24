use std::error::Error;

#[path = "../library/fetch_web.rs"]
mod fetch_web;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    fetch_web::get_linkedin_profile_content().await?;
    Ok(())
}