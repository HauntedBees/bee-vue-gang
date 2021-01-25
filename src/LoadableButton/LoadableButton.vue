<template>
    <VBtn :color="color" :disabled="!valid || disabled || loading" class="mr-4 bee-loadable-button" @click="$emit('submit', me)">
        {{(loading ? loadtext : text)}}
        <VProgressCircular v-if="loading" style="margin-left:10px" size="16" width="2" indeterminate />
    </VBtn>
</template>
<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator';
import { VBtn, VProgressCircular } from 'vuetify/lib';
@Component({ components: { VBtn, VProgressCircular } })
export default class LoadableButton extends Vue {
    loading = false;
    @Prop() disabled:boolean|undefined;
    @Prop() valid:boolean|undefined;
    @Prop() color:string|undefined;
    @Prop({default:"Save"}) text!:string;
    @Prop({default:"Saving"}) loadtext!:string;
    get me() { return this; }
}
</script>