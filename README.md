```
npm install @mightykraken/ts-library-template
```

# Process to create package for mightykraken

-   npm init
-   Prefix package name with @mightykraken
-   Check template package.json file
-   Check release.yml file
-   Check release.config.cjs file
-   Check tsconfig.json file
-   pushing to branch next will create a version X.X.X-next.Y which can be installed

```
npm install @mightykraken/ts-library-template@next
```

# Commit semantics

-   fix(pencil): fix release - 1.0.0 -> 1.0.1
-   feat(pencil): feature release
-   perf(pencil):
-   BREAKING CHANGE: Breaking release
