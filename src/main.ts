import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { GtagModule } from 'angular-gtag';

bootstrapApplication(AppComponent, {
  ...appConfig,
   providers: [
    provideHttpClient(withFetch()),
    GtagModule.forRoot({ 
      trackingId : 'G-ZEZRB0309D',
      trackPageviews : true,
    }),
   ]
 })
  .catch((err) => console.error(err));