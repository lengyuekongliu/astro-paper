import sharp from "sharp";
import path from "path";
import { rgbaToThumbHash, thumbHashToDataURL } from "thumbhash";
import { fileURLToPath } from "node:url";
import { assetsDir } from "astro:assets";

export async function imageToBlurHash(src: string | ImageMetadata | Promise<{ default: ImageMetadata }>): Promise<string | undefined> {
    let blurhash: string | undefined;

    if (typeof src === "object") {
        const resolvedSrc = "then" in src ? (await src).default : src;
        const filePath = import.meta.env.DEV ? new RegExp(`^/@fs/([^?#]*)`).exec(resolvedSrc.src)?.[1] ?? "" : fileURLToPath(new URL("." + resolvedSrc.src, assetsDir));
        const resizeImage = sharp(path.resolve(filePath)).resize(100, 100, { fit: "inside" });
        const { data, info } = await resizeImage.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
        const binaryThumbHash = rgbaToThumbHash(info.width, info.height, data);
        blurhash = thumbHashToDataURL(binaryThumbHash);
    }

    return blurhash;
}
