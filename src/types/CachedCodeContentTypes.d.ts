interface ContentProps {
    id?: number;
    base_id?: string;
    name?: string;
    content?: string;
    language?: string;
    theme?: string;
    created_at?: string;
    updated_at?: string;
}

interface CachedCodeContentTypes {
    [base_id: string]: ContentProps;
}


export type { CachedCodeContentTypes, ContentProps }