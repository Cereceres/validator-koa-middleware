const assert = require('assert');
const { body:validater } = require('../index');
const joi = require('joi');

describe('test to validater body', () => {
    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            key: joi.string()
        });

        const ctx = {
            request :{
                body:{
                    key: 'string'
                },
            },
            response: {
            }
        };
        const middleware = validater(schema);

        middleware(ctx, next);

        assert(!ctx.response.status);
    });

    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            key: joi.string()
        });

        const ctx = {
            request :{
                body:{
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
