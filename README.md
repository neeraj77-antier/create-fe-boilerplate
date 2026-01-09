# create-fe-boilerplate

A powerful CLI tool to quickly scaffold modern React and Next.js applications. It comes pre-configured with essential features like authentication, OTP verification, and multiple styling and state management options.

## 🚀 Features

- **Frameworks**: React.js, Next.js
- **Languages**: TypeScript, JavaScript
- **Styling**: Tailwind CSS, SCSS (Modular)
- **API & State Management**: Axios, Redux Toolkit (RTK) Query
- **Auth Flow**: Built-in Login, Signup, and OTP Verification components
- **Modern UI**: Clean, responsive, and easy-to-customize designs

## 📦 Installation

You can use the CLI directly via `npx`:

```bash
npx create-fe-boilerplate
```

Or install it globally:

```bash
npm install -g create-fe-boilerplate
```

## 🛠️ Usage

Simply run the command and follow the interactive prompts to choose your project configuration:

```bash
create-fe-boilerplate
```

### Prompt Options:

1. **Project Name**: Enter the name of your project.
2. **Framework**: Choose between `React` or `Next.js`.
3. **Language**: Choose `TypeScript` or `JavaScript`.
4. **Styling**: Choose `Tailwind CSS` or `SCSS`.
5. **API/State Management**: Choose `Axios` or `Redux Toolkit (RTK)`.

## 📂 Project Structure

The generated project will have a clean and organized structure:

- `src/api`: API configuration and helper functions.
- `src/components`: Reusable UI components (including Auth modals).
- `src/pages` or `src/app`: Application routes and page components.
- `src/styles`: Global and component-specific styles.
- `src/utils`: Utility functions (Encryption, etc.).

## 🔐 Authentication Flow

The boilerplate includes a pre-built authentication flow:

- **Login**: Email/Password login with optional OTP trigger.
- **Signup**: User registration.
- **OTP Verification**: A modal-based OTP verification system.
- **Auth Guard**: Protected routes to ensure only authenticated users can access specific pages.

## 📄 License

This project is licensed under the ISC License.
