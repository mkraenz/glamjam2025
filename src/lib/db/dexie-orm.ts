import type { PartialDeep } from 'type-fest';
import type { DbGame, MyDexie } from './types';

type FindAllOptions<T extends object> = Partial<{
	limit: number;
	orderBy: keyof T;
	offset: number;
}>;
const defaultFindAllOptions = {
	limit: 50,
	orderBy: 'updatedAt',
	offset: 0
} satisfies FindAllOptions<DbGame>;

export class DexieORM {
	games: GamesRepository;

	constructor(db: MyDexie) {
		this.games = new GamesRepository(db);
	}
}

class GamesRepository {
	#db: MyDexie;

	constructor(db: MyDexie) {
		this.#db = db;
	}

	/** Warning: IndexedDB and, by extension, dexie do not respect getter props. Hence, call `$state.snapshot()` before  */
	async create(data: DbGame) {
		const id = await this.#db.games.add(data);
		return this.findOne(id);
	}

	async findOne(id: string) {
		const entity = await this.#db.games.get(id);
		return entity ?? null;
	}

	// async findAll(o`pts?: FindAllOptions<DbTask>) {
	// 	const { orderBy, limit, offset } = { ...defaultFindAllOptions, ...opts };
	// 	const entities = await this.#db.games
	// 		.orderBy(orderBy)
	// 		.reverse()
	// 		.limit(limit)
	// 		.offset(offset)
	// 		.toArray();
	// 	return entities.map(Task.from).map(Task.toJSON);
	// }`

	async update(id: string, changes: PartialDeep<DbGame>) {
		await this.#db.games.update(id, changes);
		return this.findOne(id);
	}

	async remove(id: string) {
		await this.#db.games.delete(id);
	}
}
