# Yeoboe-xmd

A multi-platform launcher for the **Yeoboe-xmd WhatsApp Bot** — built for straightforward deployment and always-on operation.

<p align="center">
  <a href="https://github.com/Yeoboe/Yeoboe-xmd">
    <img src="https://img.shields.io/badge/GitHub-Yeoboe%2FYeoboe--xmd-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://github.com/Yeoboe/Yeoboe-xmd/archive/refs/heads/main.zip">
    <img src="https://img.shields.io/badge/Download-ZIP-2ea44f?style=for-the-badge&logo=github" alt="Download ZIP">
  </a>
</p>

---

## 🌐 Session Servers

<table>
<tr>
<td align="center" width="50%">
  <b>Server 1 — Yeoboe Tech</b><br>
  <sub>Primary session service</sub><br><br>
  <a href="https://davetechwebservice.zone.id/main">
    <img src="https://img.shields.io/badge/Open_Server_1-6f42c1?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Open Server 1">
  </a>
</td>
<td align="center" width="50%">
  <b>Server 2 — Render</b><br>
  <sub>Backup session service</sub><br><br>
  <a href="https://session-incr.onrender.com/">
    <img src="https://img.shields.io/badge/Open_Server_2-6f42c1?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Open Server 2">
  </a>
</td>
</tr>
</table>

---

## 🚀 One-Click Deploy

| Platform | Deploy |
|---|---|
| **Heroku** | [Deploy to Heroku](https://www.heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2FYeoboe%2FYeoboe-xmd%2Ftree%2Fmain) |
| **Render** | [Deploy on Render](https://render.com/deploy?repo=https://github.com/Yeoboe/Yeoboe-xmd) |
| **Railway** | [Deploy on Railway](https://railway.app/new/template?template=https://github.com/Yeoboe/Yeoboe-xmd) |
| **Koyeb** | [Deploy on Koyeb](https://app.koyeb.com/deploy?type=git&repository=github.com/Yeoboe/Yeoboe-xmd) |
| **Replit** | [Open in Replit](https://replit.com/github/Yeoboe/Yeoboe-xmd) |

---

## ⚙️ Setup

**Required environment variable:**

| Variable | Required | Description |
|---|---:|---|
| `SESSION_ID` | ✅ Yes | Your Yeoboe-xmd session credential. Must begin with `Yeoboe-xmd:~`. |

For local hosting, place it in a `.env` file at the project root. **Never commit credentials** to GitHub or share them in a ZIP.

---

## 💻 Local Run

```bash
git clone https://github.com/Yeoboe/Yeoboe-xmd.git
cd Yeoboe
npm install --legacy-peer-deps
npm start
