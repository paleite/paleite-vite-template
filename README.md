# paleite Vite Template

This repository serves as a boilerplate for React projects leveraging the fast build tool Vite, configured with TypeScript for type safety, ESLint for code quality, Prettier for code formatting, and Tailwind CSS for utility-first styling. Aimed at developers who appreciate the importance of velocity and adherence to best practices, this setup ensures a solid foundation for building scalable and maintainable web applications.

## What's included

Key dependencies include:

- **React**: UI library for building component-based interfaces.
- **Vite**: Build tool that significantly improves the development experience.
- **TypeScript**: Superset of JavaScript that adds static type definitions.
- **ESLint**: Linter tool for identifying and reporting on patterns in JavaScript.
- **Prettier**: Code formatter that supports many languages and integrates with most editors.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

## Getting Started

### Create a new repository

To create a new repository using this template, click the **Use this template** button. Alternatively, you can use the [GitHub CLI](https://cli.github.com/) to create a new repository from a template.

#### a. Use this template

<a href="https://github.com/paleite/paleite-vite-template/generate"><img src="https://raw.githubusercontent.com/paleite/paleite/master/use-this-template.svg" /></a>

#### b. GitHub CLI

```bash
gh repo create <repo-name> --public --template paleite/paleite-vite-template
```

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version specified in [.nvmrc](./.nvmrc)) installed on your machine.

### Setup

1. **Navigate to the project directory**

```bash
cd <repo-name>
```

2. **Install dependencies**

```bash
pnpm install
```

This will install all the necessary dependencies listed under `dependencies` and `devDependencies` in the `package.json` file.

## Available Scripts

In the project directory, you can run the following scripts:

- **`pnpm run dev`**

  Launches the project in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload if you make edits.

- **`pnpm run build`**

  Compiles and bundles the application for production deployment to the `dist` folder.

- **`pnpm run preview`**

  Serves the production build from the `dist` folder for local testing.

- **`pnpm run format`**

  Formats code according to the configurations defined in `.prettierrc`.

- **`pnpm run lint`**

  Lints and fixes files based on the rules defined in `.eslintrc`.

- **`pnpm run typecheck`**

  Performs a TypeScript compiler check without emitting JavaScript.

## Deployment

> NOTE: If you want to publish to Github Pages, ensure that your repository is set to public and that you've enabled deploying with Github Pages at `https://github.com/<your-username>/<repo-name>/settings/pages`.

The project includes a GitHub Action workflow that automatically deploys the production build to GitHub Pages on every push to the `main` branch.

## Contributing

We welcome contributions to improve this template template. If you have suggestions or encounter issues, please open an issue first to discuss your ideas or report bugs. For submitting changes, please open a pull request with a clear description of the changes and why they are necessary.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.
