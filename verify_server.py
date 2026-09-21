import urllib.request
import sys

sys.stdout.reconfigure(encoding='utf-8')

test_urls = [
    "http://localhost:3000/",
    "http://localhost:3000/plants",
    "http://localhost:3000/categories/indoor",
    "http://localhost:3000/categories/outdoor",
    "http://localhost:3000/categories/bonsai",
    "http://localhost:3000/plants/1-marble-money-plant-in-6-inch-nursery-pot",
    "http://localhost:3000/plants/2-peace-lily-in-5-inch-nursery-pot",
    "http://localhost:3000/about",
    "http://localhost:3000/contact",
    "http://localhost:3000/terms",
    "http://localhost:3000/privacy",
    "http://localhost:3000/images/logo.jpeg",
    "http://localhost:3000/images/indoor.avif",
    "http://localhost:3000/images/nursery.avif",
    "http://localhost:3000/images/peace%20lily.jpg",
]

print("=== VERIFYING SERVER RESPONSES ===")
all_ok = True
for url in test_urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as resp:
            status = resp.status
            data_len = len(resp.read())
            print(f"PASS [status {status}] ({data_len:>6} bytes) -> {url}")
    except Exception as e:
        print(f"FAIL -> {url} : {e}")
        all_ok = False

if all_ok:
    print("\nALL ROUTES AND ASSETS VERIFIED SUCCESSFULLY ON LOCALHOST:3000!")
