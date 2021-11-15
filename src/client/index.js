import { createClient } from '@urql/core';
import { dedupExchange, cacheExchange, fetchExchange } from 'urql';

const client = createClient({
    url: ' http://localhost:4000/',
    exchanges: [dedupExchange, cacheExchange, fetchExchange],
});

export default client