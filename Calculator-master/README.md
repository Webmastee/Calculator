# CyberForgeX Gaming Systems Showcase

A modern, interactive gaming systems showcase website featuring a Swiper.js slider with dynamic product data population, inspired by the Starforge Systems website.

## Features

- **Interactive Slider**: Swiper.js powered slider with smooth transitions
- **Dynamic Product Data**: Product specifications update automatically when slides are clicked
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Dark theme with gradient accents and glassmorphism effects
- **Smooth Animations**: CSS transitions and JavaScript animations for enhanced UX
- **Touch Support**: Swipe gestures for mobile devices
- **Keyboard Navigation**: Arrow keys for slide navigation

## How It Works

### Slider Functionality
1. **Swiper.js Integration**: The slider is powered by Swiper.js with custom configuration
2. **Product Data**: Each slide contains a `data-system` attribute that corresponds to product data
3. **Dynamic Updates**: When a slide is clicked or changed, the product details panel updates automatically
4. **Smooth Transitions**: CSS transitions provide smooth visual feedback

### Product Data Structure
Each system has the following data structure:
```javascript
{
  name: "System Name",
  tagline: "System Tagline",
  processor: "CPU Model",
  graphics: "GPU Model",
  memory: "RAM Specification",
  storage: "Storage Details",
  cooling: "Cooling Solution",
  power: "Power Supply",
  price: "Price"
}
```

### Key Features
- **Click to Update**: Click any slide to update the product details
- **Auto-play**: Slider automatically advances every 5 seconds
- **Navigation**: Arrow buttons and pagination dots
- **Responsive**: Adapts to different screen sizes
- **Touch Support**: Swipe gestures on mobile devices

## File Structure

```
├── index.html          # Main HTML file
├── styles/
│   └── main.css       # Custom styles and Swiper customization
├── scripts/
│   └── main.js        # Swiper initialization and product data logic
└── assets/            # Images and icons
```

## Customization

### Adding New Systems
1. Add a new slide in the HTML with a unique `data-system` attribute
2. Add corresponding product data in the `productData` object in `main.js`
3. Update the system image and styling as needed

### Styling
- Modify `main.css` to change colors, fonts, and layout
- Swiper customization is included in the CSS file
- Responsive breakpoints can be adjusted

### Product Data
- Edit the `productData` object in `main.js` to update specifications
- Add new fields as needed for additional product information

## Browser Support
- Modern browsers with ES6+ support
- Mobile browsers with touch support
- Responsive design for all screen sizes

## Dependencies
- Swiper.js (loaded via CDN)
- Google Fonts (Inter)
- No additional build tools required

## Usage
Simply open `index.html` in a web browser to view the showcase. The slider will automatically initialize and product data will update when slides are interacted with.
