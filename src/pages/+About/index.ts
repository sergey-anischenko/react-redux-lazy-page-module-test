import { AsyncPageModule } from '../../_core/decorator/async-page-decorator';
import { aboutReducer } from './store/reducer';
import { AboutComponent } from './component/About';

@AsyncPageModule({
  reducers: [aboutReducer],
  component: AboutComponent,
})
export class AboutPage {}
