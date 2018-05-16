interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'GmSsgAyOMWYQ7jPID5cVPJMo1m931NIC',
    domain: 'vadimklimchuk.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
  };
  