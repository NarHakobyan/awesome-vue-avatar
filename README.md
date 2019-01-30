# awesome-vue-avatar

Facebook like, avatar / profile picture component.

Resize, rotate and crop your uploaded image using a clear user interface.

Demo at <a href="https://narhakobyan.github.io/awesome-vue-avatar/">https://narhakobyan.github.io/awesome-vue-avatar/</a>

# Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 4.0 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install awesome-vue-avatar
```

# Usage

```html
<div id="app">
      <vue-avatar
      :width=400
      :height=400
      :rotation="rotation"
      placeholder: "base64Image"
      :scale="scale"
      ref="vueavatar"
      @image-ready="onImageReady"
      >
    </vue-avatar>
    <br>
    <input
      type="range"
      min=1
      max=3
      step=0.02
      v-model.number='scale'
    />
    <input
      type="range"
      min=1
      max=3
      step=0.02
      v-model.number='rotation'
    />
    <br>
    <button v-on:click="saveClicked">Click</button>
    <br>
    <img ref="image">
</div>
```

```javascript
import Vue from 'vue'
import {VueAvatar} from 'awesome-vue-avatar'

let vm = new Vue({
  el: '#app',
  components: {
    VueAvatar,
    VueAvatarScale
  },
  data () {
      return {
          rotation: 0,
          scale: 1
      };
  },
  methods: {
      saveClicked () {
          var img = this.$refs.vueavatar.getImageScaled()
          this.$refs.image.src = img.toDataURL()
      },
      onImageReady () {
          this.scale = 1
          this.rotation = 0
      }
  }
})
```

## Props
| Prop        | Type     | Description                                                                                                |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| width       | Number   | The total width of the editor                                                                              |
| height      | Number   | The total width of the editor                                                                              |
| border      | Number   | The cropping border. Image will be visible through the border, but cut off in the resulting image.         |
| color       | Number[] | The color of the cropping border, in the form: [red (0-255), green (0-255), blue (0-255), alpha (0.0-1.0)] |
| style       | Object   | Styles for the canvas element                                                                              |
| scale       | Number   | The scale of the image. You can use this to add your own resizing slider.                                  |
| rotation    | Number   | The rotation in degrees of the image. You can use this to add your own rotating slider.                    |
| placeholder | String   | Placeholder url (base64)                                                                                   |

## Accessing the resulting image

### will return `null` if image is not selected

```javascript
this.$refs.vueavatar.toDataUrl()
```


The resulting image will have the same resolution as the original image, regardless of the editor's size.
If you want the image sized in the dimensions of the canvas you can use `getImageScaled`.


```javascript
this.$refs.vueavatar.getImageScaled()
```

# Contributing

For development you can use following build tools:

* `yarn install`: Install required dependencies.
* `yarn serve`: Start development server.
* Commit and push your changes
* Open pull-request
