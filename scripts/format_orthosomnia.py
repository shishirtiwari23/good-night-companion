import os
import re

path = os.path.join(os.path.dirname(__file__), '../app/articles/the-orthosomnia-trap/page.tsx')
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace h2 classes
content = re.sub(
    r'<h2 className="text-\[1\.8rem\] font-cormorant font-light text-ink mt-12 mb-5 leading-\[1\.2\]">',
    '<h2 className="text-2xl font-serif font-medium text-ink mt-12 mb-4">',
    content
)

# Fix CTA box background class
# Old: <div className="bg-sage-dark p-8 md:p-10 rounded-sm mt-12 mb-12 text-center text-white shadow-sm">
# Let's see what it was in my initial rewrite today: "bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 text-center shadow-sm"
content = content.replace(
    '<div className="bg-sage-dark p-8 md:p-10 rounded-sm mt-12 mb-12 text-center text-white shadow-sm">',
    '<div className="bg-[#f9f8f6] p-8 rounded-[1.5rem] mt-12 mb-12 text-center shadow-sm">'
)

content = content.replace(
    '<h3 className="text-[1.6rem] font-cormorant font-light mb-4">',
    '<h3 className="text-2xl font-serif font-medium text-ink mb-4">'
)

content = content.replace(
    '<p className="mb-8 mx-auto max-w-xl text-[0.95rem] leading-[1.7] text-white/90">',
    '<p className="mb-6 mx-auto max-w-lg">'
)

content = content.replace(
    '<Link \n              href="/join-the-program" \n              className="inline-block bg-white text-sage-dark font-medium font-sans text-[0.8rem] tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm hover:bg-cream-2 transition-colors"\n            >',
    '<Link href="/join-the-program" className="btn-primary inline-block w-auto !px-8 hover:!bg-[var(--primary-dark)]">'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated h2 classes and CTA.")
