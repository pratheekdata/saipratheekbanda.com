# generate_sitemap.py
from pathlib import Path
from datetime import datetime, timezone
import xml.etree.ElementTree as ET

BASE_URL = "https://saipratheekbanda.com"  # change if needed
ROOT = Path(__file__).parent

# collect urls
files = []
# root-level HTML pages
files += sorted([p for p in ROOT.glob("*.html")])
# PDFs in assets
files += sorted([p for p in (ROOT / "assets").glob("*.pdf")]) if (ROOT / "assets").exists() else []

# build XML
urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
for p in files:
    rel = "/" + str(p.relative_to(ROOT)).replace("\\", "/")
    url = ET.SubElement(urlset, "url")
    ET.SubElement(url, "loc").text = f"{BASE_URL}{rel}"
    ts = datetime.fromtimestamp(p.stat().st_mtime, tz=timezone.utc).strftime("%Y-%m-%d")
    ET.SubElement(url, "lastmod").text = ts
    ET.SubElement(url, "changefreq").text = "monthly"
    ET.SubElement(url, "priority").text = "0.7" if p.suffix.lower()==".html" else "0.5"

# also include the bare domain (/) which serves index.html
home = ET.SubElement(urlset, "url")
ET.SubElement(home, "loc").text = BASE_URL + "/"
ET.SubElement(home, "changefreq").text = "weekly"
ET.SubElement(home, "priority").text = "1.0"

ET.ElementTree(urlset).write("sitemap.xml", encoding="utf-8", xml_declaration=True)
print("Wrote sitemap.xml with", len(files)+1, "entries")
