# update_readme.py
import os
import glob
from datetime import datetime

def count_proxies(file_path):
    with open(file_path, 'r') as file:
        return len(file.readlines())

def main():
    # Paths to proxy files
    files = glob.glob('*.txt')
    proxy_counts = {file: count_proxies(file) for file in files}

    # Prepare update information
    update_content = f"""# 🌍 Proxy Repository

📅 **Last Updated:** {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}

## 📊 Statistics

**WORKING Proxy Count:**

"""
    for file, count in proxy_counts.items():
        update_content += f"- **{file}**: {count} proxies\n"

    update_content += """

## 🚀 Usage

You can find the working proxies in the following files:

"""
    for file in files:
        update_content += f"- [{file}](https://github.com/likhonsheikhbd/proxy/blob/main/{file})\n"

    update_content += """

## 💖 Support the Project

If you find this repository useful, consider making a donation to support its maintenance:

- **BNB/ETH/Polygon:** \`0x3A06322e9F1124F6B2de8F343D4FDce4D1009869\`

## 🛠 Made by

[![RexxCheat](https://t.me/RexxCheat)](https://t.me/RexxCheat)

"""

    # Write to README.md
    with open('README.md', 'w') as readme:
        readme.write(update_content)

    # Add and commit changes
    os.system('git config --global user.name "github-actions[bot]"')
    os.system('git config --global user.email "github-actions[bot]@users.noreply.github.com"')
    os.system('git add README.md')
    os.system('git commit -m "Automatically update README with proxy statistics"')
    os.system('git push')

if __name__ == "__main__":
    main()
