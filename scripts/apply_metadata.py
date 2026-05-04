import os
import re

base_dir = os.path.join(os.path.dirname(__file__), '../app')

metadata_dict = {
    'join-the-program': {
        'title': 'Get The Goodnight Companion — The 90-Day CBT-I Journal for Chronic Insomnia',
        'description': 'A guided journal built on the gold-standard clinical protocol for insomnia — without the cost of a therapist. Three phases. 90 days. Available on Amazon worldwide.'
    },
    'understand': {
        'title': 'The Science Behind The Goodnight Companion: CBT-I & ACT-I for Insomnia Explained',
        'description': "Skeptical? Good. Here's the clinical evidence behind every technique in the program — Stimulus Control, Sleep Restriction, Cognitive Defusion, and why CBT-I outperforms sleep medication long-term."
    },
    'quiz': {
        'title': 'What Type of Insomniac Are You? Free 2-Minute Pattern Assessment',
        'description': 'Sleep Onset, Sleep Maintenance, Early Morning, or Mixed — your insomnia pattern points to a specific mechanism and a specific recovery path. Seven questions to find yours.'
    },
    'tools/calculator': {
        'title': 'Sleep Efficiency Calculator — The CBT-I Formula for Insomnia Recovery',
        'description': 'Calculate your Sleep Efficiency score, understand what it means, and get the exact CBT-I titration protocol to improve it. The one metric that actually tracks insomnia recovery.'
    },
    'tools/recharge': {
        'title': 'Free NSDR Protocol for Insomnia Recovery — 10-Minute Nervous System Reset',
        'description': 'Non-Sleep Deep Rest (NSDR) lets you recover from sleep deprivation without a nap — protecting your sleep pressure for tonight. A guided 10-minute protocol for daytime fatigue.'
    },
    'tools/pmr': {
        'title': 'Free Progressive Muscle Relaxation for Insomnia — Guided PMR Session',
        'description': "A guided PMR session designed specifically for insomnia-related physical tension. Release the body's conditioned fight-or-flight response and lower your arousal threshold before sleep."
    },
    'tools/worry-dump': {
        'title': 'Racing Thoughts at Night? Free Cognitive Offload Tool for Insomnia',
        'description': 'A structured exercise to externalise and neutralise anxious nighttime thoughts — so your mind stops processing in bed. Based on cognitive defusion techniques from CBT-I and ACT-I.'
    }
}

layout_template = """import type {{ Metadata }} from "next";

export const metadata: Metadata = {{
  title: "{title}",
  description: "{description}",
}};

export default function Layout({{ children }}: {{ children: React.ReactNode }}) {{
  return <>{{children}}</>;
}}
"""

for route, meta in metadata_dict.items():
    layout_path = os.path.join(base_dir, route, 'layout.tsx')
    # Create or overwrite layout.tsx
    with open(layout_path, 'w', encoding='utf-8') as f:
        f.write(layout_template.format(title=meta['title'], description=meta['description']))
    print(f"Created layout.tsx for {route}")

# Update app/layout.tsx for Home
home_path = os.path.join(base_dir, 'layout.tsx')
with open(home_path, 'r', encoding='utf-8') as f:
    home_content = f.read()

home_content = re.sub(r'title: ".*?"', 'title: "The Goodnight Companion — A 90-Day CBT-I Program for Chronic Insomnia"', home_content, count=1)
home_content = re.sub(r'description: ".*?"', 'description: "Stop fighting your sleep. The Goodnight Companion is a structured, science-based journal built on CBT-I — the NHS-endorsed treatment that actually fixes chronic insomnia. Free tools inside."', home_content, count=1)

with open(home_path, 'w', encoding='utf-8') as f:
    f.write(home_content)
print("Updated app/layout.tsx")

# Update app/articles/page.tsx
articles_path = os.path.join(base_dir, 'articles/page.tsx')
with open(articles_path, 'r', encoding='utf-8') as f:
    articles_content = f.read()

# Articles page might already have metadata block or not. Let's check.
if "export const metadata" in articles_content:
    articles_content = re.sub(r'title: ".*?"', 'title: "Sleep Science Articles — CBT-I Guides for Chronic Insomnia | Goodnight Companion"', articles_content, count=1)
    articles_content = re.sub(r'description: ".*?"', 'description: "Clinically-grounded articles on sleep pressure, stimulus control, sleep restriction, and the neuroscience of insomnia recovery. Written for exhausted people, not researchers."', articles_content, count=1)
else:
    meta_code = """import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Science Articles — CBT-I Guides for Chronic Insomnia | Goodnight Companion",
  description: "Clinically-grounded articles on sleep pressure, stimulus control, sleep restriction, and the neuroscience of insomnia recovery. Written for exhausted people, not researchers.",
};

"""
    articles_content = meta_code + articles_content

with open(articles_path, 'w', encoding='utf-8') as f:
    f.write(articles_content)
print("Updated app/articles/page.tsx")

print("All metadata applied successfully.")
