# Plan: JEE Formula Sheets - RealSem v1

> Source PRD: https://github.com/realsem-edtech/jee-apps/issues/1

## Architectural decisions

Durable decisions that apply across all phases:

- **Navigation routes:** Home (chapter list) → ChapterDetail (formula list) → FormulaDetail (single formula). Bookmarks tab. Settings screen for theme toggle.
- **Data models:** Chapter (id, name, subject, order) and Formula (id, chapterId, name, equation, contentType, variables, useCases, tags)
- **Content storage:** Bundled JSON files per chapter + SVG assets directory for organic structural diagrams
- **Local persistence:** AsyncStorage — bookmarks stored as array of formula IDs, theme preference as "system" | "light" | "dark"
- **Third-party boundaries:** AdMob (banner ads, SDK only), Mixpanel (analytics, SDK only) — no server dependencies

---

## Phase 1: One Chapter, End-to-End

**User stories**: 1, 2, 3, 15, 16, 18

### What to build

Scaffold the Expo + Turborepo monorepo. Bundle one Physical Chemistry chapter (e.g., Thermodynamics) as JSON content. Implement the full Content Data Layer with all four query functions (getChapters, getFormulasByChapter, searchFormulas, getFormulaById). Build the complete navigation flow: home screen showing the chapter → tap into chapter to see formula list → tap a formula to see full detail with LaTeX-rendered equation, variable definitions, and use cases. The app should feel like a real product after this phase — clean UI, smooth scrolling, proper typography.

### Acceptance criteria

- [ ] Expo + Turborepo monorepo scaffolded and builds successfully
- [ ] One Physical Chemistry chapter with 5+ formulas bundled as JSON
- [ ] Home screen displays the chapter with its name
- [ ] Tapping a chapter shows its formula list
- [ ] Tapping a formula shows full detail: name, LaTeX equation, variables, use cases
- [ ] LaTeX renders correctly for Physical Chemistry equations
- [ ] Content Data Layer query functions work and are unit tested
- [ ] App runs on Android emulator or device without crashes
- [ ] UI is clean, modern, and uses the defined color scheme (blue #1A56DB, orange #F97316)

---

## Phase 2: Full Content + Organic/Inorganic Rendering

**User stories**: 4, 5, 17, 21, 22, 24

### What to build

Generate and bundle all NCERT Class 11 and 12 Chemistry chapter content — Physical, Organic, and Inorganic. Add SVG rendering support for Organic Chemistry structural diagrams (bundled SVG assets displayed in FormulaCard). Add structured table rendering for Inorganic Chemistry content (periodic trends, solubility rules, properties). Home screen now shows all chapters with formula count per chapter. The app is now content-complete for JEE Chemistry.

### Acceptance criteria

- [ ] All NCERT Class 11 chapters bundled with complete formula sets
- [ ] All NCERT Class 12 chapters bundled with complete formula sets
- [ ] Organic Chemistry formulas display SVG structural diagrams correctly
- [ ] Inorganic Chemistry content renders as structured tables where appropriate
- [ ] Each chapter on home screen shows formula count
- [ ] All three content types (latex, svg, table) render correctly in FormulaCard
- [ ] Content reviewed and approved by domain expert (founder)
- [ ] App performance remains smooth with full content loaded (~150-300 formulas)

---

## Phase 3: Search

**User stories**: 6, 7, 23

### What to build

Build a pre-built search index from all bundled content at build time. Add a search screen accessible from the home screen. Full-text search across formula names, equations, variables, use cases, and tags. Results are ranked by relevance (exact name match > partial name > variable match > tag match). Tapping a search result navigates to that formula's detail view. Search module is unit tested.

### Acceptance criteria

- [ ] Search screen with text input field accessible from home
- [ ] Search returns results across all indexed fields (name, equation, variables, use cases, tags)
- [ ] Results are ranked by relevance
- [ ] Tapping a result navigates to the formula detail view
- [ ] Empty query shows no results (or recent searches)
- [ ] Search is fast (<100ms) against bundled content
- [ ] Special characters in queries do not crash the app
- [ ] Search module is unit tested

---

## Phase 4: Bookmarks

**User stories**: 8, 9, 10

### What to build

Add a bookmark toggle (icon) on each FormulaCard and formula detail view. Tapping it saves/removes the formula ID to AsyncStorage. Add a dedicated Bookmarks tab/screen that shows all bookmarked formulas. Bookmarks persist across app restarts. Empty bookmarks screen shows a helpful message.

### Acceptance criteria

- [ ] Bookmark toggle icon visible on each formula card and detail view
- [ ] Tapping bookmark saves formula ID to AsyncStorage
- [ ] Tapping again removes the bookmark
- [ ] Dedicated Bookmarks screen shows all bookmarked formulas
- [ ] Bookmarks persist across app restarts
- [ ] Empty bookmarks screen shows a helpful message
- [ ] Tapping a bookmarked formula navigates to its detail view

---

## Phase 5: Dark Mode

**User stories**: 12, 13, 14

### What to build

Implement theme system that detects the device's system theme (light/dark) and applies it automatically. Add a manual override toggle in a Settings screen (accessible from home). Three options: System (default), Light, Dark. Persist the user's choice to AsyncStorage. All screens — home, chapter list, formula detail, search, bookmarks — respond to theme changes consistently. LaTeX and SVG content must remain legible in both themes.

### Acceptance criteria

- [ ] App detects system theme and applies it on launch
- [ ] Settings screen with theme toggle (System / Light / Dark)
- [ ] Manual override persists across app restarts
- [ ] All screens render correctly in both light and dark themes
- [ ] LaTeX content is legible in dark mode (light text on dark background)
- [ ] SVG diagrams are visible in dark mode
- [ ] Color scheme adapts consistently (primary blue, accent orange work in both themes)

---

## Phase 6: AdMob + Analytics + Ship

**User stories**: 11, 15, 19, 20

### What to build

Integrate AdMob SDK and display banner ads on the home screen and chapter view screens. Ads should not appear on formula detail view to keep the reading experience clean. If an ad fails to load, show nothing (no blank space). Integrate Mixpanel SDK and track 6 events: app_opened, chapter_viewed, formula_viewed, search_performed, bookmark_toggled, theme_changed. Do a performance pass — lazy load SVGs, optimize FlatList rendering, ensure smooth scrolling with full content. Configure EAS Build for Android (APK for testing, AAB for Play Store). Build the release and prepare for Play Store submission.

### Acceptance criteria

- [ ] AdMob banner ads display on home screen and chapter view
- [ ] No ads on formula detail, search, or bookmarks screens
- [ ] Failed ad loads gracefully show nothing
- [ ] Test ad units work in development, production units configured for release
- [ ] Mixpanel SDK initialized on app start
- [ ] All 6 analytics events fire correctly
- [ ] App scrolls smoothly with all content loaded
- [ ] SVGs lazy-load without jank
- [ ] EAS Build produces a working Android AAB
- [ ] App is ready for Play Store submission
