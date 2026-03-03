import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeHeroComponent } from '../../components/home-hero/home-hero.component';
import { BrandsSectionComponent } from '../../components/brands-section/brands-section.component';
import { ProductSectionComponent } from '../../components/product-section/product-section.component';
import { ProductTopSellingComponent } from '../../components/product-top-selling/product-top-selling.component';
import { DressStyleBrowseComponent } from "../../components/dress-style-browse/dress-style-browse.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HomeHeroComponent,
    BrandsSectionComponent,
    ProductSectionComponent,
    ProductTopSellingComponent,
    DressStyleBrowseComponent,
    TestimonialsComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
