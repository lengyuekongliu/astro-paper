declare module 'config' {
    export type AppConfig = {
        title: string,
        subtitle: string,
        author: string,
        lang: string
    }

    export type Post = {
        body: string
        title: string
        date: Date,
        updateDate: Date,
        draft?: boolean
        tags: string[]
        category?: string
        image: ImageMetadata
        prevTitle?: string
        prevSlug?: string
        nextTitle?: string
        nextSlug?: string
    }
}