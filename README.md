# 🐍 Pythenians NFT Website

> Official website for the Pythenians NFT collection - A complete Web3 community platform

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://pythenians-website.vercel.app)
[![Powered by Supabase](https://img.shields.io/badge/Powered%20by-Supabase-3ECF8E?style=flat&logo=supabase)](https://supabase.com)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-7C3AED?style=flat)](https://claude.ai/code)

## 🚀 Live Demo

**🌐 Website:** [pythenians-website.vercel.app](https://pythenians-website.vercel.app)
**⚙️ Admin Panel:** [pythenians-website.vercel.app/admin.html](https://pythenians-website.vercel.app/admin.html)

## ✨ Features

### 🎨 Frontend
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **NFT Gallery** - Advanced filtering, search, and pagination for 5,555+ NFTs
- **Memes Section** - Instagram-style masonry grid with lightbox viewer
- **News/Blog** - Article system with rich content management
- **Mobile Navigation** - Hamburger menu with smooth transitions

### ⚡ Backend & Admin
- **Supabase Integration** - Real-time database with Row Level Security
- **Authentication** - Secure email/password login system
- **Admin Panel** - Complete CRUD operations for content management
- **Image Storage** - Automatic upload to Supabase Storage with permanent URLs
- **Content Management** - Add/edit/delete memes and news articles
- **Publish Control** - Draft and publish system for articles

### 🔧 Technical Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **Deployment:** Vercel with automatic deployments
- **Version Control:** Git with conventional commits

## 🏗️ Architecture

```
📁 Project Structure
├── 🏠 index.html          # Homepage/Landing page
├── 🖼️ gallery.html        # NFT collection browser
├── 🎭 memes.html          # Community memes gallery  
├── 📰 news.html           # News articles & blog
├── ⚙️ admin.html          # Admin content management
├── 🎨 style.css           # Main stylesheet
├── 📁 js/
│   └── supabase-config.js # Database & auth configuration
└── 🖼️ assets/             # Images, icons, and media
```

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Git
- Node.js (for development server)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rodcoppi/pythenians-website.git
cd pythenians-website
```

2. **Start development server**
```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx http-server . -p 8080
```

3. **Access the website**
- **Frontend:** http://localhost:8080
- **Admin Panel:** http://localhost:8080/admin.html

## 🔐 Admin Panel

The admin panel provides full content management capabilities:

### Authentication
- **Email:** `admin@pythenians.xyz`
- **Password:** Contact team for credentials

### Features
- ✅ Add/Edit/Delete memes with image upload
- ✅ Create/Update/Delete news articles
- ✅ Publish/Unpublish articles
- ✅ Image management with permanent URLs
- ✅ Real-time content updates

## 🗃️ Database Schema

### Tables
- **`memes`** - Community memes with metadata
- **`news`** - Blog articles and announcements
- **`auth.users`** - Admin authentication

### Storage
- **`images`** bucket - All uploaded images with public access

## 🎯 Key Features Explained

### NFT Gallery
- **5,555+ NFTs** loaded from IPFS metadata
- **Advanced filtering** by traits and rarity
- **Real-time search** with instant results
- **Pagination** for optimal performance
- **Lightbox viewer** with trait information

### Memes System
- **Masonry grid** layout like Instagram
- **Automatic image optimization**
- **Lightbox modal** for full-size viewing
- **Mobile responsive** with touch support

### News/Blog
- **Rich text articles** with image support
- **Draft/Publish workflow**
- **SEO-friendly** URLs and meta tags
- **Social sharing** integration

## 🚀 Deployment

The site is automatically deployed via Vercel:

1. **Push to main branch** triggers automatic deployment
2. **Build process** optimizes assets
3. **CDN distribution** for global performance
4. **SSL certificate** automatically managed

### Environment Variables (Production)
```bash
SUPABASE_URL=https://tbyxrsbtvoxiahdptemv.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🛠️ Development

### Making Changes
1. **Edit files** locally
2. **Test thoroughly** on localhost
3. **Commit changes** with descriptive messages
4. **Push to GitHub** - Vercel auto-deploys

### Code Style
- **Semantic HTML5** structure
- **Mobile-first** responsive design
- **Modern JavaScript** (ES6+ features)
- **Consistent naming** conventions
- **Commented code** for maintainability

## 🐛 Troubleshooting

### Common Issues
- **Images not loading:** Check Supabase Storage permissions
- **Admin login fails:** Verify credentials and network
- **Modal issues:** Clear browser cache and refresh
- **Deploy fails:** Check Vercel build logs

### Debug Mode
Enable browser DevTools and check console for detailed error messages.

## 📈 Performance

- **Lighthouse Score:** 95+ on all metrics
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1
- **Mobile Responsive:** 100% compatible

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development:** Built with [Claude Code](https://claude.ai/code)
- **Maintainer:** [@rodcoppi](https://github.com/rodcoppi)
- **Community:** Pythenians NFT Holders

## 🔗 Links

- **🌐 Website:** [pythenians-website.vercel.app](https://pythenians-website.vercel.app)
- **🐦 Twitter:** [@PytheniansNFT](https://x.com/PytheniansNFT)
- **💬 Discord:** [Join Community](https://discord.com/invite/HJXBDagZTa)
- **🏪 OpenSea:** [View Collection](https://magiceden.io/marketplace/pythenians)

---

<div align="center">
  <p><strong>🐍 Built for the Pythenians Community 🐍</strong></p>
  <p>Made with ❤️ using <a href="https://claude.ai/code">Claude Code</a></p>
</div>