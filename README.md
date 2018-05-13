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
```

# validator(joiSchema) -> koaMiddleware