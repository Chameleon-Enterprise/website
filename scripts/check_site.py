"""Check the static site's navigation and security-sensitive boundaries."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys


ROOT = Path(__file__).resolve().parents[1]
LOGIN_URL = "https://id.chameleonenterprise.com"


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []
        self.errors = []
        self.headings = 0
        self.login_count = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        element_id = attrs.get("id")
        if element_id:
            if element_id in self.ids:
                self.errors.append("Duplicate element ID: " + element_id)
            self.ids.add(element_id)
        if tag == "h1":
            self.headings += 1
        if tag == "html" and not attrs.get("lang"):
            self.errors.append("The page needs a language declaration.")
        if tag in {"script", "form", "iframe"}:
            self.errors.append("New active content/data collection needs a boundary review: " + tag)
        if tag == "a" and element_id == "employee-login":
            self.login_count += 1
            if attrs.get("href") != LOGIN_URL:
                self.errors.append("Employee Login must use the owner-approved HTTPS URL.")
        if tag in {"a", "link", "img"}:
            value = attrs.get("src" if tag == "img" else "href")
            if not value:
                self.errors.append("Missing destination on " + tag)
            else:
                self.links.append((tag, value))
        if tag == "img" and "alt" not in attrs:
            self.errors.append("Images must have an alt attribute.")


def main():
    parser = SiteParser()
    parser.feed((ROOT / "index.html").read_text(encoding="utf-8"))
    if parser.headings != 1:
        parser.errors.append("Use one primary heading.")
    if parser.login_count != 1:
        parser.errors.append("Provide one clearly identified Employee Login link.")
    for tag, value in parser.links:
        url = urlsplit(value)
        if url.netloc or url.scheme:
            if url.scheme != "https":
                parser.errors.append("External URLs must use HTTPS: " + value)
            continue
        if url.fragment and not url.path and url.fragment not in parser.ids:
            parser.errors.append("Broken anchor: " + value)
        if url.path:
            target = (ROOT / unquote(url.path).lstrip("/")).resolve()
            if ROOT not in target.parents or not target.is_file():
                parser.errors.append("Missing or out-of-root local file: " + value)
    if parser.errors:
        print("Site checks failed:\n- " + "\n- ".join(parser.errors), file=sys.stderr)
        return 1
    print("Site checks passed: local links, anchors, primary heading, image labels, and login boundary.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
