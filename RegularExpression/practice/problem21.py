from typing import List, Dict, Tuple
import re
import json
from pathlib import Path

def read_json(path: str = "../data/jawiki-country.json") -> str:
    result = ""
    with open(path, "r") as f:
        result = f.read()
    f.close()
    return result

def solve(text: str) -> str:
    article_text = text
    article_texts = []

    for line in text.splitlines():
        try:
            article = json.loads(line)
        except json.JSONDecodeError:
            continue

    return "\n".join(category_lines)

def main():
    text = read_json()
    target = solve(text)
    print(target)

if __name__ == "__main__":
    main()
