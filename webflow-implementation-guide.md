# Webflow Product Image Glow Effect - Starforge Style

## Overview
This guide shows you how to replicate the stunning glowing effect from Starforge Systems' website on your Webflow product images. The effect uses CSS `drop-shadow` filters with custom properties for maximum flexibility and performance.

## Quick Start

### 1. Add CSS to Webflow
1. Go to your **Webflow Project Settings**
2. Navigate to **Custom Code > Head Code**
3. Add this CSS between `<style>` tags:

```css
<style>
/* Starforge-style glow effect for product images */
.glow {
    --diffuse: 4rem;
    --rise: 0rem;
    --glow: rgba(255, 255, 255, 0.8);
    --hover-glow: white;
    --dim: 1;
    
    -webkit-filter: drop-shadow(0 calc(var(--rise, 0) * var(--dim, 1)) calc(var(--diffuse, 4rem) * 0.75 * var(--dim, 1)) var(--glow, rgba(255, 255, 255, 0.8)));
    filter: drop-shadow(0 calc(var(--rise, 0) * var(--dim, 1)) calc(var(--diffuse, 4rem) * 0.75 * var(--dim, 1)) var(--glow, rgba(255, 255, 255, 0.8)));
    
    -webkit-transition: -webkit-filter 0.3s linear;
    transition: filter 1s cubic-bezier(0.4, 0, 0.2, 1);
    
    will-change: filter;
    transform: translateZ(0);
}

.glow:hover {
    -webkit-filter: drop-shadow(0 calc(var(--rise, 0) * var(--dim, 1)) calc(var(--diffuse, 4rem) * var(--dim, 1)) var(--hover-glow, white));
    filter: drop-shadow(0 calc(var(--rise, 0) * var(--dim, 1)) calc(var(--diffuse, 4rem) * var(--dim, 1)) var(--hover-glow, white));
    transition: filter 0.3s cubic-bezier(0.8, 0, 0.6, 1);
}

/* Color variations */
.glow-cyan {
    --glow: rgba(0, 181, 255, 0.51);
    --hover-glow: rgba(0, 181, 255, 0.76);
}

.glow-green {
    --glow: rgba(0, 255, 102, 0.47);
    --hover-glow: rgba(0, 255, 102, 0.72);
}

.glow-purple {
    --glow: rgba(166, 0, 255, 0.58);
    --hover-glow: rgba(166, 0, 255, 0.83);
}

.glow-red {
    --glow: rgba(214, 62, 73, 0.54);
    --hover-glow: rgba(214, 62, 73, 0.79);
}

.glow-pink {
    --glow: rgba(254, 177, 255, 0.41);
    --hover-glow: rgba(254, 177, 255, 0.66);
}

.glow-orange {
    --glow: rgba(255, 135, 45, 0.48);
    --hover-glow: rgba(255, 135, 45, 0.73);
}
</style>
```

### 2. Apply to Product Images
1. Select your product image in Webflow
2. In the **Element Settings** panel, go to **Classes**
3. Add the base class: `glow`
4. Add a color class (e.g., `glow-cyan`, `glow-green`, etc.)

## Color Options

| Class | Color | Use Case |
|-------|-------|----------|
| `glow-cyan` | Blue glow | Classic Starforge style |
| `glow-green` | Green glow | Starforge signature color |
| `glow-purple` | Purple glow | Premium products |
| `glow-red` | Red glow | High-performance products |
| `glow-pink` | Pink glow | Aesthetic products |
| `glow-orange` | Orange glow | Warm products |

## Advanced Customization

### Custom Inline Styles
For precise control, add inline styles to individual images:

```html
style="--diffuse: 4rem; --rise: 0rem; --glow: rgba(0, 181, 255, 0.51); --hover-glow: rgba(0, 181, 255, 0.76);"
```

### CSS Custom Properties Explained

- **`--diffuse`**: Controls blur radius (default: `4rem`)
- **`--rise`**: Controls vertical offset (default: `0rem`)
- **`--glow`**: Sets glow color and opacity
- **`--hover-glow`**: Sets hover state color
- **`--dim`**: Multiplier for intensity (default: `1`)

