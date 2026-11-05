import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface FeatureItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  detailKey: string;
}

@Component({
  selector: 'app-features',
  imports: [TranslatePipe],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  readonly features: readonly FeatureItem[] = [
    {
      icon: 'bi-code-slash',
      titleKey: 'features.items.angular.title',
      descriptionKey: 'features.items.angular.description',
      detailKey: 'features.items.angular.detail',
    },
    {
      icon: 'bi-speedometer2',
      titleKey: 'features.items.systems.title',
      descriptionKey: 'features.items.systems.description',
      detailKey: 'features.items.systems.detail',
    },
    {
      icon: 'bi-layout-text-window-reverse',
      titleKey: 'features.items.rtl.title',
      descriptionKey: 'features.items.rtl.description',
      detailKey: 'features.items.rtl.detail',
    },
  ];
}
