<template>
    <span :class="'emoji e' + emoji + ' size' + size + 'px'"></span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class Emoji extends Vue {
    @Prop({default:32}) size:number|undefined;
    @Prop() emoji?:string;
}
</script>