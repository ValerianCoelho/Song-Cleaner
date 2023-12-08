import { writable } from "svelte/store";

export const sourceFolderStore = writable('');
export const destinationFolderStore = writable('');
export const startPageStore = writable(true)
export const songList = writable([]);