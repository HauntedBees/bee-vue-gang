<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
                <slot></slot>
            </span>
        </template>
        <span>{{tooltip}}</span>
    </v-tooltip>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class SpanTooltip extends Vue {
    @Prop() tooltip?:string;
}
</script>