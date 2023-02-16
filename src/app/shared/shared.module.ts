import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyCardModule as MatCardModule, MatLegacyCard as MatCard} from '@angular/material/legacy-card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule
  ],

})
export class SharedModule { }