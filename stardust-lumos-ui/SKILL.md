---
name: stardust-lumos-ui
description: This skill provides CSS and HTML templates for creating deep space themed UIs with liquid glass design. It should be used when implementing dark cosmic interfaces with animated starfields, breathing dust particles, and translucent glass-morphism cards.
---

# Stardust Lumos UI

Create immersive deep space themed interfaces combining cosmic aesthetics with liquid glass design.

## Overview

This skill enables rapid implementation of:

- Deep space backgrounds with radial gradients
- Animated starfields with twinkling effects
- Breathing cosmic dust particles
- Floating nebula clouds
- Liquid glass cards with backdrop blur

## When to Use

Use this skill when building:

- Dark themed dashboards or landing pages
- Space or cosmos-related applications
- Modern glass-morphism interfaces
- Immersive fullscreen experiences
- Futuristic or sci-fi themed UIs

## Visual System

### Background Layers (from back to front)

| Layer | Element | Z-Index | Description |
|-------|---------|---------|-------------|
| 1 | Deep gradient | - | Radial gradient from #0d1b2a to #020408 |
| 2 | Nebula clouds | 0 | 2-3 blurred color orbs with slow drift |
| 3 | Stars | 0 | 150 twinkling white dots |
| 4 | Cosmic dust | 0 | 80 breathing cyan particles |
| 5 | Content | 10 | Glass cards and UI elements |

### Color Palette

| Purpose | Value | Usage |
|---------|-------|-------|
| Background deep | `#020408` | Outer gradient stop |
| Background mid | `#0d1b2a` | Inner gradient stop |
| Glass background | `rgba(20, 30, 48, 0.4)` | Card fill |
| Glass border | `rgba(255, 255, 255, 0.1)` | Card borders |
| Primary text | `#ffffff` | Headlines |
| Secondary text | `#9ca3af` (gray-400) | Body text |
| Accent | `#22d3ee` (cyan-400) | Links, highlights |
| Success | `#4ade80` (green-400) | Status indicators |

## Implementation

### Step 1: Add Base Styles

Include the core CSS in the HTML head:

```html
<style>
body {
    margin: 0;
    min-height: 100vh;
    background: radial-gradient(ellipse at bottom, #0d1b2a 0%, #050811 50%, #020408 100%);
    overflow-x: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Star styling */
.star {
    position: absolute;
    background: white;
    border-radius: 50%;
    animation: twinkle var(--duration) ease-in-out infinite;
    animation-delay: var(--delay);
}

@keyframes twinkle {
    0%, 100% { opacity: var(--opacity); transform: scale(1); }
    50% { opacity: 0.2; transform: scale(0.8); }
}

/* Cosmic dust with breathing animation */
.dust-particle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 230, 255, 0.8) 0%, rgba(150, 200, 255, 0.4) 50%, transparent 100%);
    box-shadow: 0 0 6px rgba(180, 220, 255, 0.6), 0 0 12px rgba(140, 200, 255, 0.3);
    animation: breathe var(--breathe-duration) ease-in-out infinite,
               float-dust var(--float-duration) ease-in-out infinite;
}

@keyframes breathe {
    0%, 100% { opacity: var(--min-opacity); transform: scale(var(--min-scale)); }
    50% { opacity: var(--max-opacity); transform: scale(var(--max-scale)); }
}

@keyframes float-dust {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(var(--move-x1), var(--move-y1)); }
    50% { transform: translate(var(--move-x2), var(--move-y2)); }
    75% { transform: translate(var(--move-x3), var(--move-y3)); }
}

/* Nebula clouds */
.nebula {
    position: fixed;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.15;
    pointer-events: none;
    animation: float 30s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(30px, -30px); }
    66% { transform: translate(-20px, 20px); }
}

/* Liquid glass cards */
.glass {
    background: rgba(20, 30, 48, 0.4);
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.glass::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%);
    pointer-events: none;
}

.glass-hover {
    transition: all 0.3s ease;
}

.glass-hover:hover {
    background: rgba(30, 45, 70, 0.5);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* Glowing text */
.glow-text {
    text-shadow: 0 0 10px rgba(100, 200, 255, 0.5);
}

/* Status indicator */
.status-dot {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 10px #4ade80, 0 0 20px #4ade80;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}
</style>
```

### Step 2: Create Background Elements

Add the background container elements:

```html
<!-- Starfield -->
<div class="stars" id="stars"></div>

<!-- Cosmic dust -->
<div class="cosmic-dust" id="cosmicDust"></div>

<!-- Nebula clouds -->
<div class="nebula" style="width:600px;height:600px;background:radial-gradient(circle,#4a90d9 0%,transparent 70%);top:10%;left:-10%;"></div>
<div class="nebula" style="width:500px;height:500px;background:radial-gradient(circle,#6b4c9a 0%,transparent 70%);bottom:10%;right:-5%;animation-direction:reverse;"></div>
```

