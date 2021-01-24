<template>
    <VTooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <span class="bee-span-tooltip" v-bind="attrs" v-on="on">
                <slot></slot>
            </span>
        </template>
        <span>{{tooltip}}</span>
    </VTooltip>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VTooltip } from 'vuetify/lib';
@Component({ components: { VTooltip } })
export default class SpanTooltip extends Vue {
    @Prop() tooltip?:string;
}
</script>