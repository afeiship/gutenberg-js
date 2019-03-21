import apiFetch from '@wordpress/api-fetch';
import apiFetch2 from '../globals/api-fetch'
// Middleware
apiFetch.use(apiFetch.createNonceMiddleware(window.wpApiSettings.nonce));
apiFetch.use(apiFetch.createRootURLMiddleware(window.wpApiSettings.root));
apiFetch.use(apiFetch2);
