import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const task = sqliteTable('task', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1)
});

export const booking = sqliteTable('booking', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	userId: text('user_id').notNull(),
	userName: text('user_name').notNull(),
	carId: text('car_id').notNull(),
	carName: text('car_name').notNull(),
	date: text('date').notNull(),
	eventType: text('event_type').notNull(),
	pickupLocation: text('pickup_location').notNull(),
	duration: text('duration').notNull(),
	requests: text('requests'),
	status: text('status').notNull().default('pending')
});

export *  from './auth.schema';
