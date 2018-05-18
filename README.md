# Angular Tour of Heroes with SystemJS and PatternFly-NG
This branch uses the last Tour of Heroes version that is loaded via SystemJS instead of WebPack.  It is used to work out issues with SystemJS and PatternFly-NG.

## Getting Started

Super simple Angular app with 1 module and 2 routes 

## Get the Code
```
git clone -b systemjs-patternfly-ng git@github.com:ssilvert/angular-tour-of-heroes.git toh
cd toh
npm i
```

### Just in Time (JiT) Compilation

Runs the TypeScript compiler and launches the app

```
npm start
```

### Ahead of Time (AoT) Compilation 

Runs the Angular AoT compiler, rollup, uglify for an optimized bundle, then launches the app

```
npm run start-aot
```

### AoT + gzip 

Runs AoT plus gzips and launches the app 

```
gulp copy-aot-gzip
npm run aot
npm run rollup
http-server
```

Notes:
- Use your favorite server in place of `http-server`
- This could be scripted, obviously
- `lite-server` does not launch gzipped files by default.


