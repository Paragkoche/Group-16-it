import fs from "fs/promises"
export async function deleteFolderRecursive(folderPath: string): Promise<void> {
    try {
        await fs.rm(folderPath, { recursive: true, force: true });
        console.log(`Directory ${folderPath} has been deleted.`);
    } catch (err) {
        console.error(`Error while deleting ${folderPath}.`, err);
    }
}