# 🛍️ SHOP.CO — E-Commerce Experience

![Angular](https://img.shields.io/badge/Angular-21-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-styled-pink?style=for-the-badge&logo=sass)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)

> A sleek, fully responsive e-commerce SPA — browse, filter, add to cart, checkout.  
> Built with the latest Angular 21 features from scratch.

---

## ⚠️ For Russian Users / Для пользователей из РФ

> 🇷🇺 MockAPI (free tier) **может быть заблокирован** на территории РФ.  
> Если товары и отзывы не загружаются — включи **VPN** и обнови страницу.

---

## 🔥 What's Inside

```
✦ Full shopping flow     — browse → filter → product → cart → checkout
✦ Live search            — debounced, real-time product filtering
✦ Advanced filters       — price slider, 50 colors, size selector
✦ Auth system            — register, login, route protection
✦ Cart with persistence  — survives page refresh via localStorage
✦ Promo code system      — working codes with free delivery reward
✦ Reviews system         — sortable, deletable, loaded from API
✦ Fully responsive       — pixel-perfect on mobile, tablet & desktop
✦ Toast notifications    — smooth slide-in alerts with auto-dismiss
✦ Skeleton fallbacks     — broken images replaced gracefully
```

---

## 🎨 Design

Pixel-perfect implementation of:  
**[E-commerce Website Template — Figma Community](https://www.figma.com/design/UsntLLhWyGh8PoAk0WQfop/E-commerce-Website-Template--Freebie---Community-?node-id=39-1402)**

---

## ⚡ Tech Stack

| Layer        | Tech                               |
|--------------|------------------------------------|
| Framework    | Angular 21                         |
| Language     | TypeScript 5.9                     |
| Styling      | SCSS + adaptive breakpoints        |
| State        | Angular Signals + computed()       |
| Forms        | Reactive Forms + custom validators |
| Routing      | Lazy-loaded + Route Guards         |
| Persistence  | localStorage                       |
| API          | MockAPI REST                       |

---

## 📸 Pages Overview

```
 /home          — Hero · Brands · New Arrivals · Top Selling
                     Browse by Style · Testimonials · Newsletter

 /catalog       — Filters sidebar · Products grid · Pagination

 /product/:id   — Gallery · Colors · Sizes · Qty · Cart · Reviews

 /cart          — Items · Summary · Promo code · Total

 /login         — Sign in with validation & error feedback

 /register      — Full registration with password match validator
```

---

## 🧪 Promo Codes

Apply at checkout to get **free delivery**:

```
shop.co  •  Medok2010  •  WhiteMaks  •  Baryl348
WINTER2026  •  HELLO_ANGULAR  •  DISCOUNT50
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/medok-ui/SHOP.CO.git
cd SHOP.CO
npm install
ng serve
```

Open **http://localhost:4200**

> 💡 Start at `/register` to create an account, then login at `/login` to access the app.

---

## 📁 Architecture

```
src/app/
├── pages/          — Home, Catalog, Product, Cart, Login, Register
├── components/     — 20+ standalone components
├── service/        — CartService, ProductService, CatalogStateService
├── guards/         — loginGuard (route protection)
├── interfaces/     — IProduct, IReview, and more
└── shared/         — Button, ButtonLogin, Alert (reusable UI)
```

---

## 📝 License

Open source · Portfolio project · Not for commercial use

---

<div align="center">

**Built with ❤️ and Angular Signals**

*If you like this project — drop a ⭐ on GitHub!*

</div>
