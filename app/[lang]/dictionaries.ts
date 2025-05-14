import 'server-only'

import { Lang } from '../lib/lang'
import { LangDictionary } from '../lib/dictionary'

const dictionaries = {
    ['en-US']: () => import('../dictionaries/lang/en-US.json').then((module) => module.default),
    ['hi']: () => import('../dictionaries/lang/hi.json').then((module) => module.default),
    ['zh-TW']: () => import('../dictionaries/lang/zh-TW.json').then((module) => module.default),
  }
   
  export const getDictionary = async (locale: Lang) :Promise<LangDictionary> =>
    dictionaries[locale]()