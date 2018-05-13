const assert = require('assert');
const validater = require('../index');
const joi = require('joi');

describe('test to validater', () => {
    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            body: joi.object().keys({
                key: joi.string()
            }),
            params: joi.object(),
            query: joi.object()
        });

        const ctx = {
            request :{
                body:{
                    key: 'string'
                },
                params:{},
                query:{}
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
            body: joi.object().keys(),
            params: joi.object({
                key: joi.string()
            }),
            query: joi.object()
        });

        const ctx = {
            request :{
                body:{
                },
                params:{
                    key: 'string'
                },
                query:{

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
            body: joi.object().keys(),
            params: joi.object(),
            query: joi.object({
                key: joi.string()
            })
        });

        const ctx = {
            request :{
                body:{
                },
                params:{
                },
                query:{
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
            body: joi.object().keys({
                key: joi.string()
            }),
            params: joi.object(),
            query: joi.object()
        });

        const ctx = {
            request :{
                body:{
                    key: 1
                },
                params:{
                },
                query:{

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

    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            body: joi.object().keys(),
            params: joi.object({
                key: joi.string()
            }),
            query: joi.object()
        });

        const ctx = {
            request :{
                body:{
                },
                params:{
                    key: 1
                },
                query:{

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

    it('should validate the query with schema given', (next) => {
        const schema = joi.object().keys({
            body: joi.object().keys(),
            params: joi.object(),
            query: joi.object({
                key: joi.string()
            })
        });

        const ctx = {
            request :{
                body:{
                },
                params:{
                },
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
