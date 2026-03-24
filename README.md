# 🛍️ Shop.co — E-Commerce Demo App

> ⚠️ **This is a DEMO / Work-In-Progress version.** The project is actively being developed — many improvements, fixes, and new pages are still coming. Do not treat this as a final product.

---

## 🎨 Design

The app is based on a Figma community template:
**[E-commerce Website Template — Figma](https://www.figma.com/design/UsntLLhWyGh8PoAk0WQfop/E-commerce-Website-Template--Freebie---Community-?node-id=39-1402&p=f&t=XbTCbPf5XJwEkkw7-0)**

---

## 📌 About the Project

**Shop.co** is a modern frontend e-commerce application built with **Angular 17+** using the latest framework features: Signals, computed state, `OnPush` change detection, and lazy-loaded routes. The project demonstrates a clean component-driven architecture for a clothing store.

The app currently includes a **Home page**, a **Product Detail page**, and a **Cart page**, with a **Promo/Discount** system already built in.

---

## 🚀 Tech Stack

| Technology      | Purpose                   |
| --------------- | ------------------------- |
| Angular 17+     | Core framework            |
| TypeScript      | Language                  |
| SCSS            | Styling                   |
| Angular Signals | Reactive state management |
| Angular Router  | Navigation & lazy loading |
| FormsModule     | Form handling (ngModel)   |
| localStorage    | Cart persistence          |
| Reactive Forms  | Form validation & auth    |
| Route Guards    | Protected routes          |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/                  # Navigation header
│   │   ├── footer/                  # Footer with newsletter signup
│   │   ├── home-hero/               # Hero section with stats
│   │   ├── brands-section/          # Animated brands bar
│   │   ├── product-card/            # Reusable product card
│   │   ├── product-section/         # New Arrivals section
│   │   ├── product-top-selling/     # Top Selling section
│   │   ├── product-details/         # Full product detail view
│   │   ├── dress-style-browse/      # Browse by style (Casual, Formal, etc.)
│   │   ├── testimonials/            # Customer reviews carousel
│   │   ├── review-list/             # Filterable review list
│   │   ├── recommendations/         # Recommended products
│   │   ├── cart-item/               # Single cart item
│   │   ├── cart-list/               # Cart items list
│   │   ├── order-summary/           # Order total & promo code
│   │   ├── header-login/            # Auth navigation header
│   │   ├── form-login/              # Login form
│   │   └── form-register/           # Register form
│   ├── pages/
│   │   ├── home/                    # Home page
│   │   ├── product-detail/          # Product detail page
│   │   ├── cart/                    # Cart page
│   │   ├── login/                   # Login page
│   │   └── register/                # Register page
│   ├── guards/
│   │   └── login-guard.ts           # Route protection guard
│   ├── interfaces/                  # TypeScript interfaces
│   ├── data/                        # Static mock data
│   ├── service/
│   │   ├── cart.service.ts          # Cart logic & computed totals
│   │   └── product.service.ts       # API integration
│   └── shared/
│       ├── button/                  # Reusable button component
│       └── button-login/            # Auth button component
```

---

## 📄 Pages

### 🏠 Home Page (`/home`)
- Hero section with CTA button and store stats (200+ brands, 2000+ products, 30K+ customers)
- Animated brands bar (Calvin Klein, Gucci, Prada, Versace, Zara)
- **New Arrivals** product grid with "View All" load-more pagination
- **Top Selling** product grid with "View All" load-more pagination
- Browse by Dress Style cards (Casual, Formal, Party, Gym)
- Customer testimonials carousel with left/right scroll
- Newsletter signup embedded in the footer

---

### 🧾 Product Detail Page (`/product/:id`)
- Product gallery with thumbnail list
- Color selector with active state highlight
- Size selector: Small / Medium / Large / X-Large
- Quantity control (+/−)
- "Add to Cart" button with confirmation feedback text
- Filterable & sortable review list (Most Recent / Highest Rating / Lowest Rating)
- Delete/hide review functionality
- Recommended products section at the bottom

---

### 🛒 Cart Page (`/cart`)
- Full cart item list with per-item quantity controls
- Remove items from cart
- Order summary: Subtotal, Discount, Delivery Fee, Total
- Promo code input — enter `MedokTop` to unlock **free delivery**
- Cart state persisted in `localStorage` — survives page refresh
- Empty cart state with friendly message

---

### 📝 Register Page (`/register`)
- Register form with validation (login, email, password, confirm password)
- Password match validation via custom validator
- "Accept Terms of Service" checkbox — required to submit
- Saves credentials to `localStorage` on success

---

### 🔐 Login Page (`/login`)
- Login form with validation (login, password)
- "Confirm login" checkbox — required to submit
- Redirects to `/home` on successful auth
- Protected by route guard — authenticated users skip this page

---

## 🔧 Key Features

- **Angular Signals** — all reactive state managed via `signal()` and `computed()`
- **OnPush Change Detection** — applied across all components for performance
- **Lazy-loaded routes** — each page is loaded on demand
- **Cart persistence** — cart state saved to `localStorage`
- **Promo code system** — working discount code removes delivery fee
- **Review system** — sortable by date/rating, deletable, with load-more pagination
- **Route Guards** — protected routes redirect unauthenticated users to login
- **Auth system** — register/login with localStorage persistence

---

## 🗺️ Routing

```
/             → redirects to /login
/login        → Login page
/register     → Register page
/home         → Home page
/product/:id  → Product detail page
/cart         → Cart page
/catalog      → Product catalog page (coming soon)
**            → redirects to /home
```

---

## 📦 Mock Data

The app ships with **13 mock products** — t-shirts, jeans, shorts, polos, and shirts. Each product carries: name, image, thumbnails, price, optional discount, available colors, sizes, rating, review count, and boolean flags for `isNew` / `isTopSelling`.

Reviews include **21 entries** with names, star ratings, verified badge status, and dates.

---

## 🧪 Promo Code

| Code       | Effect                            |
| ---------- | --------------------------------- |
| `MedokTop` | Free delivery (delivery fee → $0) |

---

## 🔮 What's Coming Next

> This is an early demo. A lot is still planned:

- [ ] **Product Catalog page** — full browsable catalog with filters by category, price, size, and color
- [ ] **Shop / Category pages** — filter by style (Casual, Formal, Party, Gym)
- [ ] **Working search** — header search bar is UI-only right now
- [X] **User auth page** — login/register UI
- [ ] **Full responsive layout** — mobile & tablet support
- [X] **API integration** — replace all mock data with real backend calls

---

## 🏃 Getting Started

```bash
# Clone the repository
git clone https://github.com/medok-ui/SHOP.CO.git

# Install dependencies
npm install

# Start development server
ng serve

# Open in browser
http://localhost:4200
```

---

## 💡 Developer Notes

- Fonts (Satoshi, DM Sans, Integral CF) are loaded locally from `/assets/fonts/`
- SVG icons live in `/assets/svg/`
- Product images in `/assets/images/products/`
- Brand logos in `/assets/images/brands/`
- Style category backgrounds in `/assets/background-card/`

---

## 📝 License

This project is for educational and portfolio purposes. Not intended for commercial use in its current state.

---

_Built with ❤️ using Angular Signals — still a work in progress, but growing fast._
