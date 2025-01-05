import { browser } from '$app/environment';
import Dexie from 'dexie';
import { DexieORM } from './dexie-orm';
import type { MyDexie } from './types';

const dexie = new Dexie('bubbleteashop') as MyDexie;

// Schema declaration:
dexie.version(1).stores({
	games: '&id, createdAt, updatedAt' // primary key "id" (for the runtime!)
});

const db = new DexieORM(dexie);
if (browser) (window as any).db = db;
export default db;
