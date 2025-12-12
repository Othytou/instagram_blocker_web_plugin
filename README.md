# 🚫 Block Instagram Content

A Chrome/Brave extension to block distracting Instagram content and take back control of your time.

## 📋 Current Features

- ✅ **Complete message blocking** (`/direct/inbox/`)
- ✅ Clean and modern blocking interface
- ✅ Automatic Instagram navigation detection (SPA)

## 🚀 Planned Features

- ⏳ Feed blocking
- ⏳ Stories blocking
- ⏳ Reels blocking
- ⏳ Toggle options per section
- ⏳ Usage statistics

## 📦 Installation

### Manual Installation (Developer Mode)

1. Clone or download this repository
2. Create an `icons/` folder and add your icons (16x16, 48x48, 128x128 pixels in PNG format)
3. Open Chrome/Brave and go to `chrome://extensions/`
4. Enable **Developer mode** (top right corner)
5. Click **"Load unpacked"**
6. Select the extension folder

## 🏗️ Project Structure

```
block-instagram-content/
├── manifest.json       # Extension configuration
├── content.js          # Blocking script
├── icons/              # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

## 🛠️ Technologies Used

- JavaScript (Vanilla)
- Chrome Extension Manifest V3
- MutationObserver API for SPA detection

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📝 License

MIT

## ⚠️ Disclaimer

This extension is designed for personal time management. It does not collect any data and works entirely locally.

---

**Built to help you reclaim your attention** 🎯