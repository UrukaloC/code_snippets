import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ...

import { FilterPipe } from './admin-panel/filter.pipe';

@NgModule({
    imports: [
        // Modules
        BrowserModule,
    ],

    declarations: [
        // Components &amp; directives
        FilterPipe,
    ],

    providers: [
        // Services
    ],

    exports: [
        // ...
        FilterPipe,
    ],
})
export class SharedModule {}
