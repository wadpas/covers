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

export type Category = {
	_id: string
	name: string
	owner: string
	createdAt: string
	updatedAt: string
}
