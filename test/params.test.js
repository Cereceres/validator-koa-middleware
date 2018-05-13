const assert = require('assert');
const { params:validater } = require('../index');
const joi = require('joi');

describe('test to validater params', () => {
    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            key: joi.string()
        });

        const ctx = {
            request :{
                params:{
                    key: 'string'
                },
            },
            response: {
            }
        };
        const middleware = validater(schema);

        middleware(ctx, next);
    });

    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            key: joi.string()
        });

        const ctx = {
            request :{
                params:{
                    key: 1
                },
            },
            response: {
            }
        };
        const middleware = validater(schema);

        middleware(ctx, next);
        assert(ctx.response.status === 400);
        assert(ctx.response.message);
        next();
    });
});
