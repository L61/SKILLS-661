# Stardust Lumos UI / 星尘流光主题

深邃宇宙风格 + 液态玻璃设计的现代UI主题。

## 视觉特征

- **深邃背景**：深蓝到黑的径向渐变，营造宇宙深空感
- **星尘粒子**：80+ 呼吸脉动的微光尘埃
- **闪烁星辰**：150+ 随机分布的闪烁星星
- **漂浮星云**：3团朦胧光晕缓慢漂移
- **液态玻璃**：深色半透明卡片，带光泽边框和内发光

## 核心CSS

```css
/* ===== 基础背景 ===== */
body {
    margin: 0;
    min-height: 100vh;
    background: radial-gradient(ellipse at bottom, #0d1b2a 0%, #050811 50%, #020408 100%);
    overflow-x: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* ===== 星星 ===== */
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

/* ===== 宇宙尘埃（呼吸效果）===== */
.dust-particle {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 230, 255, 0.8) 0%, rgba(150, 200, 255, 0.4) 50%, transparent 100%);
    box-shadow: 0 0 6px rgba(180, 220, 255, 0.6), 0 0 12px rgba(140, 200, 255, 0.3);
    animation: breathe var(--breathe-duration) ease-in-out infinite,
               float-dust var(--float-duration) ease-in-out infinite;
}

@keyframes breathe {
    0%, 100% {
        opacity: var(--min-opacity);
        transform: scale(var(--min-scale));
    }
    50% {
        opacity: var(--max-opacity);
        transform: scale(var(--max-scale));
    }
}

@keyframes float-dust {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(var(--move-x1), var(--move-y1)); }
    50% { transform: translate(var(--move-x2), var(--move-y2)); }
    75% { transform: translate(var(--move-x3), var(--move-y3)); }
}

/* ===== 星云 ===== */
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

/* ===== 液态玻璃卡片 ===== */
.glass {
    background: rgba(20, 30, 48, 0.4);
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

/* 玻璃反光 */
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

/* 玻璃悬浮效果 */
.glass-hover {
    transition: all 0.3s ease;
}

.glass-hover:hover {
    background: rgba(30, 45, 70, 0.5);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* ===== 荧光文字 ===== */
.glow-text {
    text-shadow: 0 0 10px rgba(100, 200, 255, 0.5);
}

/* ===== 状态指示器 ===== */
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
```

## 完整HTML模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stardust Lumos UI</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* [粘贴上方完整CSS] */
    </style>
</head>
<body class="relative">
    <!-- 星星背景 -->
    <div class="stars" id="stars"></div>

    <!-- 宇宙尘埃 -->
    <div class="cosmic-dust" id="cosmicDust"></div>

    <!-- 星云 -->
    <div class="nebula" style="width:600px;height:600px;background:radial-gradient(circle,#4a90d9 0%,transparent 70%);top:10%;left:-10%;"></div>
    <div class="nebula" style="width:500px;height:500px;background:radial-gradient(circle,#6b4c9a 0%,transparent 70%);bottom:10%;right:-5%;animation-direction:reverse;"></div>

    <!-- 主内容 -->
    <div class="relative z-10">
        <!-- 在这里放置你的内容 -->
        <div class="glass rounded-2xl p-6 max-w-4xl mx-auto mt-20">
            <h1 class="text-2xl font-bold text-white glow-text">星尘流光主题</h1>
        </div>
    </div>

    <!-- 生成动态元素 -->
    <script>
        // 生成星星
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

        // 生成尘埃
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
</body>
</html>
```

## 使用指南

### 基础卡片
```html
<div class="glass glass-hover rounded-2xl p-6">
    <h2 class="text-xl font-bold text-white glow-text">标题</h2>
    <p class="text-gray-400">内容文字</p>
</div>
```

### 导航栏
```html
<nav class="fixed top-6 left-6 right-6 z-50">
    <div class="glass glass-hover rounded-2xl px-6 py-4 max-w-6xl mx-auto">
        <span class="text-lg font-semibold text-white glow-text">Logo</span>
    </div>
</nav>
```

### 主色调
- 背景深色文字：`text-white` + `glow-text`
- 次要文字：`text-gray-400`
- 弱化文字：`text-gray-500`
- 强调色：青色 `text-cyan-400` / `bg-cyan-500`
- 成功状态：绿色 `#4ade80`

## 文件位置

示例项目：`F:/coding/Nginx/nginx-1.26.3/html/index.html`
