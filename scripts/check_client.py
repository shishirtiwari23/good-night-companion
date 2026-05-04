import os

base_dir = os.path.join(os.path.dirname(__file__), '../app')

pages = [
    'page.tsx',
    'join-the-program/page.tsx',
    'understand/page.tsx',
    'articles/page.tsx',
    'quiz/page.tsx',
    'tools/calculator/page.tsx',
    'tools/recharge/page.tsx',
    'tools/pmr/page.tsx',
    'tools/worry-dump/page.tsx'
]

for p in pages:
    path = os.path.join(base_dir, p)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            first_line = f.readline().strip()
            print(f"{p}: {first_line}")
    else:
        print(f"NOT FOUND: {p}")
