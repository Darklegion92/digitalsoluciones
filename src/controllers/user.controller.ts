import { Request, Response, NextFunction } from 'express'
import fetch from 'isomorphic-unfetch'

export interface RequestNext {
    message: string,
    error: string,
    json: any,
    typeResponse: number,
}

export const getUsers = async (req: any, res: Response, next: NextFunction) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()

        req.typeResponse = 200
        req.json = json
    } catch (error) {
        req.typeResponse = 500
        req.error = error
    }
    next()
}

export const getUserPhotos = async (req: any, res: Response, next: NextFunction) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`)
        const json = await response.json()

        if (response.status === 200) {
            req.typeResponse = 200
            req.json = json
        } else {
            req.typeResponse = 400
            req.message = 'Fotos del usuario no encontradas'
        }
    } catch (error) {
        req.typeResponse = 500
        req.error = error
    }
    next()
}

export const getUserPosts = async (req: any, res: Response, next: NextFunction) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const json = await response.json()
        req.typeResponse = 200
        req.json = json
    } catch (error) {
        req.typeResponse = 500
        req.error = error
    }
    next()
}

export const patchUser = async (req: any, res: Response, next: NextFunction) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.status === 200) {
            req.typeResponse = 200
            req.message = 'Usuario actualizado correctamente'
        } else {
            req.typeResponse = 400
            req.message = 'Usuario no encontrado'
        }

    } catch (error) {
        req.typeResponse = 500
        req.error = error
    }
    next()
}

export const patchPost = async (req: any, res: Response, next: NextFunction) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.status === 200) {
            req.typeResponse = 400
            req.message = 'Publicación actualizado correctamente'
        } else {
            req.typeResponse = 400
            req.message = 'Publicación no encontrada'
        }

    } catch (error) {
        req.typeResponse = 500
        req.error = error
    }
    next()
}

export const patchPhotos = async (req: any, res: Response, next: NextFunction) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.status === 200) {
            req.typeResponse = 400
            req.message = 'Fotos actualizadas correctamente'
        } else {
            req.typeResponse = 400
            req.message = 'Fotos del usuario no encontradas'
        }
    } catch (error) {
        req.typeResponse = 500
        req.error = error
    }
    next()
}

export const deleteUser = async (req: any, res: Response, next: NextFunction) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
            method: 'DELETE',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        if (response.status === 200) {
            req.typeResponse = 400
            req.message = 'Usuario eliminado correctamente'
        } else {
            req.typeResponse = 400
            req.message = 'Usuario no encontrado'
        }

    } catch (error) {
        req.typeResponse = 500
        req.error = error
    }
    next()
}

export const deletePost = async (req: any, res: Response, next: NextFunction) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
            method: 'DELETE',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.status === 200) {
            req.typeResponse = 400
            req.message = 'Publicaciones eliminadas correctamente'
        } else {
            req.typeResponse = 400
            req.message = 'Publicaciones de usuario no encontradas'
        }
    } catch (error) {
        req.typeResponse = 500
        req.error = error
    }
    next()
}

export const deletePhotos = async (req: any, res: Response, next: NextFunction) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`, {
            method: 'DELETE',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.status === 200) {
            req.typeResponse = 400
            req.message = 'Fotos de usuario eliminadas correctamente'
        } else {
            req.typeResponse = 400
            req.message = 'Fotos de usuario no encontradas'
        }

    } catch (error) {
        req.typeResponse = 500
        req.error = error
    }
    next()
}