use reqwest::header::USER_AGENT;
use std::error::Error;
// Returns Trait Object with a smart pointer of type Box.
// Result<T, E> is an enum that can be either Ok(T) or Err(E). 
// In this case, T is () (unit type) and E is Box<dyn Error> (a trait object for any error type).
#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let profile_url = "https://www.linkedin.com/in/ryosuke-kawashima-58878b360";
    println!("Starting asynchronous fetch for: {}", profile_url);

    match fetch_linkedin_profile(profile_url).await {
        Ok(content) => {
            println!("My LinkedIn profile is {}", content[..100.min(content.len())].to_string() + "...");
        },
        Err(e) => {
            eprintln!("Failed to fetch profile: {}", e);
        }
    }

    Ok(())
}

async fn fetch_linkedin_profile(url: &str) -> Result<String, reqwest::Error> {
    // Create a clinent
    let client = reqwest::Client::new();
    // Request -> Await
    let response: reqwest::Response = client
        .get(url)
        .header(USER_AGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
        .send()
        .await?;
    // Report the status code of the response
    // Is status 200 OK? 404 Not Found? 500 Internal Server Error?
    let status = response.status();
    println!("Response Status: {}", status);
    // Get the whole body of the response as text. This is also an asynchronous operation, so we await it.
    return response.text().await;
}
