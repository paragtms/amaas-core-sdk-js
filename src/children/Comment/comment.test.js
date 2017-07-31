import Comment from './'

describe('Comment class', () => {
  describe('constructor', () => {
    it('it should set commentValue correctly', () => {
        const value = 'This is a comment.'
        const comment = new Comment({ commentValue: value })
        expect(comment.commentValue).toEqual(value)
      })
  })
})
