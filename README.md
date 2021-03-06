# Text Web Component [![CircleCI](https://circleci.com/gh/Rise-Vision/rise-rich-text/tree/master.svg?style=svg)](https://circleci.com/gh/Rise-Vision/rise-rich-text/tree/master) [![Coverage Status](https://coveralls.io/repos/github/Rise-Vision/rise-rich-text/badge.svg?branch=master)](https://coveralls.io/github/Rise-Vision/rise-rich-text?branch=master)

## Introduction

`rise-rich-text` is a Polymer 3 Web Component that renders Rich Text

#### Examples

##### HTML
```
  <rise-rich-text
    id="rise-rich-text-greeting"
    richtext="<span style='font-size:100px; color:green'>Hello World!</span>">
  </rise-rich-text>
```
##### Plain Text
```
  <rise-rich-text
    id="rise-rich-text-greeting" 
    richtext="Hello World!">
  </rise-rich-text>
```

### Labels

The component may define a 'label' attribute that defines the text that will appear for this instance in the template editor.

This attribute holds a literal value, for example:

```
  <rise-rich-text
    id="rise-rich-text-greeting"
    label="Greeting"
    richtext="Hello World!">
  </rise-rich-text>
```

If it's not set, the label for the component defaults to "Text", which is applied via the [generate_blueprint.js](https://github.com/Rise-Vision/html-template-library/blob/master/generate_blueprint.js) file for a HTML Template build/deployment.

### Attributes

This component receives the following list of attributes:

- **id**: ( string / required ): Unique HTMLElement id.
- **richtext**: ( string / required ): A plain text or HTML.
- **label**: ( string / optional ): An optional label key for the text that will appear in the template editor. See 'Labels' section above.
- **non-editable**: ( empty / optional ): If present, it indicates this component is not available for customization in the template editor.

### Events

The component sends the following events:

- **configured**: The component has initialized what it requires to and is ready to handle a _start_ event.
- **data-update**: Event is sent when text value changes. Here is an example of event consumption:
```
  element.addEventListener('data-update', function (event) {
    console.log(event.type); // prints 'data-update'
    console.log(event.detail.newValue); // prints new text value
    console.log(event.detail.oldValue); // prints old (previous) text value
  });
```

## Built With
- [Polymer 3](https://www.polymer-project.org/)
- [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli)
- [WebComponents Polyfill](https://www.webcomponents.org/polyfills/)
- [npm](https://www.npmjs.org)

## Development

### Local Development Build
Clone this repo and change into this project directory.

Execute the following commands in Terminal:

```
npm install
npm install -g polymer-cli@1.9.7
npm run build
```

**Note**: If EPERM errors occur then install polymer-cli using the `--unsafe-perm` flag ( `npm install -g polymer-cli --unsafe-perm` ) and/or using sudo.

### Testing
You can run the suite of tests either by command terminal or interactive via Chrome browser.

#### Command Terminal
Execute the following command in Terminal to run tests:

```
npm run test
```

In case `polymer-cli` was installed globally, the `wct-istanbul` package will also need to be installed globally:

```
npm install -g wct-istanbul
```

#### Local Server
Run the following command in Terminal: `polymer serve`.

Now in your browser, navigate to:

```
http://127.0.0.1:8081/components/rise-rich-text/demo/src/rise-rich-text-dev.html
```

## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues, please use the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas, please post your thoughts to our [community](https://help.risevision.com/hc/en-us/community/topics), otherwise submit a pull request and we will do our best to incorporate it. Please be sure to submit test cases with your code changes where appropriate.

## Resources
If you have any questions or problems, please don't hesitate to join our lively and responsive [community](https://help.risevision.com/hc/en-us/community/topics).

If you are looking for help with Rise Vision, please see [Help Center](https://help.risevision.com/hc/en-us).

**Facilitator**

[Stuart Lees](https://github.com/stulees "Stuart Lees")
