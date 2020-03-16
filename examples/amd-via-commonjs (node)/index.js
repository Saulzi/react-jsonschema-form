require('jsdom-global')()
var form = require("./react-jsonschema-form")
var dom = require("react-dom")
var react = require("react")

// This will probably break 
dom.render(
    react.createElement(form.default, {         // Note again configuration may be incorrect as default is synthetic
        schema: {
            title: "This is a the umd build loaded via amd loader aka requirejs",
            type: "object",
            properties: {
                "test": {
                    type: "string"
                }
            }
        }
    }),
window.document.body)