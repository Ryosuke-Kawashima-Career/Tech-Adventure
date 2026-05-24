from typing import Dict
import aiohttp
async def main() -> Dict[str, str]:
    """Fetch LinkedIn profile information asynchronously."""
    print("Fetching LinkedIn profile information...")
    target_url = "https://www.linkedin.com/in/ryosuke-kawashima-58878b360/"
    profile_info = await fetch_linkedin_profile(target_url)
    return profile_info

async def fetch_linkedin_profile(url: str= "https://www.linkedin.com/in/ryosuke-kawashima-58878b360/") -> Dict[str, str]:
    # 1. Make an agent for request
    agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    headers = {"User-Agent": agent}
    # 1-2. Make a request to the LinkedIn profile page
    async with aiohttp.ClientSession(headers=headers) as session:
        # 2. Wait for the response and read the content
        async with session.get(url) as response:
            if response.status == 200:
                # 3. If the page exists, read the content
                content = await response.text()
                return {"url": url, "content": content}
            else:
                return {"url": url, "error": f"Failed to fetch profile. Status code: {response.status}"}
    return {"url": url, "error": "Failed to fetch profile due to an unknown error."}


if __name__ == "__main__":
    import asyncio
    profile_info = asyncio.run(main())
    print(profile_info)
    