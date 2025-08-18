# 🎨 SASS / SCSS Notes  

## 📌 What is SASS?  
- **SASS (Syntactically Awesome Stylesheet)** is a preprocessor scripting language that is interpreted or compiled into **CSS**.  
- It extends the functionality of CSS with **variables, nesting, mixins, imports, and more**.  

---

## ✅ Why use SASS?  
Suppose you set a **background color** for 5 HTML elements.  
If later you want to change the color from `green` to `violet`, you’d normally update each element manually.  
With SASS, you can declare a **variable** once and use it everywhere.  
Changing the variable value updates all related styles automatically.  

---

## 🚀 How to Use SASS?  
1. Create a file named `style.scss`.  
2. Install the VS Code extension **Live Sass Compiler**.  
3. Enable **watch mode** in the extension.  
4. A `style.css` file will be generated automatically (since browsers cannot read `.scss` directly).  
5. Example:  

```scss
nav {
  margin: 0;
  padding: 0;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      display: inline-block;
    }
  }
}
```
This will be compiled into:
```bash
nav {
  margin: 0;
  padding: 0;
}
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul li {
  display: inline-block;
}
```
Variables in SASS
```
$color1: white;
$color2: blue;
$bgColor: green;

.class-a {
  color: $color1;
}

.class-b {
  color: $color2;
}

.class-c {
  background-color: $bgColor;
}
```
Overwriting Variables

```
$color1: white;
$color2: blue;
$bgColor: green;

.class-a {
  color: $color1;
}

.class-b {
  color: $color2;
}

.class-c {
  background-color: $bgColor;
}
```

🧩 Nesting in SCSS
1. Class-based Approach
```
.grandparent {
  background-color: yellow;
  padding: 30px;
  .parent {
    background-color: red;
    padding: 20px;
    .child {
      background-color: blue;
      padding: 10px;
      color: white;
    }
  }
}
```
2. Hierarchical Approach (using &)
```
.grandparent {
  background-color: yellow;
  padding: 30px;
  &-parent {
    background-color: red;
    padding: 20px;
    &-child {
      background-color: blue;
      padding: 10px;
      color: white;
    }
  }
}
```
📥 Import Functionality in SCSS

We can divide styles into component-based files and import them all in one place.

1. Create a components/ folder with files:

i. _nav.scss

ii. _main.scss

iii. _footer.scss

2. Import them in style.scss:
```
@import "./components/nav";
@import "./components/main";
@import "./components/footer";
```
3. The styles will be applied automatically.

🗺️ What is style.css.map?

The .map file helps browsers (DevTools) trace back CSS rules to their original .scss file.

Makes debugging and inspecting easier.

⚡ Mixins in SCSS

A mixin is used to apply a set of properties to multiple elements.
```
@mixin box-style {
  color: red;
  background-color: yellow;
}

.name {
  @include box-style;
  padding: 10px;
}
```

🔄 Extend in SCSS

We can reuse properties from one selector to another using @extend.
```
.name {
  padding: 10px;
  color: red;
  background-color: yellow;
}

.name1 {
  @extend .name;
  border: 1px solid blue;
}

.tripathy {
  @extend .name;
}
```
📚 Summary

1. Variables for reusable values
2. Nesting for structured code
3. Imports for modular design
4. Mixins for reusable property sets
5. Extend for inheriting styles
6. Map file for debugging