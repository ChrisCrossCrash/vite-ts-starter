# Vite TypeScript Starter

A simple starter project for creating web applications using Vite and TypeScript.

## Features

- Vite for fast development and efficient bundling
- TypeScript support
- CSS Modules with SCSS support
- Environment variable loading
- Prettier and ESLint for code formatting and linting
- Stylelint for CSS and SCSS linting
- Built-in development server and preview server

## Installation

To use this starter project as a base for your application, click the "Use this template" button on the GitHub repository page. This will create a new repository based on this template.

Once you have created your repository, clone it to your local machine:

```

git clone https://github.com/user/your-repo.git
cd your-repo
npm install

```

Replace https://github.com/user/your-repo.git with the actual URL of your repository.

## Usage

Modify the source files in the `src` folder to build your application, then use the following scripts to develop, build, and preview your project:

### Development

Start the development server:

```

npm run dev

```

This will start the development server on port 3000 by default.

### Building

Build the application for production:

```

npm run build

```

This will compile the TypeScript files and bundle the application using Vite, outputting the result in the `dist` folder.

### Preview

Preview the production build:

```

npm run preview

```

This will start a preview server on port 3000, serving the content from the `dist` folder.

### Code Formatting and Linting

Format the code using Prettier:

```

npm run format

```

Lint the TypeScript code using ESLint:

```

npm run lint

```

Lint the CSS and SCSS code using Stylelint:

```

npm run stylelint

```

## Environment Variables

Use environment variables by adding `.env` files to your project root. The file format should be `.env.[mode]`, where `[mode]` is either `development`, `production`, or any other custom mode you define.

Vite will load the environment variables based on the current mode. All variables should be prefixed with `VITE_` to be exposed in the client-side code.

For example, create a `.env.development` file for development mode:

```

VITE_API_URL=https://api.example.com/development

```

And a `.env.production` file for production mode:

```

VITE_API_URL=https://api.example.com/production

```

In your code, access the environment variable like this:

```javascript
console.log(import.meta.env.VITE_API_URL)
```

You can learn more about how Vite handles environment variables in the [documentation](https://vitejs.dev/guide/env-and-mode.html).

## License

This project is licensed under the [MIT License](./LICENSE).
