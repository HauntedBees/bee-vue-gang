<template>
    <span class="bee-attribution">
        "<ExternalLink :href="nameURL">{{name}}</ExternalLink>"
        <span v-if="by">by <ExternalLink :href="byURL">{{by}}</ExternalLink></span>
         is licensed under <ExternalLink :href="getLicenseURL(license)">{{licenseName(license)}}</ExternalLink><span v-if="secondlicense"> and <ExternalLink :href="getLicenseURL(secondlicense, true)">{{licenseName(secondlicense)}}</ExternalLink></span>.
    </span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ExternalLink from '../ExternalLink/ExternalLink.vue';
@Component({ components: { ExternalLink } })
export default class Attribution extends Vue {
    @Prop() name!:string;
    @Prop() nameURL!:string;
    @Prop() by!:string;
    @Prop() byURL!:string;
    @Prop() license!:string;
    @Prop() licenseURL?:string;
    @Prop() secondlicense?:string;
    @Prop() secondlicenseURL?:string;
    licenseName(l:string) {
        return "the " + l + " License";
    }
    getLicenseURL(l:string, second:boolean = false) {
        if(!second && this.licenseURL) { return this.licenseURL; }
        if(second && this.secondlicenseURL) { return this.secondlicenseURL; }
        switch(l) {
            case "AGPL 3.0": return "https://www.gnu.org/licenses/agpl-3.0.en.html";
            case "Apache 2.0": return "https://www.apache.org/licenses/LICENSE-2.0";
            case "CC-BY 4.0": return "https://creativecommons.org/licenses/by/4.0/";
            case "MIT": return "https://opensource.org/licenses/MIT";
            case "SIL Open Font": return "https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL";
            default: return l;
        }
    }
}
</script>