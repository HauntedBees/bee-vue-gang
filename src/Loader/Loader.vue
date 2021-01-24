<template>
    <div class="bee-loader text-center">
        <v-progress-circular indeterminate :color="color" :size="size" class="mt-2" />
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class Loader extends Vue {
    @Prop({default:48}) size!:number;
    @Prop({default:"primary"}) color!:string;
}
</script>