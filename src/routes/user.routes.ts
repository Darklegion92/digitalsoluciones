import { Router } from 'express'
import { deletePhotos, deletePost, deleteUser, getUserPhotos, getUserPosts, getUsers, patchPhotos, patchPost, patchUser } from '../controllers/user.controller'

const router = Router()
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: Identificador del usuario
 *              name:
 *                  type: string
 *                  description: nombre del usuario
 *              username:
 *                  type: string
 *                  description: nombre de usuario del usuario
 *              email:
 *                  type: string
 *                  description: correo del usuario
 *              address:
 *                  type: object
 *                  properties:
 *                      street:
 *                          type: string
 *                          description: calle de la dirección
 *                      suite:
 *                          type: string
 *                          description: adicional de la dirección
 *                      city:
 *                          type: string
 *                          description: ciudad de la dirección
 *                      zipcode:
 *                          type: integer
 *                          description: código ZIP de la dirección
 *                      geo:
 *                          type: object
 *                          properties:
 *                              lat:
 *                                  type: integer
 *                                  description: latitude de la dirección
 *                              lng:
 *                                  type: integer
 *                                  description: longitude de la dirección
 *              phone:
 *                  type: string
 *                  description: teléfono del usuario
 *              website:
 *                  type: string
 *                  description: sitio web del usuario
 *              company:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                          description: nombre de la compañía
 *                      catchPhrase:
 *                          type: string
 *                      bs:
 *                          type: string
 *          example:
 *              id: 1
 *              name: Leanne Graham
 *              username: Bret
 *              email: Sincere@april.biz
 *              address:
 *                  street: Kulas Light
 *                  suite: Apt. 556
 *                  city: Gwenborough
 *                  zipcode: 92998-3874
 *                  geo:
 *                      lat: -37.3159
 *                      lng: 81.1496
 *              phone: 1-770-736-8031 x56442
 *              website: hildegard.org
 *              company:
 *                  name: Romaguera-Crona
 *                  catchPhrase: Multi-layered client-server neural-net
 *                  bs: harness real-time e-markets
 *      parameters:
 *          userId:
 *              in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *                  description: id del usuario
 *          postId:
 *              in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *                  description: id de la publicación
 *          photoId:
 *              in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *                  description: id de la foto
 *      Photo:
 *          type: object
 *          properties:
 *              albumId:
 *                  type: integer
 *                  description: identificador del album de imagenes
 *              id:
 *                  type: integer
 *                  description: identificador del usuario
 *              title:
 *                  type: string
 *                  description: nombre del album
 *              url:
 *                  type: string
 *                  description: enlace de la imagen
 *              thumbnailUrl:
 *                  type: string
 *                  description: enlace de la imagen pequeña
 *      Post:
 *          type: object
 *          properties:
 *              userId:
 *                  type: integer
 *                  description: id del usuario al que pertenece la publicación
 *              id:
 *                  type: integer
 *                  description: id de la publicacion
 *              title:
 *                  type: string
 *                  description: titulo de la publicación
 *              body:
 *                  type: string
 *                  description: contenido de la publicación
 *      NoFound:
 *          type: object
 *          properties:
 *              error:
 *                  type: string
 *                  description: error generado al consultar
 *          example:
 *              error: Error no found
 */

/**
 * @swagger
 * tags:
 *  name: users
 *  description: Gestión de usuarios
 */

/**
 * @swagger
 * tags:
 *  name: posts
 *  description: Gestión de publicaciones
 */


/**
 * @swagger
 * tags:
 *  name: photos
 *  description: Gestión de fotos
 */



/**
 * @swagger
 * /users:
 *  get:
 *      summary: Obtiene lista de usuarios
 *      tags: [users]
 *      responses:
 *          200:
 *              description: Lista de usuarios
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
 *                              $ref: '#/components/schemas/NoFound'
 */
router.get('/', getUsers)

/**
 * @swagger
 * /users/photos/{id}:
 *  get:
 *      summary: Obtiene lista de fotos del usuario
 *      tags: [photos]
 *      parameters:
 *          - $ref: '#/components/parameters/userId'
 *      responses:
 *          200:
 *             description: Fotos de usuario encontradas
 *             content:
 *                 aplication/json:
 *                     schema:
 *                         $ref: '#/components/schemas/Photo'
 *          400:
 *             description: Fotos de usuario no encontradas
 *             content:
 *                 aplication/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                            message:
 *                                 type: string
 *                                 description: mensaje para mostrar al usuario
 *                         example:
 *                             message: Fotos del usuario no encontradas
 *          500:
 *             description: Error al intentar consultar
 *             content:
 *                 aplication/json:
 *                  schema:
 *                      $ref: '#/components/schemas/NoFound'
 */
