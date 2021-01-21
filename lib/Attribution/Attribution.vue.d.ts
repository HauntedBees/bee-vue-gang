import { Vue } from 'vue-property-decorator';
export default class Attribution extends Vue {
    name: string;
    nameURL: string;
    by: string;
    byURL: string;
    license: string;
    secondlicense?: string;
    licenseName(l: string): string;
    licenseURL(l: string): string;
}
