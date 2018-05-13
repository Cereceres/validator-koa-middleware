const assert = require('assert');
const { query:validater } = require('../index');
const joi = require('joi');

describe('test to validater query', () => {
    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            key: joi.string()
        });

        const ctx = {
            request :{
                query:{
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
                query:{
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
