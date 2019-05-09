import assert from 'assert'
import { formatDateTime, formatDateTimeToTimezone, changeTimezoneToUTC } from 'utils/datetime'

describe('datetime', () => {
  describe('formatDateTime', () => {
    it('should format datetime', async () => {
      assert(formatDateTime('2018-04-09T01:00:00Z') === 'Apr 9, 2018, 01:00 UTC')
      assert(formatDateTime('2018-04-09T01:00:00+09:00') === 'Apr 8, 2018, 16:00 UTC')
    })
  })

  describe('formatDateTimeToTimezone', () => {
    it('should format datetime in given timezone', async () => {
      assert(formatDateTimeToTimezone('2018-01-09T01:00:00Z', 'America/Los_Angeles') === 'Jan 8, 17:00 PST')
      assert(formatDateTimeToTimezone('2018-01-09T01:00:00+09:00', 'America/Los_Angeles') === 'Jan 8, 08:00 PST')
      assert(formatDateTimeToTimezone('2018-04-09T01:00:00Z', 'America/Los_Angeles') === 'Apr 8, 18:00 PDT')
      assert(formatDateTimeToTimezone('2018-04-09T01:00:00+09:00', 'America/Los_Angeles') === 'Apr 8, 09:00 PDT')
      assert(formatDateTimeToTimezone('2018-04-09T01:00:00Z', 'America/New_York') === 'Apr 8, 21:00 EDT')
      assert(formatDateTimeToTimezone('2018-04-09T01:00:00+09:00', 'America/New_York') === 'Apr 8, 12:00 EDT')
    })
  })

  describe('changeTimezoneToUTC', () => {
    it('should change time zone from local to UTC', async () => {
      assert(changeTimezoneToUTC('2018-04-09T01:00:00+09:00') === '2018-04-08T16:00:00Z')
      assert(changeTimezoneToUTC('2018-04-09T01:00:00+00:00') === '2018-04-09T01:00:00Z')
    })
  })
})
