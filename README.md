# Chatbot Website Integration

## Project Overview
A dynamic website integrated with an intelligent chatbot, leveraging cutting-edge cloud and AI technologies.

## 🚀 Tech Stack
- **Cloud Infrastructure**: AWS EC2
- **Backend**: Python
- **Web Framework**: Flask
- **API Integration**: OpenAI API
- **Web Server**: Nginx
- **WSGI Server**: Gunicorn

## 🔧 Key Features
- Intelligent conversational interface
- Scalable cloud-based deployment
- Seamless AI-powered interactions
- Robust web application architecture

## 🛠 Infrastructure Setup
### Components
- **Compute**: AWS EC2 Instance
- **Web Server**: Nginx (Reverse Proxy)
- **Application Server**: Gunicorn
- **Backend**: Python Flask Application
- **AI Integration**: OpenAI API

## 📦 Prerequisites
- Python 3.8+
- AWS EC2 Account
- OpenAI API Key
- Nginx
- Gunicorn

## 🔐 Configuration
1️⃣ Clone the Repository:
```
git clone  https://ecsabau.github.io/nextgenai/

cd nextgen-ai-website
```

2️⃣ Install Dependencies

For JavaScript-based projects:
```
npm install
```

For Python-based projects:
```
pip install -r requirements.txt
```

3️⃣ Configure AWS EC2 Instance

Launch an EC2 instance (Ubuntu recommended).

Connect via SSH:
```
ssh -i "C:\Users\ecsab\AWS\NextGenAI-key.pem" ubuntu@13.40.3.102
```

Update system & install required packages:
```
sudo apt update && sudo apt upgrade -y
sudo apt install python3-pip python3-venv nginx -y
```

4️⃣ Set Up Environment Variables

Create a .env file and add the necessary credentials:
```
touch .env
nano .env
```

Example format:
```
SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url
```

Then load the environment variables:
```
export $(cat .env | xargs)
```

5️⃣ Configure Nginx & Gunicorn

Set up Gunicorn:
```
pip install gunicorn
gunicorn --workers 3 --bind 0.0.0.0:5000 wsgi:app
```

Configure Nginx:

Open Nginx config file:
```
sudo nano /etc/nginx/sites-available/nextgenaisolutions
```

Add the following configuration:

```nginx

#Enable the config & restart Nginx:
server {
    listen 80;
    server_name nextgenaisolutions.co.uk;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

#Enable the config & restart Nginx:

sudo ln -s /etc/nginx/sites-available/nextgenaisolutions /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

## 🚀 Deployment
```bash
# Install dependencies
pip install -r requirements.txt

# Run with Gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 📝 License
# MIT License

Copyright (c) 2024 Elvira Catalina Sabau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## Contact & Support
For inquiries or collaboration opportunities, contact us at:

📩 Email: elvira@nextgenaisolutions.co.uk

🌍 Website: https://nextgenaisolutions.co.uk
