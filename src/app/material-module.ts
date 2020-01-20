import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCheckboxModule,
        MatTableModule,
        MatIconModule,
    ],
})
export class MaterialModule {}
