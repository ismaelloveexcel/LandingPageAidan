# Design Guidelines: Aidan's Vault

## Design Approach
Horror-themed gaming portal inspired by Stranger Things, Squid Game, and dark sci-fi aesthetics. Focus on atmospheric mystery with subtle interactive elements that create an immersive, vault-like experience.

## Color Palette
- **Primary Background**: Dark navy-black (#0b0e14) with radial gradient from #141a2a
- **Accent Red**: Deep crimson (#9b1c2b) for emphasis and danger cues
- **Muted Text**: Cool gray (#7a8394) for secondary information
- **Glass Morphism**: White overlays at 5-8% opacity with subtle borders

## Typography
- **System Font Stack**: system-ui, -apple-system, Segoe UI (native, crisp rendering)
- **Main Title**: 2.2rem with 0.15em letter spacing, uppercase
- **Subtitles**: 0.75rem with 0.3em letter spacing for futuristic feel
- **Tile Labels**: 0.65rem with 0.2em letter spacing
- **Footer Code**: 1.7rem with 0.15em spacing for "001" style

## Layout System
**Tailwind Spacing Units**: Primarily p-4, p-6, m-12, gap-4, gap-5 (16px, 24px, 48px, 16px, 20px)

**Breakpoint Strategy**:
- Mobile: Single column, 90% width, max 420px
- Desktop (768px+): Two-column grid, max 720px

## Core Components

### Header
Centered title with experimental subtitle, top margin of 48px

### Squid Game Divider
Horizontal symbols (◯ △ ⬜) with 14px spacing, 60% opacity, positioned between header and content

### App Tiles
- Glass morphism cards with rounded corners (18px top-left/right, 14px bottom-left, 18px bottom-right for asymmetry)
- 22px padding, 18px gap between tiles
- Hover: Lift 4px upward with 1.02 scale
- Pulsing red glow animation (14s, 18s, 22s varied durations)
- Each tile shows title + category label below

### Footer
Right-aligned "001" code with "ACCESS LEVEL" subtitle, bottom margin 36px, right padding 32px

## Decorative Elements

### Demogorgon Silhouette
- Fixed position: right side, 18% from top
- Large background element (300px × 460px mobile, 420px × 620px desktop)
- 28% opacity, extends beyond viewport edge
- Glowing red eyes (36px × 14px) that activate on tile hover/touch
- Eyes use radial gradient blur effect

### Bat Element
- Fixed position: bottom-left (18px left, 110px bottom)
- 140px × 50px, 60% opacity
- Subtle rotation on hover (-6deg, 1.05 scale)

## Images
**No hero image used.** Design relies on atmospheric backgrounds and silhouette decorative elements.

**Image Requirements**:
1. **demogorgon-silhouette.png**: Dark creature silhouette with open petal-head, menacing stance
2. **bat.png**: Side-view bat with spread wings, simplified silhouette style

Both images should be dark with transparent backgrounds, designed to blend into the dark theme.

## Animations
- **Tile Pulse**: Infinite red glow (0-14px spread) with varied durations for organic feel
- **Tile Hover**: Smooth spring easing (cubic-bezier .17,.67,.45,1.32) for playful lift
- **Eye Glow**: 350ms fade-in/out on interaction
- **Bat Rotation**: 600ms ease on hover

## Interaction Design
- Demogorgon eyes "awaken" when hovering any app tile (reactive environment)
- Admin code "001" is clickable for authentication flow
- All tiles are tappable/clickable with immediate visual feedback
- Touch events supported alongside mouse for mobile

## Accessibility
- Semantic HTML structure (header, main, footer)
- Sufficient contrast for all text elements
- Focus states inherit hover transforms
- Touch targets minimum 44px (tiles exceed this)
- System font for optimal readability

## Visual Hierarchy
1. Main title (largest, centered)
2. Squid Game divider (visual break)
3. App tiles (primary interactive elements)
4. Decorative creatures (atmospheric depth)
5. Admin footer (subtle authority indicator)

Maintain z-index layering: Background (0) → Bat (1) → Tiles (2)