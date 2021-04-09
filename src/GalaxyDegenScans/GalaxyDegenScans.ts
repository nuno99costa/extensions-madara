import {LanguageCode, SourceInfo, TagType} from "paperback-extensions-common";
import {Madara} from '../Madara'

const GDSCANS_DOMAIN = "https://gdegenscans.xyz"

export const GalaxyDegenScansInfo: SourceInfo = {
    version: '0.0.1',
    name: 'Galaxy Degen Scans',
    description: 'Extension that pulls manga from gdegenscans.xyz',
    author: 'Nuno Costa',
    authorWebsite: 'https://github.com/nuno99costa',
    icon: "icon.png",
    hentaiSource: false,
    websiteBaseURL: GDSCANS_DOMAIN,
    sourceTags: [
        {
            text: "Notifications",
            type: TagType.GREEN
        }
    ]
}

export class GalaxyDegenScans extends Madara {
    baseUrl: string = GDSCANS_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH
    hasAdvancedSearchPage: boolean = true
    userAgentRandomizer = ''
}
