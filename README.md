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
1. Clone the repository
2. Install dependencies
3. Configure AWS EC2 instance
4. Set up environment variables
5. Configure Nginx and Gunicorn

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

