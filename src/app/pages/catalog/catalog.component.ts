import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FiltersCatalogComponent } from "../../components/filters-catalog/filters-catalog.component";
import { CasualCatalogComponent } from '../../components/casual-catalog/casual-catalog.component';

@Component({
  selector: 'app-catalog',
  imports: [FooterComponent, HeaderComponent, FiltersCatalogComponent, CasualCatalogComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {}
