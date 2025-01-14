# Flask App Setup

This guide outlines the steps to set up a Flask application using Blueprints for modular development.

---

### 1. Install Flask

Ensure you have Flask installed in your environment. Optionally, create a virtual environment:

```bash
# Create and activate virtual environment (optional)
python3 -m venv venv
source venv/bin/activate    # Linux/Mac
venv\Scripts\activate     # Windows

# Install Flask
pip install flask python-dotenv
```

---

### 2. Environment Variables

Create a `.env` file for Flask configuration:

#### File: `.env`

```env
FLASK_ENV=development
FLASK_APP=app.py
```

---

### 3. Requirements

List the Python dependencies in `requirements.txt`:

Install dependencies using:

```bash
pip install -r requirements.txt
```

### 4. Run the Application

**Normally** you would just use the Flask CLI

```bash
flask run
```
**BUT** I'm actually gonna suggestion you just use the vscode run command, its been working for `DEBUG MODE` as such below:

<img width="1069" alt="Screenshot 2025-01-13 at 8 57 22 PM" src="https://github.com/user-attachments/assets/5854954e-7261-4356-9bd2-87e2d5c67b78" />

---

## 5. Testing the Application

- Visit `http://127.0.0.1:5000/` to access the home page.
- Check out the nested boiler routes I provided.

---