### Step 3: Generate Dynamic Particles

Add the JavaScript to generate stars and dust:

```html
<script>
    // Generate 150 stars
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${Math.random() * 2 + 1}px;
            height: ${Math.random() * 2 + 1}px;
            --duration: ${Math.random() * 3 + 2}s;
            --delay: ${Math.random() * 5}s;
            --opacity: ${Math.random() * 0.7 + 0.3};
        `;
        starsContainer.appendChild(star);
    }

    // Generate 80 dust particles
    const dustContainer = document.getElementById('cosmicDust');
    for (let i = 0; i < 80; i++) {
        const dust = document.createElement('div');
        dust.className = 'dust-particle';
        dust.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${Math.random() * 2 + 1}px;
            height: ${Math.random() * 2 + 1}px;
            --breathe-duration: ${Math.random() * 4 + 4}s;
            --float-duration: ${Math.random() * 20 + 30}s;
            --min-opacity: ${(Math.random() * 0.2 + 0.1).toFixed(2)};
            --max-opacity: ${(Math.random() * 0.4 + 0.4).toFixed(2)};
            --min-scale: ${(Math.random() * 0.3 + 0.5).toFixed(2)};
            --max-scale: ${(Math.random() * 0.5 + 1).toFixed(2)};
            --move-x1: ${Math.random() * 30 - 15}px;
            --move-y1: ${Math.random() * 30 - 15}px;
            --move-x2: ${Math.random() * 40 - 20}px;
            --move-y2: ${Math.random() * 40 - 20}px;
            --move-x3: ${Math.random() * 30 - 15}px;
            --move-y3: ${Math.random() * 30 - 15}px;
            animation-delay: ${Math.random() * 8}s;
        `;
        dustContainer.appendChild(dust);
    }
</script>
```

### Step 4: Build UI Components

Use the glass classes for UI elements:

```html
<!-- Navigation bar -->
<nav class="fixed top-6 left-6 right-6 z-50">
    <div class="glass glass-hover rounded-2xl px-6 py-4 max-w-6xl mx-auto">
        <span class="text-lg font-semibold text-white glow-text">Logo</span>
    </div>
</nav>

<!-- Content card -->
<div class="glass glass-hover rounded-2xl p-6 max-w-4xl mx-auto mt-20">
    <h1 class="text-2xl font-bold text-white glow-text">Title</h1>
    <p class="text-gray-400">Content description</p>
</div>

<!-- Status badge -->
<div class="flex items-center gap-2 px-4 py-2 glass rounded-full">
    <div class="status-dot"></div>
    <span class="text-sm font-medium text-gray-300">Active</span>
</div>
```

## Animation Parameters

### Stars (150 particles)

| Property | Range | Description |
|----------|-------|-------------|
| Size | 1-3px | Random diameter |
| Duration | 2-5s | Twinkle cycle length |
| Opacity | 0.3-1.0 | Peak brightness |

### Dust (80 particles)

| Property | Range | Description |
|----------|-------|-------------|
| Size | 1-3px | Random diameter |
| Breathe duration | 4-8s | Opacity/scale cycle |
| Float duration | 30-50s | Drift movement cycle |
| Min opacity | 0.1-0.3 | Dim state |
| Max opacity | 0.4-0.8 | Bright state |
| Min scale | 0.5-0.8 | Small state |
| Max scale | 1.0-1.5 | Large state |

### Nebula (2-3 clouds)

| Property | Value | Description |
|----------|-------|-------------|
| Size | 400-600px | Diameter |
| Blur | 100px | Softness |
| Opacity | 0.15 | Transparency |
| Float duration | 25-35s | Movement cycle |

## Best Practices

1. **Layer content above backgrounds**: Use `z-10` or higher for content containers
2. **Disable pointer events on backgrounds**: Background elements use `pointer-events: none` to prevent interaction blocking
3. **Use GPU-accelerated properties**: Animate only `transform` and `opacity` for smooth performance
4. **Ensure text contrast**: Always use bright text (`text-white` or `text-gray-300`) on dark glass backgrounds
5. **Limit particle count**: Keep total animated elements under 300 for optimal performance

## Dependencies

- Tailwind CSS (optional but recommended for utility classes)
- Inter font family (optional, fallback to system fonts)

## Example Projects

Reference implementation: `F:/coding/Nginx/nginx-1.26.3/html/index.html`
