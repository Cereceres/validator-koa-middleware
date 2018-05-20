# validator-koa-middleware
Middleware generator to koa flow to validate params, body and query  object using joi schema.

# Usage

```js
const schema = joi.object().keys({
    body: joi.object().keys({
        key: joi.string()
    }),
    params: joi.object(),
    query: joi.object()
});
const middleware = validater(schema);
```

# validator(joiSchema) -> koaMiddleware
# validator.body(joiSchemaForBody) -> koaMiddleware
# validator.params(joiSchemaForParams) -> koaMiddleware
# validator.query(joiSchemaForQuery) -> koaMiddleware