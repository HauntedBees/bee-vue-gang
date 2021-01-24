<template>
    <a :href="href" target="_blank" class="bee-external-link" rel="external nofollow noopener noreferrer">
        <slot></slot>
    </a>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ExternalLink extends Vue {
    @Prop() href!:string;
}
</script>