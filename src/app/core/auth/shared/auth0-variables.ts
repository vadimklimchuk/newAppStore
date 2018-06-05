import {environment} from '../../../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

interface LogoutConfig {
  accessToken: string;
  idToken: string;
  expiresAt: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: environment.clientID,
  domain: environment.domain,
  callbackURL: environment.callback
};

export const LOGOUT_CONFIG: LogoutConfig = {
  accessToken: 'access_token',
  idToken: 'id_token',
  expiresAt: 'expires_at'
};
