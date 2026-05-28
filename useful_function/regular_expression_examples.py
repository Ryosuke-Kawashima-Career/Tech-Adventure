import json
import re

def solve(text: str) -> str:
    article_text = text
    article_texts = []

    for line in text.splitlines():
        try:
            article = json.loads(line)
        except json.JSONDecodeError:
            continue

        article_texts.append(article.get("text", ""))
        if article.get("title") == "イギリス":
            article_text = article.get("text", "")
            break
    else:
        if article_texts:
            article_text = "\n".join(article_texts)

    category_lines = re.findall(r'^\[\[Category:[^\n]+\]\]$', article_text, re.MULTILINE)
    return "\n".join(category_lines)
