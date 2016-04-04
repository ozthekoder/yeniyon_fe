import reducer, { initialState } from 'redux/modules/Session'

describe('(Redux) Session', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
