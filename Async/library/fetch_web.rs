use reqwest::header::USER_AGENT;
use std::error::Error;
/* Use as follows:
use std::error::Error;

#[path = "../library/fetch_web.rs"]
mod fetch_web;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    fetch_web::get_linkedin_profile_content().await?;
    Ok(())
}
 */

pub async fn get_linkedin_profile_content() -> Result<(), Box<dyn Error>> {
    let profile_url = "https://www.linkedin.com/in/ryosuke-kawashima-58878b360";
    
    println!("Starting asynchronous fetch for: {}", profile_url);

    match fetch_linkedin_profile(profile_url).await {
        Ok(content) => {
            println!("Successfully retrieved content length: {} bytes", content.len());
            // In a real app, you would parse the HTML or use an API here
        }
        Err(e) => {
            eprintln!("Failed to fetch profile: {}", e);
        }
    }

    Ok(())
}

async fn fetch_linkedin_profile(url: &str) -> Result<String, reqwest::Error> {
    // Create a client - it's best practice to reuse a single client for multiple requests
    let client = reqwest::Client::new();

    let response = client
        .get(url)
        .header(USER_AGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
        .send()
        .await?;

    // Ensure the request was successful
    let status = response.status();
    println!("Response Status: {}", status);

    response.text().await
}