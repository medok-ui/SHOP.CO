# 🛍️ Shop.co — E-Commerce Demo App

> ⚠️ **This is a DEMO / Work-In-Progress version.** The project is actively being developed — improvements, fixes, and new pages are still coming.

---

## 🎨 Design

Based on a Figma community template:  
**[E-commerce Website Template — Figma](https://www.figma.com/design/UsntLLhWyGh8PoAk0WQfop/E-commerce-Website-Template--Freebie---Community-?node-id=39-1402)**

---

## 📌 About the Project

**Shop.co** is a modern frontend e-commerce application built with **Angular 21** using the latest framework features: Signals, computed state, `OnPush` change detection, and lazy-loaded routes.

---

## 🚀 Tech Stack

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| Angular 21      | Core framework                |
| TypeScript      | Language                      |
| SCSS            | Styling                       |
| Angular Signals | Reactive state management     |
| Angular Router  | Navigation & lazy loading     |
| Reactive Forms  | Form validation & auth        |
| FormsModule     | ngModel bindings              |
| localStorage    | Cart & auth persistence       |
| MockAPI         | REST API for products/reviews |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/                  # Sticky navigation with live search
│   │   ├── footer/                  # Footer with reactive newsletter form
│   │   ├── home-hero/               # Hero section with store stats
│   │   ├── brands-section/          # Animated scrolling brands bar
│   │   ├── product-card/            # Reusable product card with fallback image
│   │   ├── product-section/         # New Arrivals grid with load-more
│   │   ├── product-top-selling/     # Top Selling grid with load-more
│   │   ├── product-details/         # Full product view (colors, sizes, qty)
│   │   ├── casual-catalog/          # Catalog product grid with pagination
│   │   ├── filters-catalog/         # Sidebar filters (price, color, size)
│   │   ├── pagination/              # Reusable pagination component
│   │   ├── dress-style-browse/      # Browse by style cards
│   │   ├── testimonials/            # Scrollable reviews carousel
│   │   ├── review-list/             # Filterable & sortable review list
│   │   ├── recommendations/         # Recommended products section
│   │   ├── cart-item/               # Single cart item with qty controls
│   │   ├── cart-list/               # Cart items list
│   │   ├── order-summary/           # Order total, promo code input
│   │   ├── header-login/            # Auth page header
│   │   ├── form-login/              # Login form (reactive)
│   │   └── form-register/           # Register form with password match
│   ├── pages/
│   │   ├── home/                    # Home page
│   │   ├── catalog/                 # Catalog page with filters
│   │   ├── product-detail/          # Product detail page
│   │   ├── cart/                    # Cart page
│   │   ├── login/                   # Login page
│   │   └── register/                # Register page
│   ├── guards/
│   │   └── login-guard.ts           # Route protection guard (prepared)
│   ├── interfaces/                  # TypeScript interfaces
│   ├── service/
│   │   ├── cart.service.ts          # Cart logic, computed totals, promo codes
│   │   ├── catalog-state.service.ts # Catalog filters, pagination state
│   │   └── product.service.ts       # HTTP API + search query signal
│   └── shared/
│       ├── button/                  # Reusable outline button
│       ├── button-login/            # Auth submit button
│       └── components/
│           └── alert/               # Toast alert with auto-dismiss
```

---

## 📄 Pages

### 🏠 Home (`/home`)

- Hero section with CTA and stats
- Animated brands bar
- **New Arrivals** grid (load-more, search-aware)
- **Top Selling** grid (load-more, filtered by `isTopSelling`)
- Browse by Dress Style cards
- Testimonials carousel
- Newsletter with reactive form validation + toast feedback

### 📦 Catalog (`/catalog`)

- Sidebar filters: price range slider, color picker (50 colors), size selector
- Products grid with pagination (9 per page)
- "Apply Filter" with validation — shows toast if color or size not selected
- Filter state managed via `CatalogStateService`

### 🧾 Product Detail (`/product/:id`)

- Product gallery with thumbnails and fallback image on error
- Color & size selectors with active state
- Quantity control (+/−)
- Add to Cart → redirects to cart
- Filterable review list (Most Recent / Highest / Lowest rating)
- Recommended products section

### 🛒 Cart (`/cart`)

- Cart items with per-item quantity and remove
- Order summary: Subtotal, Discount, Delivery Fee, Total
- Promo code input (see codes below)
- Cart persisted in `localStorage`
- Empty cart state with alert toast

### 🔐 Login (`/login`)

- Reactive form with validation
- Reads credentials from `localStorage` set at registration
- Redirects to `/home` on success
- Shows toast on invalid credentials

### 📝 Register (`/register`)

- Login, email, password + confirm password with match validator
- Accept Terms checkbox required
- Saves credentials to `localStorage`
- Shows success toast on completion

---

## 🔧 Key Features

- **Angular Signals** — reactive state via `signal()` and `computed()` throughout
- **OnPush Change Detection** — applied on all components
- **Lazy-loaded routes** — all pages loaded on demand
- **Live search** — debounced header search filters products via `ProductService`
- **Catalog filters** — price, color, size with `CatalogStateService`
- **Pagination** — `CatalogStateService` handles page/pageSize state
- **Toast alert system** — `AlertComponent` with auto-dismiss after 3s, slide animation
- **Cart persistence** — `localStorage` survives page refresh
- **Promo code system** — multiple codes, removes delivery fee
- **Fallback images** — `(error)` handler replaces broken images with SVG placeholder
- **Route guard** — `loginGuard` protects all routes except `/login` and `/register`

---

## 🗺️ Routing

```
/             → /login
/login        → Login page (public)
/register     → Register page (public)
/home         → Home page (protected)
/product/:id  → Product detail (protected)
/catalog      → Catalog with filters (protected)
/cart         → Cart page (protected)
**            → /home
```

---

## 🧪 Promo Codes

| Code            | Effect        |
| --------------- | ------------- |
| `shop.co`       | Free delivery |
| `Medok2010`     | Free delivery |
| `WhiteMaks`     | Free delivery |
| `Baryl348`      | Free delivery |
| `WINTER2026`    | Free delivery |
| `HELLO_ANGULAR` | Free delivery |
| `DISCOUNT50`    | Free delivery |

---

## 🏃 Getting Started

```bash
git clone https://github.com/medok-ui/SHOP.CO.git
cd SHOP.CO
npm install
ng serve
# → http://localhost:4200
```

> To access protected pages, first register at `/register`, then log in at `/login`.

---

## 🔮 Coming Next

- [x] **Product Catalog page** — full browsable catalog with filters by category, price, size, and color
- [x] **Working search** — header search bar is UI-only right now
- [x] **User auth page** — login/register UI
- [ ] **Full responsive layout** — mobile & tablet support
- [x] **API integration** — replace all mock data with real backend calls

---

## 📝 License

Educational / portfolio project. Not intended for commercial use.

---

_Built with ❤️ using Angular Signals — actively growing._