router.get('/photos/:id', getUserPhotos)

/**
 * @swagger
 * /users/posts:
 *  get:
 *      summary: Obtiene lista de publicaciones
 *      tags: [posts]
 *      responses:
 *          200:
 *              description: Lista de publicaciones
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Post'
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          $ref: '#/components/schemas/NoFound'
 */
router.get('/posts', getUserPosts)

/**
 * @swagger
 * /users/{id}:
 *  patch:
 *      summary: Actualiza usuario
 *      tags: [users]
 *      parameters:
 *          - $ref: '#/components/parameters/userId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Actualizado correctamente
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostar al usuario
 *                          example:
 *                              message: Usuario actualizado correctamente
 *          400:
 *              description: Usuario no encontrado
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostrar al usuario
 *                          example:
 *                              message: Usuario no encontrado
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          $ref: '#/components/schemas/NoFound'
 */
router.patch('/:id', patchUser)

/**
 * @swagger
 * /users/photos/{id}:
 *  patch:
 *      summary: Actualiza fotos
 *      tags: [photos]
 *      parameters:
 *          - $ref: '#/components/parameters/photoId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Photo'
 *      responses:
 *          200:
 *              description: Actualizado correctamente
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostar al usuario
 *                          example:
 *                              message: Fotos actualizadas correctamente
 *          400:
 *              description: Fotos de usuario no encontradas
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostrar al usuario
 *                          example:
 *                              message: Fotos de usuario no encontrado
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          $ref: '#/components/schemas/NoFound'
 */
router.patch('/photos/:id', patchPhotos)

/**
 * @swagger
 * /users/post/{id}:
 *  patch:
 *      summary: Actualiza publicación
 *      tags: [posts]
 *      parameters:
 *          - $ref: '#/components/parameters/postId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Post'
 *      responses:
 *          200:
 *              description: Actualizado correctamente
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostar al usuario
 *                          example:
 *                              message: 'Publicación actualizada correctamente'
 *          400:
 *              description: Publicación no encontrada
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostrar al usuario
 *                          example:
 *                              message: 'Usuario no encontrado'
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
*                           $ref: '#/components/schemas/NoFound'
 */
router.patch('/posts/:id', patchPost)

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: Elimina usuario
 *      tags: [users]
 *      parameters:
 *          - $ref: '#/components/parameters/userId'
 *      responses:
 *          200:
 *              description: Eliminado correctamente
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostar al usuario
 *                          example:
 *                              message: Usuario eliminado correctamente
 *          400:
 *              description: Usuario no encontrado
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostrar al usuario
 *                          example:
 *                              message: Usuario no encontrado
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          $ref: '#/components/schemas/NoFound'
 */
router.delete('/:id', deleteUser)

/**
 * @swagger
 * /users/photos/{id}:
 *  delete:
 *      summary: Actualiza fotos
 *      tags: [photos]
 *      parameters:
 *          - $ref: '#/components/parameters/photoId'
 *      responses:
 *          200:
 *              description: Eliminado correctamente
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostar al usuario
 *                          example:
 *                              message: Fotos eliminadas correctamente
 *          400:
 *              description: Fotos de usuario no encontradas
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostrar al usuario
 *                          example:
 *                              message: Fotos de usuario no encontrado
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          $ref: '#/components/schemas/NoFound'
 */
router.delete('/photos/:id', deletePhotos)

/**
 * @swagger
 * /users/post/{id}:
 *  delete:
 *      summary: Elimina publicación
 *      tags: [posts]
 *      parameters:
 *          - $ref: '#/components/parameters/postId'
 *      responses:
 *          200:
 *              description: Eliminado correctamente
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostar al usuario
 *                          example:
 *                              message: 'Publicación eliminada correctamente'
 *          400:
 *              description: Publicación no encontrada
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: mensaje para mostrar al usuario
 *                          example:
 *                              message: 'Usuario no encontrado'
 *          500:
 *              description: Error al intentar consultar
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          $ref: '#/components/schemas/NoFound'
 */
router.delete('/posts/:id', deletePost)


export default router