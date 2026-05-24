async function main() {
    const targetUrl: string = "https://www.linkedin.com/in/ryosuke-kawashima-58878b360/";
    console.log(`Fetching LinkedIn profile from: ${targetUrl}`);
    // 1. Make a request
    try {
        const response: Response = await  fetch_web(targetUrl);
        // 2. check if the page exists
        if (response.ok) {
            // 3. Get the content of the page
            const content = await response.text();
            console.log("Page content fetched successfully.");
        } else {
            console.error(`Failed to fetch the page. Status: ${response.status}`);
            return null;
        }
    } catch (error){
        console.error("An error occurred while fetching the page.", error);
        return null;
    }
}

async function fetch_web(url: string): Promise<Response> {
    // Make a User agent
    const agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
    const headers = new Headers({
        "User-Agent": agent
    });
    const response = await fetch(url, { headers });
    return response;
}
// Note that you need to call main to execute the function!!!!
main();