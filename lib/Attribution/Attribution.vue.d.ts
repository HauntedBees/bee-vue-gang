import { Vue } from 'vue-property-decorator';
export default class Attribution extends Vue {
    name: string;
    nameURL: string;
    by: string;
    byURL: string;
    license: string;
    licenseURL?: string;
    secondlicense?: string;
    secondlicenseURL?: string;
    licenseName(l: string): string;
    getLicenseURL(l: string, second?: boolean): string;
}
