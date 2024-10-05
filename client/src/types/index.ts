export interface APIResponse<T> {
	data: T
	message: string
	token: string
}

export type Image = {
	localPath: string
	url: string
	_id: string
}

export type User = {
	_id: string
	username: string
	email: string
	avatar: Image
	firstName: string
	lastName: string
	location: string
	createdAt: string
	role: string
}
