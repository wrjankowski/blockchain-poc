'use strict';
const chai = require('chai')
const should = chai.should()

const Block = require('../lib/Block')
const Blockchain = require('../lib/Blockchain.js')

let blockchain, block

before(() => {
  blockchain = new Blockchain()
  blockchain.addBlock(new Block(1,'10/07/2017', {amount: 4}))
  blockchain.addBlock(new Block(2,'10/08/2017', {amount: 10}))
  console.log(JSON.stringify(blockchain, null, 4))
})

describe('Blockchain', () => {
  describe('#isChainValid()', () => {
    it('should return true when the blockchain is valid', () => {
      blockchain.isChainValid().should.be.true
    })

    it('should return false when the blockchain is invalid', () => {
      blockchain.chain[1].data = { amount: 100 }
      blockchain.chain[1].hash = blockchain.chain[1].calculateHash()
      blockchain.isChainValid().should.be.false
    })
  })
})
