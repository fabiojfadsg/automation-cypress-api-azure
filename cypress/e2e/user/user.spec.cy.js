import * as userContract from '../../fixtures/contract/user.contract'
const user = require('../../fixtures/payload/user/user')

describe('User', { tags: ['@user'] }, () => {

  let userId

  it('POST - /user - Post users', { tags: ['@PostUser'] }, () => {
    cy.postUser(user.createUser).then((respPostUser) => {
      return userId = respPostUser.body._id
    })
  })

  it('GET - /user - Search all users', { tags: ['@getUserAll'] }, () => {
    cy.getUserAll().then((respGetAll) => {
      cy.getUserId(respGetAll.body.usuarios[0]._id).then((respGetUserId) => {
        return userContract.postUserSchema.validateAsync(respGetUserId.body)
      })
    })
  })

  it('GET{{id}} - /user{id} - Get id user', { tags: ['@getUserId'] }, () => {
    cy.getUserId(userId).then((respGetUserId) => {
      expect(respGetUserId.status).to.eq(200)
      return userContract.getIdUserSchema.validateAsync(respGetUserId.body)
    })
  })

  it('PUT{{id}} - /user{id} - PUT id user', { tags: ['@putUserId'] }, () => {
    cy.putUser(userId, user.updateUser).then((respPutUserId) => {
      expect(respPutUserId.status).to.eq(200)
    })
  })

  it('E2E - User', { tags: ['@E2eUser', '@E2E'] }, () => {
    cy.getUserId(userId).then((respGetUserId) => {
      expect(respGetUserId.status).to.eq(200)
    })
    cy.putUser(userId, user.updateUser).then((respPutUserId) => {
      expect(respPutUserId.status).to.eq(200)
    })
    cy.deleteUser(userId).then((respDeleteUserId) => {
      expect(respDeleteUserId.status).to.eq(200)
    })
  })
})