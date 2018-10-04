/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
declare var System: any;

System.config({
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/'
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    'app': 'app',
    'main': 'app/main.js',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

    // other libraries
    'rxjs': 'npm:rxjs',
    'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

    'lodash': 'npm:lodash/lodash.js',

    // libraries that may be required by patternfly-ng, depending on which modules are loaded
    //  'angular-tree-component': 'npm:angular-tree-component/dist/angular-tree-component.umd.js',
    //  'ng2-dragula': 'npm:ng2-dragula/bundles/ng2-dragula.umd.js',
    //  '@swimlane/ngx-datatable': 'npm:@swimlane/ngx-datatable/release/index.js',
    //  'd3': 'npm:d3/dist/d3.js',
    //  'c3': 'npm:c3/c3.js',

    'angular-tree-component': '@empty',
    'ng2-dragula': '@empty',
    '@swimlane/ngx-datatable': '@empty',
    'd3': '@empty',
    'c3': '@empty',

    // You can load the patternfly-ng main module or load only the needed submodules for better performance
    // 'patternfly-ng': 'npm:patternfly-ng/bundles/patternfly-ng.umd.js',
    // 'patternfly-ng/empty-state': 'npm:patternfly-ng/empty-state',
    // 'patternfly-ng/navigation': 'npm:patternfly-ng/navigation',
    // 'patternfly-ng/utilities': 'npm:patternfly-ng/utilities',

    'patternfly-ng/empty-state': 'npm:patternfly-ng/bundles/patternfly-ng.umd.js',
    'patternfly-ng/navigation': 'npm:patternfly-ng/bundles/patternfly-ng.umd.js',

    // ngx-bootstrap
    'ngx-bootstrap': 'npm:ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js',
    'ngx-bootstrap/dropdown': 'npm:ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js',
    'ngx-bootstrap/popover': 'npm:ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js',
    'ngx-bootstrap/tooltip': 'npm:ngx-bootstrap/bundles/ngx-bootstrap.umd.min.js',

    'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel',

  // packages tells the System loader how to load when no filename and/or no extension
  packages: {
    'app': { main: './main.js', defaultExtension: 'js' },
    'api': { defaultExtension : 'js' },
    'rxjs': { main: './bundles/Rx.js', defaultExtension: 'js' },
  },

});
