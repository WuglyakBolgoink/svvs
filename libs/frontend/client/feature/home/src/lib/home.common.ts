import {Routes} from '@angular/router'
import {HomePageUiComponent} from './home-page-ui/home-page-ui.component'
import {BaseLayoutUiComponent} from '@svvs/frontend/ui/components'


export const homeRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutUiComponent,
    children: [
      {
        path: '',
        component: HomePageUiComponent
      }
    ]
  }
]

export const homeContainers: any[] = [HomePageUiComponent]