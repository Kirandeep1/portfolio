# 🚀 Angular Portfolio App  

This is an Angular-based (version 19.0.1) portfolio website hosted on **GitHub Pages**.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## 🛠️ Build & Deploy to GitHub Pages  

### 1️⃣ **Build the Project**  
Run the following command to generate the production build:  
```
ng build --output-path docs --base-href /portfolio/
```

### 2️⃣ **Move Browser Files**  
After building, move the contents of the `browser/` folder to `docs/`:  
```sh
mv docs/browser/* docs/
rm -rf docs/browser  # Cleanup (optional)
```

### 3️⃣ **Commit & Push to GitHub**  
```sh
git add docs/
git commit -m "Deploy updated build"
git push origin branch_name
```

### 4️⃣ **Enable GitHub Pages**  
- Go to **Repository Settings** → **Pages**  
- Under **Branch**, select `branch_name` and set **docs/** as the root folder.  
- Click **Save**  

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
