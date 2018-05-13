const joi = require('joi');

const validater = module.exports = (schema = {}, options = {}) => async(ctx, next) => {
    const query = ctx.request.query || {};
    const params = ctx.request.params || {};
    const body = ctx.request.body || {};
    const { error } = joi.validate({ query, body, params }, schema, options);
    if (!error) return await next();

    ctx.response.status = 400;
    ctx.response.message = error.message;
};

validater.body = (schema = {}, options = {}) => async(ctx, next) => {
    const body = ctx.request.body || {};
    const { error } = joi.validate(body, schema, options);

    if (!error) return await next();

    ctx.response.status = 400;
    ctx.response.message = error.message;
};

validater.params = (schema = {}, options = {}) => async(ctx, next) => {
    const params = ctx.request.params || {};
    const { error } = joi.validate(params, schema, options);

    if (!error) return await next();

    ctx.response.status = 400;
    ctx.response.message = error.message;
};

validater.query = (schema = {}, options = {}) => async(ctx, next) => {
    const query = ctx.request.query || {};
    const { error } = joi.validate(query, schema, options);

    if (!error) return await next();

    ctx.response.status = 400;
    ctx.response.message = error.message;
};
