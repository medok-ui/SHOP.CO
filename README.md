# 🛍️ Shop.co — Fashion E-Commerce App

> ⚠️ **This is a DEMO version.** The project is actively in development — many improvements, fixes, and new features are planned. The current build is not final.

---

## 📌 About the Project

**Shop.co** is a modern fashion e-commerce web application built with **Angular 17+** using the latest Angular features such as signals, computed values, and OnPush change detection strategy throughout the entire codebase.

The app simulates a real online clothing store with product browsing, detailed product pages, a shopping cart with order summary, customer reviews, and more.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| Angular 17+ | Core framework |
| TypeScript | Language |
| SCSS | Styling |
| Angular Signals | Reactive state management |
| Angular Router | Client-side routing |
| LocalStorage | Cart persistence |
| OnPush CD | Performance optimization |

---

## 📄 Pages

### ✅ Currently Available

#### 🏠 Home (`/home`)
The landing page featuring:
- **Hero section** — bold call-to-action with key stats (200+ brands, 2000+ products, 30k+ customers)
- **Brands strip** — animated scrolling banner with partner brand logos
- **New Arrivals** — product grid filtered by `isNew` flag, loads 4 at a time with "View All"
- **Top Selling** — same pattern filtered by `isTopSelling`
- **Browse by Style** — visual category grid (Casual, Formal, Party, Gym) with background images
- **Testimonials** — horizontally scrollable customer review cards with navigation arrows
- **Footer** — newsletter signup, nav links, social media, payment method icons

#### 📦 Product Detail (`/product/:id`)
Full product page including:
- Thumbnail gallery + main product image
- Product name, rating, stars, review count
- Price / original price / discount badge
- Description text
- Color selector (with active state)
- Size selector (Small / Medium / Large / X-Large)
- Quantity control (increment/decrement)
- "Add to Cart" button with feedback state
- **All Reviews** section with sorting (Most Recent, Highest/Lowest Rating), pagination ("Load More"), and ability to hide individual reviews
- **Recommended for You** — 4 top-selling products

#### 🛒 Cart (`/cart`)
Shopping cart page with:
- Cart items list (image, name, size, color, price, quantity controls, remove button)
- **Order Summary** panel with subtotal, discount, delivery fee, and total
- Promo code input (`MedokTop` — removes delivery fee)
- Empty cart state with friendly message
- Cart data persisted in **localStorage**

### 🔜 Planned Pages

#### 🎟️ Promo / Offers Page *(coming soon)*
A dedicated page for promotional offers, discount codes, and seasonal sales. Will include featured deals, coupon management, and personalized offer banners.

#### + More pages in progress...

---

## 🧩 Components Overview

| Component | Description |
|---|---|
| `app-header` | Navigation bar with logo, nav links, search input, cart & user buttons |
| `app-footer` | Full footer with newsletter, links, socials, payment icons |
| `app-home-hero` | Hero section with stats |
| `app-brands-section` | Animated brand logo strip |
| `app-product-card` | Reusable product card (name, stars, price, discount) |
| `app-product-section` | New Arrivals grid with load more |
| `app-product-top-selling` | Top Selling grid with load more |
| `app-product-details` | Full product detail view |
| `app-dress-style-browse` | Style category grid |
| `app-testimonials` | Scrollable testimonial cards |
| `app-review-list` | Filterable, paginated review list |
| `app-review-card` | Individual review card (with delete option) |
| `app-cart-list` | List of cart items |
| `app-cart-item` | Single cart item with quantity control |
| `app-order-summary` | Order totals + promo code |
| `app-newsletter` | Email newsletter signup |
| `app-recommendations` | "Recommended for You" product grid |
| `button[appButton]` | Shared button component (attribute directive style) |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── components/         # All reusable UI components
│   ├── pages/              # Route-level page components
│   │   ├── home/
│   │   ├── product-detail/
│   │   └── cart/
│   ├── data/               # Static mock data (products, reviews, cart)
│   ├── interfaces/         # TypeScript interfaces
│   ├── service/            # CartService (signals-based)
│   └── shared/             # Shared UI (button, etc.)
├── assets/
│   ├── images/             # Product images, hero, category backgrounds
│   ├── svg/                # Icons (stars, arrows, payment methods, etc.)
│   └── fonts/              # Satoshi, DM Sans, Integral CF
```

---

## ⚙️ Running Locally

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Navigate to
http://localhost:4200
```

---

## 🛒 Cart & State Management

The cart is managed entirely via **Angular Signals** in `CartService`:

- `cartProduct` signal — reactive list of cart items
- `subtotal`, `discount`, `deliveryFee`, `total` — all computed signals
- `orderSummary` — computed array fed directly to the Order Summary component
- Data is persisted automatically to **localStorage** via an `effect()`
- Promo code `MedokTop` zeroes out the delivery fee

---

## 📋 Known Limitations (Demo)

- Product images are static local assets — no real backend
- No authentication / user accounts
- No real checkout flow
- Search input is UI-only (not functional yet)
- No mobile/responsive layout yet
- Review system is client-side only (deletes reset on refresh)
- Promo code is hardcoded (`MedokTop`)

---

## 🔮 Roadmap

- [ ] Promo / Offers page
- [ ] Mobile responsive layout
- [ ] Functional search
- [ ] Authentication (login/register)
- [ ] Real checkout flow
- [ ] Backend integration / API
- [ ] Wishlist feature
- [ ] More product filters and category pages

---

## 💡 Developer Notes

The project makes consistent use of Angular's modern reactivity model (`signal`, `computed`, `effect`) instead of traditional RxJS streams for local state — keeping components simple and predictable. The `OnPush` change detection strategy is applied across all components for performance. The shared `button[appButton]` attribute selector pattern is a clean approach to extending native elements without wrapper divs.

Overall, this is a solid, well-structured demo that demonstrates real-world Angular patterns. With a backend, responsive styles, and the planned pages, it would be a fully production-ready storefront.

---

## 📝 License

This project is for demonstration and portfolio purposes.
