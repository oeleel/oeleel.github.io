# Personal Website

A modern, accessible personal portfolio website built with React and Vite. Features smooth scrolling, theme switching, and responsive design.

## Features

- 🎨 **Dark/Light Theme Toggle** - Automatically detects system preference
- 📱 **Responsive Design** - Works perfectly on all devices
- ♿ **Accessibility First** - ARIA labels, keyboard navigation, focus management
- 🚀 **Performance Optimized** - Lazy loading, intersection observers
- 🎯 **Smooth Scrolling** - Section-based navigation with scroll snap
- ⌨️ **Keyboard Navigation** - PageUp/PageDown and Space bar navigation
- 📝 **Contact Form** - With validation and toast notifications
- 🖼️ **Project Showcase** - Modal-based project details

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Header.jsx
│   ├── Modal.jsx
│   ├── Section.jsx
│   ├── Tag.jsx
│   ├── ThemeToggle.jsx
│   ├── Toast.jsx
│   ├── InputField.jsx
│   ├── ProjectCard.jsx
│   └── Footer.jsx
├── sections/            # Page sections
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── styles/              # CSS files
│   ├── tokens.css      # Design system variables
│   └── globals.css     # Global styles
├── data/                # Content data
│   └── content.json    # Site content and configuration
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Customization

### 1. Update Content

Edit `src/data/content.json` to customize:
- Personal information (name, tagline, summary)
- Skills and expertise
- Project details
- Contact information
- Social media links

### 2. Add Projects

Add new projects to the `projects` array in `content.json`:

```json
{
  "title": "Project Name",
  "image": "/images/project.jpg",
  "srcset": "/images/project-480.jpg 480w, /images/project-800.jpg 800w, /images/project-1200.jpg 1200w",
  "tags": ["React", "Node.js"],
  "summary": "Brief project description",
  "details": "Detailed project explanation with problem, approach, and impact",
  "links": {
    "demo": "https://demo-url.com",
    "code": "https://github.com/username/repo"
  }
}
```

### 3. Customize Styling

- **Colors & Theme**: Edit CSS variables in `src/styles/tokens.css`
- **Layout & Components**: Modify styles in `src/styles/globals.css`
- **Typography**: Adjust font sizes and families in the CSS variables

### 4. Add Images

1. Place project images in the `public/images/` directory
2. Create multiple sizes for responsive images:
   - 480w for mobile
   - 800w for tablet
   - 1200w for desktop
3. Update the `srcset` in your project data

## Accessibility Features

- **Skip Links**: Press Tab to access skip navigation
- **Keyboard Navigation**: Use PageUp/PageDown or Space+Shift for section navigation
- **Focus Management**: Proper focus trapping in modals
- **Screen Reader Support**: ARIA labels and live regions
- **Reduced Motion**: Respects user's motion preferences

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Lazy Loading**: Images load as they come into view
3. **Code Splitting**: Components are loaded on demand
4. **Minification**: Production build is automatically optimized

## Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages
1. Add to `package.json`:
   ```json
   "homepage": "https://username.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
2. Install: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this template for your own projects!

## Credits

Built with:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- Modern CSS features (Grid, Flexbox, CSS Variables)
- Intersection Observer API
