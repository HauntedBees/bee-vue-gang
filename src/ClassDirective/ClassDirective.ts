import { ECHILD } from 'constants';
import { DirectiveBinding } from 'vue/types/options';
export default {
    inserted: function(el:HTMLElement, binding:DirectiveBinding) {
        for(const className in binding.modifiers) {
            el.classList.toggle(className, binding.value);
        }
    },
    update: function(el:HTMLElement, binding:DirectiveBinding) {
        for(const className in binding.modifiers) {
            el.classList.toggle(className, binding.value);
        }
    }
}