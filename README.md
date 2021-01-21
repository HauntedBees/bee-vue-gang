# Bee Vue Gang

## wut
This is a component library for a bunch of things used across various Haunted Bees Vue projects. Maybe you'll find some of them useful or something. 

## license
This code is licensed under [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html). So, like, realistically, you probably don't 
want to use this unless your project is also Freely licensed.

# The Components

## Attribution
**What You Write:** `<Attribution name="Bee Vue Gang" nameURL="https://github.com/HauntedBees/BeeVueGang" by="Sean Finch" byURL="https://github.com/HauntedBees/" license="AGPL 3.0" />`
**What You Get:** [Bee Vue Gang](https://github.com/HauntedBees/BeeVueGang) by [Sean Finch](https://github.com/HauntedBees/) is licensed under [the AGPL 3.0 license](https://www.gnu.org/licenses/agpl-3.0.en.html).
**Cool Tip:** Write `Vue.component("attr", Attribution);` somewhere so you can just write `<attr/>` instead of `<Attribution/>` everywhere.

## ExternalLink
**What You Write:** `<ExternalLink href="https://www.bing.com">something</ExternalLink>`
**What You Get:** `<a href="https://www.bing.com" target="_blank" rel="external nofollow noopener noreferrer">something</a>`
**Cool Tip:** Write `Vue.component("ax", ExternalLink);` somewhere so you can just write `<ax/>` instead of `<ExternalLink/>` everywhere.

## SpanToolTip
**What You Write:** `<SpanToolTip tooltip="hey">cool</SpanTooltip>`
**What You Get:** Your stuff wrapped in a [Vuetify](https://vuetifyjs.com/) tooltip.
**Cool Tip:** Write `Vue.component("spantt", SpanToolTip);` somewhere so you can just write `<spantt/>` instead of `<SpanToolTip/>` everywhere.

## Emoji
**What You Write:** `<Emoji size="32" emoji="1F33F" />`
**What You Get:** A 32x32 pixel herb emoji.
**Oh By The Way:** You'll need to have your own custom CSS/images to actually render the emojis, otherwise you'll just get an empty span with some useless CSS classes on it. Realistically this component isn't actually useful to you in this state, but if you, for some reason, are a person who isn't me who wants to use this component library and wants to use this Emoji component, reach out to me and I'll help you with it or figure out a way to make it more user-friendly for developers who aren't me.

## ClassDirective
This one's a directive actually not a class.
**What You Write:** `<span v-classdirective.someClass="x">yeah</span>`
**What You Get:** The span will have the class `someClass` if `x` is true. Class will toggle as `x` updates.
**Cool Tip:** Do something like `Vue.directive("classtoggle", ClassDirective);` somewhere so you can write `<span v-classtoggle>` or whatever.