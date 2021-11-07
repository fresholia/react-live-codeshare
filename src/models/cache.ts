import { CachedCodeContentTypes, ContentProps } from '../types/CachedCodeContentTypes.d'

let cachedCodeContents: CachedCodeContentTypes = {};
/**
 * array[base_id] = props
 */

const getCachedCodeContent = (base_id: string) => {
    return cachedCodeContents[base_id];
}

const setCachedCodeContent = (base_id: string, content: ContentProps) => {
    cachedCodeContents[base_id] = content;
    return true
}

const setCachedCodeContentData = (base_id: string, value: string) => {
    if (getCachedCodeContent(base_id)) {
        cachedCodeContents[base_id].content = value
    }
    return true
}

export { getCachedCodeContent, setCachedCodeContent, setCachedCodeContentData }