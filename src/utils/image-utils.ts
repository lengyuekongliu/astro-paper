import path from 'path';

export async function getImageUrl(src: string): Promise<ImageMetadata> {
    const files = import.meta.glob<ImageMetadata>('../assets/**', { import: 'default' })
    let normalizedPath = path.normalize(path.join('../', '/', src)).replace(/\\/g, '/')
    const file = files[normalizedPath]
    return await file()
}