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
  clientID: 'GmSsgAyOMWYQ7jPID5cVPJMo1m931NIC',
  domain: 'vadimklimchuk.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};

export const LOGOUT_CONFIG: LogoutConfig = {
  accessToken: 'access_token',
  idToken: 'id_token',
  expiresAt: 'expires_at'
};
