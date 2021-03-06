import Code from 'code';
import Lab from 'lab';
import * as Server from '../server';

import {
    ROUTE_CHANNEL
} from '../util/constants';

// Test shortcuts
const { describe, it, before } = exports.lab = Lab.script();
const { expect } = Code;

describe('Channel', () => {

    it('get /channel', async () => {

        const server = await Server.deployment();

        const response = await server.inject({
            url: `/${ROUTE_CHANNEL}`,
            method: 'GET'
        });

        expect(response.statusCode).to.equal(200);
        expect(response.result).to.be.an.object();
    });
});