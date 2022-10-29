import { faker } from '@faker-js/faker'

export const createUser = {
  'nome': `${faker.name.firstName()} ${faker.datatype.uuid()}`,
  'email': `automation-postUser${faker.datatype.uuid()}@moviautomation.com`,
  'password': '1234',
  'administrador': 'true'
}

export const updateUser = {
  'nome': `${faker.name.firstName()} ${faker.name.lastName()}`,
  'email': `automation-putUser${faker.datatype.uuid()}@moviautomation.com`,
  'password': '1234',
  'administrador': 'true'
}