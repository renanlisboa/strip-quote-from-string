function stripQuotesFromString(string) {
  const stringWithNoQuotes = string.replaceAll('"', '')
  return stringWithNoQuotes
}

describe('stripQuotesFromString', () => {
  it('should strip all quotes from string', () => {
    const input = '"Build a future where people live in harmony with nature."'

    const output = stripQuotesFromString(input)
    
    expect(output).toBe('Build a future where people live in harmony with nature.')
  })
})