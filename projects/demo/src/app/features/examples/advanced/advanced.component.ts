import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {
  // example toggles
  example1 = false;
  example2 = false;
  example3 = false;
  example4 = false;

  // example code examples
  codeExample1module = CODE_EXAMPLE_1_MODULE;
  codeExample1html = CODE_EXAMPLE_1_HTML;
  codeExample2module = CODE_EXAMPLE_2_MODULE;
  codeExample2html = CODE_EXAMPLE_2_HTML;
  codeExample3module = CODE_EXAMPLE_3_MODULE;
  codeExample3html = CODE_EXAMPLE_3_HTML;
  codeExample4html = CODE_EXAMPLE_4_HTML;
  codeExample4coreModule = CODE_EXAMPLE_4_CORE_MODULE;
  codeExample5html = CODE_EXAMPLE_5_HTML;
  codeExample5ts = CODE_EXAMPLE_5_TS;

  // example state
  counter = 0;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }

  // preload() {
  //   this.lazyElementLoaderService.preload();
  // }

  // preloadFab() {
  //   this.lazyElementLoaderService.preload(['mwc-fab']);
  // }
}

const CODE_EXAMPLE_1_MODULE = `// pre-configured LoadableModule
const options: LoadableModuleOptions = {
  elementConfigs: [
    {
      name: 'lazy',
      load: () => import('./lazy/lazy.module').then(mod => mod.LazyModule),
      loadingComponent: SpinnerComponent,
      errorComponent: ErrorComponent,
      preload: true
    }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FeatureComponent],
  imports: [
    LoadableModule.forFeature(options),
  ]
})
export class FeatureModule { }
`;

const CODE_EXAMPLE_1_HTML = `<!-- No need to specify loading template or error template -->
<ngx-loadable module="lazy" [show]="true"></ngx-loadable>`;

const CODE_EXAMPLE_2_MODULE = `// pre-configured LazyElementsModule in FeatureModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'mwc-checkbox',
      url: 'https://unpkg.com/@material/mwc-checkbox@0.6.0/mwc-checkbox.js?module'
    }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FeatureComponent],
  imports: [
    LazyElementsModule.forFeature(options),
  ]
})
export class FeatureModule { }
`;

const CODE_EXAMPLE_2_HTML = `<!-- We have to specify null; url to be able to pass in additional options -->
<mwc-checkbox *axLazyElement="null; module: true; loadingTemplate: loading;"></mwc-checkbox>`;

const CODE_EXAMPLE_3_MODULE = `// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'mwc-switch',
      url: 'https://unpkg.com/@material/mwc-switch@0.6.0/mwc-switch.js?module',
      isModule: true
    }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FeatureComponent],
  imports: [
    LazyElementsModule.forFeature(options),
  ]
})
export class FeatureModule { }
`;

const CODE_EXAMPLE_3_HTML = `<!-- We have to specify null; url to be able to pass in additional options -->
<mwc-switch *axLazyElement="null; loadingTemplate: loading;"></mwc-switch>`;

const CODE_EXAMPLE_4_HTML = `<!-- This can be used in any place in the whole application -->
<mwc-fab icon="code" *axLazyElement></mwc-fab>`;

const CODE_EXAMPLE_4_CORE_MODULE = `// pre-configured LazyElementsModule in CoreModule or AppModule
const options: LazyElementModuleRootOptions = {
  rootOptions: {
    errorComponent: RootErrorComponent
    loadingComponent: RootSpinnerComponent
    isModule: true
  },
  elementConfigs: [
    {
      tag: 'mwc-switch',
      url: 'https://unpkg.com/@material/mwc-switch@0.6.0/mwc-switch.js?module'
    }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule.forRoot(options),
  ]
})
export class CoreModule { }
`;

const CODE_EXAMPLE_5_HTML = `<button (click)="preload()">Preload</button>`;

const CODE_EXAMPLE_5_TS = `
class PageComponent {
  constructor(private lazyElementLoaderService: LazyElementLoaderService) {}

  preload() {
    this.lazyElementLoaderService.preload();
  }

  preloadFab() {
    this.lazyElementLoaderService.preload(['mwc-fab']);
  }
}
`;
