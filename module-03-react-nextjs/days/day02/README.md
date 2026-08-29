# Addis Eats — React Menu App

A responsive Ethiopian restaurant menu built with React and Vite, demonstrating core React concepts.

## React Concepts Used

### 1. Props (Properties)
Components receive data from parent components via **props**. Each component destructures the props object to access individual values.

- `App` passes `dishes` and `category` props to `Menu`:
  ```jsx
  <Menu dishes={menuItems} category="Main" />
  ```
- `Dish` receives `name`, `price`, `currency`, and `spicy` as props:
  ```jsx
  function Dish({ name, price, currency = "ETB", spicy = false }) { ... }
  ```
- **Default props**: `currency` defaults to `"ETB"` and `spicy` defaults to `false` when not provided.

### 2. PropTypes (Type Checking)
`PropTypes` enforce runtime type validation on component props, catching bugs early.

```jsx
Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  spicy: PropTypes.bool,
};
```

### 3. `children` Prop
The `Card` component uses the **`children` prop** to accept and render nested JSX. This is a pattern for **composition** — a parent component wraps child content without knowing what it is.

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

Used in `Menu` to wrap each `Dish`:
```jsx
<Card key={dish.id}>
  <Dish {...dish} />
</Card>
```

### 4. `filter` — Array Method for Conditional Rendering
The `Menu` component uses **`.filter()`** to select only dishes matching a given category. This demonstrates filtering data before rendering.

```jsx
const shown = dishes.filter(
  (dish) => dish.category === category
);
```

Combined with **conditional rendering** — if no dishes match, a fallback message is shown instead of an empty list.

### 5. `map` — Rendering Lists
The **`.map()`** method iterates over the filtered array and returns a JSX element for each item. A unique `key` prop is required when rendering lists in React.

```jsx
{shown.map((dish) => (
  <Card key={dish.id}>
    <Dish {...dish} />
  </Card>
))}
```

### 6. Spread Operator (`...`)
The spread operator passes all properties of an object as individual props to a component, avoiding repetitive property listing.

```jsx
<Dish {...dish} />
```

This is equivalent to `<Dish name={dish.name} price={dish.price} category={dish.category} spicy={dish.spicy} />`.

### 7. Conditional Rendering
The `Dish` component uses **logical AND (`&&`)** to conditionally render the "Spicy" label only when `spicy` is `true`.

```jsx
{name} {spicy && <span>• Spicy</span>}
```

### 8. Component Composition
The app is built using a **component hierarchy** where each component has a single responsibility:

- **`App`** — Root component, orchestrates the page layout
- **`Menu`** — Filters and lists dishes
- **`Card`** — Wrapper component using `children`
- **`Dish`** — Renders individual dish details

## Responsive Design (@media)

The CSS uses **`@media` queries** to make the layout responsive across devices:

| Breakpoint      | Behavior                          |
|-----------------|-----------------------------------|
| Default (≥769px)| Multi-column grid layout          |
| ≤768px          | Single-column grid, reduced padding and margins |
| ≤480px          | Further reduced font sizes, padding, and spacing for mobile |

```css
@media (max-width: 768px) {
  .menu {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .app h1 { font-size: 20px; }
  .card { padding: 12px; }
}
```

## Technologies Used

- **React** — Component-based UI library
- **Vite** — Build tool with fast HMR
- **PropTypes** — Runtime type checking
- **CSS** — Styling with `@media` responsive breakpoints

## Setup & Run

```bash
npm install
npm run dev
```