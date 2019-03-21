import apiFetch from '@wordpress/api-fetch';
import fetch from './fetch'

apiFetch.use(fetch);
