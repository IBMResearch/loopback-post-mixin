# Generate POST methods for Loopback Models

This module is designed for the [Strongloop Loopback](https://github.com/strongloop/loopback) framework. It automatically adds `POST` method for any Model.

## Installation

You can put me in your package.json dependencies. The `npm` tool can do this for you, from the command line:

    $ npm install --save loopback-post-mixin

## Configuration


### model-config.json

Add the `mixins` property to your `server/model-config.json`:

```json
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "../node_modules/loopback-post-mixin",
      "../common/mixins"
    ]
  }
}
```

### Model config

To use with your Models add the `mixins` attribute to the definition object of your model config.

```json
  {
    "name": "Widget",
    "properties": {
      "name": {
        "type": "string",
      }
    },
    "mixins": {
      "PostMethod" : {
        ...
      }
    }
  }
```

# LICENSE

[ISC](LICENSE.txt)
