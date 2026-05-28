from pathlib import Path
import re
import json

def read_json(path: str = "../data/jawiki-country.json") -> str:
    file_path = Path(path)
    if not file_path.is_absolute():
        file_path = Path(__file__).resolve().parent / file_path
    return file_path.read_text(encoding="utf-8")
