import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    exports: [MatToolbarModule, MatListModule, MatTabsModule],
})
export class MaterialModule {}
