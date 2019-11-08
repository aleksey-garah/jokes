import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

interface AppConfig {
  currentUrl: string;
  apiServer: string;
  version: string;
  informationalVersion: string;
}

interface AppServerConfig {
  apiServer: string;
  currentUrl: string;
  version: string;
  informationalVersion: string;
}

@Injectable()
export class AppConfigService {
  public currentUrl = '';
  public apiServer = '';
  public version = '';
  public informationalVersion = '';

  constructor() {
    if (environment.production) {
      const appServerConfig: AppServerConfig = (window as any).appConfig;
      this.apiServer = appServerConfig.apiServer;
      this.currentUrl = appServerConfig.currentUrl;
      this.version = appServerConfig.version;
      this.informationalVersion = appServerConfig.informationalVersion;
      (window as any).appConfig = undefined;
    } else {
      const appConfig = environment.appConfig as AppConfig;
      this.apiServer = appConfig.apiServer;
      this.currentUrl = appConfig.currentUrl;
      this.version = appConfig.version;
      this.informationalVersion = appConfig.informationalVersion;
    }
  }
}
