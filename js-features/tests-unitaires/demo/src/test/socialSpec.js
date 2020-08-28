// Remplace le expect standard par celui de Chai plus complet
const chai = require ('chai')
const expect = chai.expect

// Tester des promesse avec chai
const chaiAsPromise = require('chai-as-promised')
chai.use(chaiAsPromise)

const sinon = require('sinon')

const Social = require('../Social')
const url = 'http://grafikart.fr'

describe('Social', () => {

  it('Should have twitter url', () => {
    expect(Social).to.have.property('twitter_url')
  })
  it('Should have facebook url', () => {
    expect(Social).to.have.property('facebook_url')
  })
})

describe.skip('#getTwitterCount', () => {
  //TODO afterEach()
  // On restaure callAPI à sa valeur initiale après chaque test
  afterEach(() => {
    if(Social.callAPI.restore) Social.callAPI.restore()
  })

  it('should be a function', () => {
    expect(Social.getTwitterCount).to.be.a('function')
  })
  it('Should call callAPI', () => {
    //TODO sinon.spy()
    // On surveille l'appel à une fonction
    sinon.spy(Social, 'callAPI')
    // Au lancement de notre méthode...
    Social.getTwitterCount(url)
    // On s'attend à se que l'appel se fasse une fois avec des arguments
    expect(Social.callAPI.withArgs(Social.twitter_url + url).calledOnce).to.be.true
  })
  // l'appel API doit retourner propriété count avec comme valeur 2
  it('Should return a count', ((done) => {
    //TODO sinon.stub()
      // stub prends le contrôle de la fonction callAPI...
      const stub = sinon.stub(Social, 'callAPI')
      // et l'on indique quelle valeur il doit renvoyer
      stub.resolves({count: 2})
      expect(Social.getTwitterCount(url)).to.eventually.be.equal(2).notify(done)
  }))
})

describe.skip('#getFacebookShares', () => {
  it('Should return shares', ((done) => {
    //TODO sinon.mock
    // Mock prend le contrôle de tout l'objet Social
    const mock = sinon.mock(Social)
    mock.expects('callAPI')
      .once()
      .withArgs(Social.facebook_url + url)
      .resolves({shares: 10})
    expect(Social.getFacebookShares(url)).to.eventually.equal(9, 'error').notify(done)
    mock.verify()
    mock.restore()
  }))
})