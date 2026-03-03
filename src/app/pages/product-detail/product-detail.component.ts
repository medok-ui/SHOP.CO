import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductDetailsComponent } from "../../components/product-details/product-details.component";
import { ReviewListComponent } from "../../components/review-list/review-list.component";
import { RecommendationsComponent } from "../../components/recommendations/recommendations.component";

@Component({
  selector: 'app-product-detail',
  imports: [HeaderComponent, FooterComponent, ProductDetailsComponent, ReviewListComponent, RecommendationsComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {

}
