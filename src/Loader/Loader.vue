<template>
    <div class="bee-loader text-center">
        <VProgressCircular indeterminate :color="color" :dark="dark" :width="width" :size="size" class="mt-2" />
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VProgressCircular } from 'vuetify/lib';
@Component({ components: { VProgressCircular } })
export default class Loader extends Vue {
    @Prop({default:48}) size!:number;
    @Prop({default:4}) width!:number;
    @Prop({default:false}) dark!:boolean;
    @Prop({default:"primary"}) color!:string;
}
</script>