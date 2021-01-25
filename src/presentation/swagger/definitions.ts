/**
 * @swagger
 *
 * definitions:
 *   NewUser:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *   AddUser:
 *     type: object
 *     required:
 *       - name
 *       - email
 *       - password
 *       - passwordConfirmation
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       passwordConfirmation:
 *         type: string
 *   User:
 *     allOf:
 *       - $ref: '#/definitions/NewUser'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: string
 *   ResponseAuth:
 *     type: object
 *     required:
 *       - accessToken
 *     properties:
 *       accessToken:
 *         type: string
 *   ResponseAddUser:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - email
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       email:
 *         type: string
 *   ResponseError:
 *     type: object
 *     required:
 *       - error
 *     properties:
 *       error:
 *         type: string
 */
