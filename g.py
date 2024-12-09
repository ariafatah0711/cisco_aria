# by chat gpt
import os

header = """# cisco_aria

This file is what I studied while learning Cisco and networking, and it contains documentation and some information for configuration. The file includes rich references and basic information.

<p align="center">
  <a href="#introduction">introduction</a> •
  <a href="#table-of-contents">table of contents</a> •
  <a href="#file-list">file_list</a> •
  <a href="#download">Download</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

<p id="introduction"></p>

## 🚀 introduction
"My journey of learning Cisco began during my time at Vocational High School, majoring in Computer Networking (TKJ) at SMK Harapan Bangsa. From there, I started seeking knowledge on YouTube, exploring the web for documentation, and practicing at school. This journey allowed me to gain a deep understanding of the world of Cisco and networking, and I continue to learn and grow in this field."

<p align="left"> <a href="#">
  <img alt="cisco" src="https://img.shields.io/badge/-Cisco-1BA0D7?style=flat-square&logo=cisco&logoColor=white" />
  </a>
</p>

<p id="table-of-contents"></p>

## 📋 Table of Contents
<details>
  <summary><b>Installing Cisco Packet Tracer</b></summary>

  <ol>
    <li>Go to the <a href="https://www.netacad.com/" target="_blank">Cisco Networking Academy</a> website, log in or create an account, and navigate to the Cisco Packet Tracer download page. Download the appropriate version for your operating system (Linux, Windows, or macOS).</li>
    <li>Double-click the downloaded installer file, follow the installation wizard, accept the license agreement, and specify the installation location. Click "Install" to begin the process.</li>
    <li>Launch Cisco Packet Tracer from your applications menu.</li>
  </ol>
</details>

<p id="file-list"></p>

# 📄 File List
"""

footer = """<p id="download"></p>

## 🔨 download

1. Open a terminal or command prompt on your computer.
2. Navigate to the directory where you want to save this project.
3. Use the following command to download the project from the GitHub repository:
```sh
git clone https://github.com/ariafatah0711/cisco_aria.git
```

<p id="related"></p>

## 📈 related

<p id="license"></p>

## ©️ license
<a href="https://github.com/ariafatah0711" alt="CREATED"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=CREATED%20BY&message=ariafatah0711&color=000000"></a>
<a href="https://github.com/ariafatah0711/ariafatah0711/blob/main/LICENSE" alt="LICENSE"><img src="https://img.shields.io/static/v1?style=for-the-badge&label=LICENSE&message=MIT&color=000000"></a>
"""

def generate_file_list(path, type="md"):
    output = ""
    exclude_dirs = {"tmp", ".git"}
    
    for dirpath, dirnames, filenames in os.walk(path):
        dirnames[:] = [d for d in dirnames if d not in exclude_dirs] # exclaude
        
        if dirpath == path:
            continue

        # print(dirpath)
        markdown_files = sorted([f for f in filenames if f.endswith('.md')])
        if markdown_files:
            relative_path = os.path.relpath(dirpath, root_path)
            folder_name = os.path.basename(relative_path)

            # output += f"<details>\n<summary><b>{relative_path}</b></summary>\n\n"
            output += f"<details>\n<summary><b>{relative_path}</b></summary>\n<ul>\n"            

            for file in markdown_files:
                # Ganti spasi dengan %20 untuk URL
                if type == "md":
                  file_path = os.path.join(relative_path, file).replace("\\", "/").replace(" ", "%20")
                if type == "html":
                  file_path = os.path.join(relative_path, file).replace("\\", "/").replace(" ", "%20").replace(".md", ".html")

                file = os.path.splitext(file)[0]
                # output += f"- [{file}]({file_path})\n"
                output += f" <li><a href='{file_path}'>{file}</a></li>\n"
              
            output += "</ul>\n"
            output += "\n</details>\n\n"
    return output

root_path = "."
# md
file_list_content_md = generate_file_list(root_path, "md")
markdown_content_md = header + file_list_content_md + footer
# html
file_list_content_html = generate_file_list(root_path, "html")
markdown_content_html = header + file_list_content_html + footer

# write
with open("README.md", "w", encoding='utf-8') as readme:
    readme.write(markdown_content_md)

with open("index.md", "w", encoding='utf-8') as readme:
    readme.write(markdown_content_html)

print("README.md updated successfully!")