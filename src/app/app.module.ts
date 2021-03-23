import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { StripeComponent } from './stripe/stripe.component';
import { BandComponent } from './band/band.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from "./main/main.component"
import { ProstogrammComponent } from './prostogramm/prostogramm.component';
import { RusflixComponent } from './rusflix/rusflix.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SlavehunterHeaderComponent } from './slavehunter/slavehunter-header/slavehunter-header.component';
import { SlavehunterMainComponent } from './slavehunter/slavehunter-main/slavehunter-main.component';
import { SlavehunterFooterComponent } from './slavehunter/slavehunter-footer/slavehunter-footer.component';
import { SlavehunterControlComponent } from './slavehunter/slavehunter-control/slavehunter-control.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { CartComponent } from './shop/cart/cart.component';
import { LoginComponent } from './shop/login/login.component';
import { SignupComponent } from './shop/signup/signup.component';
import { ChatComponent } from './shop/chat/chat.component';
import { DashboardComponent } from './shop/dashboard/dashboard.component';
import { IndexComponent } from './shop/index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    StripeComponent,
    BandComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    ProstogrammComponent,
    RusflixComponent,
    StartpageComponent,
    SlavehunterHeaderComponent,
    SlavehunterMainComponent,
    SlavehunterFooterComponent,
    SlavehunterControlComponent,
    ShopItemComponent,
    ShopListComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    DashboardComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
