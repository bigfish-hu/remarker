import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';

import { NotFound } from './not-found.component';
import { routing } from './not-found.routing';

@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing
    ],
    declarations: [
        NotFound
    ],
    providers: [
    ]
})
export class NotFoundModule {}