### Advanced Effects

#### Neon Effect
Add the `neon` class for an intense glow:

```css
.neon {
    -webkit-filter: drop-shadow(0 0 var(--diffuse, 0.5rem) var(--glow, white)) drop-shadow(0 0 0 var(--glow, white));
    filter: drop-shadow(0 0 var(--diffuse, 0.5rem) var(--glow, white)) drop-shadow(0 0 0 var(--glow, white));
    transition: filter 0.1s linear;
}
```

#### Glare Effect
Add the `glare` class for multiple layered glow:

```css
.glare {
    -webkit-filter: drop-shadow(0 calc(var(--rise, 0) * var(--dim, 1)) calc(var(--diffuse, 4rem) * 0.75 * var(--dim, 1)) var(--glow, rgba(255, 255, 255, 0.8))) drop-shadow(0 calc(var(--rise, 0) * var(--dim, 1)) calc(var(--diffuse, 4rem) * 0.5 * var(--dim, 1)) var(--glow, rgba(255, 255, 255, 0.8)));
    filter: drop-shadow(0 calc(var(--rise, 0) * var(--dim, 1)) calc(var(--diffuse, 4rem) * 0.75 * var(--dim, 1)) var(--glow, rgba(255, 255, 255, 0.8))) drop-shadow(0 calc(var(--rise, 0) * var(--dim, 1)) calc(var(--diffuse, 4rem) * 0.5 * var(--dim, 1)) var(--glow, rgba(255, 255, 255, 0.8)));
}
```

## Performance Optimization

The implementation includes several optimizations:

- **GPU Acceleration**: Uses `will-change: filter` and `transform: translateZ(0)`
- **Smooth Transitions**: Cubic-bezier easing for natural animations
- **Efficient Filters**: Optimized drop-shadow filters
- **Browser Compatibility**: Includes webkit prefixes

## Troubleshooting

### Glow Not Appearing
1. Check that the CSS is properly added to the Head Code section
2. Verify the classes are applied to the image element
3. Ensure the image has proper dimensions

### Performance Issues
1. Reduce the `--diffuse` value for less intensive effects
2. Use fewer images with glow effects on mobile
3. Consider using `neon` class for simpler effects

### Browser Compatibility
- **Chrome/Safari**: Full support
- **Firefox**: Full support
- **Edge**: Full support
- **IE**: Limited support (consider fallbacks)

## Examples

### Basic Implementation
```html
<img src="product-image.jpg" class="glow glow-cyan" alt="Product">
```

### Custom Styling
```html
<img src="product-image.jpg" 
     class="glow glow-green" 
     style="--diffuse: 3rem; --rise: -0.5rem;"
     alt="Product">
```

### Advanced Effect
```html
<img src="product-image.jpg" 
     class="glow glow-purple neon" 
     style="--diffuse: 0.5rem; --glow: white; --hover-glow: #a600ff;"
     alt="Product">
```

## Color Palette Reference

| Color | RGBA Value | Hex Equivalent |
|-------|------------|----------------|
| Cyan | `rgba(0, 181, 255, 0.51)` | `#00b5ff` |
| Green | `rgba(0, 255, 102, 0.47)` | `#00ff66` |
| Purple | `rgba(166, 0, 255, 0.58)` | `#a600ff` |
| Red | `rgba(214, 62, 73, 0.54)` | `#d63e49` |
| Pink | `rgba(254, 177, 255, 0.41)` | `#feb1ff` |
| Orange | `rgba(255, 135, 45, 0.48)` | `#ff872d` |

## Tips for Best Results

1. **Use PNG images** with transparent backgrounds for best glow effects
2. **Test on different devices** to ensure consistent performance
3. **Match glow colors** to your brand palette
4. **Consider mobile performance** - use lighter effects on smaller screens
5. **Layer effects** - combine with other hover effects for enhanced UX

## Support

This implementation is based on the actual CSS used by Starforge Systems and has been optimized for Webflow compatibility. The effect works with any image format and is fully responsive.