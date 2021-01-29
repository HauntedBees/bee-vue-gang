# Bee Vue Gang

## wut
This is a component library for a bunch of things used across various Haunted Bees Vue projects. Maybe you'll find some of them useful or something. Each component has a `bee-component-name` CSS class applied to it for additional styling as necessary.

## license
This code is licensed under [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html). So, like, realistically, you probably don't 
want to use this unless your project is also Freely licensed.

# The Components

## Attribution
**What You Write:** `<Attribution name="Bee Vue Gang" nameURL="https://github.com/HauntedBees/BeeVueGang" by="Sean Finch" byURL="https://github.com/HauntedBees/" license="AGPL 3.0" />`

**What You Get:** [Bee Vue Gang](https://github.com/HauntedBees/BeeVueGang) by [Sean Finch](https://github.com/HauntedBees/) is licensed under [the AGPL 3.0 license](https://www.gnu.org/licenses/agpl-3.0.en.html).

**Cool Tip:** Write `Vue.component("attr", Attribution);` somewhere so you can just write `<attr/>` instead of `<Attribution/>` everywhere.

**Full Props:**
 - **name**: The name of the thing being attributed.
 - **nameURL**: URL of the thing's webpage.
 - **by**: The author of the thing.
 - **byURL**: URL of the Author's home page.
 - **license**: The name of the license the thing is licensed under.
 - **licenseURL**: *Optional.* URL where one can read the license. If `AGPL 3.0`, `Apache 2.0`, `CC-BY 4.0`, `MIT`, or `SIL Open Font` is specified for the **license**, then the URL will be filled automatically.
 - **secondlicense**: *Optional.* The name of a second license, if the thing is licensed under two licenses.
 - **secondlicenseURL**: *Optional.* Same as the **licenseURL**, but for the second license, if specified.

## ExternalLink
**What You Write:** `<ExternalLink href="https://www.bing.com">something</ExternalLink>`

**What You Get:** `<a href="https://www.bing.com" target="_blank" rel="external nofollow noopener noreferrer">something</a>`

**Cool Tip:** Write `Vue.component("ax", ExternalLink);` somewhere so you can just write `<ax/>` instead of `<ExternalLink/>` everywhere.

**Full Props:**
 - **href**: It's just this one.

## SpanToolTip
**What You Write:** `<SpanToolTip tooltip="hey">cool</SpanTooltip>`

**What You Get:** Your stuff wrapped in a [Vuetify](https://vuetifyjs.com/) [tooltip](https://vuetifyjs.com/en/components/tooltips/).

**Cool Tip:** Write `Vue.component("spantt", SpanToolTip);` somewhere so you can just write `<spantt/>` instead of `<SpanToolTip/>` everywhere.

**Full Props:**
 - **tooltip**: It's just this one.

## Emoji
**What You Write:** `<Emoji size="32" emoji="1F33F" />`

**What You Get:** A 32x32 pixel herb emoji.

**Oh By The Way:** You'll need to have your own custom CSS/images to actually render the emojis, otherwise you'll just get an empty span with some useless CSS classes on it. Realistically this component isn't actually useful to you in this state, but if you, for some reason, are a person who isn't me who wants to use this component library and wants to use this Emoji component, reach out to me and I'll help you with it or figure out a way to make it more user-friendly for developers who aren't me.

**Full Props:**
 - **emoji**: The identifier for the emoji. If, for example, you specify `XXX` for this property, the generated HTML will be `<span class="bee-emoji emoji eXXX size32px"></span>`. As mentioned above, CSS rules for `emoji` and any `eXXX` are not included.
 - **size**: *Optional; default value is **32**.* For a given size `YY`, the generated emoji span will have the class `sizeYYpx`. CSS rules not included (yet?).

## ClassDirective
This one's a directive actually not a class.
**What You Write:** `<span v-classdirective.someClass="x">yeah</span>`

**What You Get:** The span will have the class `someClass` if `x` is true. Class will toggle as `x` updates.

**Cool Tip:** Do something like `Vue.directive("classtoggle", ClassDirective);` somewhere so you can write `<span v-classtoggle>` or whatever.

## Loader
**What You Write:** `<Loader v-if="loading" />`

**What You Get:** A centered [Vuetify](https://vuetifyjs.com/) [Indeterminate Circular Progress](https://vuetifyjs.com/en/components/progress-circular/#indeterminate) component that appears whenever your stuff is loading.

**Full Props:**
 - **size**: *Default value is **48**.* The size of the circle.
 - **width**: *Default value is **4**.* The thickness of the circle border.
 - **color**: *Default value is **primary**.* The color of the circle.
 - **dark**: *Default value is **fakse**.* Whether or not to use the dark theme.

## LoadableButton
**What You Write:** `<LoadableButton color="primary" @submit="DoSomething" />`

**What You Get:** A [Vuetify](https://vuetifyjs.com/) button that, when clicked, emits a `submit` event, passing itself as the method argument. If you then write some code like this:

```tsx
DoSomething(btn) {
    btn.loading = true;
    fetch(yourAPIPath, apiOptions).then(res => res.json().then(data => {
        btn.loading = false;
        // your code or whatever here
    }));
}
```

The button will be disabled and show a different message and loading icon until your request completes.

**Full Props:**
 - **disabled**: Set it to true if you want to disable the button manually.
 - **valid**: Use an expression or something for this; when false, the button will be disabled.
 - **color**: Will be set as the `color` attribute of the Vuetify button.
 - **dark**: Will be set as the `dark` attribute of the Vuetify button.
 - **css**: Additional CSS classes to apply to the Vuetify button. Default value is `mr-4`.
 - **text**: *Default value is **Save**.* The text to display in the button when it is not loading.
 - **loadtext**: *Default value is **Saving**.* The text to display in the button when it is loading.
 - **@submit**: A function to be called when the button is clicked. The `LoadableButton` instance is passed as an argument.
 - Not a property, but the `loading` public member on the `LoadableButton` class can be set once the instance is passed from the **@submit** event.