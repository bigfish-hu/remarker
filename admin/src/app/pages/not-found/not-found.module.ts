import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';

import { NotFoundComponent } from './not-found.component';
import { routing } from './not-found.routing';

@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing
    ],
    declarations: [
        NotFoundComponent
    ],
    providers: [
    ]
})
export class NotFoundModule {}
