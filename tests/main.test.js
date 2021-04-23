const clock = require('../helpers/clock');
const consoleSpy = jest.spyOn(console, 'log')

describe("Spend", () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    it("backward clock testing", () => {
      let args = ['2', 'unit'];
      
      let reverseClockSeconds = 1 * args[0];

      currentDateTime = new Date();
      
      reverseTime = new Date();
      reverseTime.setSeconds(reverseTime.getSeconds() - reverseClockSeconds);

      let reverseTimeString = reverseTime.toString();
      let currentTimeString = currentDateTime.toString();
      clock.setClockInterval(args[0], args[1]);
      return expect(consoleSpy.mock.calls[0][0]).toBe(`Reverse Time: ${reverseTimeString}, Current Time: ${currentTimeString}`);
    });

    it("invalid input", () => {
        let args = ['abc', 'unit'];
        
        clock.setClockInterval(args[0], args[1]);
        return expect(consoleSpy.mock.calls[0][0]).toBe('Invalid input, please enter an integer!');
      });

    afterEach(() => {
        console.log.mockClear();
      });
  });