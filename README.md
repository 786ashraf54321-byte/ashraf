# CareerConnect - Job Provider & Course Platform

A comprehensive job provider application similar to LinkedIn with integrated course enrollment features, built with React and modern web technologies.

## 🚀 Features

### Job Platform
- **Job Search & Discovery**: Browse thousands of job opportunities
- **Advanced Filtering**: Filter by location, job type, and keywords
- **Job Details**: Comprehensive job information with requirements and benefits
- **Quick Apply**: One-click job application system
- **Company Profiles**: Detailed company information and culture

### Course Platform
- **Live Course Enrollments**: Interactive live classes for various programs
- **Course Categories**: BBA, BCA, B.Tech, AI/ML, and many more
- **Affordable Pricing**: All courses priced at ₹1,199
- **Live Class Indicators**: Real-time live session notifications
- **Course Management**: Detailed curriculum and instructor information

### Resume Services
- **Resume Upload**: Multiple resume management system
- **Resume Builder**: AI-powered professional resume creation
- **Resume Builder Pricing**: ₹299 for professional resume building service
- **Resume Management**: Set primary resume, download, and organize

### User Features
- **Professional Profiles**: Complete user profile management
- **Skill Showcase**: Display skills and experience
- **Application Tracking**: Monitor job applications and course enrollments
- **Responsive Design**: Mobile-first responsive interface

## 🛠️ Technology Stack

- **Frontend**: React 18 with Hooks
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📱 Course Programs Available

| Program | Duration | Price | Features |
|---------|----------|-------|----------|
| **BBA** | 3 Years | ₹1,199 | Business Administration, Live Classes |
| **BCA** | 3 Years | ₹1,199 | Computer Applications, Live Classes |
| **B.Tech** | 4 Years | ₹1,199 | Computer Science, Live Classes |
| **AI & ML** | 2 Years | ₹1,199 | Artificial Intelligence, Live Classes |
| **Digital Marketing** | 6 Months | ₹1,199 | Marketing Masterclass, Live Classes |
| **UI/UX Design** | 8 Months | ₹1,199 | Design Fundamentals, Live Classes |
| **Data Science** | 1.5 Years | ₹1,199 | Analytics & ML, Live Classes |

## 💰 Pricing

- **Course Enrollments**: ₹1,199 per course
- **Resume Builder**: ₹299 (50% OFF from ₹599)
- **Live Classes**: Included with all course enrollments
- **Certificates**: Included with all course enrollments

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd job-provider-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── CourseCard.jsx  # Course display card
│   └── JobCard.jsx     # Job display card
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Jobs.jsx        # Job listings page
│   ├── Courses.jsx     # Course catalog page
│   ├── Profile.jsx     # User profile page
│   ├── CourseDetail.jsx # Individual course page
│   └── JobDetail.jsx   # Individual job page
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design inspired by LinkedIn
- **Responsive Layout**: Mobile-first responsive design
- **Interactive Elements**: Hover effects, animations, and transitions
- **Color Scheme**: Professional blue and accent color palette
- **Typography**: Modern, readable font hierarchy
- **Icons**: Consistent iconography using Lucide React

## 🔧 Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue shades (#3b82f6, #2563eb, #1d4ed8)
- Secondary: Gray shades (#64748b, #475569, #334155)
- Accent: Yellow shades (#eab308, #ca8a04, #a16207)

### Components
All components are built with Tailwind CSS classes and can be easily customized by modifying the CSS classes or extending the Tailwind configuration.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the SPA correctly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: support@careerconnect.com
- Phone: +91 1800-123-4567
- Website: [careerconnect.com](https://careerconnect.com)

## 🙏 Acknowledgments

- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Inspiration**: LinkedIn, Coursera, and modern job platforms

---

**Built with ❤️ for career growth and professional development**