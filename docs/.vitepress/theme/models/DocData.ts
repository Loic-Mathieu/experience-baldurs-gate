export interface IDocData {
  docType: DocTypeEnum,
  isIndex: boolean
}

export enum DocTypeEnum {
  HOME = 'home',
  QUESTS = 'quetes',
  CHARS = 'personnages'
}
