import { getLazyPageModule } from '../../_core/util/lazy-page.util';
import { ABOUT_STORE_STATE_NAME, aboutReducer } from './store';
import { AboutComponent } from './About';

export const AboutPage = getLazyPageModule({
  component: AboutComponent,
  reducer: {
    name: ABOUT_STORE_STATE_NAME,
    reducer: aboutReducer,
  },
});
