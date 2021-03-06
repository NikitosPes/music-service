export interface ISongModel {
    imgURL: string | null,
    name: string,
    groupName: string,
    duration: string
}


export interface IPerformerModel {
    name: string,
    imgURL: string | null
}

export interface IPlaylistModel {
    title: string,
    description: string | null
}


