import { timer } from '..';

jest.useFakeTimers();

describe('timer', () => {

  test('waits 1 second before time is up', () => {
    timer();
    expect(setTimeout.mock.calls.length).toBe(1);
    expect(setTimeout.mock.calls[0][1]).toBe(1000);
  });

  test('calls the callback after 1 second', () => {
    const callback = jest.fn();
    timer(callback);
    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback.mock.calls.length).toBe(1);
  });

  test('calls the callback after 1 second via runTimersToTime', () => {
    const callback = jest.fn();
    timer(callback);
    expect(callback).not.toBeCalled();
    jest.runTimersToTime(1000);
    expect(callback).toBeCalled();
    expect(callback.mock.calls.length).toBe(1);
  });

})
